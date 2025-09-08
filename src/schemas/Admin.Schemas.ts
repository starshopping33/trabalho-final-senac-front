import type { DeepPartial } from "typeorm";
import z, { number, string } from "zod";

export const  CreateAdminConfigSchemas = z.object({
    cor:string(),
    logo:string(),
    titulo:string()
})

export const ReturnConfigAdminSchemas = CreateAdminConfigSchemas.extend({
    id:number()
})

export const UpdateAdminConfigSchema = CreateAdminConfigSchemas.partial()

export const ReturnConfigGetSchemas = CreateAdminConfigSchemas.array()

export type icreateconfig = z.infer <typeof CreateAdminConfigSchemas >
export type ireturnconfig = z.infer <typeof ReturnConfigAdminSchemas>
export type iupdateconfig = DeepPartial<typeof CreateAdminConfigSchemas>
export type iGetConfig = z.infer <typeof ReturnConfigGetSchemas>
