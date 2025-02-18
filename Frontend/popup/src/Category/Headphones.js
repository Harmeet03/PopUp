import Nav from '../Nav'
import Footer from '../Footer'

const Headphones = () => {
    return(
        <>
            <Nav/>
            <div className='category'>
                <div className='apple'>
                    <h3> Apple </h3>
                </div>
                <div className='oneplus'>
                    <h3> OnePlus </h3>
                </div>
                <div className='boat'>
                    <h3> boAt </h3>
                </div>
                <div className='sony'>
                    <h3> Sony </h3>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Headphones;