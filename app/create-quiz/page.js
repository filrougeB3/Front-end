import React from "react";
import "../CSS/globals.css";
import NavBar from "../../components/asidemenu";
import Image from "next/image";

export default function CreateQuiz() {
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
        <div className="create-quiz-form">
          <h1>Créer un quiz</h1>
          <form className="quiz-form">
            <label htmlFor="quiz-title">Titre du quiz:</label>
            <input type="text" id="quiz-title" name="quiz-title" required />

            <label htmlFor="quiz-description">Description:</label>
            <textarea
              id="quiz-description"
              name="quiz-description"
              required
            ></textarea>

            <label htmlFor="quiz-category">Catégorie:</label>
            <select id="quiz-category" name="quiz-category" required>
              <option value="">Sélectionner une catégorie</option>
              <option value="sport">Sport</option>
              <option value="science">Science</option>
              <option value="cinema">Cinéma</option>
              <option value="histoire">Histoire</option>
              <option value="musique">Musique</option>
            </select>

            <button type="submit">
                <a href="/create-quiz/create-question">Créer le quiz</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
