const RANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';
const FILTER_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const FILTER_NAME = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const divPrincipale = document.querySelector('.div_principale');
let i = 0;

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
    makeContent(element.strMealThumb,element.strMeal,element.strInstructions);
    const ul = document.querySelector('ul');

    for (let i = 1; i < 21; i++) 
    {
        let li = '';
            li += element[`strIngredient${i}`];  
            if(li === '' || li === null || li === 'null')
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
    const input = document.querySelector('input');

    generer.addEventListener('click',() => 
    {
        document.location.reload(true);
    })
    ouvrir.addEventListener('click',() => 
    {
        description_container.className = 'active';
    })
    fermer.addEventListener('click',() => 
    {
        description_container.className = 'description_papa';
    })

    input.addEventListener('input',() => 
    {
        let entree = input.value.trim();
        fetch(FILTER_NAME + entree).then(element => 
            {
                return element.json();
            })
            .then(element => 
            {
                element.meals.forEach(element => 
                    {   
                        makeRecette(element.strMealThumb,element.strMeal,element.strInstructions);
                        const ul = document.querySelector(`#ul${i}`);
                        console.log(ul)
                        for (let i = 1; i < 21; i++) 
                        {
                            let li = '';
                                li += element[`strIngredient${i}`];  
                                if(li == '' || li === null)
                                {
                                    continue;
                                }
                                else
                                {
                                    ul.innerHTML += '<li>' + li + '</li>';
                                }
                        }
                        i++;

                        
                        const ouvrir = document.querySelectorAll('.fa-heart');
                        const fermer = document.querySelectorAll('.fa-close');
                        const description_container = document.querySelectorAll('.description_papa');
                        
                        for (let i = 0; i < ouvrir.length; i++) 
                        {
                            ouvrir[i].addEventListener('click',() => 
                            {
                                description_container[i].className = 'active';
                            })   
                        }
                        for (let i = 0; i < fermer.length; i++) 
                        {
                            fermer[i].addEventListener('click',() => 
                            {
                                description_container[i].className = 'description_papa';
                            })
                        }
                    });
            })
    })


});

function makeContent(image,nom,paragraphe) 
{
    const papa = document.createElement('div');
    papa.classList.add('papa');
        const fils = document.createElement('div');
        fils.classList.add('fils');
        const recetteContainer = document.createElement('div');
        recetteContainer.classList.add('recette_container');
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
        recetteContainer.append(recette,popupDad);
        fils.append(recherche,recetteContainer);
    papa.append(fils);
    divPrincipale.append(papa);    
}
function makeRecette(image,nom,paragraphe) 
{
    let papa = document.createElement('div');
    papa.classList.add('papa');
        let fils = document.createElement('div');
        fils.classList.add('fils');
        let recetteContainer = document.createElement('div');
        recetteContainer.classList.add('recette_container');
            let recette = document.createElement('div');
                recette.classList.add('recette');
                let imageContainer = document.createElement('div');
                imageContainer.classList.add('image');
                    let recetteAleatoire = document.createElement('img');
                    recetteAleatoire.setAttribute('src',image);
                imageContainer.append(recetteAleatoire);
                let detailsImage = document.createElement('div');
                detailsImage.classList.add('image_details');
                    let detailsImageTitre = document.createElement('h3');
                    detailsImageTitre.innerText = nom;
                    let detailsImageIcone = document.createElement('i');
                    detailsImageIcone.classList.add('fa','fa-heart');
                detailsImage.append(detailsImageTitre,detailsImageIcone);
            recette.append(imageContainer,detailsImage);
            let popupDad = document.createElement('div');
            popupDad.classList.add('description_papa');
                let popup = document.createElement('div');
                popup.classList.add('description');
                    let popupTitle = document.createElement('div');
                    popupTitle.classList.add('titre');
                        let popupClose = document.createElement('div');
                        popupClose.classList.add('close');
                            let popupIcone = document.createElement('i');
                            popupIcone.classList.add('fa','fa-close');
                        popupClose.append(popupIcone);
                        let popupName = document.createElement('h2');
                        popupName.innerHTML = nom;
                    popupTitle.append(popupClose,popupName);
                    let popupDescription = document.createElement('div');
                    popupDescription.classList.add('description_image');
                        let descriptionImage = document.createElement('img');
                        descriptionImage.setAttribute('src', image);
                        let descriptionTexte = document.createElement('p');
                        descriptionTexte.innerText = paragraphe;
                    popupDescription.append(descriptionImage,descriptionTexte);
                    let popupIngredients = document.createElement('div');
                    popupIngredients.classList.add('ingredients');
                        let ingredientsTitle = document.createElement('h3');
                        ingredientsTitle.innerText = 'Ingrédients';
                        let ingredientsListe = document.createElement('ul');
                        ingredientsListe.setAttribute('id',`ul${i}`);
                    popupIngredients.append(ingredientsTitle,ingredientsListe);
                    popup.append(popupTitle,popupDescription,popupIngredients);
                popupDad.append(popup);
        recetteContainer.append(recette,popupDad);
        fils.append(recetteContainer)
    papa.append(fils)
    divPrincipale.append(papa)
}


