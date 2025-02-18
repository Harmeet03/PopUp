import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
    const To = useNavigate();
    // const [product, setProduct] = useState(null);

    // useEffect(() => {
    //     fetchProduct()
    // }, [])

    // const fetchProduct = async () => {
    //     try{
    //         const response =  await fetch("/Products.json")
    //         const data = await response.json()  ;
    //         setProduct(data);
    //         if(response.ok){
    //             console.log('Fetch Success');
    //         }
    //         else{
    //             console.log('Fetch Failed')
    //         }
    //     }
    //     catch(error){
    //         console.log('Error ', error)
    //     }
    // }

    return(
        <>
            <div className="category">
                <div className="phones" onClick={() => {To('/product-category/phones')}}>
                    <h3> Phones </h3>
                </div>
                <div className="laptops" onClick={() => {To('/product-category/laptops')}}>
                    <h3> Laptops </h3>
                </div>
                <div className="watches"  onClick={() => {To('/product-category/watches')}}>
                    <h3> Watches </h3>
                </div>
                <div className="headphones"  onClick={() => {To('/product-category/headphones')}}>
                    <h3> Headphones </h3>
                </div>
            </div>
        </>
    )
}

export default Content