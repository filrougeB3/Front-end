import React, { Suspense } from "react";
import CategoriesList from "./CategoriesList";


export default function Categories() {
  return (
      <Suspense fallback={<p>Chargement des Catégories...</p>}>
        <CategoriesList />
      </Suspense>
  );
}