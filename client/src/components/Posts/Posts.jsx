import React, { useContext, useEffect } from "react";
import Post from "./Post/Post";
import { PostsContext } from "../../context/postContext";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useContext(PostsContext);
  console.log(posts);
  return (
    <div className="postsContainer">
      {!posts.length
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
