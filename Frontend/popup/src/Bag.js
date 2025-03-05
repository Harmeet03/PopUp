import Nav from './Nav'
import { useState, useEffect } from 'react';
import Loading from './Loading';
import './App.css'
import { Link, useNavigate } from 'react-router-dom';

const Bag = () => {
    
    const To = useNavigate();
    const [bag, setBag] = useState([]);
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);
    
    useEffect(() => {
        fetchBagList()
    }, []);
    
    const fetchBagList = async () => {

        try{
            const response = await fetch(`http://localhost:5000/bag-list`);
            if(response.ok){
                const bagList = await response.json();
                setBag(bagList)
                setLoading(false)
            }
            else{
                console.log('Failed to get blog detail from 4040 port.');
                setLoading(true)
            }
        }
        catch(e){
            console.log('Error while fetching bag list from server.', e);
            setLoading(true)
        }
    }

    if(loading){
        return(
            <>
                <Loading/>
            </>
        )
    }

    if(empty){
    return(
            <>
                <Nav/>
                <div style={{textAlign: 'center', padding: '25vh 0px'}}>
                    <h1 className='input'> Your bag is empty. </h1><br/>
                    <button onClick={() => {To('/home')}} style={{color: 'blue', backgroundColor: 'transparent',border: '1px solid blue', width: '350px'}}> Continue Shopping </button>
                </div>
            </>
        )
    }

    if(localStorage.getItem('Sign-in') !== 'True'){
        return(
            <>
                <Nav/>
                <div style={{textAlign: 'center', padding: '25vh 0px'}}>
                    <h1 className='input'> Kindly sign in to review bag. </h1><br/>
                    <button onClick={() => {To('/account/sign-in')}} style={{color: 'blue', backgroundColor: 'transparent',border: '1px solid blue', width: '350px'}}> Sign in </button>
                </div>
            </>
        )
    }

    if(bag.length === 0){
        setEmpty(true)
    }

    return(
        <>
            <Nav/>
            <div className='bag'>
                <h1 className='input'> Review your bag. </h1>
                <p id='input'> Free delivery. </p>
            {
                bag.map((item) => (
                    <Link className='list' key={item.id} style={{textDecoration: 'none'}} to={`/product/${item.category}/${item.company}/${item.url_name}`}>
                        <div className='left'>
                            <img src={item.image} width={200} height={200}/>
                        </div>
                        <div className='right'>
                            <h2> {item.name} </h2>
                            <h2> {item.price} </h2>
                        </div>
                    </Link>
                ))
            }
            </div>
        </>
    )
}

export default Bag