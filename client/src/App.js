import React,{useState} from 'react'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import { PostsProvider } from './context/postContext'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth/Auth'


const App = () => {
  return (
      <PostsProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
               
      </PostsProvider>
  );
}

export default App