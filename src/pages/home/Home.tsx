import { useEffect, useState } from "react"
import style from "./style.module.css"
import { apiController } from "../../controller/api.controller"
import { Poster } from "../../components/poster/Poster"
//import { useNavigate } from "react-router-dom"

export interface Usuario {
  usuario_id: number
}

export interface Filme {
  backdrop_path: string,
  poster_path: string,
  title:string,
  id: number
  isFavorite?: boolean
  
}


export const Home=()=> {
  const [filmes,setFilmes]= useState([] as Filme[])
  const [page,setPage] = useState(1)
  const [loading,setLoading]=useState(true)
    const getFavorites=async(filmesprop:Filme[]) => {
      const token = localStorage.getItem("token")
        const res = await apiController.getFavoritos(token!)
        console.log(res,"res favoritos",filmes)


        for(const filme of res){
          const findFavorito = filmesprop.find((item)=>item.id === filme.filme_id)
          console.log(findFavorito,"findfavorito?",res.length)
          if(findFavorito){
            findFavorito.isFavorite = true
          }
  
         
        }
       return filmesprop
        //if find dentro dos favoritos
        // favoritado
        //filme.fav = true
    }
  const getFilmes=async() => {
    const res = await apiController.getFilmes(String(page))
 

    const resfilmes = await getFavorites(res.results)
    setFilmes(resfilmes)
        setLoading(false)
  }

  //const navigate = useNavigate();
  

  useEffect(()=>{
    // setLoading(true)
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

<ul className={style.ul}>

  {!loading && filmes.map((filme)=>{
    return <li key={filme.id} className={style.li}>

        
        <div className={style.card}> 
          <img  className={style.img}  src={'https://image.tmdb.org/t/p/w500/'+filme.poster_path} alt=""
           onClick={()=>goTo(filme)} />
          <div className={style.info}>
            <p className={style.title}>{filme.title}</p>
           {  <Poster filme={filme}/>}

          </div>
           
      </div>
    </li>
  })}
  
</ul>
</div>
<div  className={style.buttonprev}>
<button className={style.buttonprev} onClick={() => setPage(page > 1 ? page - 1 : 1)}>Voltar</button>
<button className={style.buttonprev} onClick={()=>setPage(page +1)}>Proximas</button>

</div>


</div>

</section>
    </>
}

