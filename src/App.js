import Blogs from "./components/Blogs/Blogs";
import {Routes,Route,Link} from 'react-router-dom'
import styled from "styled-components";
import Login from './components/login/login'

import BlogsContent from "./components/Blogs/BlogsContent";
import Workshop from "./components/Workshop/Workshop";
import Events from "./components/Events/Events";

function App() {
  return (
    <div className="App">
      <Nav>


      <Link to='/home'>Home</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/login'>Login</Link>
      <Link to='/events'>Events</Link>
      <Link to='/workshop'>Workshop</Link>
      </Nav> 

      <BlogsContent/>
      <Routes>
            <Route path="login" element={<Login/> } />
            <Route path="workshop" element={<Workshop/>} />
            <Route path="events" element={<Events/> } />

      </Routes> 
        
    </div>
  );
}

export default App;
const Nav = styled.div`
background-color:black ;
padding:25px ;
 a{
   margin-left:20px;
   color:white ;
   text-decoration:none ;
   &:hover{
    color:#FA7525 ;
 ;
   }
   
 }
`
