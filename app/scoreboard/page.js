import NavBar from '../asidemenu';
import styles from '../CSS/scoreboard.module.css';

export default function Scoreboard() {
    const dataTest = [{ pseudo: "Pseudo1", score: 100 }, { pseudo: "Pseudo2", score: 200 }, { pseudo: "Pseudo3", score: 300 }, { pseudo: "Pseudo4", score: 400 }, { pseudo: "Pseudo5", score: 500 }, { pseudo: "Pseudo6", score: 600 }, { pseudo: "Pseudo7", score: 700 }, { pseudo: "Pseudo8", score: 800 }, { pseudo: "Pseudo9", score: 900 }, { pseudo: "Pseudo10", score: 1000 }];

    return (
        <main className={styles.page}>
            <NavBar />
            <div className={styles.scoreboardGroup}>
                <img src="/images/page_logo.png" alt="Logo" width={200} />
                <div className={styles.scoreboard}>
                    {dataTest.sort((a, b) => {
                        return b.score - a.score;
                    }).map((data, index) => {
                        return (
                            <div className={styles.score} key={index}>
                                <p>{index + 1}</p>
                                <p>{data.pseudo}</p>
                                <p>{data.score}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


        </main>
    )
}