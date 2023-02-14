const header = document.querySelector('.header')
const headerContainer = document.querySelector('.header__container')
const headerLogout = document.querySelector('.header__logout') 

window.onscroll = () => {
	if(window.pageYOffset > 30){
		header.classList.add('header__scroll')
		headerContainer.classList.add('header__container__scrool');
		headerLogout.classList.add('header__logout__scroll')
	}else{
		header.classList.remove('header__scroll')
		headerContainer.classList.remove('header__container__scrool');
		headerLogout.classList.remove('header__logout__scroll')
	}
}