/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#domain").innerHTML = domainGenerator(
    pronoun,
    adj,
    noun,
    ext
  );
};
var domainGenerator = (pron, adje, sust, exten) => {
  for (let i = 0; i < pron.length; i++) {
    for (let j = 0; j < adje.length; j++) {
      for (let k = 0; k < sust.length; k++) {
        for (let l = 0; l < exten.length; l++) {
          storeArrays.push("www." + pron[i] + adje[j] + sust[k] + exten[l]);
          //return "www." + pron[i] + adje[j] + sust[k] + exten[l];
        }
      }
    }
  }
  /* for (const key in storeArrays) {
    return storeArrays[key] + " <br > ";
  } */

  return storeArrays;
};
const pronoun = ["the", "our", "this", "yours"];
const adj = ["great", "big", "small", "stinky"];
const noun = ["jogger", "racoon", "door", "cat"];
const ext = [".com", ".org", ".es"];
const storeArrays = [];

console.log(domainGenerator);
