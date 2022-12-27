import React, { useState, useContext, useEffect } from "react";
import "./form.css";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../api";
import { PostsContext } from "../../context/postContext";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    tags: "",
    message: "",
    selectedFile: "",
  });
  const user=JSON.parse(localStorage.getItem('profile'))
  const [posts, setPosts] = useContext(PostsContext);

  const post = currentId ? posts.find((p) => p._id === currentId) : null;

  useEffect(() => {
    if (currentId) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      const { data } = await updatePost(
        currentId,
        { ...postData, name: user?.result?.name }
      );
      const newPosts = posts.map((post) =>
        post._id === data._id ? data : post
      );
      setPosts([...newPosts]);
      setCurrentId(null)
    } else {
      const { data } = await createPost(
        {...postData, name: user?.result?.name}
      );
      setPosts((prev) => [...prev, data]);
    }
    console.log(posts);
    clear();
  };

  const clear = () => {
    setPostData({
      title: "",
      tags: "",
      message: "",
      selectedFile: "",
    });
    setCurrentId(null)
  };

  if(!user?.result?.name){
    return (
      <div className="formContainer">
        <div className="formHeader">
          Please Sign In to create your own memories
        </div>
      </div>
    );
  }

  return (
    <div className="formContainer">
      <div className="formHeader">{currentId? 'Editing':'Creating'} a Post</div>
      <div className="form">
        <label htmlFor="title" className="label">
          Title:{" "}
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="textInput"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <label htmlFor="message" className="label">
          Message:{" "}
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className="textInput message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <label htmlFor="tags" className="label">
          Tags:{" "}
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          className="textInput"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className="fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button className="submitButton" onClick={handleSubmit}>
          SUBMIT
        </button>
        <button className="clearButton" onClick={clear}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Form;
