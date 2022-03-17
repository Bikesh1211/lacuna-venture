import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import BlogCard from './BlogCard';

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
                image = 'https://lacunaventure.com/wp-content/uploads/2022/02/Guide.jpg' 
                title = 'A GUIDE TO CREATING AN EFFECTIVE IDEA AND BUSINESS PLAN'
                blogID='blog1'/>
        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2022/02/invest-768x572.jpg' 
                title = 'HOW TO START A BUSINESS WITH LOW INVESTMENT?'
                blogID='blog2'/>
        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/05/gadgets.jpg' 
                title = 'WHY ARE AUDIENCE GETTING ADDICTED TO LACUNA MART NOWADAYS?'
                id='blog2'/>
            </Fade>

            {/* Row */}

            {/* Row */}
            <Fade up>

        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/05/lacuna-us-768x432.jpg' 
                title = 'WHAT IS LACUNA VENTURE ALL ABOUT? FIND OUT HOW YOU CAN KICK START YOUR STARTUP.'/>
        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/07/corporate-businessman-giving-presentation-large-audience-768x432.jpg' 
                title = 'DO YOU EVER GET CONFUSED ABOUT AN IDEA WHEN YOUR OWN EYES ARE OPEN TO IT?'/>
        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/07/How-low-can-768x482.jpg' 
                title = 'THE COMPLETE BEGINNERS GUIDE TO ENTREPRENEURS- STARTUP GUIDES FOR ENTREPRENEURS'/>

            </Fade>
            {/* Row */}

                 {/* Row */}
    
            <Fade up>

        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/06/where-does-nepal-768x432.jpg' 
                title = 'WHERE DOES NEPAL STAND ON INNOVATIVE STARTUPS?'/>
        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/06/lacuna-blog-768x482.jpg' 
                title = 'STARTUPS, FAILING BUSINESSES, AND THE TOUGHEST DECISIONS'/>
        <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/05/Entrepreneurs-1-768x484.jpg' 
                title = 'THE LIFE OF AN ENTREPRENEUR'/>
            </Fade>
            {/* </Fade> */}

    {/* Row */}
                
                {/* Row */}
                <Fade up>

                <BlogCard 
                image = 'https://lacunaventure.com/wp-content/uploads/2021/05/failure-768x432.jpg' 
                title = 'WHY DO STARTUPS IN NEPAL FAIL?'/>
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
grid-gap:20px ;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
`
const Heading = styled.h1`
    font-size:50px ;
    text-transform:uppercase ;
    font-family: 'Playfair Display', serif;
    font-weight:bold;
    transition: all ease .6s ;
    color: orange;
    
      &:hover{
          letter-spacing:10px ;
      }
`
