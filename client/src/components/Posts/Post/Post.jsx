import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp,faTrashCan} from '@fortawesome/free-solid-svg-icons'
import './post.css'
import noImage from '../../../assets/noImage.jpg'

const Post = ({post}) => {
  return (
    <div className="postContainer">
      <div className="imageFile">
        {post.selectedFile? <img src={post.selectedFile} alt="" /> :<img src={noImage} />}
      </div>
      <div className="postCreation">
        
      </div>
      <div className="postDetails">

      </div>
    </div>
    // {post.title}
  );
}

export default Post