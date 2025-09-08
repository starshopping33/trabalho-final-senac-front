import axios from "axios";
import type { iCreateLogin } from "../schemas/login.schemas";
import type { iCreateCadastro } from "../schemas/usuario.schemas";
import type { iCreateFavoritar } from "../schemas/favoritos.schemas";
import { type icreatecomentario } from "../schemas/comment.schemas";
import type { icreateconfig } from "../schemas/Admin.Schemas";

export const service = axios.create({
    baseURL:"http://localhost:3001",
    timeout: 6000,
})

export const apiController = {
    retrieve:async (token:string)=>{
        const res = await service.get("/usuarios/retrieve", {
            
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                
        })
        return res.data
    },
    postLogin:async(novoLogin:iCreateLogin)=>{
        const res = await service.post("/login",novoLogin)
        return res.data
    },
    postCadastro: async (novoCadastro:iCreateCadastro)=> {
        const res = await service.post("/cadastro", novoCadastro)
        return res
    },
    

    getFilmes: async (page:string)=> {
        const res = await service.get(`/filmes?page=${page}`)
        return res.data
    },
    getFavoritos:async(token:string)=>{
        const res = await service.get("/filmes/favoritar",{
            
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                
        })
        return res.data
    },
    favoritar:async(postFavoritos:iCreateFavoritar)=>{
        const res = await service.post("/filmes/favoritar", postFavoritos)
        return res.data
    },
    comentar:async(postComment:icreatecomentario)=>{
        const res = await service.post("/Comentario", postComment)
        return res.data
    },
    desfavoritar:async(idFilme:string)=>{
         const res = await service.delete(`/filmes/favoritar/${idFilme}`)
         console.log(res,"res da api")
         return true
        
    },

    getConfig: async (p0: string) => {
    const res = await service.get("/admin")
    return res.data
  },

    adminpost: async (data: { cor: string; logo: string; titulo: string }) => {
    const token = localStorage.getItem("token")
    const res = await service.post("/admin", data, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  },

  updateConfig: async (data: Partial<{ cor: string; logo: string; titulo: string; }>, p0: string) => {
    const token = localStorage.getItem("token")
    const res = await service.put("/admin", data, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  }
   

}