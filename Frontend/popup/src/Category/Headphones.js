import Nav from '../Nav'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const Headphones = () => {
    const To = useNavigate();
    return(
        <>
            <Nav/>
            <div className='category'>
                <div className='apple' onClick={() => {To('/product-category/headphones/apple')}} style={{backgroundImage: `url(https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png)`, backgroundSize: '350px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top 25px', color: 'black'}}>
                    <h1> Apple </h1>
                </div>
                <div className='oneplus' onClick={() => {To('/product-category/headphones/oneplus')}} style={{backgroundImage: `url(https://www.logo.wine/a/logo/OnePlus/OnePlus-Logo.wine.svg)`, backgroundSize: '350px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'black'}}>
                </div>
                <div className='boat' onClick={() => {To('/product-category/headphones/boat')}} style={{backgroundImage: `url(https://res.cloudinary.com/zenbusiness/q_auto/v1/logaster/logaster-2020-08-t-boat-logo-6.png)`, backgroundSize: '150px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'black'}}>
                    <h1> . </h1>
                </div>
                <div className='sony' onClick={() => {To('/product-category/headphones/sony')}} style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg)`, backgroundSize: '200px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'black'}}>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Headphones;