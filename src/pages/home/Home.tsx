import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { Poster } from "../../components/poster/Poster"
import { useNavigate } from "react-router-dom"

interface Filme {
  backdrop_path: string,
  poster_path: string,
  title:string
}


export const Home=()=> {
  const [filmes,setFilmes]= useState([] as Filme[])
  const [page,setPage] = useState(1)
  const getFilmes=async() => {
    const res = await apiController.getFilmes(String(page))
    console.log(res,"res")
    setFilmes(res.results)
  }

  const navigate = useNavigate();
  

  useEffect(()=>{
    getFilmes()
  },[])
  useEffect(()=>{
    getFilmes()
  },[page])
const goTo=(filme:Filme)=>{
  console.log(filme,"filme?")
  //navigate(`/Informacoes`)
  //document.documentElement.style.setProperty('--bg-color', '#ff5733')
}
 return <>
<section>
  <div className={style.div}>

<p className={style.subtitle}> Filmes</p>
<div className={style.lenght} >

<ul>

  {filmes.map((filme)=>{
    return <li className={style.li}>

        
        <div className={style.card}> 
          <img  className={style.img}  src={'https://image.tmdb.org/t/p/w500/'+filme.poster_path} alt=""
           onClick={()=>goTo(filme)} />
          <div className={style.info}>
            <p className={style.title}>{filme.title}</p>
            <Poster/>

          </div>
           
      </div>
    </li>
  })}
  
</ul>
</div>
<div  className={style.buttonprev}>
<button className={style.buttonprev} onClick={()=>setPage(page -1)}>Voltar</button>
<button className={style.buttonprev} onClick={()=>setPage(page +1)}>Proximas</button>

</div>


</div>

</section>
    </>
}
  

   









      
     







  
    
