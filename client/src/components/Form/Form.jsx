import React, { useState, useContext } from "react";
import "./form.css";
import FileBase from "react-file-base64";
import { createPost } from "../../api";
import { PostsContext } from "../../context/postContext";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFile: "",
  });
  const [posts, setPosts] = useContext(PostsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await createPost("http://localhost:5000/posts", postData);
    setPosts((prev)=> [...prev,data]);
    console.log(posts);
    clear();
  };
  // const handleChange=(e)=>{
  //   // setPostData((prev)=> ({...prev, [e.target.name]:e.target.value}))
  // }
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      tags: "",
      message: "",
      selectedFile: "",
    });
  };
  return (
    <div className="formContainer">
      <div className="formHeader">Creating a Post</div>
      <div className="form">
        <label htmlFor="creator" className="label">
          Creator:{" "}
        </label>
        <input
          type="text"
          name="creator"
          id="creator"
          className="textInput"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
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
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
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
