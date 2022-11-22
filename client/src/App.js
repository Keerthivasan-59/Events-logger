import React from 'react'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import { PostsProvider } from './context/postContext'

const App = () => {
  return (
    <PostsProvider>
      <div>
        <Navbar />
        <Container />
      </div>
    </PostsProvider>
  );
}

export default App