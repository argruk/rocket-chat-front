import React,{useState} from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import AudioSettingsModal from "./Modals/AudioSettingsModal";
import AddContactModal from "./Modals/AddContactModal";
import {RELEASEDATA, SettingsList} from "../../Constants/Const";
import MyAccountModal from "./Modals/MyAccountModal";
import './Settings.css';



function Settings({updateAudio,logout,chooseSong,createNewChat,UpdateUserData}) {
    const [modal, setModal] = useState({type:'',seen:false});

    const handleClose = () => setModal({type:'',seen:false});
    const handleShow = (type) => setModal({type:type,seen:true});

    return (
        <>
        <Dropdown className={'settings-ext'}>
            <Dropdown.Toggle variant="secondary" size={'sm'} id="dropdown-basic">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </Dropdown.Toggle>
            <span className={'app-name'} > Rocket chat {RELEASEDATA[0].version}</span>

            <Dropdown.Menu>
                {SettingsList.map((item,index)=>(
                    (item ==='Logout')
                        ?
                        <Dropdown.Item key = {item} onClick = {logout}>{SettingsList[index]}</Dropdown.Item>
                        :
                        <Dropdown.Item key = {item} onClick = {()=>handleShow(SettingsList[index])} >{SettingsList[index]} </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
            {
                {
                    'Add Contact': <AddContactModal show={modal.seen} handleClose={handleClose} createNewChat={createNewChat}/>,
                    'Audio': <AudioSettingsModal show = {modal.seen} handleClose = {handleClose} updateAudio={updateAudio} chooseSong={chooseSong} />,
                    'My Account' : <MyAccountModal show={modal.seen} handleClose={handleClose} UpdateUserData={UpdateUserData}/>,
                    'Logout': <></>
                }[modal.type]
            }
           </>

    );
}
export default Settings;