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

const Post = ({ post }) => {
  return (
    <div className="postContainer">
      <div className="imageFile">
        {post.selectedFile ? (
          <img src={post.selectedFile} alt="" />
        ) : (
          <img src={noImage} alt=''/>
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
        <div className="postLike pointer">
          <FontAwesomeIcon icon={faThumbsUp}/>
             <span> </span> Like
             <span> </span> {post.likeCount}
        </div>
        <div className="postDelete pointer">
          <FontAwesomeIcon icon={faTrashCan}/>
          <span></span> Delete
        </div>
      </div>
    </div>
    // {post.title}
  );
};

export default Post;
