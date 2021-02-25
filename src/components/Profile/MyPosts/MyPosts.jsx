import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements =
    props.postsData.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

  return (
    <div className={styles.myPosts}>
      <h3>My posts</h3>
      <div className={`${styles.item} ${styles.new_posts}`}>
        New posts
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button> Add Post</button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;