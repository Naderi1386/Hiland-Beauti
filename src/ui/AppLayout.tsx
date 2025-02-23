import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ScrollBtn from "./ScrollBtn"
import CartBox from "../feature/cart/CartBox"

const AppLayout = () => {
  return (
    <>
    
    <ScrollBtn/>
    <ScrollRestoration />
    <CartBox />
    <div className="grid grid-rows-[auto,1fr,auto] h-screen ">
        <Header/>
    <main className="pb-8">
        <Outlet/>
    </main>
    <Footer/>

    </div>
    
    </>
  )
}

export default AppLayout