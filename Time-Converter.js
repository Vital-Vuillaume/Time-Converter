//------Pour que le site soit securise------\\

if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}

//------Element html------\\

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

//------Constantes------\\

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

//------Fonction de calcul------\\

function performCalculation() {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;

  hours.innerText = `${calcHours.toFixed()} hours`;
  minutes.innerText = `${calcMinutes.toFixed()} minutes`;
  seconds.innerText = `${calcSeconds.toFixed()} seconds`;
}

//------Evenement clic sur le bouton de calcul------\\

calculateButton.addEventListener('click', performCalculation);

//------Evenement touche entrer dnas l'input------\\

dayInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    performCalculation();
  }
});

//------Nombre de caractere dans l'input------\\

function limitNumberLength(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
}
