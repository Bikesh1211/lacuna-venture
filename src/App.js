import Blogs from "./components/Blogs/Blogs";
import {Routes,Route,Link} from 'react-router-dom'
import styled from "styled-components";
import Login from './components/login/login'

import Blog1 from './components/Blogs/AllBlogs/Blog1'
import Blog2 from './components/Blogs/AllBlogs/Blog2'

function App() {
  return (
    <div className="App">
      <Nav>


      <Link to='/home'>Home</Link>
      <Link to='/blogs'>Blogs</Link>
      <Link to='/login'>Login</Link>
      </Nav>
      <Routes>
        

        <Route path="blogs" element={<Blogs/>} />
        <Route path="login" element={<Login/> } />

        <Route path="blog1" element={<Blog1/> } />
        <Route path="blog2" element={<Blog2/> } />

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
