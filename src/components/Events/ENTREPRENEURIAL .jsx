import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';    
import LocationOnIcon from '@mui/icons-material/LocationOn';
function ENTREPRENEURIAL () {
  return (
    <Container>
        <div className="events-container">
            <div className='events-list'>
                <img src="https://lacunaventure.com/wp-content/uploads/2021/06/Our-interactive-workshop-scaled.jpg" alt="" />
                <h1>Creations and Commercialization</h1>
                <p> <AccessTimeIcon/> 2022-01-15 @ 12:00 AM - 2022-02-15 @ 11:00 PM</p>
                <p> <LocationOnIcon/> Kapurdhara Marg, Kathmandu</p>
                <p>Workshop</p>
            </div>
            <div className='events-list'>
                <img src="https://lacunaventure.com/wp-content/uploads/2021/06/what-about-entreprenurs.jpg" alt="" />
                <h1>Entrepreneurial Skills Development</h1>
                <p> <AccessTimeIcon/> 2022-01-02 @ 11:00 AM - 2022-02-26 @ 01:00 PM</p>
                <p> <LocationOnIcon/> Kapurdhara Marg, Kathmandu</p>
                <p>Workshop</p>
            </div>
            <div className='events-list'>
                <img src="https://lacunaventure.com/wp-content/uploads/2021/06/Our-interactive-workshop-scaled.jpg" alt="" />
                <h1>STARTUP WORKSHOP</h1>
                <p> <AccessTimeIcon/> 2022-01-02 @ 10:30 AM - 2022-01-31 @ 04:30 PM</p>
                <p> <LocationOnIcon/> Kapurdhara Marg, Kathmandu</p>
                <p>Workshop</p>
            </div>

        </div>

    </Container>
  )
}

export default ENTREPRENEURIAL 
const Container = styled.div` 
text-align:left ;
        .events-container{
            display:grid ;
            grid-gap:20px ;
            grid-template-columns:repeat(auto-fit,minmax(350px, 1fr)) ;
            justify-content:center;
        }
        .events-list{
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            margin-top:50px ;
            padding:10px ;

        }
        h1{
            font-size:1.7em ;
            font-family: Arial, Helvetica, sans-serif ;
            font-weight:bold ;
        }
        
        img{
            height:250px ;
            width:100% ;
            object-fit:cover ;
        }

        .events-container{
            /* margin:auto ; */
            padding:0 40px 0 40px ;
        }
`




