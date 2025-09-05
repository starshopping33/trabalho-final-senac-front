import style from "./style.module.css"
import {toast} from "react-toastify"
import { Header } from "../../components/header/Header"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/input/Input"
import { useNavigate } from "react-router-dom"
import { createLoginSchema, type iCreateLogin } from "../../schemas/login.schemas"
import { apiController } from "../../controller/api.controller"

export const Login=()=>{
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm<iCreateLogin>({
        mode:"onBlur",
        resolver: zodResolver(createLoginSchema)
    })

    const fazerLogin = async (loginData:iCreateLogin) => {
        console.log(loginData,"loginData")

        try {
            const res = await apiController.postLogin(loginData)
                console.log(res,"res do axios")
                if(res.token){
                    toast.success("Sucesso, Login")
                    localStorage.setItem("token",res.token)
                    localStorage.setItem("usuario",JSON.stringify(res.usuario))
                    setTimeout(() => {
                        navigate("/")
                    }, 3000);

                 } } catch (error:any) {
                        console.log(error,"error")
                        toast.error(error.response.data.message)
                    }
                }
                return<> 
                <Header /> 
                <main className={style.main}>
                <form className={style.form} onSubmit={handleSubmit(fazerLogin)} >
                    <fieldset className={style.fieldset}>
                        <label className={style.label} htmlFor="">E-mail</label>
                        <Input className={style.Input}  type={"text"} placeholder={"Escreva seu e-mail"} register={register("email")}/>
                    </fieldset>
                <fieldset className={style.fieldset}>
                <label className={style.label} htmlFor="">Senha</label>
                <Input className={style.Input}  type={"password"} placeholder={"****"} register={register("password")} /> 
                </fieldset>
                
                <button type="submit" className={style.button}>Login</button>
                </form>
                </main>
    </>
}


