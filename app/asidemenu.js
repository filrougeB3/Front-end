import Image from "next/image";

export default function NavBar() {
  return (
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
        <button className="create-quiz">
          <a>Créer un quiz</a>
        </button>
      </ul>
    </nav>
  );
}
