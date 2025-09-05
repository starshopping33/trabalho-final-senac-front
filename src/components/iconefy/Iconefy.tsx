import {Icon} from "@iconify/react"
interface IconefyProps {
    icon:string,
    color?:string,
    className?:string
    onClick?:()=>void
}
export const Iconefy=({icon,color,className,onClick}:IconefyProps)=>{
    return <Icon onClick={onClick} className={className} icon={icon} width={24} height={24} color={color??"rgba(0, 0, 0, 1)"}/>
}