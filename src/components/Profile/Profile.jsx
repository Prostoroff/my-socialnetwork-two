import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwux95DR0PH-RmW8D5EhlrfY13CyHeqF5-fQ&usqp=CAU" />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
}

export default Profile;