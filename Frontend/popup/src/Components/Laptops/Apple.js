import Nav from "../../Nav";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading"
import { Link } from "react-router-dom";

const AppleLaptops = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchProduct()
    }, [])
    
    const fetchProduct = async () => {
        try{
            const response =  await fetch("/Products.json")
            const data = await response.json();
            if(response.ok){
                console.log('Fetch Success');
                setProduct(data.laptops.apple);
                setLoading(false)
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

    return(
        <>
        <Nav/>
        <div className="category">
            {product ? (
                product.map((item) => (
                    <div className="items" key={item.id}>
                        <Link style={{color: 'black', textDecoration: 'none'}} to={`/product/laptop/apple/${item.url_name}`}>
                            <h3> {item.name} </h3>
                            <img src={item.image} width={200} alt="Image not found"/><br/><br/>
                            <b> {item.price} </b>
                        </Link>
                    </div>
                ))
            ) : (
                <p> Loading... </p>
            )
        }
        </div>
        <Footer/>
        </>
    )
}


export default AppleLaptops;