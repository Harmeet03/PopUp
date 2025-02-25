import Nav from '../Nav'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const Laptops = () => {
    const To = useNavigate()
    return(
        <>
            <Nav/>
            <div className='category'>
            <div className='apple' onClick={() => {To('/product-category/laptops/apple')}} style={{backgroundImage: `url(https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png)`, backgroundSize: '350px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top 25px', color: 'black'}}>
                    <h1> Apple </h1>
                </div>
                <div className='asus' onClick={() => {To('/product-category/laptops/asus')}} style={{backgroundImage: `url(https://press.asus.com/assets/w_854,h_640/e2c84986-7e34-40e3-8fa2-4053d3f17187/ASUS%20logo%20grey.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'black'}}>
                </div>
                <div className='dell' onClick={() => {To('/product-category/laptops/dell')}} style={{backgroundImage: `url(https://www.pngall.com/wp-content/uploads/13/Dell-Logo-PNG-Photos.png)`, backgroundSize: '150px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'black'}}>
                </div>
                <div className='hp' onClick={() => {To('/product-category/laptops/hp')}} style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/b/b7/HP_Logo_2017.svg)`, backgroundSize: '100px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'black'}}>
                    <h1 style={{color: 'white'}}> . </h1>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Laptops;