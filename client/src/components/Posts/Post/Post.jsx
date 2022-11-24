import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faTrashCan,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import "./post.css";
import noImage from "../../../assets/noImage.jpg";
import moment from "moment";
import { likePost, deletePost } from "../../../api";
import { useContext } from "react";
import { PostsContext } from "../../../context/postContext";

const Post = ({ post }) => {
  const [posts, setPosts] = useContext(PostsContext);

  const handleLike =async () => {
    const {data}=await likePost("http://localhost:5000/posts", post._id);
    const newPosts=posts.map((post)=> post._id===data._id? data:post)
    setPosts([...newPosts])
  };
  const handleDelete =async () => {
    const {data}= await deletePost("http://localhost:5000/posts", post._id);
    const newPosts=posts.filter((post)=> (post._id!==data))
    setPosts([...newPosts])
  };
  return (
    <div className="postContainer">
      <div className="imageFile">
        {post.selectedFile ? (
          <img src={post.selectedFile} alt="" />
        ) : (
          <img src={noImage} alt="" />
        )}
      </div>
      <div className="postCreation">
        <div className="postCreationDetails">
          <div className="postCreator">{post.creator}</div>
          <div className="postTime">{moment(post.createdAt).fromNow()}</div>
        </div>
        <div className="editIcon pointer">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
      <div className="postDetails">
        <div className="postTags"> {post.tags?.map((tag) => `#${tag}`)}</div>
        <div className="postMessage">{post.message}</div>
      </div>
      <div className="postOptions">
        <div className="postLike">
          <FontAwesomeIcon
            onClick={handleLike}
            className="pointer"
            icon={faThumbsUp}
          />
          <span> </span> Like
          <span> </span> {post.likeCount}
        </div>
        <div className="postDelete">
          <FontAwesomeIcon
            onClick={handleDelete}
            className="pointer"
            icon={faTrashCan}
          />
          <span></span> Delete
        </div>
      </div>
    </div>
    // {post.title}
  );
};

export default Post;
