import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <nav>
        <ul className="nav">
          <Image
            src="/logo_noledge.png"
            alt="A ledge"
            className="logo-nav"
            width={100}
            height={100}
          />
          <li>
            <a href="/accueil">Accueil</a>
          </li>
          <li>
            <a href="/quiz">Quiz</a>
          </li>
          <li>
            <a href="/classement">Classement</a>
          </li>
          <li>
            <a href="/connexion">Connexion</a>
          </li>
          <li>
            <a href="/inscription">Inscription</a>
          </li>
          <button className="create-quiz">
            <a>Créer un quiz</a>
          </button>
        </ul>
      </nav>
      <div className="content">
        <div className="logo">
          <Image
            src="/titre-noledge.png"
            alt="A ledge"
            width={400}
            height={300}
          />
        </div>
        <div className="popular-quiz">
          <h2>Quiz populaires</h2>
          <h2>Catégories</h2>
        </div>
      </div>
    </div>
  );
}
