import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { Poster } from "../../components/poster/Poster"
import type { Filme } from "../home/Home"



interface Favoritos {
    backdrop_path: string,
    poster_path: string,
    title:string
    id:number
}

export const Favoritos= ()=> {
    const [favorites,setFavorites] = useState([] as Favoritos[])
    
    const getFavorites=async() => {
        const token = localStorage.getItem("token")
        const res = await apiController.getFavoritos(token!)
        console.log(res,"res favoritos")
        setFavorites(res)
    }

    useEffect(()=> {
        getFavorites()
    },[])

    const goTo=(filme:Filme)=>{
      console.log(filme,"filme?"); 
    }
    return (
        <section className={style.section}>
            <div className={style.div}>
            <h1 className={style.h1}>Movies Favorites</h1>
            <p className={style.subtitle}>🔴 Filmes Favoritos🔴</p>
            <div className={style.lenght}>
            <ul>
                
                {favorites.length && favorites.map((filme)=>{
                    return <li key={filme.id} className={style.li}>
                        <div>

                        <p className={style.title}>{filme.title}</p>
                        <img className={style.img} src={'https://image.tmdb.org/t/p/w500/'+filme.poster_path} alt=""
                        onClick={()=>goTo(filme)} />
                        {<Poster  filme={filme}/>}
                        
                        </div>
                    </li>
                })}
            </ul>
            </div>
            <p className={style.subtitle}>🔴 Login 🔴</p>
            </div>
        </section>
    )

}