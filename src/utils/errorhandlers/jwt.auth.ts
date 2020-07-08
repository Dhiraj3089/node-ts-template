import { User } from "../../model/user";
import { sign, verify } from 'jsonwebtoken'
const secretKey = 'chinakimakichut'; // move to .env
const options = { expiresIn: '5m' }; // move to .env

export const encryptToken = (user: User) => {
    return sign({
        data: user
    }, secretKey, options)
}

export const verifyToken = (authToken: string) => {
    return verify(authToken, secretKey);
}

// let decrypt = (req, res) => {
//     const bearerHeader = req.headers['authorization'];
//     // Check if bearer is undefined
//     if (typeof bearerHeader !== 'undefined') {
//         // Split at the space
//         const bearer = bearerHeader.split(' ');
//         // Get token from array
//         const bearerToken = bearer[1];
//         // Set the token
//         req.token = bearerToken;
//         // Next middleware
//         return true;
//     } else {
//         // Forbidden
//         res.sendStatus(403);
//         return false;
//     }
// }