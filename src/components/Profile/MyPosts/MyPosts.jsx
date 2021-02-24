import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id: 1, message: "Hi, it's my first post", likesCount: 12},
    {id: 2, message: "Learned about a new function today", likesCount: 23},
    {id: 3, message: "I'm happy", likesCount: 34},
  ]

  let postsElements = postsData
    .map((post) => <Post message={post.message} likesCount={post.likesCount}/>);

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