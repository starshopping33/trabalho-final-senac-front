import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"

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
<p className={style.subtitle}>🔴 Filmes 🔴</p>
<div className={style.lenght} >

<ul>

  {filmes.map((filme)=>{
    return <li>
        <img src={filme.backdrop_path} alt="" />
      <p>{filme.poster_path}</p>
      <p>{filme.title}</p>
    </li>
  })}
</ul>
</div>
<p className={style.subtitle}>🔴 login 🔴</p>

</div>

</section>
    </>
}
  

   









      
     







  
    
