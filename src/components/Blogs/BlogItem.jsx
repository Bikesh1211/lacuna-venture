import { Routes,Route } from 'react-router-dom';
import styled from 'styled-components';
import Blog1 from './AllBlogs/Blog1'
function BlogItem(props) {
  return (
    <Container className='container'>
        <div>
            <img src={props.image} alt="" />
            <h1>{props.title} </h1>
            
            <Routes>
            <Route path="blog1" element={<Blog1/> } />
            </Routes>


        </div>
        <RecentPost>
            <input type="search" placeholder='Search Post Here'/>
            <h1>RECENT POST</h1>

            <div className="recent-post">
                <p>A Guide to Creating an Effective Idea and Business Plan</p>
            </div>
            <div className="recent-post">
                <p>A Guide to Creating an Effective Idea and Business Plan</p>
            </div>
            <div className="recent-post">
                <p>A Guide to Creating an Effective Idea and Business Plan</p>
            </div>
        </RecentPost>

    </Container>
  )
}

export default BlogItem
const RecentPost = styled.div` 

        input{
            height:50px ;
            outline:none ;
            border:none ;
            background-color: #F5F7FB ;
            width:100% ;
        }
`

const Container = styled.div` 

display: grid;
grid-gap:25px;
grid-template-columns: 2.8fr 1fr ;

        @media (max-width: 800px){
            grid-template-columns:1fr ;
        }

    img{
        width:100% ;
    }


`
const Heading = styled.p` 
    font-weight:bold ;
`