import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import BlogCard from './BlogCard';
import blogImg1 from '../../assets/img/blog1.jpg'
import blogImg2 from '../../assets/img/blog2.jpg'
import blogImg3 from '../../assets/img/blog3.jpg'
import blogImg4 from '../../assets/img/blog4.jpg'
import blogImg5 from '../../assets/img/blog5.jpg'
import blogImg6 from '../../assets/img/blog6.jpg'
import blogImg7 from '../../assets/img/blog7.jpg'

function Blogs() {
  return (
          <div className="container-fluid">

    <div className='container'>
            <Fade up>

            <Heading>Latest Blog</Heading>
            </Fade>
        <Container>

            {/* Row */}
            <Fade up>
        <BlogCard 
                image = {blogImg1}
                title = 'A GUIDE TO CREATING AN EFFECTIVE IDEA AND BUSINESS PLAN'
                blogID='blog1'/>
        <BlogCard 
                image={blogImg2}
                title = 'HOW TO START A BUSINESS WITH LOW INVESTMENT?'
                blogID='blog2'/>
        <BlogCard 
                image ={blogImg3}
                title = 'WHY ARE AUDIENCE GETTING ADDICTED TO LACUNA MART NOWADAYS?'
                blogID='blog3'/>
            </Fade>

            {/* Row */}

            {/* Row */}
            <Fade up>


        <BlogCard 
                image ={blogImg4} 
                title = 'THE COMPLETE BEGINNERS GUIDE TO ENTREPRENEURS- STARTUP GUIDES FOR ENTREPRENEURS'
                blogID='blog4'/>

            </Fade>
            {/* Row */}

                 {/* Row */}
    
            <Fade up>

        <BlogCard 
                image = {blogImg5}
                title = 'WHERE DOES NEPAL STAND ON INNOVATIVE STARTUPS?'
                blogID='blog5'/>
        <BlogCard 
                image={blogImg6}
                title = 'STARTUPS, FAILING BUSINESSES, AND THE TOUGHEST DECISIONS'
                blogID='blog6'/>
            </Fade>
            {/* </Fade> */}

    {/* Row */}
                
                {/* Row */}
                <Fade up>

                <BlogCard 
                image = {blogImg7} 
                title = 'WHY DO STARTUPS IN NEPAL FAIL?'
                blogID='blog7'/>
                </Fade>
                {/* Row */}

        </Container>
        </div>

        
    </div>
  )
}

export default Blogs
const Container = styled.div`
text-align:center ;
display:grid;
grid-gap:20px;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
`
const Heading = styled.h1`
    font-size:50px ;
    text-transform:uppercase ;
    font-family:Montserrat Bold;
    font-weight:bold;
    transition: all ease .6s ;
    color: #fa7525;
    margin-top:20px ;
    
      &:hover{
          /* letter-spacing:6px ; */
          margin-left:50px ;
      }
`
