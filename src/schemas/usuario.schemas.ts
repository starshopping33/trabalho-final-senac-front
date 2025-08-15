import {z} from "zod"


export const createCadastroSchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string()
});

export const returnUserSchema = createCadastroSchema.extend({
    id: z.number()
}).omit({password:true});

export type iCreateCadastro = z.infer<typeof createCadastroSchema>
export type iReturnCadastro = z.infer<typeof returnUserSchema>