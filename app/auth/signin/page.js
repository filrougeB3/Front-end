"use client"

import Link from 'next/link';
import styles from '../../CSS/login.module.css';
import { useRouter } from "next/navigation";
import React from 'react';
import { saveTokenToSessionStorage } from '@/jwt';



export default function Signin() {

    const [pseudo, setPseudo] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const router = useRouter()


    async function signin(e) {
        e.preventDefault();
        var data
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "pseudo": pseudo,
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
                    Welcome aboard !
                </h1>
                <form className={styles.form} onSubmit={signin}>
                    <input type="text" placeholder="Pseudo" className={styles.input} onChange={(e) => setPseudo(e.target.value)} />
                    <input type="email" placeholder="Email" className={styles.input} onChange={(e) => setMail(e.target.value)} />
                    <input type="password" placeholder="Mot de passe" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirmer le mot de passe" className={styles.input} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button type="submit" className={styles.button}>S'inscrire</button>
                </form>
                <Link href='/auth/login'>Déjà un compte ? Se connecter</Link>
            </div>
            <img src="/images/logo_noledge.png" alt="Login" className={styles.logo} />
        </main>
    )
}