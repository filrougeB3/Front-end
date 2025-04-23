import Image from "next/image";
import styles from "./CSS/page.module.css";
import Link from 'next/link';
import NavBar from "./asidemenu";
import "../app/CSS/globals.css";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="logo">
          <Image
            src="/images/titre-noledge.png"
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
