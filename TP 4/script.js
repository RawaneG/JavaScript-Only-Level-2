let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.seconds');

// On recueille la date qu'on veut obtenir en millisecondes ici la date est le 1er janvier 2023
let countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

let x = setInterval(() =>  
{
    // On recueille la date actuelle en millisecondes
    let now = new Date().getTime();
        
    // On effectue la différence entre la date qu'on veut obtenir et la date actuelle 
    let distance = countDownDate - now;
        
    // On convertit les jours, heures, minutes et secondes en secondes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // On affecte les différentes valeurs aux contenus html en l'occurence les h5
        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
        
    // Si le compteur est atteint la fonction setInterval est annulée et on affiche un message
    if (distance < 0) 
        {
            clearInterval(x);
            document.querySelector(".time").innerHTML = "Bonne Année !!!";
        }
}, 1000);