import React from 'react'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import './container.css'

const Container = ({currentId,setCurrentId}) => {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="posts">
          <Posts currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div className='containerform'>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default Container