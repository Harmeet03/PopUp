import Nav from "../../Nav";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading"
import { useParams } from "react-router-dom";
import '../../App.css'

const AppleHeadphonesDetail = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const { url_name } = useParams();

    useEffect(() => {
        fetchDetail()
    }, [])

    
    const fetchDetail = async () => {
        try{
            const response =  await fetch("/Products.json")
            
            if(response.ok){
                console.log('Fetch Success');
                const data = await response.json();
                const content = data.headphones.apple.find(item => item.url_name === url_name)
                
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
            const resp = await fetch('http://localhost:5000/bag-list', {
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

    return(
        <>
            <Nav/>
            <div className="content">
                <div className="left">
                    <h1 name='product_name'> Buy {detail.name} </h1>
                    <p name='price'> From {detail.price} </p>
                    <br/><br/>
                    <img name='image' style={{borderRadius: '80px'}} src={detail.image} width={600} alt="Image not found"/><br/><br/>
                    <p  name='url_name' style={{display: 'none'}}> {detail.url_name} </p>
                </div>
                <div className="right">
                    <p> {detail.description} </p>
                    <br/>
                    <h3> Features: <i style={{fontWeight: 'lighter'}}>{detail.features}</i> </h3>
                    <h3> Type: <i style={{fontWeight: 'lighter'}}>{detail.type}</i> </h3>
                    <h3> Battery: <i style={{fontWeight: 'lighter'}}>{detail.battery}</i> </h3>
                    {
                        detail.chip ? (
                            <h3> Chip: <i style={{fontWeight: 'lighter'}}>{detail.chip}</i> </h3>
                        ) : (null)
                    }
                    {
                        detail.codec ? (
                            <h3> Codec: <i style={{fontWeight: 'lighter'}}>{detail.codec}</i> </h3>
                        ) : (null)
                    }
                    {
                        detail.connectivity ? (
                            <h3> Connectivity: <i style={{fontWeight: 'lighter'}}>{detail.connectivity}</i> </h3>
                        ) : (null)
                    }
                    <br/>
                    <br/>
                    <button> Buy Now </button>
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

export default AppleHeadphonesDetail
