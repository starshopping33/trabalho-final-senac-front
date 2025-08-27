import axios from "axios";
import type { iCreateLogin } from "../schemas/login.schemas";
import type { iCreateCadastro } from "../schemas/usuario.schemas";

export const service = axios.create({
    baseURL:"http://localhost:3001",
    timeout: 6000,
})

export const apiController = {
    postLogin:async(novoLogin:iCreateLogin)=>{
        const res = await service.post("/login",novoLogin)
        return res.data
    },
    postCadastro: async (novoCadastro:iCreateCadastro)=> {
        const res = await service.post("/cadastro", novoCadastro)
        return res
    },
    

    getFilmes: async ()=> {
        const res = await service.get("/filmes")
        return res.data
    },
    getFavoritos:async()=>{
        const res = await service.get("/filmes/favoritar")
        return res.data
    },
    favoritar:async()=>{
        const res = await service.post("/filmes/favoritar")
        return res.data
    }
}