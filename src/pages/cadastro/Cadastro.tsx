import style from "./style.module.css"
import {toast} from "react-toastify"
import { Header } from "../../components/header/Header"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/input/Input"
import { useNavigate } from "react-router-dom"
import { apiController } from "../../controller/api.controller"
import { createCadastroSchema, type iCreateCadastro } from "../../schemas/usuario.schemas"


export const Cadastro=()=>{
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
    } = useForm<iCreateCadastro>({
        mode:"onBlur",
        resolver: zodResolver(createCadastroSchema)
    })

    const fazerCadastro = async (cadastroData:iCreateCadastro) => {
        console.log(cadastroData,"cadastroData")
        try {
            const res = await apiController.postCadastro(cadastroData)
                console.log(res,"res do axios")

                toast.success("Sucesso, cadastro")
                localStorage.setItem("token",res.data.token)
                setTimeout(() => {
                    navigate("/")
                }, 3000);
            } 
                catch (error:any) {
                    console.log(error,"error")
                    toast.error(error.response.data.message)
                }
            
        }
                return<> <Header /> 
               
                <main className={style.main}>
                    <form className={style.form} onSubmit={handleSubmit(fazerCadastro)} >
                <Input className={style.Input_Email} label={"Email"} type={"text"} placeholder={"Escreva seu e-mail"} register={register("email")}/>

                <Input className={style.Input_Senha} label={"Senha"} type={"password"} placeholder={"****"} register={register("password")} />

                <button type="submit" className={style.button}>Cadastro</button> 
                    </form>
                </main>
                
    </>
    
}


