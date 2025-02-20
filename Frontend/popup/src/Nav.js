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
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}}> Cart </p>
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}}> About </p>
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}}> Sign In </p>
                </div>
            </nav>
        </>
    )
}

export default Nav