import styles from '../../CSS/login.module.css';

export default function Signin(){
    return(
        <main className={styles.login}>
            <div className={styles.text}>
                <h1>
                    Welcome aboard !
                </h1>
                <form className={styles.form}>
                <input type="text" placeholder="Pseudo" className={styles.input}/>
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="password" placeholder="Mot de passe" className={styles.input}/>
                    <input type="password" placeholder="Confirmer le mot de passe" className={styles.input}/>
                    <button type="submit" className={styles.button}>S'inscrire</button>
                </form>
            </div>
            <img src="/images/logo.png" alt="Login" className={styles.logo} width={1000}/>
        </main>
    )
}