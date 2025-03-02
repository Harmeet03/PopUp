import Nav from "../Nav"
import '../App.css'
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const To = useNavigate();
    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Nav/>
            <form className="signin">
                <h1> Sign in for faster checkout </h1>
                <input type="textbox" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className='material-icons'> arrow_forward </button>
                <p> Don't have one? <i style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {To('/account/sign-up')}}> Sign Up </i> </p>
            </form>
        </>
    )
}

export default SignIn