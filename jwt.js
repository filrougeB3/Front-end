import jwt from 'jsonwebtoken';
import { useRouter } from "next/navigation";

export const saveTokenToSessionStorage = (token) => {
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('token', token);
    }
};

export const getTokenFromSessionStorage = () => {
    if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem('token');
    }
    return null
};

export const removeTokenFromSessionStorage = () => {
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('token');
    }
    return null
}

export const getDataFromToken = (token) => {
    const decodedToken = jwt.decode(token);
    return decodedToken;
};