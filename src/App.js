import Blogs from "./components/Blogs/Blogs";
import {Routes,Route,Link} from 'react-router-dom'
import styled from "styled-components";
import Login from './components/login/login'

import Blog1 from './components/Blogs/AllBlogs/Blog1'
import Blog2 from './components/Blogs/AllBlogs/Blog2'
import BlogsContent from "./components/Blogs/BlogsContent";

function App() {
  return (
    <div className="App">
      <Nav>


      <Link to='/home'>Home</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/login'>Login</Link>
      </Nav>

      
      <BlogsContent/>

      <Routes>
            <Route path="login" element={<Login/> } />
      </Routes> 
        
    </div>
  );
}

export default App;
const Nav = styled.div`
background-color:black ;
background-color:#FA7525 ;
padding:25px ;
 a{
   margin-left:20px;
   color:black ;
 }
`
