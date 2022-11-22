import React from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import './container.css'

const Container = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="posts">
          <Posts />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Container