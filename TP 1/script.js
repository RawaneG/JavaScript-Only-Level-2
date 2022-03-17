const divPrincipale = document.querySelector('.div_principale');
const success = document.querySelector('.success');
const danger = document.querySelector('.danger');
const warning = document.querySelector('.warning');
const info = document.querySelector('.info');

success.addEventListener('click',() => 
{
    creationNotif('success_message','Succès !!!');
});
danger.addEventListener('click',() => 
{
    creationNotif('danger_message','Danger !!!');
});
warning.addEventListener('click',() => 
{
    creationNotif('warning_message','Attention !!!');
});
info.addEventListener('click',() => 
{
    creationNotif('info_message','Information !!!');
});

function creationNotif(typeMessage,para)
{
    let notification = document.createElement('div');
    notification.setAttribute('class','notification');
    let message = document.createElement('div');
    message.setAttribute('class', typeMessage);
    let paragraphe = document.createElement('p');
    paragraphe.innerHTML = para;
    message.appendChild(paragraphe);
    notification.appendChild(message);
    divPrincipale.appendChild(notification);
    notification.style.transition = '0.3s ease-in-out';
    setTimeout(() => {
        notification.remove();
    }, 1000);
}
