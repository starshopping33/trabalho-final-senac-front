import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/home/Home"
// import { Login } from "../pages/login/Login"

export function MainRoutes(){

    return <Routes>

        <Route path="/" element={<Home/>}/>
        {/* <Route path="/Login" element={<Login/>}/> */}
    </Routes>
}