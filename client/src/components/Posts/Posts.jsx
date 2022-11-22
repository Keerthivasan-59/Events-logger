import React, { useEffect, useState,useContext } from 'react'
import Post from './Post/Post'
import { PostsContext } from '../../context/postContext'

const Posts = () => {
  const [posts,setPosts]=useContext(PostsContext)
  console.log(posts);
  return (
    <div>
     <Post/>
     <Post/>
    </div>
  )
}

export default Posts