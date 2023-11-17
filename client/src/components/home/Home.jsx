import { useEffect } from "react";
import { getProducts, getProductsfour,getProductsfive } from "../../redux/actions/productActions";
// import { getProductstwo } from "../../redux/actions/productActions";
// import { getProductsfour } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from 'react-redux';
// components
import Navbar from "./Navbar";
import Banner from "./Banner";
// import <Slide1></Slide1> from "./Slide.jsx";
// import Slide1 from "./Slide";
import Flyer from "./Flyer";
import BottomSlide from "./BottomSlide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { Box,styled } from "@mui/material";
import { Fragment } from "react";
const BigContainer=styled(Box)`
padding:10px 10px;
background:#F2F2f2;
`;

const Home=()=>{

    // we have to call getproducts() function when web page renders 
    // hence using the react hook useEffect
    // here getProducts function vall dispatch function further hence we have to use custom hook named dispatch
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);
    // useEffect(()=>{
    //     dispatch(getProductstwo());
    // },[dispatch]);
    useEffect(()=>{
        dispatch(getProductsfour());
    },[dispatch]);
    useEffect(()=>{
        dispatch(getProductsfive());
    },[dispatch]);
    
    // now our complete data is stored in redux database inside a state 
    // using useSelector state we can get the complete access of that state
    // this getProducts is not the getProducts() function
    // this getProducts is a object which contains our data of redux database
    // inserting the data of products from REDUX database
    const {products}= useSelector(state=>state.getProducts) 
    // const {productstwo}= useSelector(state=>state.getProductstwo)
    const {productsfour}= useSelector(state=>state.getProductsfour)
    // in above line we have taken al the products values out from getProducts object
    const {productsfive}= useSelector(state=>state.getProductsfive)

    return(
        // as thi retur function can return only one component hence we have to wrap omplete return in one component only hence we need to use {fragnent}
        <Fragment>
            <Navbar/>
            {/* to use carousel we need to install it externally */}
            <BigContainer>
                <Banner/>
                <Flyer products={productsfour} title="Discounts for you" timer={false}/>
                <Flyer products={productsfive} title="Suggested for you" timer={false}/>
                {/* passingthe data of products which we have dispatched using useSelector*/}
                <MidSlide products={products} title="Deal of the day" timer={true}/>
                {/* <BottomSlide productsfour={productsfour} title="Deal of the day" timer={true}/> */}
                {/* <BottomSlide productstwo={productstwo} title="Deal of the day" timer={true}/> */}
                <MidSection/>
                {/* <Flyer products={productsfive} title="Suggested for you" timer={false}/> */}
                <Flyer products={productsfour} title="Discounts for you" timer={false}/>
                <Flyer products={productsfive} title="Suggested for you" timer={false}/>
                <Flyer products={products} title="Top selections" timer={false}/>
                {/* <Flyer products={products} title="Picks of the season" timer={false}/> */}
                {/* <Flyer products={productsfour} title="Top deals" timer={false}/> */}
                {/* <Flyer products={products} title="Hot corner" timer={false}/> */}
                {/* as we have inserted the data {products} from REDUX database */}
                {/* if we have to add some more objects in getProducts class like {products1} {products2} {products3} from  */}
            </BigContainer>
        </Fragment>
    )
}
export default Home;