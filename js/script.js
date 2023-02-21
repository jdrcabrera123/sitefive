const signup_btn = document.querySelector('.signup_btn') 
const loginBtn = document.querySelector('.login');
const signup = document.querySelector('.signup');
const short__icon = document.querySelector('.short__icon')
const left__arrow = document.querySelector('.left__arrow')
const signUpBtnBigScreen = document.querySelector('.signUpBtnBigScreen')
const login = document.querySelector('.login')
const yellowShapeBg = document.querySelector('.yellowShapeBg')
const paragraphOne = document.querySelector('.paragraphOne')


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
    yellowShapeBg.classList.remove('active')
    signUpBtnBigScreen.classList.remove('active')
    paragraphOne.classList.remove('active')
})

signUpBtnBigScreen.addEventListener('click', (e)=>{
    e.preventDefault()
    login.classList.add('active')
    yellowShapeBg.classList.add('active')
    short__icon.classList.add('active')
    signup.classList.add('active')
    signUpBtnBigScreen.classList.add('active')
    paragraphOne.classList.add('active')
    
})

