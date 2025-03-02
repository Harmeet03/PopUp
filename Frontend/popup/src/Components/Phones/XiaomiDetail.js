import Nav from "../../Nav";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading"
import { Link, useParams } from "react-router-dom";
import '../../App.css'

const XiaomiDetail = () => {
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
                const content = data.phones.xiaomi.find(item => item.url_name === url_name)
                
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

    return(
        <>
            <Nav/>
            <div className="content">
                <div className="left">
                    <h1 name='name'> Buy {detail.name} </h1>
                    <p name='price'> From {detail.price} </p>
                    <br/><br/>
                    <img name='image' src={detail.image} width={400} alt="Image not found"/><br/><br/>
                    <p  name='url_name' style={{display: 'none'}}> {detail.url_name} </p>
                </div>
                <div className="right">
                    <p> {detail.description} </p>
                    <br/>
                    <h3> Processor: <i style={{fontWeight: 'lighter'}}>{detail.processor}</i> </h3>
                    <h3> Battery: <i style={{fontWeight: 'lighter'}}>{detail.battery}</i> </h3>
                    <h3> Display: <i style={{fontWeight: 'lighter'}}>{detail.display}</i> </h3>
                    <h3> Camera: <i style={{fontWeight: 'lighter'}}>{detail.camera}</i> </h3>
                    <br/>
                    <br/>
                    <button> Buy Now </button>
                    <br/>
                    <br/>
                    <button> Add to Bag </button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default XiaomiDetail