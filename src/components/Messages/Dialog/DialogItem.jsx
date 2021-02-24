import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={styles.dialog}>
      <NavLink to={"/messages/" + props.id} activeClassName={styles.active}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;