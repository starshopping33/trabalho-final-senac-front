import {z} from "zod"



export const createLoginSchema = z.object({
    email: z.string().min(3,"Insira um e-mail").email("Formato inválido"),
    password:z.string().min(4,"Senha deve ter no mínimo 4 caracteres")
})
export const returnLoginSchema = z.object({
    usuario:returnUserSchmea,
    token:z.string()
})

export type iCreateLogin = z.infer<typeof createLoginSchema>
export type iReturnLogin = z.infer<typeof returnLoginSchema>