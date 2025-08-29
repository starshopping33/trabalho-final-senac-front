import z, { number, string } from "zod";

export const CreateComentarioSchemas = z.object({
    conteudo: string(),
    nome_Filme: string(),
    imagem: string()
})

export const ReturnComentarioSchemas = CreateComentarioSchemas.extend ({
    id:number()
})

export const UpdateCOmentarioSchemas = CreateComentarioSchemas.partial()

export const GetComentariosSchemas = ReturnComentarioSchemas.array()

export type icreatecomentario = z.infer<typeof CreateComentarioSchemas>
export type ireturncomentario = z.infer <typeof ReturnComentarioSchemas>
export type igetcomentario = z.infer <typeof GetComentariosSchemas>
export type iupdatecomentario = z.infer<typeof UpdateCOmentarioSchemas>