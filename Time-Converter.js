// Constantes

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Fonction de calcul

function performCalculation() {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;

  hours.innerText = `${calcHours.toFixed()} hours`;
  minutes.innerText = `${calcMinutes.toFixed()} minutes`;
  seconds.innerText = `${calcSeconds.toFixed()} seconds`;
}

// Événement clic sur le bouton de calcul

calculateButton.addEventListener('click', performCalculation);

// Événement "keydown" sur le champ de texte

dayInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    performCalculation();
  }
});

//Nombre de caractère dans l'input

function limitNumberLength(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
}