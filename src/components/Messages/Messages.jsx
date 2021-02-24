import styles from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {

  let dialogsData = [
    {id: 1, name: 'Julia'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Dmitry'},
    {id: 4, name: 'Almaz'},
    {id: 5, name: 'Jamil'},
  ]

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
  ]

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

      </div>
      <div className={styles.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
      </div>
    </div>
  );
}

export default Messages;