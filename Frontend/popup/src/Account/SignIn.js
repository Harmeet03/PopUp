import Nav from "../Nav"
import '../App.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const sendData = async (e) => {
        e.preventDefault();
        const invalid = document.querySelector('.invalid');
        const error = document.querySelector('.error');
        try{
            const response = await fetch('http://localhost:5000/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
    
            if(response.ok){
                console.log("Authorized");
                To('/')
                localStorage.setItem('Sign-in', 'True')
                invalid.style.display = 'none'
                error.style.display = 'none'
            }
            else{
                console.log('Invalid Credential');
                localStorage.removeItem('Sign-in')
                invalid.style.display = 'block'
                error.style.display = 'none'
            }   
        }
        catch(e){
            console.error(`Error: ${e}`);
            invalid.style.display = 'none'
            error.style.display = 'block'
        }
    }

    const To = useNavigate();
    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Nav/>
            <form className="signin">
                <h1 className="input"> Sign in for faster checkout </h1>
                <input type="textbox" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button className='material-icons' onClick={sendData}> arrow_forward </button>
                <p id="input"> Don't have one? <i style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {To('/account/sign-up')}}> Sign Up </i> </p>
                <p className="invalid" style={{color: 'red', display: 'none'}}> Invalid credentials. </p>
                <p className="error" style={{color: 'red', display: 'none'}}> Try again. </p>
            </form>
        </>
    )
}

export default SignIn