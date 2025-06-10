"use client"

import Image from "next/image";
import Link from 'next/link';
import NavBar from "../components/navbar/asidemenu";
import "../app/CSS/globals.css";
import React from "react";

export default function Home() {

  const [quizzes, setQuizzes] = React.useState([]);

  async function getQuiz() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quiz`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json();
      setQuizzes(data)
    }
    catch (error) {
      console.error('Erreur lors de la récupération des données de l\'API :', error);
    }
  }

  React.useEffect(() => {
    getQuiz()
  }, [])

  const categories = [
    "Sport",
    "Science",
    "Cinéma",
    "Histoire",
    "Musique",
    "Géographie"
  ];
  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="logo">
          <Image
            src="/images/logo_noledge.png"
            alt="A ledge"
            width={300}
            height={300}
          />
        </div>
        <div className="popular-quiz">
          <h2>Quiz populaires</h2>
          <div className="quiz-list">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="quiz-item">
                <Link href={`/quiz/${quiz.id}`}>
                  <h3>{quiz.title}</h3>
                </Link>
                <p>Créé par {quiz.pseudo}</p>
              </div>
            ))}
          </div>
          <h2>Catégories</h2>
          <div className="category-list">
            {categories.map((category, index) => (
              <Link href={`/categories?category=${category}`} key={index} className="category-item">
                <h3>{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
