import React, {useContext, useState} from 'react';
import Input from "../InputField/Input";
import './Chat.css';
import { ChatFeed } from 'react-chat-ui'
import {MainChatWindowContext} from "../MainAppWindow/MainAppWindow";
//import Picker from "emoji-picker-react";



function ChatWindow({chatData,onSend,loadTen,GoBack}) {
    const [emojiSeen,showEmoji] = useState(false);

    const {chatId,chatIndex} = useContext(MainChatWindowContext);
    const {isMobile} = useContext(MainChatWindowContext);

    const LoadMoreMessages = (event) => {
        loadTen(chatId,chatIndex,false);
    };

    return (
        <div id = {'chat-side'}>
            {
                isMobile
                    ?<div className="container">
                        <div className="row" style={{maxHeight: '5vh'}}>
                            <div className="col-1 arrow-back " onClick={()=>GoBack('left')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0V0z"/>
                                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                                </svg>
                            </div>
                            <h4 className='white tc hover-bg-white-40 pointer col-11' onClick={LoadMoreMessages}>
                                Load more
                            </h4>
                        </div>
                    </div>
                    : <h4 className='white tc hover-bg-white-40 pointer col-10' onClick={LoadMoreMessages}>
                        Load more
                    </h4>
            }

            <ChatFeed
                ClassName ={'feed'}
                showSenderName
                messages = {chatData.msg}
            />
            {/*emojiSeen
                ?<Picker/>
                : <></>
            */}
            <footer className={'footer'}>
                <Input onSendClick={onSend} showEmoji={showEmoji} emojiSeen={emojiSeen}/>
            </footer>
        </div>
    );


}
export default ChatWindow;