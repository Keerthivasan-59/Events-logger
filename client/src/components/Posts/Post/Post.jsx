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

const Post = ({ post, setCurrentId }) => {
  const [posts, setPosts] = useContext(PostsContext);

  const handleEdit = () => {
    setCurrentId(post._id);
  };
  const handleLike = async () => {
    const { data } = await likePost(post._id);
    const newPosts = posts.map((post) => (post._id === data._id ? data : post));
    setPosts([...newPosts]);
  };
  const handleDelete = async () => {
    const { data } = await deletePost(post._id);
    const newPosts = posts.filter((post) => post._id !== data);
    setPosts([...newPosts]);
  };

const Likes=()=>{
  if(post.likes.length>0){
    return post.likes.find((like) => like === user?.result?._id) ? (
      <div className="postLike">
        {user?.result?._id && <FontAwesomeIcon
          onClick={handleLike}
          className="pointer blue"
          icon={faThumbsUp}
        />}
        <span>{' '}</span>
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} Like${post.likes.length > 1 ? "s" : ""}`}
      </div>
    ) : (
      <div aria-disabled={!user?.result?._id} className="postLike">
        {user?.result?._id && <FontAwesomeIcon
          onClick={handleLike}
          className="pointer"
          icon={faThumbsUp}
        />}
        {' '}
        {post.likes.length} {' '}
        {post.likes.length===1
          ? 'Like':'Likes' }
      </div>
    );
  }

  return (
    <div className="postLike">
      {user?.result?._id && <FontAwesomeIcon
        onClick={handleLike}
        className="pointer"
        icon={faThumbsUp}
      />}
      {' '}
      Like
    </div>
  );
}

  const user=JSON.parse(localStorage.getItem('profile'))
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
          <div className="postCreator">{post.name}</div>
          <div className="postTime">{moment(post.createdAt).fromNow()}</div>
        </div>
        {user?.result?._id === post?.creator && (
          <div className="editIcon pointer">
            <FontAwesomeIcon icon={faEllipsis} onClick={handleEdit} />
          </div>
        )}
      </div>
      <div className="postDetails">
        <div className="postTags"> {post.tags?.map((tag) => `#${tag}`)}</div>
        <div className="postTitle">{post.title}</div>
        <div className="postMessage">{post.message}</div>
      </div>
      <div className="postOptions">
        <Likes />
        {user?.result?._id === post?.creator && (
          <div className="postDelete">
            <FontAwesomeIcon
              onClick={handleDelete}
              className="pointer"
              icon={faTrashCan}
            />
            <span></span> Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
