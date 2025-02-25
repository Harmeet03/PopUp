import Logo from './Media/Logo.png'
import { useEffect } from 'react'

const Footer = () => {
    
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
        let body = document.querySelector('body')
        let loading = document.querySelector('.loading')

        const lightTheme = () => {
            body.style.backgroundColor = 'rgb(245,244,246)'
            body.style.color = 'black'
            if (loading) loading.style.color = 'black'
        }
        
        const darkTheme = () => {
            body.style.backgroundColor = 'rgb(1,0,1)'
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

    return(
        <>
            <footer style={{textAlign: 'center', background: 'black', color: 'white', padding: '30px 0px 1px 0px'}}>
                <img src={Logo}/>
                <h3> PopUp is E-Commerce website where we sell Electronic Devices only! </h3>
                <h3> This is for Minor Project Purpose only. </h3>
                <p style={{padding: '5px', cursor: 'pointer'}} onClick={toggleTheme}>  -- Change Theme -- </p>
            </footer>
        </>
    )
}

export default Footer