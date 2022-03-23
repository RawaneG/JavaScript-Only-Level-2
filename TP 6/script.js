const RANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';
const FILTER_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913';
const FILTER_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Brie';
const divPrincipale = document.querySelector('.div_principale');

fetch(RANDOM).then(element => 
{
    return element.json();
})
.then(element => 
{
    return element.meals[0];
})
.then(element => 
{   
    make(element.strMealThumb,element.strMeal,element.strInstructions);
    const ul = document.querySelector('ul');

    for (let i = 1; i < 21; i++) 
    {
        let li = '';
            li += element[`strIngredient${i}`];  
            if(li == '')
            {
                continue;
            }
            else
            {
                ul.innerHTML += '<li>' + li + '</li>';
            }
    }

    const generer = document.querySelector('#generer');
    const ouvrir = document.querySelector('.fa-heart');
    const fermer = document.querySelector('.fa-close');

    const description_container = document.querySelector('.description_papa');

    generer.addEventListener('click',() => 
    {
        
    })
    ouvrir.addEventListener('click',() => 
    {
        description_container.className = 'active';
    })
    fermer.addEventListener('click',() => 
    {
        description_container.className = 'description_papa';
    })

});

function make(image,nom,paragraphe) 
{
    const papa = document.createElement('div');
    papa.classList.add('papa');
        const fils = document.createElement('div');
        fils.classList.add('fils');
            const recherche = document.createElement('div');
            recherche.classList.add('recherche');
                const input = document.createElement('input');
                input.setAttribute('type','text');
                const rechercheIcon = document.createElement('i');
                rechercheIcon.classList.add('fa','fa-search');
            recherche.append(input,rechercheIcon);
            const recette = document.createElement('div');
            recette.classList.add('recette');
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image');
                    const recetteGenerer = document.createElement('h3');
                    recetteGenerer.innerText = 'Générer une recette';
                    recetteGenerer.setAttribute('id','generer');
                    const recetteAleatoire = document.createElement('img');
                    recetteAleatoire.setAttribute('src',image);
                imageContainer.append(recetteGenerer,recetteAleatoire);
                const detailsImage = document.createElement('div');
                detailsImage.classList.add('image_details');
                    const detailsImageTitre = document.createElement('h3');
                    detailsImageTitre.innerText = nom;
                    const detailsImageIcone = document.createElement('i');
                    detailsImageIcone.classList.add('fa','fa-heart');
                detailsImage.append(detailsImageTitre,detailsImageIcone);
            recette.append(imageContainer,detailsImage);
            const popupDad = document.createElement('div');
            popupDad.classList.add('description_papa');
                const popup = document.createElement('div');
                popup.classList.add('description');
                    const popupTitle = document.createElement('div');
                    popupTitle.classList.add('titre');
                        const popupClose = document.createElement('div');
                        popupClose.classList.add('close');
                            const popupIcone = document.createElement('i');
                            popupIcone.classList.add('fa','fa-close');
                        popupClose.append(popupIcone);
                        const popupName = document.createElement('h2');
                        popupName.innerHTML = nom;
                    popupTitle.append(popupClose,popupName);
                    const popupDescription = document.createElement('div');
                    popupDescription.classList.add('description_image');
                        const descriptionImage = document.createElement('img');
                        descriptionImage.setAttribute('src', image);
                        const descriptionTexte = document.createElement('p');
                        descriptionTexte.innerText = paragraphe;
                    popupDescription.append(descriptionImage,descriptionTexte);
                    const popupIngredients = document.createElement('div');
                    popupIngredients.classList.add('ingredients');
                        const ingredientsTitle = document.createElement('h3');
                        ingredientsTitle.innerText = 'Ingrédients';
                        const ingredientsListe = document.createElement('ul');
                    popupIngredients.append(ingredientsTitle,ingredientsListe);
                    popup.append(popupTitle,popupDescription,popupIngredients);
            popupDad.append(popup);
        fils.append(recherche,recette,popupDad);
    papa.append(fils);
    divPrincipale.append(papa);    
}

