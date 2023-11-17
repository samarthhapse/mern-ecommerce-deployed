import { Box,Typography,Menu,MenuItem,styled } from "@mui/material"
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component= styled(Menu)`
margin-top:5px;
margin-right:30px;
`


const Profilo = ({account,setAccount}) => {
    // initially making state false bcs, we do not want to diaplay profile initially
    const [open,setOpen] = useState(false);
    // on click on name we have to open the profile
    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const logoutUser =()=>{
        // when user will click on logout the we will make value of account as NULL 
        // and if {account} will not return any value then user will see Login button automatically
        setAccount('');
    }
    return(
        <>
            <Box onClick={handleClick}>
            <Typography style={{marginTop:2,marginRight:60}}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                {/* we have to call two functions on clicking f logout button
                   1. close the dialog box
                   2. logout the user */}
                <MenuItem onClick={ ()=> {handleClose();logoutUser();}}>
                    <PowerSettingsNewIcon/>
                    <Typography>Logout</Typography>
                </MenuItem>
            </Component>
            
        </>
    )
}
export default Profilo;