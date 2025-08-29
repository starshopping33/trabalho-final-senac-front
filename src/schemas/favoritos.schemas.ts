import {z} from "zod";

export const CreateFavoritarFIlmesSchema = z.object({
    usuario_id: z.number(),
    titulo: z.string(),
    filme_id: z.number()
})

export const ReturnFavoritosSchemas = CreateFavoritarFIlmesSchema.extend({
   id: z.number()
})

export const ReturnAllFavoritosSchemas = ReturnFavoritosSchemas.array()

export type iCreateFavoritar = z.infer<typeof CreateFavoritarFIlmesSchema>
export type iReturnFavoritar = z.infer<typeof ReturnFavoritosSchemas>
export type ireturnfilmesfav = z.infer<typeof ReturnAllFavoritosSchemas>
