"use client"

import NavBar from "@/components/asidemenu"
import styles from "../CSS/profile.module.css";
import { countryCodeRecord } from "@/components/CountryCode";
import { CgProfile } from "react-icons/cg";
import Popup from "reactjs-popup";
import { DeleteAccount, EditPassword, EditProfile } from "@/components/popup";
import 'reactjs-popup/dist/index.css';
import { getDataFromToken, getTokenFromLocalStorage } from "@/jwt";
import { useRouter } from "next/navigation";
import React from "react";


export default function Profile() {

    const token = getTokenFromLocalStorage()
    const router = useRouter()
    const friends = []
    const [user, setUser] = React.useState({
        pseudo: "",
        email: "",
        country: null,
        profile_picture_url: null,
    });

    async function getUser() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })
            const data = await response.json();
            setUser(data)
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API :', error);
        }
    }

    React.useEffect(() => {
        getUser()
    }, [])


    if (!token) {
        router.push('/auth/login')
        return null;
    }

    return (
        <main className={styles.page}>
            <NavBar />
            <div className={styles.profileGroup}>
                <img src="/images/logo_noledge.png" alt="Logo" width={200} />
                <div className={styles.profile}>
                    <div className={styles.user}>
                        {user.profile_picture_url == null ?
                            <CgProfile size={100} color="#000" />
                            :
                            <img src={user.profile_picture_url} className={styles.profilepicture} width={100} height={100} />
                        }
                        <div className={styles.info}>
                            <p className={styles.pseudo}>{user.pseudo}</p>
                            <p className={styles.email}>{user.email}</p>
                        </div>
                    </div>
                    {user.country == null ?
                        <img src="/images/world.png" width={90} height={60} />
                        :
                        <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCodeRecord[user.country]}.svg`} width={90} height={60} />
                    }
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
                            <Popup trigger={<button className={styles.edit}>Modifier le profil</button>} modal contentStyle={{ width: 'auto', background: 'transparent', border: 'none' }}>
                                {close => (
                                    <EditProfile
                                        pseudo={user.pseudo}
                                        email={user.email}
                                        userCountry={user.country}
                                        userPicture={user.profile_picture_url}
                                        refreshUser={getUser}
                                        onClose={close}
                                    />
                                )}
                            </Popup>
                            <Popup trigger={<button className={styles.edit}>Modifier le mot de passe</button>} modal contentStyle={{ width: 'auto', background: 'transparent', border: 'none' }}>
                                <EditPassword />
                            </Popup>
                            <Popup trigger={<button className={styles.delete}>Supprimer le compte</button>} modal contentStyle={{ width: 'auto', background: 'transparent', border: 'none' }}>
                                <DeleteAccount />
                            </Popup>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}