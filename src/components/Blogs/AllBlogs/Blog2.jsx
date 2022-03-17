import React from "react";
import BlogItem from "../BlogItem";
import styled from 'styled-components';
function BlogsContent() {
  return (
    <Container className="container">
      <BlogItem
        image="https://lacunaventure.com/wp-content/uploads/2022/02/invest.jpg"
        title="A GUIDE TO CREATING AN EFFECTIVE IDEA AND BUSINESS PLAN"/>
    </Container>
  );
}

export default BlogsContent;
const Container  = styled.div`
margin-top: 100px;

`
