import axios from "axios";
import React,{useState,createContext,useEffect} from "react";
import {useFetch} from "../api";

export const PostsContext=createContext()

export const PostsProvider= (props)=>{
  const [posts, setPosts] = useState();
  const { data, loading, error } = useFetch("http://localhost:5000/posts");
console.log(data);
  useEffect(() => {
    setPosts(data);
  }, [data]);

  return <PostsContext.Provider value={[posts,setPosts]}>
   {props.children}
  </PostsContext.Provider>
}


