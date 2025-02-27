import Nav from "../../Nav";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading"
import { useParams } from "react-router-dom";
import '../../App.css'

const SonyHeadphonesDetail = () => {
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
                const content = data.headphones.sony.find(item => item.url_name === url_name)
                
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
                    <h1> Buy {detail.name} </h1>
                    <p> From {detail.price} </p>
                    <br/><br/>
                    <img src={detail.image} width={600} alt="Image not found"/><br/><br/>
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
                            <h3> Chip: <i style={{fontWeight: 'lighter'}}>{detail.codec}</i> </h3>
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
                    <button> Add to Bag </button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SonyHeadphonesDetail