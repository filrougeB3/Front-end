import { countryCodeRecord } from "@/components/CountryCode";
import styles from "./components.module.css";
import React from "react";

function EditProfile() {

    const [pseudo, setPseudo] = React.useState("JohnDoe")
    const [email, setEmail] = React.useState("jdoe@mail.com")
    const [selectedCountry, setCountry] = React.useState("FR")

    return (
        <div className={styles.popup}>
            <h1>Modifier le profil</h1>
            <form className={styles.form}>
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" id="pseudo" name="pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} className={styles.input} required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
                <label htmlFor="country">Pays</label>
                <select id="country" name="country" className={styles.input} value={selectedCountry} onChange={(e) => setCountry(e.target.value)} required>
                    {Object.keys(countryCodeRecord).map((country, index) => {
                        return (
                            <option key={index} value={countryCodeRecord[country]}>
                                {country}
                            </option>
                        )
                    })}
                </select>
                <button type="submit" className={styles.button}>Enregistrer</button>
            </form>
        </div>
    )
}

function EditPassword() {
    return (
        <div className={styles.popup}>
            <h1>Modifier le mot de passe</h1>
            <form className={styles.form}>
                <label htmlFor="oldPassword">Ancien mot de passe</label>
                <input type="password" id="oldPassword" name="oldPassword" className={styles.input} required />
                <label htmlFor="newPassword">Nouveau mot de passe</label>
                <input type="password" id="newPassword" name="newPassword" className={styles.input} required />
                <label htmlFor="newPassword">Confirmez le nouveau mot de passe</label>
                <input type="password" id="confirmNewPassword" name="confirmNewPassword" className={styles.input} required />
                <button type="submit" className={styles.button}>Enregistrer</button>
            </form>
        </div>
    )
}
function DeleteAccount() {
    return (
        <div className={styles.popup}>
            <h1>Supprimer le compte</h1>
            <p>Êtes-vous sûr de vouloir supprimer votre compte ?</p>
            <div className={styles.buttons}>
                <button className={styles.button}>Annuler</button>
                <button className={styles.delete}>Supprimer le compte</button>
            </div>
        </div>
    )
}

export { EditProfile, EditPassword, DeleteAccount };