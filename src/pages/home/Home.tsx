import { useEffect } from "react"
import style from "./style.module.css"
import { Header } from "../../components/header/Header"



export const Home=()=> {
  const getFilmes=async()=>{
    const res = await fetch("htpp://localhost:3001/filmes")
    console.log(res,"res")
  }
  
  useEffect(()=>{
    getFilmes()
  },[])
     
      
 return <>
 
<section>
  <Header/>
  <div className={style.div}>
<h1 className={style.title}>Filmes</h1>



</div>

</section>
    </>
}
  

   









      
     







  
    
