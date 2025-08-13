import { useEffect } from "react"
import style from "./style.module.css"



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
  <div className={style.div}>
<h1 className={style.title}>Movies</h1>
<p className={style.subtitle}>🔴 Filmes 🔴</p>
<p className={style.subtitle}>🔴 login 🔴</p>

</div>

</section>
    
    </>
}
  

   









      
     







  
    
