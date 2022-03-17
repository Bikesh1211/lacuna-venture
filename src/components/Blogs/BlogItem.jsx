import { Routes,Route } from 'react-router-dom';
import styled from 'styled-components';
import Blog1 from './AllBlogs/Blog1'
function BlogItem(props) {
  return (
    <Container className='container'>
        <div>
            <img src={props.image} alt="" />
            <h1>{props.title} </h1>
            
            {/* <Routes>
            <Route path="blog1" element={<Blog1/> } />
            </Routes> */}



{/* social media */}
            <Heading>{props.share}</Heading>
{/* social media */}

                {/* article */}
                <p> {props.article} </p>

                <Heading>{props.heading1} </Heading>
                <p>{props.article1} </p>

                <Heading>{props.heading2} </Heading>
                <p>{props.article2} </p>

                <Heading>{props.heading3} </Heading>
                <p>{props.article3} </p>

                <Heading>{props.heading4} </Heading>
                <p>{props.article4} </p>

                <Heading>{props.heading5} </Heading>
                <p>{props.article5} </p>


                
                {/* article */}


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
font-family:Montserrat bold;
font-size:20px ;
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
    p{
        font-family:Arial, Helvetica, sans-serif ;
    }

`
const Heading = styled.p` 
    font-weight: bold;
`