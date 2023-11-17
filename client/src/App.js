// import logo from './logo.svg';
// import './App.css';
// components
import Header from "./components/header/Header"
import Home from './components/home/Home'
import Cart from "./components/cart/Cart";
import{Box} from '@mui/material'
import DetailView from './components/details/DetailView'
import DataProvider from "./context/DataProvider";
import BuyNow from "./components/buy/buyNow";
// import EmptyCart from "./components/buy/buyNow";
// to use the routing in react app 
// wrap the complete app inside the {Browserrouter}
// the components that are needed to be routed are wrapped in Routes
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { RouterRounded } from "@mui/icons-material";
function App() {
  return (
    <DataProvider className='App'>
      <BrowserRouter>
          {/* IMPORIMG HEADER */}
          <Header/>  
          {/* IMPORTING HOME (home was being hided behind header hence to change it's CSS inserted it in Box and then hnged it's CSS)*/}
          <Box style={{marginTop:55}}>
            {/* the components that are needed to be routed are wrapped in Routes */}
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<DetailView/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/buyNow' element={<BuyNow/>}/>
            </Routes>
          </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
