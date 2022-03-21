const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const papa = document.querySelector('.movies');
const input = document.querySelector('input');

function fetchingAPI(element)
{
    fetch(element).then(function (reponse)
    {
        return reponse.json();
    })
    .then(function(reponseJson)
    {
        reponseJson.results.forEach(element => 
            {
                let image = IMGPATH + element.backdrop_path;
                creerDiv(image ,element.original_title,element.vote_average,element.overview);
            });
    });
}

function creerDiv(imageClass, contenuPara, voteContenu, descriptionContenu)
{
    const conteneur = document.createElement('div');
    conteneur.classList.add('image');
    const image = document.createElement('img');
    image.setAttribute('src', imageClass);
    const divText = document.createElement('div');
    divText.classList.add('text');
    const para = document.createElement('p');
    para.innerText = contenuPara;
    const vote = document.createElement('span');
    vote.classList.add('rate');
    vote.innerText = voteContenu;
    if(vote.innerHTML >= 7)
    {
        vote.classList.add('green');
    }
    else if(vote.innerHTML >= 4)
    {
        vote.classList.add('yellow');
    }
    else
    {
        vote.classList.add('red');
    }
    const description = document.createElement('div');
    description.classList.add('description');
    const descriptionTitre = document.createElement('h4');
    descriptionTitre.innerText = 'Overview : ';
    const descriptionPara = document.createElement('p');
    descriptionPara.innerText = descriptionContenu;

    description.append(descriptionTitre,descriptionPara);
    divText.append(para,vote);
    conteneur.append(image,divText,description);
    papa.appendChild(conteneur);
}
fetchingAPI(APIURL);

input.addEventListener('input', () => 
{
    papa.innerHTML = '';
    let valeur = input.value;
    fetchingAPI(SEARCHAPI + valeur);
});



