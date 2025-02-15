import Logo from './Media/Logo.png'

const Footer = () => {
    return(
        <>
            <footer style={{textAlign: 'center', background: 'black', color: 'white', padding: '10px 0px 1px 0px'}}>
                <img src={Logo}/>
                <h3> PopUp is E-Commerce website where we sell clothes only! </h3>
                <h3> This is for Minor Project Purpose only. </h3>
                <p style={{background: 'rgb(29, 29, 29)', padding: '5px', cursor: 'pointer'}}> Change Theme : {} </p>
            </footer>
        </>
    )
}

export default Footer