/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!" + randomNumber);
};

let generateExcuse = function() {
  let pronum = ["A", "The"];
  let suibject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proindx = Math.floor(Math.random() * pronum.length);
  let suibindx = Math.floor(Math.random() * suibject.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let possetionindx = Math.floor(Math.random() * possetion.length);
  let whereindx = Math.floor(Math.random() * where.length);

  return (
    pronum[proindx] +
    " " +
    suibject[suibindx] +
    " " +
    action[actionindx] +
    " " +
    possetion[possetionindx] +
    " " +
    where[whereindx]
  );
};
