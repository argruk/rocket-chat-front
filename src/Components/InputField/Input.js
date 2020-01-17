import React,{useState,Suspense} from 'react';
import {ThemeProvider,TextComposer,Row,IconButton,AddIcon,TextInput,EmojiIcon,SendButton}
    from '@livechat/ui-kit';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Picker from 'emoji-picker-react';


function Input({onSendClick,showEmoji,emojiSeen}) {
    const[input,inputChange] = useState('');
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const updField = (event) =>{
        if(event.type === 'change'){
            inputChange(event.target.value);
        }
      console.log(input)
    };

    const onEmojiClick = (event, emojiObject) => {
        if(emojiObject){
             inputChange(prevState => prevState + emojiObject.emoji)
        }

    };
    return (
        <>

        <ThemeProvider>
            <TextComposer onSend={()=>onSendClick(input)} onChange={updField}>
                <Row align="center">
                    <IconButton fit>
                        <AddIcon />
                    </IconButton>
                    <TextInput fill = 'true'  />
                    <SendButton fit />
                </Row>

                <Row verticalAlign="center" justify="left">
                    <IconButton fit>
                            <EmojiIcon onClick = {()=>showEmoji(!emojiSeen)}/>
                    </IconButton>
                </Row>
            </TextComposer>
        </ThemeProvider>
            </>
    );
}
export default Input;