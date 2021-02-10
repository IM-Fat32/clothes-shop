import React from 'react';

import {Link} from "react-router-dom";

import "./Categories.sass";

const mainCategories = [
  'bluzy', 'spodnie', 'swetry', 'kurtki', 'koszule', 'płaszcze', 'kamizelki', 't-shirty', 'spodenki', 'bielizna'
]

const htmlElements = mainCategories.map((category) => 
  <Link className="category__item" key={category} to={`/${category}`}>{category}</Link>
)

const Categories = () => {
  return ( 
    <>
      <div className="sex-navigate__container">
        saasdads
      </div>
      <div className="category__wrapper">
          {htmlElements}
      </div>
    </>
  );
}
 
export default Categories;