import {useState} from "react"
import { Iconefy } from "../iconefy/Iconefy";
import style from "../input/style.module.css"
interface InputProps {
    label: string
    type:"text"|"password",
    placeholder:string
    errorMsg?: string
    register:{},
    className?:string
}
export const Input = ({label, type,placeholder,errorMsg,register,className}:InputProps)=>{
    const [newType,setNewType] = useState("password")
    const changeType = ()=>{
        if(newType === "password"){
            setNewType("text")
        } else {
            setNewType("password")
        }
    }

    return <fieldset className={style.fieldset}>
        <label htmlFor={label}>{label}</label>
        {
            type === "password"?
            <>
            <input className={className} type={newType} {...register} placeholder={placeholder} id={label}/>
            <Iconefy onClick={changeType} className={style.icon} icon="ri:eye-line"/>
            </>
        :
        <input className={className} {...register} placeholder={placeholder} type={type} id={label}/>      
        }
        {errorMsg ?
                <span className={style.error}>{errorMsg}</span>
                : <span className={style.error}></span>        
        }
    </fieldset>
}