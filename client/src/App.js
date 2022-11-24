import React,{useState} from 'react'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import { PostsProvider } from './context/postContext'

const App = () => {
  const [currentId,setCurrentId]=useState(null)
  return (
    <PostsProvider>
      <div>
        <Navbar/>
        <Container currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </PostsProvider>
  );
}

export default App