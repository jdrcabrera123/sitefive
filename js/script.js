const signup_btn = document.querySelector('.signup_btn') 
const loginBtn = document.querySelector('.login');
const signup = document.querySelector('.signup');
const short__icon = document.querySelector('.short__icon')
const left__arrow = document.querySelector('.left__arrow')


signup_btn.addEventListener('click', (e)=>{
    e.preventDefault()
    loginBtn.classList.add('active')
    signup.classList.add('active')
    short__icon.classList.add('active')
})

left__arrow.addEventListener('click', ()=>{
    loginBtn.classList.remove('active')
    signup.classList.remove('active')
    short__icon.classList.remove('active')
})