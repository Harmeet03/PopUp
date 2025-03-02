import Nav from './Nav'

const Bag = () => {
    return(
        <>
            <Nav/>
            <div className='bag'>
                <h1> Review your bag. </h1>
                <p> Free delivery. </p>
                <div className='list'>
                    <div className='left'>
                        <img src={null}/>
                    </div>
                    <div className='right'>
                        <h2> {/* Product Name */} </h2>
                        <h2> {/* Product Price */} </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bag