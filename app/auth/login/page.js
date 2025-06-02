"use client"

import React from 'react';
import styles from '../../CSS/login.module.css';
import Link from 'next/link';
import { saveTokenToSessionStorage } from '@/jwt';
import { useRouter } from "next/navigation";


export default function Login() {

    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const router = useRouter()
    

    async function login(e) {
        e.preventDefault();
        var data
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": mail,
                    "password": password
                }),
            });

            data = await response.json();
            saveTokenToSessionStorage(data.auth_token);
            router.push('/')
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à l\'API :', error);
        }
    }


    return (
        <main className={styles.login}>
            <div className={styles.text}>
                <h1>
                    Welcome back !
                </h1>
                <form className={styles.form} onSubmit={login}>
                    <input type="email" placeholder="Email" className={styles.input} onChange={(e) => setMail(e.target.value)} required />
                    <input type="password" placeholder="Mot de passe" className={styles.input} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className={styles.button}>Se connecter</button>
                </form>
                <Link href='/auth/signin'>Pas encore de compte ? S'inscrire</Link>
            </div>
            <img src="/images/logo_noledge.png" alt="Login" className={styles.logo} />
        </main>
    )
}