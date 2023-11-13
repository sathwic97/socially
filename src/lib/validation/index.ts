import * as z from "zod";

export const SignupValidation = z.object({
    name : z.string().min(2,{message: 'too short'}),
    username: z.string().min(2,{message: 'too short'}).max(50,{message: 'invalid'}),
    email : z.string().email({message:'invalid email'}),
    password : z.string().min(8, { message: 'password must be at least 8 characters long' }),

})