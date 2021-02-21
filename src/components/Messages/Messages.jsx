import styles from "./Messages.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        <Dialog name="Julia" id="1"/>
        <Dialog name="Alex" id="2"/>
        <Dialog name="Dmitry" id="3"/>
        <Dialog name="Almaz" id="4"/>
        <Dialog name="Jamil" id="5"/>
      </div>
      <div className={styles.messages}>
        <Message message="Hi"/>
        <Message message="How are you?"/>
        <Message message="Very good ;)"/>
      </div>
    </div>
  );
}

export default Messages;