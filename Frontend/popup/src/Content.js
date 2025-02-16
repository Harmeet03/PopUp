import React, { useEffect, useState } from "react";

const Content = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        try{
            const response =  await fetch("/Products.json")
            const data = await response.json()  ;
            setProduct(data[0]);
            if(response.ok){
                console.log('Fetch Success');
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
            {
                product ? (
                    <div>
                        <img src={product.shirt[0].image} width={250}/>
                        <p> Product: {product.shirt[0].name} </p>
                        <p> Price: {product.shirt[0].price} </p>
                    </div>
                ) : (
                    <p> Loading </p>
                )
            }
        </>
    )
}

export default Content