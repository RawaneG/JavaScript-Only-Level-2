const btnGauche = document.getElementById('btn_gauche');
const btnDroite = document.getElementById('btn_droite');
const images = document.querySelectorAll('img');
let imageActuel = 0;

btnGauche.addEventListener('click', imagePrecedente);
btnDroite.addEventListener('click', imageSuivante);

function imageSuivante()
{
    images[imageActuel].classList.remove('active');

    if(imageActuel < images.length - 1)
    {
        imageActuel++;
    }
    else
    {
        imageActuel = 0
    }

    images[imageActuel].classList.add('active');
}

function imagePrecedente()
{
    images[imageActuel].classList.remove('active');

    if(imageActuel > 0)
    {
        imageActuel--;
    }
    else
    {
        imageActuel = images.length-1;
    }
    
    images[imageActuel].classList.add('active');
}

setInterval(() => { imageSuivante() }, 5000 );