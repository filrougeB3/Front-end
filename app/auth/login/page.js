import styles from '../../CSS/login.module.css';
import Link from 'next/link';

export default function Login() {
    return (
        <main className={styles.login}>
            <div className={styles.text}>
                <h1>
                    Welcome back !
                </h1>
                <form className={styles.form}>
                    <input type="email" placeholder="Email" className={styles.input}/>
                    <input type="password" placeholder="Mot de passe" className={styles.input}/>
                    <button type="submit" className={styles.button}>Se connecter</button>
                </form>
                <Link href='/auth/signin'>Pas encore de compte ? S'inscrire</Link>
            </div>
            <img src="/images/logo.png" alt="Login" className={styles.logo}/>
        </main>
    )
}