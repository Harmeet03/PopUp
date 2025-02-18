import Nav from '../Nav'
import Footer from '../Footer'

const Laptops = () => {
    return(
        <>
            <Nav/>
            <div className='category'>
                <div className='apple'>
                    <h3> Apple </h3>
                </div>
                <div className='asus'>
                    <h3> Asus </h3>
                </div>
                <div className='dell'>
                    <h3> Dell </h3>
                </div>
                <div className='hp'>
                    <h3> HP </h3>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Laptops;