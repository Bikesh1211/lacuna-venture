import { Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
function Events2() {
  return (
    <ContainerUI>
        <form action="/">
            <input type="text" placeholder='Keyword'/>
            <input type="address" placeholder='Location'/>

                {/* date range */}
            <input type="text" /> 

            <select id="eventtype" name="eventtype">
            <option value="category" disabled selected>Choose An Event Type</option>
            <option value="conference">Conference</option>
            <option value="festival-fair">Festival or Fair</option>
            <option value="Games-competition">Games of Competition</option>
            <option value="Workshop">Workshop</option>
            <option value="other">Other</option>
            </select>
            <button type='submit'>
                <SearchIcon/>Search</button>
            
        </form>
    </ContainerUI>
  )
}

export default Events2

const ContainerUI = styled(Container)`
margin-top: 70px;
color:orange ;
    input,select{
        height:50px ;
        width:250px;
        /* border-radius:10px ; */
        outline:none ;
        border:none ;
        /* border:1px solid gray ; */
        border-right:1px solid gray ;
    }
    select{
        cursor: pointer; ;

    }
    input:focus{

    }
    button{
        background-color:#fa7525 ;
        border:none ;
        margin-left:5px ;
        padding:12px ;
        color:white ;

    }
`