import styled from 'styled-components';
function Workshop2() {
    const image = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  return (
    <Container className='container'>
        <Heading>Learn More About Startups & Entrepreneurship</Heading>
        <MainParagraph>Converting an idea from scratch into reality is never an easy job.  Join our Entrepreneurial Workshop Sessions to discover what's important to your personal and professional career.</MainParagraph>

        <GridContainer>
            <div className="one">
                <img src={image} alt="" />
                <h1>Startup Buildup</h1>
            </div>
            <div className="two">
                <img src={image} alt="" />
                <h1>Startups & Entrepreneurship Culture</h1>
            </div>
            <div className="three">
            <img src={image} alt="" />
                <h1>Investment Pitch & IncubationHow to Build A startup?</h1>

            </div>
            <div className="four">
            <img src={image} alt="" />
            <h1>Design Thinking Sessions</h1>

                  </div>
            <div className="five">
            <img src={image} alt="" />
            <h1>Creation & Commercialization</h1>

                 </div>
            <div className="six">
            <img src={image} alt="" />
            <h1>E-commerce</h1>

                
            </div>

        </GridContainer>
    </Container>
  )
}

export default Workshop2

const Container = styled.div` 
margin-top:50px ;

            img{
                width: 100%;
                height:200px ;
                object-fit:cover ;
                /* width:100% ; */
                
            }

div{
    .one,.two,.three,.four,.five,.six{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    }

}

`
const Heading = styled.h1` 
text-align:center ;

width:30rem;
margin: auto;

        @media (max-width:530px){
            width:auto ;
        }
`
const GridContainer = styled.div` 
display:grid ;
grid-gap:20px ;
grid-template-columns:repeat(auto-fit,minmax(300px, 1fr)) ;
justify-content:center;
grid-template-rows:repeat(6,350px); 


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