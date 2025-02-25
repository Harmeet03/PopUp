import Nav from "../../Nav";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";
import Loading from "../../Loading"

const FastrackWatches = () => {
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
                setProduct(data.watches.fastrack);
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
                        <h3> {item.name} </h3>
                        <img src={item.image} width={200} height={200} alt="Image not found"/><br/><br/>
                        <b> {item.price} </b>
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


export default FastrackWatches;