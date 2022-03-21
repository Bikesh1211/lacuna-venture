import styled from 'styled-components';
import ENTREPRENEURIAL from './ENTREPRENEURIAL ';
import Events2 from './Events2';
function Events() {
  return (
    <Container> 
      <div className="event-img">

          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      </div>
          <EventContainer>
          <h1>Be a part of Our Entrepreneurial Reunion</h1>
          <p>It's  time to learn, brainstorm, dream and create.</p>

        <Events2/>
          </EventContainer>

        <ENTREPRENEURIAL/>
        
    </Container>
  )
}

export default Events
const Container = styled.div` 
height:600px ;
      .event-img img{
        width:100% ;
        height:600px ;
        object-fit:cover ;
      }
      text-align:center ;


`
const EventContainer = styled.div` 
position: absolute;
top:200px ;
color:white ;
/* color:#fa7525 ; */
width:100%;
        h1{
          font-size:4rem ;
        }
        p{
          font-size:2em ;
        }
`
