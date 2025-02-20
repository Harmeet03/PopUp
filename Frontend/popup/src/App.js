import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Product Categories
import Home from './Home'
import Phones from './Category/Phones'
import Laptops from './Category/Laptops'
import Watches from './Category/Watches'
import Headphones from './Category/Headphones'

// Phones Lists
import ApplePhones from './Components/Phones/Apple'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/product-category/phones' element= {<Phones/>}/>
        <Route path='/product-category/laptops' element= {<Laptops/>}/>
        <Route path='/product-category/watches' element= {<Watches/>}/>
        <Route path='/product-category/headphones' element= {<Headphones/>}/>
        <Route path='/product-category/phones/apple' element= {<ApplePhones/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
