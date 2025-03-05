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
        let inputs = document.querySelectorAll('input');
        let lists = document.querySelectorAll('.list');
        let links = document.querySelectorAll('.links')
        let footer = document.querySelector('footer');
        let input = document.querySelector('.input');
        let inp = document.querySelector('#input');

        const lightTheme = () => {
            body.style.backgroundColor = 'rgb(245,244,246)';
            body.style.color = 'black';
            if(footer) footer.style.color = 'black'
            if(footer) footer.style.backgroundColor = 'white'
            if(input) input.style.color = 'black'
            if(inp) inp.style.color = 'black'
            if (loading) loading.style.color = 'black'
            if (lists) lists.forEach(list => {
                list.style.color = 'black'
            })
            if (inputs) inputs.forEach(input => {
                input.style.color = 'black'
                input.style.borderColor = 'black'
            })
            if (links) links.forEach(link => {
                link.style.color = 'black'
            })
        }
        
        const darkTheme = () => {
            body.style.backgroundColor = 'rgb(1,0,1)';
            if(footer) body.style.color = 'white';
            if(footer) footer.style.color = 'white'
            if(footer) footer.style.backgroundColor = '#252525';
            if(input) input.style.color = 'white'
            if(inp) inp.style.color = 'white'
            if (loading) loading.style.color = 'white'
            if (lists) lists.forEach(list => {
                list.style.color = 'white'
            })
            if (inputs) inputs.forEach(input => {
                input.style.color = 'white'
                input.style.borderColor = 'white'
            })
            if (links) links.forEach(link => {
                link.style.color = 'white'
            })
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

            <nav style={{background: 'transparent', color: 'black', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '5px 0px'}}>
                <div className="logo">
                    <img onClick={() => {To('/home')}} style={{cursor: 'pointer'}} src={Logo} width={'150px'}/>
                </div>
                <div className="links" style={{display: 'flex', gap: '20px'}}>
                    <p onClick={toggleTheme} style={{cursor: 'pointer'}} className='material-icons'> brightness_6 </p>
                    <p onClick={() => {To('/shop/bag')}} style={{cursor: 'pointer'}} className='material-icons'> add_shopping_cart </p>
                    {
                        localStorage.getItem('Sign-in') === 'True' ? (
                            <p onClick={() => {localStorage.removeItem('Sign-in'); To('/account/sign-in')}} style={{cursor: 'pointer'}} className='material-icons'> exit_to_app </p>
                        ) : (
                            <p onClick={() => {To('/account/sign-in')}} style={{cursor: 'pointer'}} className='material-icons'> person </p>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default Nav