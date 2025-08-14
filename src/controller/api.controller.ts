import axios  from "axios";
import type { iCreateLogin } from "../schemas/login.schemas";
import type { iCreateCadastro } from "../schemas/usuario.schemas";

export const service = axios.create({
    baseURL:"http://localhost:3001",
    timeout: 6000,
})

export const apiController = { 
    cadastro:async(cadastroData:iCreateCadastro)=>{
        const res = await service.post("/cadastro",cadastroData)
        return res.data
    },
    login:async(loginData:iCreateLogin)=>{
        const res = await service.post("/login",loginData)
        return res.data 
    }
}