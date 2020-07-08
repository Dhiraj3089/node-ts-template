import { hashSync, compare } from "bcrypt"
const salt = 5;
export const encrypt = (password: string) => {
    return hashSync(password, 5);
}

export const comparePassword = async (password: string, dbPassword: string) => {
    return await compare(password, dbPassword);
} 