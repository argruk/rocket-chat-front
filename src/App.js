import React, {useEffect, useState} from 'react';
import ChatMainWindow from "./Components/ChatMainWindow/ChatMainWindow";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import WelcomePage from "./Components/Welcome/WelcomePage";
import {createHubConnection} from "./Helper/HubConnection";
import {Message} from "react-chat-ui";
import {GetAllChatsByUserId, GetLastMessagesByChatId, TryLoginOrRegister} from "./Helper/ApiFetcher";
import {ProcessChats} from "./Helper/ProcessData";

export const UserChatsContext = React.createContext({user:{},chats:[]});



function App() {

    const[user,setUser] = useState(null);
    const[hubConnection,setHubConnection] = useState(null);

    //CHATS STATE USED TO BE LIKE DIS
    // {id:100,name:'John',msg:[new Message({id:0,message:'lol'}),new Message({id:1,message:'lol!',senderName:'John'})]},
    //         {id:99,name:'Donn',msg:[new Message({id:0,message:'lol'}),new Message({id:1,message:'KEK!',senderName:'Donn'})]}
    const [chats,setChats] = useState([]);

    //A delegate(eto function pls) to return the total number of chats user has.
    // Chats are dispayed on the left, determine <Friend> elements.
    /**********IN DEVELOPMENT***********/

    //TODO refactor this component to creased the amount of lines(maybe)

    // A function to load chats with last message, to be used on login
    //Determines what is going to be displayed on the left side of main chat window
    // Check every chat data received from the backed and renders accordingly

    //TODO pass Name from the backend as well
    async function GetChats(userId)  {
        try {
            let chats = await GetAllChatsByUserId(userId);
            const chatsToState = ProcessChats(chats,userId);
            setChats(chatsToState);
            return 'ok';
        }
        catch(err){
            alert('error loading chats')
        }
    }

    const CreateNewChat = (chatId,chatName) => {
        setChats(prevState => {
            let updatedChat = Object.assign([],prevState);
            updatedChat.push({id:chatId,name:chatName,msg:[]});
            return Object.assign([],updatedChat);
        })
    };

    //Function that tries to log in or register based on parameter
    //if successful, starts socket communication and invokes GetChats method defined above
    async function loginOrRegister (loginData,endpoint){
        try {
            let result = await TryLoginOrRegister(loginData,endpoint);
            if (result) {
                 endpoint === 'login'? setUser(result[0]): setUser(result);
                //might need to be outside of current try/catch to separate from login error
                await GetChats(endpoint === 'login'?result[0].userId : result.userId);
                await ConnectAndSetHubToState();
            }
            return 'ok';
        }
        catch(err) {
            console.log(err);
            throw err;
        }
    }

    const ConnectAndSetHubToState = async () =>{
        let hub = await createHubConnection(setUser,setChats);
        await setHubConnection(hub);
    };

    //Function that uses a closure(google it)
    //after determining chat data, renders a new message + sends it to the server on the next invoke
    const SendMessage = (chatId,chatIndex) => {
        let l_chatIndex = chatIndex;
        let l_chatId= chatId;
        //invoke 'sendMessage' with chatId most likely
        return function (msgText) {
                setChats(prevState => {
                let updatedChat = Object.assign([],prevState[l_chatIndex]);
                hubConnection.invoke('SendDirectMessage',user.userId,l_chatId,msgText).catch(err=>console.log(err));
                updatedChat.msg.push(new Message({id:0,message:msgText}));
                return Object.assign([],prevState,updatedChat);
            });
        };
    };

    //needed to fix a bug with logout
    const logout = () => {
        setUser(null);
        setHubConnection(null);
    };


    return (
        <Router className = {'rocket'}>
            <Switch>
                <Route path="/app">
                    <UserChatsContext.Provider value={{user,chats}}>
                        <ChatMainWindow setChats={setChats} SendMessage={SendMessage} logout={()=>logout()} createNewChat = {CreateNewChat}/>
                    </UserChatsContext.Provider>
                </Route>
                <Route path="/register">
                    <WelcomePage path={'/register'}  loginOrRegister={loginOrRegister}/>
                </Route>
                <Route>
                    <WelcomePage path={'/login'}  loginOrRegister={loginOrRegister}/>
                </Route>
            </Switch>
        </Router>
        );
}
export default App;