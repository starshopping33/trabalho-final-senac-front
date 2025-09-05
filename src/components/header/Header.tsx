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

        
<div>
    <div className={style.div}>
            <h1>IMDB</h1>
        </div>
</div>
        <div className={style.botoes}>
            <nav>
                <button
                    onClick={()=> navigate("/")}
                    className={style.perfilbotao}>
                    Home    
                </button>

            </nav>
            <nav>
                <button
                    onClick={()=> navigate("/cadastro")}
                    className={style.perfilbotao2}>
                    Cadastro
                </button>
            </nav>
            
            <nav>
                <button
                    onClick={()=> navigate("/login")}
                    className={style.perfilbotao3}>
                    Login
                </button>
            </nav>
            
            <nav>
                <button
                    onClick={() => navigate("/conta")}
                    className={style.perfilbotao4}>
                    Conta
                </button>

            </nav>
            <nav>
                <button
                onClick={() => navigate("/favoritos")}
                className={style.perfilbotao5}>
                Favoritos
                </button>
            </nav>
            <nav>
                <button
                onClick={() => navigate("/favoritos")}
                className={style.perfilbotao5}>
                Favoritos
                </button>
            </nav>
            

        </div>
    </header>
}