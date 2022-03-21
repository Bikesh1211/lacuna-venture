import { Slide, Zoom } from 'react-reveal';
import styled from 'styled-components';
import workshop_Img1 from '../../assets/img/workshop/How-to-Build-A-startup.png'
import workshop_Img2 from '../../assets/img/workshop/Startup-Entrepreneurship-Culture.png'
import workshop_Img3 from '../../assets/img/workshop/Design-thinking.png'
import workshop_Img4 from '../../assets/img/workshop/creation-commercialization.png'
import workshop_Img5 from '../../assets/img/workshop/E-commerce-Build-Up.png'
// import workshop_Img6 from '../../assets/img/How-to-Build-A-startup.png'
function Workshop2() {
    const image = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  return (
    <Container className='container'>
        <Zoom>

        <Heading>Learn More About Startups & Entrepreneurship</Heading>
        <MainParagraph>Converting an idea from scratch into reality is never an easy job.  Join our Entrepreneurial Workshop Sessions to discover what's important to your personal and professional career.</MainParagraph>
        </Zoom>

        <GridContainer>
            <Slide up>

            <div className="one">
                <img src={workshop_Img1} alt="" />
                <h1>How to Build A startup? Startup Buildup</h1>
            </div>
            <div className="two">
                <img src={workshop_Img2} alt="" />
                <h1>Startups & Entrepreneurship Culture</h1>
            </div>
            <div className="four">
            <img src={workshop_Img3} alt="" />
            <h1>Design Thinking Sessions</h1>

                  </div>
            <div className="five">
            <img src={workshop_Img4} alt="" />
            <h1>Creation & Commercialization</h1>

                 </div>
            <div className="six">
            <img src={workshop_Img5} alt="" />
            <h1>E-commerce Buildup</h1>

                
            </div>
            </Slide>

        </GridContainer>
    </Container>
  )
}

export default Workshop2

const Container = styled.div` 
margin-top:50px ;
            h1{
                font-weight:bold ;
            }

            img{
                width: 100%;
                height:200px;
                object-fit:cover ;
                /* width:100% ; */
                
            }

div{
    .one,.two,.three,.four,.five,.six{
        box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
        border-radius:10px;
    }

}

`
const Heading = styled.h1` 
text-align:center ;
width:35rem;
margin: auto;
color:#FA7525 ;
    

        @media (max-width:590px){
            width:100%;
        }
`
const GridContainer = styled.div` 
display:grid ;
grid-gap:20px ;
grid-template-columns:repeat(auto-fit,minmax(300px, 1fr)) ;
justify-content:center;
/* grid-template-rows:repeat(auto-fit, minmax(350px,1fr));  */
        /* .test{
            width:300px ;
            height:200px ;
            background-color:purple ;
            margin:auto ;
        } */


            h1{
                font-size:25px ;
                margin-top:20px ;
            }

                div{
                    padding:15px ;
                    box-sizing: border-box;
                    margin-top:20px ;
                }
`
const MainParagraph = styled.p` 
/* width:30rem ; */
margin:auto ;
margin-top:20px ;
text-align:center ;
font-size:1.3rem ;
`