/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const p = document.getElementById("excuse");
  function randomSelect(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
    // console.log(arr[aleatorioArray]);
  }

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  p.innerHTML = generateExcuse(who, action, what, when);

  function generateExcuse(who, action, what, when) {
    let result =
      randomSelect(who) +
      " " +
      randomSelect(action) +
      " " +
      randomSelect(what) +
      " " +
      randomSelect(when);

    return result;
  }

  // write your code here

  // aleatorio(who);
  // //2 cobtener unaleatorio de un arreglo que es who
  // // 2.1 obtener un elemento del array --QUemado = no dinamico
  // console.log(who[2]);
  // // 2.2 obtener el elmento dinamico
  // // obtener la posicion dinamica de. who
  // let randomWho = Math.floor(Math.random() * who.length);
  // console.log(who[randomWho]);
  // // imprimir un elemnto dinamico de who
  // console.log(who[randomWho]);
  // // asassa;
  // // 3 cobtener unaleatorio de un arreglo que es action
  // let randomAction = Math.floor(Math.random() * action.length);
  // console.log(action[randomAction]);
  // // 4 cobtener unaleatorio de un arreglo que es what
  // let randomWhat = Math.floor(Math.random() * what.length);
  // console.log(what[randomWhat]);
  // // 5 cobtener unaleatorio de un arreglo que es when
  // let randomWhen = Math.floor(Math.random() * when.length);
  // console.log(when[randomWhen]);
  // // 6 juntar todo los aleatorio y enviarlo al html
  // let phrase =
  //   who[randomWho] +
  //   " " +
  //   action[randomAction] +
  //   " " +
  //   what[randomWhat] +
  //   " " +
  //   when[randomWhen];
  // console.log(phrase);
};
