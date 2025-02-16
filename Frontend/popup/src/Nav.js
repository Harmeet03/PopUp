import { use } from 'react';
import Logo from './Media/Logo.png'
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const To = useNavigate();
    return(
        <>
            <nav style={{background: 'black', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div className="logo">
                    <img src={Logo} width={'150px'}/>
                </div>
                <div className="links" style={{display: 'flex', gap: '20px'}}>
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}}> Shirt </p>
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}}> Pant </p>
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}}> Shoes </p>
                </div>
            </nav>
        </>
    )
}

export default Nav