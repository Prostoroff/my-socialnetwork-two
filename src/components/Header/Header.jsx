import styles from "./Header.module.css";
import logo from "./Logo/logo.png";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/profile">
        <img src={logo}/>
      </NavLink>
    </header>
  );
}

export default Header;