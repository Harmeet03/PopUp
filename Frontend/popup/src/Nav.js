import { useEffect } from 'react';
import Logo from './Media/Logo.png'
import { useNavigate } from "react-router-dom";

const Nav = () => {

    useEffect(() => {
        applyTheme();
    }, []);

    const toggleTheme = () => {
        let currentTheme = localStorage.getItem('Theme');
        if(currentTheme === 'Dark'){
            localStorage.setItem('Theme', 'Light')
            applyTheme();
        }
        else{
            localStorage.setItem('Theme', 'Dark')
            applyTheme();
        }
    }

    const applyTheme = () => {
        let body = document.querySelector('body');
        let loading = document.querySelector('.loading');

        const lightTheme = () => {
            body.style.backgroundColor = 'rgb(245,244,246)';
            body.style.color = 'black'
            if (loading) loading.style.color = 'black'
        }
        
        const darkTheme = () => {
            body.style.backgroundColor = 'rgb(1,0,1)';
            body.style.color = 'white'
            if (loading) loading.style.color = 'white'
        }
        
        let savedTheme = localStorage.getItem('Theme')
        if(savedTheme === 'Dark'){
            lightTheme()
        }
        else{
            darkTheme()
        }
    }

    const To = useNavigate();
    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

            <nav style={{background: 'black', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px 0px'}}>
                <div className="logo">
                    <img src={Logo} width={'150px'}/>
                </div>
                <div className="links" style={{display: 'flex', gap: '20px'}}>
                    <p onClick={toggleTheme} style={{cursor: 'pointer'}} className='material-icons'> brightness_6 </p>
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}} className='material-icons'> add_shopping_cart </p>
                    <p onClick={() => {To('/')}} style={{cursor: 'pointer'}} className='material-icons'> person </p>
                </div>
            </nav>
        </>
    )
}

export default Nav