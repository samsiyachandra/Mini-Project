const logrexbox = document.querySelector('.logrex-box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link')

registerLink.addEventListener('click', ()=> { logrexbox.classList.add('active');

})

loginLink.addEventListener('click', ()=> { logrexbox.classList.remove('active');
    
})