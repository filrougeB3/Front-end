import jwt from 'jsonwebtoken';

export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
};

export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
    location.reload()
}

export const getDataFromToken = (token) => {
    const decodedToken = jwt.decode(token);
    return decodedToken;
};