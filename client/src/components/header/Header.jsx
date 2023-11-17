// creating useState for MenuButton
import { useState } from 'react';
// IMPORTING COMPONENT FILES WHICH WE HAVE CREATED
import Search from './search';
import CustomButtons from './CustomButons';
import {Menu} from '@mui/icons-material';
// intalling and using materia UI => a framework of react which provides components of website
// WE NEED TO IMPORT COMPONENTS FROM MATERIAL UI
// in these type of syntax of importing component from MUI we can change names as we want
import AppBa from '@mui/material/AppBar';
import { Box, Typography, buttonBaseClasses,button,IconButton,styled,Drawer,List,ListItem } from '@mui/material';
// but in these type of syntaxes we can not change names as we want 
// import { AppBar } from '@mui/material';
import ToolBa from '@mui/material/Toolbar';
// after importing the component from MUI to change it's css follow below steps
// import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// to change the css of the appbar
// always we have to use styled components on the Material UI tags , which we have imported
const StyledHeader=styled(AppBa)`
background:#2874f0;
height:55px;
`
// to change the css of box
const Component=styled(Link)`
margin-left:70px;
line-height:0;
text-dexcoration:none;
color:inherit;
`
const SubHeading=styled(Typography)`
font-size:10px;
font-style:italic;
`

// to import a html element we have to insert it in '' format and css is written inside the object
const PlusImage=styled('img')({
    width:10,
    height:10,
    marginLeft:4
})
const CustomButtonWrapper=styled(Box)(({theme})=>({
    margin:'0 3% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))
// display menu button only for the screens of size less than mediun
const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))



const Header=()=>{
    const logoURL="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    // initially the drawer is closed
    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    // as below function is returning a function that returns <Box> to us hence => ()
    const list = () => (
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )


    return(
        <StyledHeader>
            <ToolBa style={{minHeight:57}}>
                {/* Box is replacemtnt of <div> used in MUI */}
                {/* Typograogy i replacement for <p> in Material UI */}
                {/* when we change css of any component we have to use the variable name  as a tag */}
                <MenuButton color='inherit' onClick={handleOpen}>
                     <Menu />
                </MenuButton>
                {/* passing props in drawer */}
                {/* initially passing {open}) on open */}
                {/* {open} is a use state created, which keeps the drawer closed initially */}
                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                    <Component to={`/`}>
                        <img src={logoURL} alt="logo" style={{width:"75px"}}/>
                        <Box style={{display:'flex'}}>
                            <SubHeading>Explore&nbsp; 
                            <Box component="span" style={{color:'yellow'}}>plus</Box>
                            </SubHeading>
                            <PlusImage src={subURL} alt="logo"/>
                        </Box>
                    </Component>  
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </ToolBa>
        </StyledHeader>
    )
}
export default Header;