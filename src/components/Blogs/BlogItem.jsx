import { Routes,Route } from 'react-router-dom';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from "react-router-dom";

import blogImg1 from '../../assets/img/blog1.jpg'
import blogImg2 from '../../assets/img/blog2.jpg'
import blogImg3 from '../../assets/img/blog3.jpg'



function BlogItem(props) {
  return (
    <Container className='container'>
        <div>
            <Fade left>

            <img src={props.image} alt="" />
            </Fade>

                <Fade up>
                    

                <h1>{props.title} </h1>

              <Heading>Spread the love</Heading>
                {/* article */}
                <p> {props.article} </p>

                <Heading>{props.heading1} </Heading>
                <p>{props.article1} </p>

                <Heading>{props.heading2} </Heading>
                <p>{props.article2} </p>

                <img src={props.image2} alt="" />
                <Heading>{props.heading3} </Heading>
                <Slide up>
                <p>{props.article3}<br />

                <Link to="/blog2">
                    {props.showmore}
                </Link>

                </p>
                </Slide>

                <Heading>{props.heading4} </Heading>
                <p>{props.article4} </p>

                <Heading>{props.heading5} </Heading>
                <p>{props.article5} </p>
                <p>{props.article6} </p>

                <img src={props.image3} alt="" />

                <Heading>{props.heading7} </Heading>
                <p>{props.article7} </p>
                <p>{props.article8} </p>

                <Heading>{props.heading9} </Heading>
                <p>{props.article9} </p>
                <Heading>{props.heading10} </Heading>
                <p>{props.article10} </p>
                <Heading>{props.heading11} </Heading>
                <p>{props.article11} </p>
                <Heading>{props.heading12} </Heading>





                
                {/* article */}
                </Fade>



        </div>
        <Fade right>

        <RecentPost>
            <input type="search" placeholder='Search Post Here'/>
            <h1>RECENT POST</h1>

            <div className="recent-post">
            <Link to='/Blog1'>

                <img src={blogImg1} alt="" />
                <p>A GUIDE TO CREATING AN EFFECTIVE IDEA AND BUSINESS PLAN</p>
                
            </Link>


                <p className='recent-post-date'>February 9, 2022</p>
            </div>

            <div className="recent-post">
                <Link to='/blog2'>

                <img src={blogImg2} alt="" />
                <p>HOW TO START A BUSINESS WITH LOW INVESTMENT?</p>
                </Link>
                <p className='recent-post-date'>February 6, 2022</p>
            </div>

            <div className="recent-post">
                <Link to='/blog3'>

                <img src={blogImg3} alt="" />
                <p>Why Are Audience Getting Addicted to Lacuna Mart Nowadays?</p>
                </Link>
                <p className='recent-post-date'>October 14, 2021</p>

            </div>

        <ImportantLink>
            <h1>IMPORTANT LINK</h1>
            <Link to='/Blogs'>Blogs</Link>
            <Link to='/Blogs'>Events</Link>
            <Link to='/Blogs'>Workshop</Link>
            <Link to='/Blogs'>Gallery</Link>

        </ImportantLink>
        </RecentPost>
        </Fade>

    </Container>
  )
}

export default BlogItem
const RecentPost = styled.div` 
p{
    font-size:1rem;
    line-height:20px !important;
    /* text-transform:lowercase ; */
    font-weight:bold ;
}
.recent-post-date{
    color:gray ;
    font-weight:normal ;
    font-size:.6em ;
}

.recent-post img{
            width:50px ;
            height: 50px;
            object-fit: cover;
        }

        p{
            width:76% ;
        }
        a{
            display: flex;
            justify-content:space-between ;
            color:black ;
            &:hover{
                    color:orange ;
            }
        }
        
/* font-family:Montserrat bold; */
        input{
            height:50px ;
            outline:none ;
            border:none ;
            background-color: #F5F7FB ;
            width:100% ;
        }
`



const Container = styled.div` 
margin-top: 50px;
/* font-family:monaster ; */
letter-spacing:2px ;
font-size:20px ;
font-weight:normal ;
h1{
            font-size:24px ;
            margin-top: 30px;
        }

display: grid;
grid-gap:25px;
grid-template-columns: 2.8fr 1fr ;

        @media (max-width: 990px){
            grid-template-columns:1fr ; 
            
        }

    img{
        width:100% ;
    }
    p{
        font-family:Arial, Helvetica, sans-serif ;
        /* font-family: Montserrat; */
    }
    a{
        text-decoration:none ;
    }

`
const Heading = styled.p` 
    font-weight: bold;
`

const ImportantLink = styled.div`
        a{
            background-color:#F5F7FB ;
            margin-bottom:5px ;
            padding:10px ;

        }

`