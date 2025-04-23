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
        <Image
            src="/profile.png"
            alt="Profile"
            className="logo-nav"
            width={100}
            height={100}
          />
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/quiz">Quiz</a>
        </li>
        <li>
          <a href="/classement">Classement</a>
        </li>
        <button className="create-quiz">
          <a href="/create-quiz">Créer un quiz</a>
        </button>
      </ul>
    </nav>
  );
}
