import React, { useState } from "react";
import './form.css'
import FileBase from 'react-file-base64'

const Form = () => {
  const [postData,setPostData]=useState({creator:'',title:'',tags:'',message:'',selectedFile:''})
  const handleSubmit=()=>{

  }
  // const handleChange=(e)=>{
  //   // setPostData((prev)=> ({...prev, [e.target.name]:e.target.value}))
  // }
  const clear=()=>{

  }
  console.log(postData)
  return (
    <div className="Container">
      <div className="header">Creating a Post</div>
      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="creator" className="label">Creator: </label>
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
        <label htmlFor="title"
        className="label">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          className="textInput"
          value={postData.title}
          onChange={(e) =>
            setPostData({ ...postData, title: e.target.value })
          }
        />
        <label htmlFor="message"
        className="label">Message: </label>
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
        <label htmlFor="tags" className="label">Tags: </label>
        <input
          type="text"
          name="tags"
          id="tags"
          className="textInput"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value })
          }
        />
        <div className="fileInput">
          <FileBase type='file' multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile:base64}) } />
        </div>
        <button className="submitButton" type="submit" >SUBMIT</button>
        <button className="clearButton" onClick={clear} >CLEAR</button>
      </form>
    </div>
  );
};

export default Form;
