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
                return<> 
                <Header /> 
               
                <main className={style.main}>
                    <form className={style.form} onSubmit={handleSubmit(Cadastro)} >
                        <fieldset className={style.fieldset}>
                        <label className={style.label} htmlFor="">Nome</label>
                        <Input className={style.Input}  type={"text"} placeholder={"Escreva seu Nome"} register={register("name")}/>
                    </fieldset>
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


