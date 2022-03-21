import styled from 'styled-components';
import {Link} from 'react-router-dom'


function BlogCard(props) {

  return (
    <Container>

            <Card>
                <Link to={`/${props.blogID}`}>
                <img src={props.image} alt="" />
                <span> <i class="fa-solid fa-clock-rotate-left"></i> {props.date}</span>
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
                padding:10px;
                padding-bottom:0 ;
                font-weight:bold ;
                color:black ;
                /* font-family: Montserrat; */
                line-height:1.3em ;
                text-align:left ;


            }
         img{
            object-fit: cover;
            height: 60%;
            height:150px ;
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
            /* text-align:center ; */
            text-decoration:none ;
            font-size:20px;
            color:#FA7525 ;
        }
        
        border-radius: 10px 10px 0 0 ;

margin-top:30px ;
display:grid;
grid-gap:20px ;
box-sizing:border-box;
grid-template-rows: 300px ;


`
const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
/* box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px; */


span{
    color:black ;
    font-size:12px ;
    background-color:#F1F5F9;
}
cursor: pointer;
border-radius:10px 10px 0 0 ;
transition: all ease .5s;
&:hover{
    transform:rotateZ(5deg) ;
    background-color:#F5F5F5 ;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}



`