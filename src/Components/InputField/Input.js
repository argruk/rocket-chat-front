import React, {useContext} from 'react';
import {ThemeProvider,TextComposer,Row,IconButton,AddIcon,TextInput,EmojiIcon,SendButton}
    from '@livechat/ui-kit';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Picker from 'emoji-picker-react';
import {MainChatWindowContext} from "../MainAppWindow/MainAppWindow";


function Input({onSendClick}) {
    const {isMobile} = useContext(MainChatWindowContext);


    const updField = (event) =>{
        if(event.type === 'change'){
            document.querySelector('.lc-1pj3shq').value+=event.type.value;
        }
    };

    const onEmojiClick = (event, emojiObject) => {
        document.querySelector('.lc-1pj3shq').value+=emojiObject.emoji;
    };

    const SendMessageToDatabaseAndScreen = (input) => {
        onSendClick(input);
        setTimeout(()=>{
            const chatWindow = document.getElementsByClassName("chat-panel")[0];
            chatWindow.scrollTop = chatWindow.scrollHeight;
        },20);

    };

    const popover = (
        <Popover id="popover-basic">
            <Picker onEmojiClick={onEmojiClick}/>
        </Popover>
    );
    return (
        <>

        <ThemeProvider>
            <TextComposer onSend={()=>{
                SendMessageToDatabaseAndScreen(document.querySelector('.lc-1pj3shq').value);
                }
            }
             onChange={updField}>
                <Row align="center">
                    <IconButton fit>
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <input type="file" style={{display:"none"}}/>
                        </label>
                        <AddIcon />
                    </IconButton>
                    <TextInput fill = 'true'  />
                    <SendButton fit />
                </Row>


                {!isMobile
                ?<Row verticalAlign="center" justify="left">
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <IconButton fit>
                            <EmojiIcon onClick={ () => {}}/>
                        </IconButton>
                    </OverlayTrigger>
                </Row>
                    :<div style={{height:'45px'}}/>
                }
            </TextComposer>
        </ThemeProvider>
            </>
    );
}
export default Input;