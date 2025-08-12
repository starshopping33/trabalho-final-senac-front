import style from "./style.module.css"
import {useNavigate} from "react-router-dom"

export const Header =()=>{
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const token = localStorage.getItem("token")

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }

    return <header className={style.header}>

        <div className={style.div}>
            <h1>IMDB</h1>
        </div>

        <div className={style.botoes}>
            <nav>
                <button
                onClick={()=> navigate("/")}
                className={style.perfilbotao}>
                Home    
                </button>

                <button
                onClick={() => navigate("/Conta")}
                className={style.perfilbotao}
                >Conta
                </button>

            </nav>
        </div>
    </header>
}