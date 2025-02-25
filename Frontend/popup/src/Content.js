import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Phone from './Media/Phone.jpg'

const Content = () => {
    const To = useNavigate();

    return(
        <>
            <div className="category">
                <div className="phones" onClick={() => {To('/product-category/phones')}} style={{backgroundImage: `url(https://www.apple.com/v/iphone/home/by/images/overview/consider/environment__e3v3gj88dl6q_xlarge_2x.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'black'}}>
                    <h1> Phones </h1>
                </div>
                <div className="laptops" onClick={() => {To('/product-category/laptops')}}  style={{backgroundImage: `url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728342374593)`, backgroundSize: 'cover', backgroundPosition: 'center top 305px', color: 'white'}}>
                    <h1> Laptops </h1>
                </div>
                <div className="watches"  onClick={() => {To('/product-category/watches')}}  style={{backgroundImage: `url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bhm-202501?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1736792017949)`, backgroundSize: 'cover', backgroundPosition: 'center top 285px', color: 'white'}}>
                    <h1> Watches </h1>
                </div>
                <div className="headphones"  onClick={() => {To('/product-category/headphones')}} style={{backgroundImage: `url(https://www.apple.com/v/airpods/x/images/overview/airpods_max_blue__fsfaleh1smuu_large_2x.png)`, backgroundSize: 'cover', backgroundPosition: 'center top 285px', color: 'black'}}>
                    <h1> Headphones </h1>
                </div>
            </div>
        </>
    )
}

export default Content