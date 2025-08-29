import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { Poster } from "../../components/poster/Poster"



interface Favoritos {
    backdrop_path: string,
    poster_path: string,
    title:string
    id:number
}

export const Favoritos= ()=> {
    const [favorites,setFavorites] = useState([] as Favoritos[])
    
    const getFavorites=async() => {
        const res = await apiController.getFavoritos()
        console.log(res,"res")
        setFavorites(res.results)
    }

    useEffect(()=> {
        getFavorites()
    },[])

    return (
        <section className={style.section}>
            <div className={style.div}>
            <h1 className={style.h1}>Movies Favorites</h1>
            <p className={style.subtitle}>🔴 Filmes Favoritos🔴</p>
            <div className={style.lenght}>
            <ul>
                
                {favorites.map((filme)=>{
                    return <li>
                        <p className={style.title}>{filme.title}</p>
                        <img src={'https://image.tmdb.org/t/p/w500/'+filme.poster_path} alt="" />
                        <Poster filme={filme}/>
                    </li>
                })}
            </ul>
            </div>
            <p className={style.subtitle}>🔴 Login 🔴</p>
            </div>
        </section>
    )

}