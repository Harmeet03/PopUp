import Nav from "../../Nav";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading"
import { Link, useParams } from "react-router-dom";
import '../../App.css'

const DellDetail = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url_name } = useParams();

    useEffect(() => {
        fetchDetail()
    }, [])

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const fetchDetail = async () => {
        try{
            const response =  await fetch("/Products.json")
            
            if(response.ok){
                console.log('Fetch Success');
                const data = await response.json();
                const content = data.laptops.dell.find(item => item.url_name === url_name)
                
                if(content){
                    setDetail(content);
                    setLoading(false)
                }
            }
            else{
                console.log('Fetch Failed')
                setLoading(true)
            }
        }
        catch(error){
            console.log('Error ', error)
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

    if(!detail){
        return(
            <>
                <h1> Product Not Found </h1>
            </>
        )
    }

    const addToBag = async (e) => {
        
        const again = document.querySelector('.again')
        const added = document.querySelector('.added')
        e.preventDefault()
        
        try{
            // const resp = await fetch('http://localhost:5000/bag-list', {
            const resp = await fetch('https://popup-9ksu.onrender.com/bag-list', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: detail.name, 
                    price: detail.price, 
                    image: detail.image, 
                    category: detail.category,
                    company: detail.company,
                    url_name: detail.url_name
                })
            })
            
            
            if(resp.ok){
                console.log('Added to Bag');
                added.style.display = 'block'
                again.style.display = 'none'
                
            }
            
            else{
                console.log('Failed to Add');
                again.style.display = 'none'
                again.style.display = 'block'
            }
        }
        catch(e){
            console.error('Internal Server Error: ', e);
            again.style.display = 'none'
            again.style.display = 'block'
        }
    }

    const handlePayment = async () => {
        const price = parseInt(detail.price.replace(/[^0-9]/g, ""), 10);
        const again = document.querySelector('.again')
        try{
            // const response = await fetch(`http://localhost:5000/payment/create-order`, {
            const response = await fetch(`https://popup-9ksu.onrender.com/payment/create-order`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: price * 100,
                    currency: 'INR',
                    product_name: detail.name,
                    product_category: detail.category
                })
            });

            const order = await response.json()
            if(response.ok){
                console.log("User placed an order")
                again.style.display = 'none'
            }
            else{
                console.log("User unable to place an order")
                again.style.display = 'block'
            }
    
            const options = {
                key: 'rzp_test_I5XfC1n7N89Jkk',
                amount: order.order.amount,
                currency: order.order.currency,
                name: 'PopUp',
                notes: {
                    product_name: order.order.product_name,
                    product_category: order.order.product_category
                },
                order_id: order.order.id,
                handler: async (response) => {
                    // const verify = await fetch(`http://localhost:5000/payment/verify-payment`, {
                    const verify = await fetch(`https://popup-9ksu.onrender.com/payment/verify-payment`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        })
                    });
    
                    const verifyData = await verify.json();
                    
                    if(verifyData.success){
                        try{
                            // const response = await fetch('http://localhost:5000/orders', {
                            const response = await fetch('https://popup-9ksu.onrender.com/orders', {
                                method: 'POST',
                                mode: 'cors',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json'
                                },
                                body: JSON.stringify({ order_id: order.order.id, product_name: order.order.notes.product_name,  amount: order.order.amount / 100, product_category: order.order.notes.product_category })
                            });
                
                            if(response.ok){
                                console.log('Order details sent to database')
                            }
                            else{
                                console.log('Order details failed to send to database')
                            }
                        }
                        catch(e){
                            console.log(`Server error during payment: ${e}`)
                        }
                        console.log('User paid for an order')
                        alert('Payment successful!');
                    }
                    else{
                        console.log("User didn't paid for an order")
                        alert('Payment verification failed!');
                        again.style.display = 'block'
                    }
                },
                theme: {
                    color: 'black'
                }
            };
    
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        }
        catch(e){
            console.error("Error:", e);
        }
    }

    return(
        <>
            <Nav/>
            <div className="content">
                <div className="left">
                    <h1 name='product_name'> Buy {detail.name} </h1>
                    <p name='price'> From {detail.price} </p>
                    <br/><br/>
                    <img name='image' src={detail.image} width={600} alt="Image not found"/><br/><br/>
                    <p  name='url_name' style={{display: 'none'}}> {detail.url_name} </p>
                </div>
                <div className="right">
                    <p> {detail.description} </p>
                    <br/>
                    <h3> Processor: <i style={{fontWeight: 'lighter'}}>{detail.processor}</i> </h3>
                    <h3> RAM: <i style={{fontWeight: 'lighter'}}>{detail.RAM}</i> </h3>
                    <h3> Display: <i style={{fontWeight: 'lighter'}}>{detail.display}</i> </h3>
                    <h3> Storage: <i style={{fontWeight: 'lighter'}}>{detail.storage}</i> </h3>
                    {
                        detail.GPU ? (
                            <h3> GPU: <i style={{fontWeight: 'lighter'}}>{detail.GPU}</i> </h3>
                        ) : (null)
                    }
                    <br/>
                    <br/>
                    <button onClick={() => {
                        if(localStorage.getItem('Sign-in') === 'True'){
                            handlePayment();
                        }
                        else{
                            alert('Kindly sign in.');
                        }
                    }}> Buy Now </button>
                    <br/>
                    <br/>
                    <button onClick={(e) => {
                        if(localStorage.getItem('Sign-in') === 'True'){
                            addToBag(e);
                        }
                        else{
                            alert('Kindly sign in.');
                        }
                    }}> Add to Bag </button>
                    <p className="added" style={{color: 'green', padding: '0px 225px', display: 'none'}}> Added. </p>
                    <p className="again" style={{color: 'red', padding: '0px 210px', display: 'none'}}> Try again. </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DellDetail