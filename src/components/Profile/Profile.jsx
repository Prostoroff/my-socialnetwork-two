import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwux95DR0PH-RmW8D5EhlrfY13CyHeqF5-fQ&usqp=CAU" />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div className={`${styles.item} ${styles.new_posts}`}>
          New posts
        </div>
        <div>
          <div className={styles.item}>
            post 1
          </div>
          <div className={styles.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;