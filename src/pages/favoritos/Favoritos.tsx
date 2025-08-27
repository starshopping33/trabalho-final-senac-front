import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { Poster } from "../../components/poster/Poster"

interface Favoritos {
    backdrop_path: string,
    poster_path: string,
    title:string
}

export const Favoritos= ()=> {
    const [favorites,setFavorites] = useState([] as Favoritos[])
    const getFavorites=async() => {
        const res = await apiController.getFilmes()
        console.log(res,"res")
        setFavorites(res.results)
    }

    useEffect(()=> {
        getFavorites()
    },[])


    return <>
<section>
  <div className={style.div}>
<h2 className={style.title2}>Movies Favorites</h2>
<p className={style.subtitle2}>🔴Filmes Favoritos🔴</p>
    
<ul>
    favorites.map((favorites)=>{
        return <li>
            <p className={style.title2}>{favorites.}</p>
        <img src={'https://image.tmdb.org/t/p/w500'+favorites.poster_path} alt =""/>
        <Poster/>
        </li}
    )
</ul>
</div>
<p className={style.subtitle}>🔴 login 🔴</p>
</div>
</section>

</>
