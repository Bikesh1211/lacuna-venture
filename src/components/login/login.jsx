import styled from 'styled-components';
import Logo from '../../assets/img/logo.jpeg'
import Slide from 'react-reveal/Slide';

function login() {
  return (
      <div className="container-fluid login-container-fluid">
          
    <Container className='container'>
        <div>
            <Slide up>

        <img src={Logo} alt="" />
            <form action="/">
            <i class="fa-solid fa-user"></i> <br />
                <label htmlFor="">Username or Email</label>
                <input type="email" placeholder='Youe Email or Username' />

                <label htmlFor="">Password</label>
                <input type="password" placeholder='Your Password' />

                <button type='submit'>LOG IN</button>

                <HavingTrouble>
                <p>Having trouble logging In?</p>
                <ResetPW>Click Here to reset your password</ResetPW>
                </HavingTrouble>
                    
            </form>
            </Slide>
        </div>
        <Slide up>

        <JoinContainer>
            <h1>Launch Your Idea</h1>
            <p>Get Started as an early stage entrepreneur? Join Our entrepreneurial Workshop Sessions Today.</p>
            <button>YES, SHOW ME HOW TO START<br /> </button>
        </JoinContainer>
        </Slide>
    </Container>
      </div>
  )
}

export default login
const JoinContainer = styled.div`
        h1{

            font-family: 'Lobster', cursive;
            font-size:4em ;
        }
        p{
            font-weight:bold ;
            font-size:22px ;
        }
        margin-top:10em;

        @media (max-width:1000px){
            h1{
                font-size:3em ;
            }
            p{
                font-size:1em ;
            }
        }

`
const HavingTrouble = styled.div`
margin-top:20px ;
`

const ResetPW = styled.p`
        cursor: pointer;
        color: black;
        font-weight:bold ;
        &:hover{
            color: #FA7525;
        }
`
const Container = styled.div`
background-color:#F7F7F7 ;
display:grid ;
grid-template-columns: repeat(auto-fit, minmax(350px,1fr));
text-align:center ;
font-family: Montserrat bold;
padding-top:30px ;
div{
    /* border:1px solid red ; */
}

        label{
            font-size:18px ;
        }
        img{
            /* width:400px ; */
            width:18em;
            height:60px;
            object-fit:cover ;
            margin-bottom:25px ;
        }
        button{
            background-color:#fa7525 ;
            border:none ;
            padding:10px 20px 10px 20px;
            margin:10px ;
            &:hover{
                background-color: #FE921E;

            }

        }

        input{
            width:90% ;
            height: 45px;
            box-sizing:border-box ;
            margin: 10px;
            padding-left:10px ;
            outline:none ;
            border:1px solid rgb(211, 211, 211) ;
            &:focus{
                border:1px solid orange;
            }


        }
            form{
                border:1px solid rgb(211, 211, 211) ;
                width:80% ;
                margin: auto;
                padding:20px ;
                border-radius:5px ;
                box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  

            }



`
