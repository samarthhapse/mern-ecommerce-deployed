import { InputBase ,Box,styled, List, ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import {Link} from "react-router-dom";
const Searchcontainer=styled(Box)`
background: #fff;
width:44%;
border-radius:2px;
margin-left:10px;
display:flex;
`;
const Input=styled(InputBase)`
padding-left:20px;
width:100%;
`;
const Searchiconwrapper=styled(Box)`
color:blue;
margin-top:3px;
display:flex;
`;
// if we cannot see text ven after entering text (it may be problem of CSS)
const ListWrapper=styled(List)`
    position:absolute;
    background:#FFFFFF;
    color:#000;
    margin-top:58px;
`

const Search=()=>{
    
    //BEST EXAMPLE TO UNDERSTAND THE REACT HOOKS 

    // initially text is empty
    // making useState to change the text when it is entered
    const [text,setText]=useState('');
    // useEffect helps for API call to our REDUX DATABASE
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    // using the useSelector to take the data of products out from REDUX database
    // useSelector helps in extracting the data from th object {getProducts} => a function inside REDUX DATABASE ,and  storing the data in {products} object
    const {products} = useSelector(state=>state.getProducts)

    const getText=(text)=>{
        setText(text)
    }
    return(
        <Searchcontainer>
            <Input
            placeholder="Search for products,brands and more"
            // to extract the value entered by user
            onChange={(e)=>getText(e.target.value)}
            value={text}
            />
            <Searchiconwrapper>
                <SearchIcon/>
            </Searchiconwrapper>
            {/* show some text to user if he starts entering the value in searchbox */}
            {
                text &&
                    <ListWrapper>
                        {
                            // items will be show as single-single letter matches
                            products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                <ListItem>
                                    <Link
                                    // providing link of product on click
                                    to={`/product/${product.id}`}
                                    // after clicking it must close also
                                    onClick={()=>setText('')}
                                    // style={{textDecoration:'none',color:'inherit'}}
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </Searchcontainer>
      
    )
}
export default Search;