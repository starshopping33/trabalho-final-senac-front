import { Route, Routes } from "react-router-dom"

export const MainRoutes=()=>{
    return <Routes>
        <Route path="/" element={<header>home</header>}/>
        <Route path="/cadastro" element={<input>cadastro</input>}/>
        <Route path="/login" element={<input>login</input>}/>
    </Routes>
}