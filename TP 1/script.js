const divPrincipale = document.querySelector('.div_principale');
const conteneur = document.querySelector('.conteneur');
const boutons = document.querySelectorAll('button');

for(let i = 0; i < boutons.length; i++)
{
    if(i == 0)
    {
        boutons[i].setAttribute('class','success');
    }
    if(i == 1)
    {
        boutons[i].setAttribute('class','danger');
    }
    if(i == 2)
    {
        boutons[i].setAttribute('class','warning');
    }
    if(i == 3)
    {
        boutons[i].setAttribute('class','info');
    }
    boutons[i].addEventListener('click',() => 
    {
        switch (boutons[i].className) 
        {
            case 'success':
                creationNotif('success_message','Succès !!!');
                break;
            case 'danger':
                    creationNotif('danger_message','Danger !!!');
                break;
            case 'warning':
                    creationNotif('warning_message','Attention !!!');
                break;
            case 'info':
                    creationNotif('info_message','Information !!!');
                break;
        }
    })
}

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
    conteneur.appendChild(notification);
    setTimeout(() => 
    {
        notification.remove();
    }, 1000);
}
