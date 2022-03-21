import { Fade, Slide, Zoom } from 'react-reveal';
import styled from 'styled-components';
import Workshop2 from './Workshop2';
import workshop_img from '../../assets/img/Workshop-img.png'
function Workshop() {
    
  return (
      
    <Container>
        <div >
            <Fade up>
                <div className="banner-img">
                    <img src={workshop_img} alt="" />
                </div>

            </Fade>

             <DirectPhone>
                 <Zoom>

             <a href="tel:01-5245116">
             <i class="fa-solid fa-phone"></i>
             </a>
                 </Zoom>

             </DirectPhone>

            <LeftContainer className='container'>
            <Fade right>
                {/* <Slide right> */}


                <p id='top-p'>“A Stage forward for Your Start-Up" </p>

                <h1>Encouraging a culture wheres <span>IDEAS</span> are welcomed rather than <span>FEARED</span>. </h1>

                <p>For Startup Founders</p>
                <button>March Forward</button>
                {/* </Slide> */}

            </Fade>
            </LeftContainer>
            
        
        </div>

        <Workshop2/>
        
    </Container>
  )
}

export default Workshop
const Container = styled.div`
                  .banner-img img{
                        width:100%;
                        height:600px ;
                        object-fit:cover ;
                    }
                    @media (max-width:700px){
                       .banner-img img{
                            height:400px ;
                        }
                    }
                    position:relative ;
                    font-family:Arial, Helvetica, sans-serif ;
                    button{
                        background-color:#FA7525 ;
                        color:white ;
                        font-size:20px ;
                        border:none ;
                        padding:10px 25px 10px 25px ;       
                        border-radius:5px ;
                        &:hover{
                            background-color:#FA7525;
                            color:black ;
                        }

                    }

`
const LeftContainer = styled.div` 
position:absolute ;
line-height:2em ;
width:45rem;
top:150px;
left:50px;
color:white ;
                        span{
                            color:#FA7525 ;
                        }



                    #top-p{
                        /* font-size:1.5rem; */
                    }
                    h1{
                        line-height:1.2em ;
                        margin-top:-10px ;
                        font-size:3vw ;
                        text-transform:uppercase ;
                        font-weight:bold ;
                    }
                    p{
                        /* color:#FA7525; */
                        /* font-size:1.5em ; */
                    }
/* 
                    span{
                        font-weight:bold ;
                        color:#FA7525 ;
                        font-family:sans-serif ;
                    } */
                    @media (max-width: 700px){
                    width:100% ;
                    left:0 ;
                    top:100px ;

                    h1{
                        font-size:24px ;
                    }
}
`

const DirectPhone = styled.div` 
position:fixed ;
top: 300px ;
right:0;
font-size:22px ;
background-color:#FA7525 ;
padding:10px;
color:white ;
border-radius:5px 0 0 5px ;
z-index:1 ;
text-align:center ;

                    a{
                        color: white ;
                        text-decoration:none ;
                    }
                    &:hover a{
                        color:black ;

                    }
`
