import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div className={`${styles.item} ${styles.new_posts}`}>
        New posts <br/>
        <textarea></textarea>
        <br/>
        <button> Add Post</button>
      </div>
      <Post message= "Hi, it's my first post" likesCount= "5"/>
      <Post message= "Learned about a new function today" likesCount= "12"/>
      <Post message= "I'm happy ;)" likesCount= "2987"/>
    </div>
  );
}

export default MyPosts;