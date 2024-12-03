// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faReact, faHtml5, faJava } from "@fortawesome/free-brands-svg-icons";
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
   <>
        {/* <h1 className='font-bold text-2xl text-blue-600 uppercase'>hello dear react-developer</h1>
        <FontAwesomeIcon size='2xl' icon={faReact} style={{ margin: "0 10px", color: "#4267B2" }} />
        <FontAwesomeIcon size='2xl' icon={faHtml5} style={{ margin: "0 10px", color: "#1DA1F2" }} />
        <FontAwesomeIcon size='2xl' icon={faJava} style={{ margin: "0 10px", color: "#C13584" }} /> */}
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>}></Route>
       <Route path='/products/productDetails/:id' element={<ProductDetails/>}/>
    </Routes>

   </>
  )
}

export default App
