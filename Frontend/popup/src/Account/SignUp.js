import Nav from "../Nav"
import '../App.css'
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const To = useNavigate();
    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <Nav/>
            <form className="signin">
                <h1> Create Account for faster checkout </h1>
                <input type="textbox" placeholder="Enter Full Name"/>
                <input type="textbox" placeholder="Enter Email"/>
                <input type="password" placeholder="Enter Password"/>
                <button className='material-icons'> arrow_forward </button>
                <p> Already have? <i style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {To('/account/sign-in')}}> Sign In </i> </p>
            </form>
        </>
    )
}

export default SignUp