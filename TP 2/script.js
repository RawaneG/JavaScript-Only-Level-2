const bouton = document.getElementById('bouton');
const menu = document.querySelector('.menu');
let liste = document.createElement('div');
liste.setAttribute('class', 'liste');

bouton.addEventListener('click', () => 
{
    menu.classList.toggle('menu');
    menu.classList.toggle('active');
});
let tableau =
    [
        {
            titre: "Dashboard",
            className: 'tableauDeBord',
            liste: ['Dashboard v1', 'Dashboard v2', 'Dashboard v3'],
            iconePrincipal: 'fa fa-tachometer-alt',
            angleLeft: 'fa fa-angle-left',
            angleDown: 'fa fa-angle-down'
        },
        {
            titre: "Widgets",
            className: 'widgets',
            liste: [],
            iconePrincipal: 'fa fa-th aria-hidden="true"',
            angleLeft: 'fa fa-angle-left',
            angleDown: 'fa fa-angle-down'
        },
        {
            titre: "Layout Options",
            className: 'layoutOptions',
            liste: ['ChartJS', 'Flot', 'Inline', 'uPlot'],
            iconePrincipal: 'fas fa-copy',
            angleLeft: 'fa fa-angle-left',
            angleDown: 'fa fa-angle-down'
        },
        {
            titre: "Charts",
            className: 'charts',
            liste: [],
            iconePrincipal: 'fas fa-chart-pie',
            angleLeft: 'fa fa-angle-left',
            angleDown: 'fa fa-angle-down'
        },
        {
            titre: "UI Elements",
            className: 'ui_Elements',
            liste: [],
            iconePrincipal: 'fas fa-tree',
            angleLeft: 'fa fa-angle-left',
            angleDown: 'fa fa-angle-down'
        },
        {
            titre: "Forms",
            className: 'forms',
            liste: [],
            iconePrincipal: 'fas fa-edit',
            angleLeft: 'fa fa-angle-left',
            angleDown: 'fa fa-angle-down'
        },
        {
            titre: "Tables",
            className: 'tables',
            liste: [],
            iconePrincipal: 'fas fa-table',
            angleLeft: 'fa fa-angle-left',
            angleDown: 'fa fa-angle-down'
        }
    ];

for (let i = 0; i < tableau.length; i++) 
{
    let divPrincipal = document.createElement('div');
    divPrincipal.classList.add(tableau[i].className, 'principal');
    let icone_principal = document.createElement('i');
    icone_principal.setAttribute('class', tableau[i].iconePrincipal);
    let ensemble_icon = document.createElement('div');
    ensemble_icon.setAttribute('class', 'ensemble_icon');
    let currentElement = document.createElement('span');
    currentElement.innerHTML = tableau[i].titre;
    let count = document.createElement('div');
    count.setAttribute('class', 'count');
    let countSpan = document.createElement('span');
    let newSpan = document.createElement('span');
    let angleLeft = document.createElement('i');
    angleLeft.setAttribute('class', tableau[i].angleLeft);
    angleLeft.className += ' arrowLeft';
    let angleDown = document.createElement('i');
    angleDown.setAttribute('class', tableau[i].angleDown);
    let miniMenu = document.createElement('div');
    miniMenu.classList.add('mini_menu');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    for(let j = 0; j < tableau[i].liste.length; j++)
    {   
        li.innerHTML += 
        `<a href="">
        <span class="circle"></span>
        <span>${tableau[i].liste[j]}</span>
        </a>`;
    }
    ul.appendChild(li);
    miniMenu.appendChild(ul);
    angleDown.classList.add('angle_invisible');
    count.appendChild(countSpan);
    count.appendChild(newSpan);
    count.appendChild(angleDown);
    count.appendChild(angleLeft);
    ensemble_icon.appendChild(currentElement);
    ensemble_icon.appendChild(count);
    divPrincipal.appendChild(icone_principal);
    divPrincipal.appendChild(ensemble_icon);

    if (divPrincipal.className == 'tableauDeBord principal') 
    {
        divPrincipal.classList.add('bg_color');
    }
    if (divPrincipal.className == 'widgets principal') 
    {
        newSpan.innerHTML = 'New';
        newSpan.classList.add('new');
        angleLeft.remove();
    }
    if (divPrincipal.className == 'layoutOptions principal') 
    {
        countSpan.innerHTML = tableau[i].liste.length;
        countSpan.classList.add('counter');
    }
    liste.appendChild(divPrincipal);
    liste.appendChild(miniMenu);
    menu.appendChild(liste);
}

let principal = document.querySelectorAll('.principal');
let miniMenu = document.querySelectorAll('.mini_menu');
let angleDown = document.querySelectorAll('.angle_invisible');
let angleLeft = document.querySelectorAll('.arrowLeft');

principal[0].addEventListener('mouseover',() => 
{
    if(menu.className == 'active')
    {
        menu.classList.remove('active');
        menu.classList.add('menu');
    }
});

principal.forEach(element => 
    {
        element.addEventListener('click',() =>
        {
            let menu = element.nextElementSibling;
            console.log(element);
            menu.classList.toggle('activated');
            menu.classList.toggle('mini_menu');
        })
    });