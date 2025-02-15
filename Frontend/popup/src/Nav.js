import Logo from './Media/Logo.png'

const Nav = () => {
    return(
        <>
            <nav style={{background: 'black', color: 'white', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div className="logo">
                    <img src={Logo} width={'150px'}/>
                </div>
                <div className="links" style={{display: 'flex', gap: '20px'}}>
                    <p> Shirt </p>
                    <p> Pant </p>
                    <p> Shoes </p>
                </div>
            </nav>
        </>
    )
}

export default Nav