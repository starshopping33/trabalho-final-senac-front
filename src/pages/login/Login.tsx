import style from "./style.module.css"
import {toast} from "react-toastify"
import { Header } from "../../components/header/Header"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/input/Input"
import { useNavigate } from "react-router-dom"


export const Login=()=>{
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<iCreateLogin>({
        mode:"onBlur",
        resolver: zodResolver(createLoginSchema)
    })

    const fazerLogin = async (loginData:iCreateLogin) => {
        console.log(loginData,"loginData")

        try {
            const res = await apicontroller.login(loginData)
                console.log(res,"res do axios")
                if(res.data.token){
                    toast.success("Sucesso, Login")
                    localStorage.setItem("token",res.data.token)
                    setTimeout(() => {
                        navigate("/")
                    }, 3000);

                 } } catch (error:any) {
                        console.log(error,"error")
                        toast.error(error.response.data.message)
                    }
                }
                return<> <Header /> 
                
                <Input label={"Email"} type={"text"} placeholder={"Escreva seu e-mail"} register={register("Email")}/>

                <Input label={"Senha"} type={"password"} placeholder={"****"} register={register("Senha")} /> 
    </>
}


