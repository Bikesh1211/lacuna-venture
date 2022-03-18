import React from "react";
import styled from 'styled-components';
import { Routes, Route} from "react-router-dom";

import Blogs from "./Blogs";
import Blog1 from '../Blogs/AllBlogs/Blog1'
import Blog2 from '../Blogs/AllBlogs/Blog2'
import Blog3 from '../Blogs/AllBlogs/Blog3'
import Blog4 from '../Blogs/AllBlogs/Blog4'
import Blog5 from '../Blogs/AllBlogs/Blog5'
import Blog6 from '../Blogs/AllBlogs/Blog6'
import Blog7 from '../Blogs/AllBlogs/Blog7'

function BlogsContent() {
  return (
    <Container>

<Routes>
      
        <Route path="blogs" element={<Blogs/>} />

        <Route path="blog1" element={<Blog1/> } />
        <Route path="blog2" element={<Blog2/> } />
        <Route path="blog3" element={<Blog3/> } />
        <Route path="blog4" element={<Blog4/> } />
        <Route path="blog5" element={<Blog5/> } />
        <Route path="blog6" element={<Blog6/> } />
        <Route path="blog7" element={<Blog7/> } />

      </Routes>
          
    </Container>
  );
}

export default BlogsContent;
const Container  = styled.div`

`
