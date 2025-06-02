import jwt from 'jsonwebtoken';

export const saveTokenToSessionStorage = (token) => {
    sessionStorage.setItem('token', token);
};

export const getTokenFromSessionStorage = () => {
    return sessionStorage.getItem('token');
};

export const removeTokenFromSessionStorage = () => {
    sessionStorage.removeItem('token');
    location.reload()
}

export const getDataFromToken = (token) => {
    const decodedToken = jwt.decode(token);
    return decodedToken;
};