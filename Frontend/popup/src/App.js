import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Product Categories
import Home from './Home'
import Phones from './Category/Phones'
import Laptops from './Category/Laptops'
import Watches from './Category/Watches'
import Headphones from './Category/Headphones'

// Phones Lists
import ApplePhones from './Components/Phones/Apple'
import SamsungPhones from './Components/Phones/Samsung'
import XiaomiPhones from './Components/Phones/Xiaomi'
import RealmePhones from './Components/Phones/Realme'

// Phones Details
import IphoneDetail from './Components/Phones/AppleDetail'
import SamsungDetail from './Components/Phones/SamsungDetail'
import XiaomiDetail from './Components/Phones/XiaomiDetail'
import RealmeDetail from './Components/Phones/RealmeDetail'

// Laptops Lists
import AppleLaptops from './Components/Laptops/Apple'
import AsusLaptops from './Components/Laptops/Asus'
import DellLaptops from './Components/Laptops/Dell'
import HpLaptops from './Components/Laptops/Hp'

// Laptops Details
import MacDetail from './Components/Laptops/AppleDetail'
import AsusDetail from './Components/Laptops/AsusDetail'
import DellDetail from './Components/Laptops/DellDetail'
import HpDetail from './Components/Laptops/HpDetail'


// Watches Lists
import AppleWatches from './Components/Watches/Apple'
import SamsungWatches from './Components/Watches/Samsung'
import XiaomiWatches from './Components/Watches/Xiaomi'
import FastrackPhones from './Components/Watches/Fastrack'

// Watches Details
import AppleWatchDetail from './Components/Watches/AppleDetail'
import SamsungWatchDetail from './Components/Watches/SamsungDetail'
import XiaomiWatchDetail from './Components/Watches/XiaomiDetail'
import FastrackWatchDetail from './Components/Watches/FastrackDetail'

// Headphones Lists
import AppleHeadphones from './Components/Headphones/Apple'
import OnePlusHeadphones from './Components/Headphones/OnePlus'
import BoatHeadphones from './Components/Headphones/Boat'
import SonyHeadphones from './Components/Headphones/Sony'

// Headphones Details
import AppleHeadphonesDetail from './Components/Headphones/AppleDetail'
import OnePlusHeadphonesDetail from './Components/Headphones/OnePlusDetail'
import BoatHeadphonesDetail from './Components/Headphones/BoatDetail'
import SonyHeadphonesDetail from './Components/Headphones/SonyDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace/>}/>
        <Route path='/home' element= {<Home/>}/>
        
        {/* Product Categories */}
        <Route path='/product-category/phones' element= {<Phones/>}/>
        <Route path='/product-category/laptops' element= {<Laptops/>}/>
        <Route path='/product-category/watches' element= {<Watches/>}/>
        <Route path='/product-category/headphones' element= {<Headphones/>}/>

        {/* Phones Lists */}
        <Route path='/product-category/phones/apple' element= {<ApplePhones/>}/>
        <Route path='/product-category/phones/samsung' element= {<SamsungPhones/>}/>
        <Route path='/product-category/phones/xiaomi' element= {<XiaomiPhones/>}/>
        <Route path='/product-category/phones/realme' element= {<RealmePhones/>}/>
        
        {/* Phones Details */}
        <Route path='/product/phone/apple/:url_name' element={<IphoneDetail/>}/>
        <Route path='/product/phone/samsung/:url_name' element={<SamsungDetail/>}/>
        <Route path='/product/phone/xiaomi/:url_name' element={<XiaomiDetail/>}/>
        <Route path='/product/phone/realme/:url_name' element={<RealmeDetail/>}/>

        {/* Laptops Lists */}
        <Route path='/product-category/laptops/apple' element= {<AppleLaptops/>}/>
        <Route path='/product-category/laptops/asus' element= {<AsusLaptops/>}/>
        <Route path='/product-category/laptops/dell' element= {<DellLaptops/>}/>
        <Route path='/product-category/laptops/hp' element= {<HpLaptops/>}/>

        {/* Laptops Details */}
        <Route path='/product/laptop/apple/:url_name' element={<MacDetail/>}/>
        <Route path='/product/laptop/asus/:url_name' element={<AsusDetail/>}/>
        <Route path='/product/laptop/dell/:url_name' element={<DellDetail/>}/>
        <Route path='/product/laptop/hp/:url_name' element={<HpDetail/>}/>

        {/* Watches Lists */}
        <Route path='/product-category/watches/apple' element= {<AppleWatches/>}/>
        <Route path='/product-category/watches/samsung' element= {<SamsungWatches/>}/>
        <Route path='/product-category/watches/xiaomi' element= {<XiaomiWatches/>}/>
        <Route path='/product-category/watches/fastrack' element= {<FastrackPhones/>}/>

        {/* Watches Details */}
        <Route path='/product/watch/apple/:url_name' element={<AppleWatchDetail/>}/>
        <Route path='/product/watch/samsung/:url_name' element={<SamsungWatchDetail/>}/>
        <Route path='/product/watch/xiaomi/:url_name' element={<XiaomiWatchDetail/>}/>
        <Route path='/product/watch/fastrack/:url_name' element={<FastrackWatchDetail/>}/>

        {/* Headphones Lists */}
        <Route path='/product-category/headphones/apple' element= {<AppleHeadphones/>}/>
        <Route path='/product-category/headphones/oneplus' element= {<OnePlusHeadphones/>}/>
        <Route path='/product-category/headphones/boat' element= {<BoatHeadphones/>}/>
        <Route path='/product-category/headphones/sony' element= {<SonyHeadphones/>}/>

        {/* Headphones Details */}
        <Route path='/product/headphone/apple/:url_name' element={<AppleHeadphonesDetail/>}/>
        <Route path='/product/headphone/oneplus/:url_name' element={<OnePlusHeadphonesDetail/>}/>
        <Route path='/product/headphone/boat/:url_name' element={<BoatHeadphonesDetail/>}/>
        <Route path='/product/headphone/sony/:url_name' element={<SonyHeadphonesDetail/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
