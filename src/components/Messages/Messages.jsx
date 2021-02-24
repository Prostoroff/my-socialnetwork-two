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

  let dialogsElement = dialogsData
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElement = messagesData
    .map((message) => <Message message={message.message}/>);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        {dialogsElement}
      </div>
      <div className={styles.messages}>
        {messagesElement}
      </div>
    </div>
  );
}

export default Messages;