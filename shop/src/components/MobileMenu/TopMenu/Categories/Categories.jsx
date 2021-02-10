import React, {useState} from 'react';

import {Link, NavLink} from "react-router-dom";

import "./Categories.sass";

const mainCategories = [
  'bluzy', 'spodnie', 'swetry', 'kurtki', 'koszule', 'płaszcze', 'kamizelki', 't-shirty', 'spodenki', 'bielizna'
]

const Categories = () => {
  const [sexIndex, setSexIndex] = useState(0);
  const sexArray = ["man", "woman", "kid"];
  const image = require(`../../../../img/${sexArray[sexIndex]}.jpg`);

  const htmlElements = mainCategories.map((category) => 
  <Link className="category__item" key={category} to={`/${sexArray[sexIndex]}/${category}`}>{category}</Link>
)
  function handleSetSexState(number) {
    setSexIndex(number);
  }

  function setClasses(number) {
    handleSetSexState(number);
    const menu = document.querySelectorAll(".sex-navigate__container ul li");
    for(let i = 0; i < menu.length; i++) {
      menu[i].className="";
      if(number === i){
       menu[i].className="active";
      }
    }
  }

  return ( 
    <div className="categories__wrapper">
      <div className="sex-navigate__container">
        <img src={image.default} alt="background-people"/>
        <ul>
          <li className="active" onClick={setClasses.bind(this, 0)}>Mężczyzna</li>
          <li onClick={setClasses.bind(this, 1)}>Kobieta</li>
          <li onClick={setClasses.bind(this, 2)}>Dziecko</li>
        </ul>
      </div>
      <div className="category__wrapper">
          {htmlElements}
      </div>
    </div>
  );
}
 
export default Categories;