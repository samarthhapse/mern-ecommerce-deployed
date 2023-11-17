import { Box,Typography,styled } from "@mui/material"
import { navData } from "../../constants/data"

const Component=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0px 130px',
justifyContent:'space-between',
[theme.breakpoints.down('lg')]:{
    margin:0,
  }
}));

const Container=styled(Box)`
padding:17px 8px;
text-align:center
`
const Text=styled(Typography)`
font-size:14px;
font-weight:900;
font-family:inherit
`

const Navbar=()=>{
    return(
        <Component>
        {/* in react js is always written inside curly braces {} */}
        {   // importing each object from data.js using loop
            navData.map(data=>(
                <Container>
                    <img src={data.url} alt="nav" style={{width:64}}/>
                    <Typography>{data.text}</Typography>
                </Container>
            ))
           
        }
        </Component>
    )
}
export default Navbar