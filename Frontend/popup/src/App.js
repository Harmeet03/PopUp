import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Phones from './Category/Phones'
import Laptops from './Category/Laptops'
import Watches from './Category/Watches'
import Headphones from './Category/Headphones'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/product-category/phones' element= {<Phones/>}/>
        <Route path='/product-category/laptops' element= {<Laptops/>}/>
        <Route path='/product-category/watches' element= {<Watches/>}/>
        <Route path='/product-category/headphones' element= {<Headphones/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
