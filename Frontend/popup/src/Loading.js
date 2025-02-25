import Nav from "./Nav";
const Loading = () => {
    return(
        <>
            <Nav/>
            <h1 className="loading" style={{textAlign: 'center', margin: '35vh auto'}}> Please Wait... </h1>
        </>
    )
}

export default Loading