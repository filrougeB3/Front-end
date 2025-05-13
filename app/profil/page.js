"use client"

import NavBar from "@/components/asidemenu"
import styles from "../CSS/profile.module.css";
import { countryCodeRecord } from "@/components/CountryCode";
import { CgProfile } from "react-icons/cg";
import Popup from "reactjs-popup";
import { DeleteAccount, EditPassword, EditProfile } from "@/components/popup";
import 'reactjs-popup/dist/index.css';

export default function Profile() {

    const user = { pseudo: "JohnDoe", email: "johndoe@gmail.com", country: "France" }
    const friends = []

    return (
        <main className={styles.page}>
            <NavBar />
            <div className={styles.profileGroup}>
                <img src="/images/logo_noledge.png" alt="Logo" width={200} />
                <div className={styles.profile}>
                    <div className={styles.user}>
                        <CgProfile size={100} color="#000" />
                        <div className={styles.info}>
                            <p className={styles.pseudo}>{user.pseudo}</p>
                            <p className={styles.email}>{user.email}</p>
                        </div>
                    </div>
                    <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCodeRecord[user.country]}.svg`} width={90} height={60} />
                </div>
                <div className={styles.bottom}>
                    <div className={styles.friendsList}>
                        <h2>Amis ({friends.length})</h2>
                        {friends.length > 0 ? friends.map((friend, index) => {
                            return (
                                <div className={styles.friend} key={index}>
                                    <p>{friend.pseudo}</p>
                                </div>
                            )
                        }) : <p>Aucun ami enregistré</p>}

                    </div>
                    <div>
                        <h2>Paramètres du compte</h2>
                        <div className={styles.settings}>
                            <Popup trigger={<button className={styles.edit}>Modifier le profil</button>} modal contentStyle={{width: 'auto', background: 'transparent', border: 'none'}}>
                                <EditProfile />
                            </Popup>
                            <Popup trigger={<button className={styles.edit}>Modifier le mot de passe</button>} modal contentStyle={{width: 'auto', background: 'transparent', border: 'none'}}>
                                <EditPassword />
                            </Popup>
                            <Popup trigger={<button className={styles.delete}>Supprimer le compte</button>} modal contentStyle={{width: 'auto', background: 'transparent', border: 'none'}}>
                                <DeleteAccount />
                            </Popup>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}