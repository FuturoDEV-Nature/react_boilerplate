import { Link } from "react-router-dom"
// import Sidebar from "../../components/Sidebar/Sidebar"

function Home() {
    return (
        <>
            {/* <Header />
            <Sidebar /> */}

            <h1>Home</h1>

            <Link to='/bicicletas'>Bicicletas</Link>
        </>
    )
}

export default Home

