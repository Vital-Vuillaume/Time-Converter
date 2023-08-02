//------Pour que le site soit securise------\\

/*if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}*/

//------Element html------\\

const txt = document.querySelector(".txt");
const Maj = document.querySelector(".Maj");
const btn = document.querySelector(".btn");

//------Variable------\\

let texteMajuscule = "";

//------Mettre le texte dans l'autre partie en majuscule------\\

function txtDansTxtMaj() {
  const texte = txt.value;
  texteMajuscule = texte.toUpperCase();
  Maj.innerText = texteMajuscule;
}

//------Quand j'écris dans sa va directement sur l'autre partie------\\

txt.addEventListener("input", txtDansTxtMaj);

//------Le bouton copier-coller------\\

btn.onclick = function() {
  btn.classList.add("active");
  navigator.clipboard.writeText(texteMajuscule);

  setTimeout(function() {
    btn.classList.remove("active");
  }, 2500);
};