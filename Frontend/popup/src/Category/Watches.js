import Nav from '../Nav'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const Watches = () => {
    const To = useNavigate();
    return(
        <>
            <Nav/>
            <div className='category'>
                <div className='apple' onClick={() => {To('/product-category/watches/apple')}} style={{backgroundImage: `url(https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png)`, backgroundSize: '350px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top 25px', color: 'black'}}>
                    <h1> Apple </h1>
                </div>
                <div className='samsung' onClick={() => {To('/product-category/watches/samsung')}} style={{backgroundImage: `url(https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-0.png)`, backgroundSize: '200px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'white'}}>
                </div>
                <div className='xiaomi' onClick={() => {To('/product-category/watches/xiaomi')}} style={{backgroundImage: `url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)`, backgroundSize: '250px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'white'}}>
                    <h1> _ </h1>
                </div>
                <div className='fastrack' onClick={() => {To('/product-category/watches/fastrack')}} style={{backgroundImage: `url(https://www.fastrack.in/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwe800d23b/images/FASTRACK-Logo-Black.png)`, backgroundSize: '250px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'white'}}>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Watches;