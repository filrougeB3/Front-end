import Image from "next/image";
import Link from 'next/link';
import NavBar from "../components/asidemenu";
import "../app/CSS/globals.css";

export default function Home() {
  const fakeQuizzes = [
    { id: 1, title: "Quiz Football", author: "Admin" },
    { id: 2, title: "Culture Générale", author: "Marie" },
    { id: 3, title: "Histoire de France", author: "Jean" },
  ];

  const fakeCategories = [
    "Sport",
    "Science",
    "Cinéma",
    "Histoire",
    "Musique",
  ];
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="logo">
          <Image
            src="/images/titre-noledge.png"
            alt="A ledge"
            width={300}
            height={300}
          />
        </div>
        <div className="popular-quiz">
          <h2>Quiz populaires</h2>       
          <div className="quiz-list">
            {fakeQuizzes.map((quiz) => (
              <div key={quiz.id} className="quiz-item">
                <Link href={`/quiz/${quiz.id}`}>
                  <h3>{quiz.title}</h3>
                </Link>
                <p>Créé par {quiz.author}</p>
              </div>
            ))}
          </div>
          <h2>Catégories</h2>
          <div className="category-list">
            {fakeCategories.map((category, index) => (
              <div key={index} className="category-item">
                <Link href={`/categories/${category}`}>
                  <h3>{category}</h3>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
  );
}
