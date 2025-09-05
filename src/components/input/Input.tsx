import {useState} from "react"
import { Iconefy } from "../iconefy/Iconefy";
import style from "../input/style.module.css"
interface InputProps {
    
    type:"text"|"password",
    placeholder:string
    errorMsg?: string
    register:{},
    className?:string
}
export const Input = ({ type,placeholder,errorMsg,register,className}:InputProps)=>{
    const [newType,setNewType] = useState("password")
    const changeType = ()=>{
        if(newType === "password"){
            setNewType("text")
        } else {
            setNewType("password")
        }
    }

    return <>
    
    {
            type === "password"?
            <>
            <input className={className} type={newType} {...register} placeholder={placeholder} />
            <Iconefy onClick={changeType} className={style.icon} icon="weui:eyes-off-filled"/>
            </>
        :
        <input className={className} {...register} placeholder={placeholder} type={type} />      
        }
        {errorMsg ?
                <span className={style.error}>{errorMsg}</span>
                : <span className={style.error}></span>        
        }
    </>
       
        
    
}