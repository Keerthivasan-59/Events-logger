import React, { useContext } from "react";
import Post from "./Post/Post";
import { PostsContext } from "../../context/postContext";
import "./Posts.css";

const Posts = ({setCurrentId}) => {
  const [posts, setPosts] = useContext(PostsContext);
  return (
    <div className="postsContainer">
      {!posts.length
        ? "Loading"
        : posts?.map((post) => (
            <div>
              <Post post={post} key={post._id} setCurrentId={setCurrentId} />
            </div>
          ))}
    </div>
  );
};

export default Posts;
