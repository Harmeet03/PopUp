import Nav from '../Nav'
import Footer from '../Footer'

const Watches = () => {
    return(
        <>
            <Nav/>
            <div className='category'>
                <div className='apple'>
                    <h3> Apple </h3>
                </div>
                <div className='samsung'>
                    <h3> Samsung </h3>
                </div>
                <div className='xiaomi'>
                    <h3> Xiamo </h3>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Watches;