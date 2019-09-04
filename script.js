const contactForm = document.querySelector('#contact-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const titleInput = document.querySelector('#title');

const messageInput = document.querySelector('#message');

const msg = document.querySelector('.msg');


contactForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value.length < 4){
        msg.classList.add('error');
        msg.innerHTML = 'Name must be at least 4 characters';

        setTimeout(() => msg.remove (), 5000);
    }

    if(messageInput.value.length < 20){
        msg.classList.add('error');
        msg.innerHTML = 'Message must be at least 20 characters';

        setTimeout(() => msg.remove (), 5000);
    }
}