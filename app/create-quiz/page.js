"use client"

import React from "react";
import "../CSS/globals.css";
import NavBar from "../../components/navbar/asidemenu";
import Image from "next/image";
import { getDataFromToken, getTokenFromSessionStorage } from "@/jwt";
import { useRouter } from "next/navigation";

export default function CreateQuiz() {

  const router = useRouter()

  var token;
  var idUser;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");

  async function sendData(e) {
    e.preventDefault();
    var data
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quiz/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          "title": title,
          "description": description,
          "created_at": new Date().toISOString(),
          "themes": category,
          "id_user": idUser,
          "id_game": 2
        }),
      });

      data = await response.json();
      router.push('/create-question?id=' + data.id);
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données à l\'API :', error);
    }
  }

  React.useEffect(() => {
    token = getTokenFromSessionStorage();
    if (!token) {
      router.push('/auth/login');
    } else {
      const tokenData = getDataFromToken(token)
      idUser = tokenData.sub
    }

  })

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
          <form className="quiz-form" onSubmit={sendData}>
            <label htmlFor="quiz-title" className="label">Titre du quiz:</label>
            <input type="text" id="quiz-title" name="quiz-title" onChange={(e) => setTitle(e.target.value)} required />

            <label htmlFor="quiz-description" className="label">Description:</label>
            <textarea
              id="quiz-description"
              name="quiz-description"
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>

            <label htmlFor="quiz-category" className="label">Catégorie:</label>
            <select id="quiz-category" name="quiz-category" onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Sélectionner une catégorie</option>
              <option value="Sport">Sport</option>
              <option value="Science">Science</option>
              <option value="Cinéma">Cinéma</option>
              <option value="Histoire">Histoire</option>
              <option value="Musique">Musique</option>
              <option value="Géographie">Géographie</option>
            </select>

            <button type="submit">
              Créer le quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
