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


//Активная ссылка в сайдбаре
const sidebar = document.querySelector('.sidebar__list')
const sidebarItems = document.querySelectorAll('.sidebar__item')


const q = (index) => {
	for(let i = 0; i<sidebarItems.length; i++){
		sidebarItems[i].classList.remove('sidebar__item-active')
	}
	sidebarItems[index].classList.add('sidebar__item-active')
}


sidebar.addEventListener('click',  e => {
	let id = e.target.id
	for(let i = 0; i<sidebarItems.length; i++){
		sidebarItems[i].classList.remove('sidebar__item-active')
	}
	sidebarItems[id].classList.add('sidebar__item-active')
})