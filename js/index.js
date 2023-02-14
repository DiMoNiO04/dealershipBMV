//Скрол хедера изменение фона
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


//На странице услуги и сервис изменение значков плюс и минус
const coll = document.querySelectorAll('.service__collapsible')
const icon = document.querySelectorAll('.fa-plus')
for(let i = 0; i < coll.length; i++){
	coll[i].addEventListener('click', function(){
		let content = this.nextElementSibling;
		if(content.style.maxHeight){
			content.style.maxHeight = null;
			icon[i].classList.remove('fa-minus');
			icon[i].classList.add('fa-plus')
		}else{
			content.style.maxHeight = content.scrollHeight + 'px';
			icon[i].classList.remove('fa-plus');
			icon[i].classList.add('fa-minus')
		}
	})
}