import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login/Login"
import { Cadastro } from "../pages/cadastro/Cadastro"
import { Home } from "../pages/home/Home"

export const MainRoutes=()=>{
    return <Routes>
        <Route path="/" element={<header><Home /></header>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/conta" element={<input>conta</input>}/> */}
    </Routes>
}