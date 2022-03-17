import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {Routes,Route,Link} from 'react-router-dom'


function BlogCard(props) {

  return (
    <Container>

            <Card>
                <Link to={`/${props.blogID}`}>
                <img src={props.image} alt="" />
                <h1>{props.title} </h1>
                <a href="#readmore">READ MORE</a>
                </Link>
            </Card>
            
    </Container>
  )
}

export default BlogCard
const Container = styled.div`
        h1{
                font-size: 1rem;
                text-align:center;
                padding:10px;
                padding-bottom:0 ;
                font-weight:bold ;
                color: white ;
                font-family: Montserrat;

            }
         img{
            object-fit: cover;
            height: 60%;
            /* height:200px ; */
            width:100% ;
            transition: all .2s ease-in-out; 
            border-radius: 10px 10px 0 0 ;

        }

        img:hover{
            transform:scale(0.95) ;
        }
        h1:hover{
            text-decoration:underline ;
        }
        a{
            text-align:center ;
            text-decoration:none ;
            font-size:20px;
            color:white ;
        }
        
        background-color: #091020;
        border-radius: 10px 10px 0 0 ;

margin-top:30px ;
display:grid;
grid-gap:20px ;
box-sizing:border-box;
grid-template-rows: 300px ;


`
const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
cursor: pointer;
border-radius:10px 10px 0 0 ;
transition: all ease .5s;
&:hover{
    transform:rotateZ(5deg) ;
    background-color:#fa7525 ;
}



`