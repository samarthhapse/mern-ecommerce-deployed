
import { imageURL } from "../../constants/data";
import { Grid,styled } from "@mui/material";

const Wrapper = styled(Grid)`
margin-top:10px;
justify-content:space-between;
`

// we have checked but our image is not responsive for screens smaller than md
// hence using themes and breakpoints
// .down('md') it means for all the screens smaller than medium screen : apply thre property
const Image=styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}));

const MidSection=()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return(
        // GRID is rect component used for making the website responsive
        // in GRID there are two compnents 1.Parent(container) 2.Child(items)
        // screen will be divided into 12 parts
        // large,medium,small,extrasmall
        // BELOW IT IS THE PARENT GRID
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {/* we have to use curly braces to use external object in .jsx */}
                {
                    imageURL.map(image =>(
                    // below there are CHILD grids
                        <Grid item lg={4} sm={4} md={6} xs={12}>
                            <img src={image} alt="image" style={{width:'100%'}}/>
                        </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} alt="covid"/>
        </>
    )
}
export default MidSection;