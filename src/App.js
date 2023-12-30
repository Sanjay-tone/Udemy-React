

import Navbar from "./components/navbar";
import Categories from "./components/categorish";
import Sale from "./components/sale";
import Recommended from "./components/Recommended";
import Topics from "./components/topics";
import Popular from "./components/popular";
import Footer from "./components/footer";


function App()
{
    return(
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <Sale></Sale>
        <Recommended></Recommended>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>

        </>
    )
}

export default App