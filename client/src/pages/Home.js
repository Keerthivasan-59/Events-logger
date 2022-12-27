import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar';
import Container from '../components/Container/Container';

const Home = () => {
   const [currentId, setCurrentId] = useState(null);
  return (
    <div>
      <div>
        <Navbar />
        <Container currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
}

export default Home