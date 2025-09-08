import { useEffect, useState } from "react"
import style from "./style.module.css"
import { Header } from "../../components/header/Header"
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
  const [cor, setCor] = useState("#ffffff")
  const [titulo, setTitulo] = useState("Filmes")
  const [logo, setLogo] = useState("")



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
  
}

const getAdminConfig = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await apiController.getConfig("token") 
      setCor(res.cor || "#ffffff")
      setTitulo(res.titulo || "Filmes")
      setLogo(res.logo || "")
    } catch (error) {
      console.error("Erro ao buscar config admin", error)
    }
  }

  useEffect(()=>{
    getAdminConfig()
      },[])
       const updateAdminConfig = async () => {
    try {
      const token = localStorage.getItem("token")
      await apiController.updateConfig({ cor, titulo, logo }, "token")
      document.documentElement.style.setProperty("--bg-color", cor)
      alert("Configurações atualizadas!")
    } catch (error) {
      console.error("Erro ao atualizar config", error)
    }
  }

 return <>
 
<section>
  <Header/>

   <div style={{ padding: "20px", border: "1px solid gray", marginBottom: "20px" }}>
        <h2>Painel Admin</h2>
        <label>
          Cor de fundo:{" "}
          <input type="color" value={cor} onChange={(e) => setCor(e.target.value)} />
        </label>
        <br />
        <label>
          Título:{" "}
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <br />
        <label>
          Logo URL:{" "}
          <input type="text" value={logo} onChange={(e) => setLogo(e.target.value)} />
        </label>
        <br />
        <button onClick={updateAdminConfig}>Salvar Configuração</button>
      </div>
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

