import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { Poster } from "../../components/poster/Poster"

interface Filme {
  backdrop_path: string,
  poster_path: string,
  title:string
}

export const Home=()=> {
  const [filmes,setFilmes]= useState([] as Filme[])
  const getFilmes=async() => {
    const res = await apiController.getFilmes()
    console.log(res,"res")
    setFilmes(res.results)
  }
  

  useEffect(()=>{
    getFilmes()
  },[])


 return <>
<section>
  <div className={style.div}>
<h1 className={style.title}>Movies</h1>
<p className={style.subtitle}> Filmes</p>
<div className={style.lenght} >

<ul className={style.ul}>

  {filmes.map((filme)=>{
    return <li>
      <p className={style.title}>{filme.title}</p>
        <img src={'https://image.tmdb.org/t/p/w500/'+filme.poster_path} alt="" />
      
      <Poster/>
    </li>
  })}
</ul>
</div>
<p className={style.subtitle}>🔴 login 🔴</p>

</div>

</section>
    </>
}
  

   









      
     







  
    
