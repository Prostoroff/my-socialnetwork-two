import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      My posts
      <div className={`${styles.item} ${styles.new_posts}`}>
        New posts
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button> Add Post</button>
        </div>
      </div>
      <Post message="Hi, it's my first post" likesCount="5"/>
      <Post message="Learned about a new function today" likesCount="12"/>
      <Post message="I'm happy ;)" likesCount="29"/>
    </div>
  );
}

export default MyPosts;