/** @format */

const footerYear = document.querySelector('.footer__year')
const btn = document.querySelector('.return')
const cookieBox = document.querySelector('.cookie__box')
const cookieBtn = document.querySelector('#btn')
let root = document.documentElement

// ----------------------------------Rok w footer---------------------------------------------------------

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

const handleScroll = () => {
	const scroll = window.scrollY
	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight

	const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)

	if (scrollBarWidth > 10) {
		btn.classList.add('active')
	} else btn.classList.remove('active')
}

const handleScrollTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	})
}

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

window.addEventListener('scroll', handleScroll)
btn.addEventListener('click', handleScrollTop)
cookieBtn.addEventListener('click', handleCookieBox)
showCookie()
