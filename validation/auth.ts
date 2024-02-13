import {z} from "zod"


export const signUpUserSchema = z.object({
    username: z.string({required_error: "Esse campo é obrigatório"}).min(4, {message: "Nome deve ter no mínimo 4 caracteres"}).max(30, {message: "Nome muito longo"}),
    email: z.string({required_error: "Esse campo é obrigatório"}).email({message: "Email inválido"}),
    password: z.string({required_error: "Esse campo é obrigatório"}).min(6, {message: "Senha deve ter no mínimo 6 caracteres"}),
})

export const signInUserSchema = z.object({
    email: z.string({required_error: "Esse campo é obrigatório"}).email({message: "Email inválido"}),
    password: z.string({required_error: "Esse campo é obrigatório"}).min(6, {message: "Senha deve ter no mínimo 6 caracteres"}),
})