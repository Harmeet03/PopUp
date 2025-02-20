import Nav from "../../Nav";
import Footer from "../../Footer";
import React, { useEffect, useState } from "react";

const ApplePhones = () => {
    const [product, setProduct] = useState([]);
    
    useEffect(() => {
        fetchProduct()
    }, [])
    
    const fetchProduct = async () => {
        try{
            const response =  await fetch("/Products.json")
            const data = await response.json();
            if(response.ok){
                console.log('Fetch Success');
                setProduct(data.phones.apple);
            }
            else{
                console.log('Fetch Failed')
            }
        }
        catch(error){
            console.log('Error ', error)
        }
    }
    
    return(
        <>
        <Nav/>
            <div className="category">
                {product ? (
                    product.map((item) => (
                        <div className="items" key={item.id}>
                            <h3> {item.name} </h3>
                            <img src={item.image} width={200} alt="Image not found"/><br/><br/>
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

export default ApplePhones
