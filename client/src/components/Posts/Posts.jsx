import React, { useContext } from "react";
import Post from "./Post/Post";
import { PostsContext } from "../../context/postContext";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useContext(PostsContext);
  console.log(posts);
  return (
    <div className="postsContainer">
      {!posts
        ? "Loading"
        : posts?.map((post) => (
            <div>
              <Post post={post} key={post._id} />
            </div>
          ))}
    </div>
  );
};

export default Posts;
