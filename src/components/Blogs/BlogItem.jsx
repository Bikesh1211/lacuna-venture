import { Routes,Route } from 'react-router-dom';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Link } from "react-router-dom";


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
                <a href="#fs">

                <img src="https://lacunaventure.com/wp-content/uploads/2022/02/Guide.jpg" alt="" />
                <p>A GUIDE TO CREATING AN EFFECTIVE IDEA AND BUSINESS PLAN</p>

                </a>
                <p className='recent-post-date'>March 9, 2022</p>
            </div>

            <div className="recent-post">
                <a href="#fs">

                <img src="https://lacunaventure.com/wp-content/uploads/2022/02/Guide.jpg" alt="" />
                <p>HOW TO START A BUSINESS WITH LOW INVESTMENT?</p>
                </a>
                <p className='recent-post-date'>March 9, 2022</p>
            </div>

            <div className="recent-post">
                <a href="#fs">

                <img src="https://lacunaventure.com/wp-content/uploads/2022/02/Guide.jpg" alt="" />
                <p>Why Are Audience Getting Addicted to Lacuna Mart Nowadays?</p>
                </a>
                <p className='recent-post-date'>March 9, 2022</p>

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
    text-transform:lowercase ;
}
.recent-post-date{
    color:gray ;
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