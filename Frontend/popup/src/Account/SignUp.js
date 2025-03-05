import Nav from "../Nav"
import '../App.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const sendData = async (e) => {
        e.preventDefault()
        const invalid = document.querySelector('.invalid');
        try{
            const response = await fetch('http://localhost:5000/sign-up', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            if(response.ok){
                console.log('User created')
                To('/sign-in')
                invalid.style.display = 'none'
            }
            else{
                console.log('User not created')
                invalid.style.display = 'block'
            }
        }
        catch(e){
            console.log(`Server Error: ${e}`)
            invalid.style.display = 'block'
        }
    }
 
    const To = useNavigate();
    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Nav/>
            <form className="signin">
                <h1 className="input"> Create Account for faster checkout </h1>
                <input type="textbox" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)}/>
                <input type="textbox" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                <button className='material-icons' onClick={sendData}> arrow_forward </button>
                <p id="input"> Already have? <i style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {To('/account/sign-in')}}> Sign In </i> </p>
                <p className="error" style={{color: 'red', display: 'none'}}> Try again. </p>
            </form>
        </>
    )
}

export default SignUp