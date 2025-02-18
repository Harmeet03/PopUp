import Nav from '../Nav'
import Footer from '../Footer'

const Phones = () => {
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
                <div className='realme'>
                   <h3> Realme </h3>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Phones;