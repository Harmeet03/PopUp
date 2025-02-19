import Nav from '../Nav'
import Footer from '../Footer'

const Watches = () => {
    return(
        <>
            <Nav/>
            <div className='category'>
                <div className='apple' style={{backgroundImage: `url(https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png)`, backgroundSize: '350px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top 25px', color: 'black'}}>
                    <h1> Apple </h1>
                </div>
                <div className='samsung' style={{backgroundImage: `url(https://logodownload.org/wp-content/uploads/2014/01/samsung-logo-0.png)`, backgroundSize: '200px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'white'}}>
                </div>
                <div className='xiaomi' style={{backgroundImage: `url(https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png)`, backgroundSize: '250px auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: 'white'}}>
                    <h1> _ </h1>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Watches;