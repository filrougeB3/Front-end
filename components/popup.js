import { countryCodeRecord } from "@/components/CountryCode";
import styles from "./components.module.css";
import React from "react";
import { getTokenFromLocalStorage } from "@/jwt";

const token = getTokenFromLocalStorage()

function EditProfile({ pseudo, email, userCountry, userPicture, refreshUser, onClose }) {

    const [newPseudo, setPseudo] = React.useState(pseudo)
    const [newMail, setEmail] = React.useState(email)
    const [newCountry, setCountry] = React.useState(userCountry)
    const [newProfilePicture, setProfilePicture] = React.useState(userPicture)
    


    async function updateUser(e) {
        e.preventDefault();
        var data
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,

                },
                body: JSON.stringify({
                    "email": newMail,
                    "pseudo": newPseudo,
                    "country": newCountry == "" ? null : newCountry,
                    "profile_picture_url": newProfilePicture == "" ? null : newProfilePicture,
                }),
            });
            data = await response.json();
            await refreshUser()
            onClose()
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à l\'API :', error);
        }
    }

    return (
        <div className={styles.popup}>
            <h1>Modifier le profil</h1>
            <form className={styles.form} onSubmit={updateUser}>
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" id="pseudo" name="pseudo" value={newPseudo} onChange={(e) => setPseudo(e.target.value)} className={styles.input} required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={newMail} onChange={(e) => setEmail(e.target.value)} className={styles.input} required />
                <label htmlFor="profilePicture">Photo de profil</label>
                <input type="text" id="profilePicture" name="profilePicture" value={newProfilePicture ?? ""} className={styles.input} onChange={(e) => setProfilePicture(e.target.value)} />
                <label htmlFor="country">Pays</label>
                <select id="country" name="country" className={styles.input} value={newCountry ?? ""} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Aucun pays</option>
                    {Object.keys(countryCodeRecord).map((country, index) => {
                        return (
                            <option key={index} value={country}>
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