const play = document.querySelector('.play')
const xbox = document.querySelector('.xbox')
const container = document.querySelector('.container')



play.addEventListener('mouseenter', () => container.classList.add('hover-left'))
play.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

xbox.addEventListener('mouseenter', () => container.classList.add('hover-right'))
xbox.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

