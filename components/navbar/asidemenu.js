import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <Image
          src="/images/logo_noledge.png"
          alt="A ledge"
          className="logo-nav"
          width={100}
          height={100}
        />
        <Link href="/profil">
          <Image
            src="/images/profile.png"
            alt="Profile"
            className="logo-nav"
            width={100}
            height={100}
          />
        </Link>

        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/scoreboard">Classement</a>
        </li>
        <button className="create-quiz">
          <a href="/create-quiz">Créer un quiz</a>
        </button>
      </ul>
    </nav>
  );
}
