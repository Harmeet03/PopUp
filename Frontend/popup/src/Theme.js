import { useEffect } from 'react';

const Theme = () => {
    useEffect(() => {
        applyTheme();
    });
}
    
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
        const lightTheme = () => {
            document.body.style.backgroundColor = 'rgb(245,244,246)';
            document.body.style.color = 'black'
        }

        const darkTheme = () => {
            document.body.style.backgroundColor = 'rgb(1,0,1)'
        }

        let savedTheme = localStorage.getItem('Theme')
        if(savedTheme === 'Dark'){
            lightTheme()
        }
        else{
            darkTheme()
        }
    }

export default toggleTheme