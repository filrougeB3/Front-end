import jwt from 'jsonwebtoken';

export const saveTokenToLocalStorage = (token) => {
    sessionStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => {
    return sessionStorage.getItem('token');
};

export const removeTokenFromLocalStorage = () => {
    sessionStorage.removeItem('token');
    location.reload()
}

export const getDataFromToken = (token) => {
    const decodedToken = jwt.decode(token);
    return decodedToken;
};