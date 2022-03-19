import { Fade, Slide, Zoom } from 'react-reveal';
import styled from 'styled-components';
import Workshop2 from './Workshop2';
function Workshop() {
    
  return (
      
    <Container>
        <div >
            <Fade right>
                <div className="banner-img">

            <img src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>

            </Fade>


            <LeftContainer className='container'>
            <Fade left>
                <p id='top-p'>“A Stage forward for Your Start-Up" </p>

                <h1>Encouraging a culture wheres <span>IDEAS</span> are welcomed rather than <span>FEARED</span>. </h1>

                <p>For Startup Founders</p>
                <button>March Forward</button>
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
                    position:relative ;
                    font-family:Arial, Helvetica, sans-serif ;
                    color:black ;
                    button{
                        background-color:#FA7525 ;
                        border:none ;
                        padding:10px 25px 10px 25px ;       
                        border-radius:5px ;
                        &:hover{
                            background-color:orange ;
                        }

                    }

`
const LeftContainer = styled.div` 
position:absolute ;
line-height:2em ;
width:35rem;
top:150px;
left:20px;
color:black ;

@media (max-width: 700px){
    background-color: rgba(255, 255, 255, 0.5);

    width:90%;
    margin:auto ;
    /* left:30px ; */

}

                    #top-p{
                        font-size:1.3rem;
                    }
                    h1{
                        line-height:1.2em ;
                        margin-top:-10px ;
                    }
                    p{
                        color:#FA7525;
                        font-size:1rem ;
                    }
/* 
                    span{
                        font-weight:bold ;
                        color:#FA7525 ;
                        font-family:sans-serif ;
                    } */
`