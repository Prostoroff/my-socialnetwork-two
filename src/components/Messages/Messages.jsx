import styles from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let dialogsElement = props.dialogsData
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElement = props.messagesData
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