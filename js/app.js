const holder = document.querySelector('.holder')
const content = document.querySelector('.content')
const arrowBtn = document.querySelector('.arrow-btn')
const select = document.querySelector('.change-lang')
const allLang = ['en', 'ru']

document.addEventListener('keydown', (event) => {
	event.preventDefault()
	if (event.code.toLowerCase() === 'space') {
		scrollTo(content)
	}
})

arrowBtn.addEventListener('click', () => {
	scrollTo(content)
})
function scrollTo(element) {
	window.scroll( {
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}

//Translate

select.addEventListener('change', changeURLLanguage)

// перенапраивть на ulr с указанием языка
function changeURLLanguage() {
	let lang = select.value
	location.href = window.location.pathname + '#'+lang
	location.reload()
}

function changeLanguage() {
	let hash = window.location.hash
	hash = hash.substr(1)
	
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#en'
		locantion.reload()
	}
	select.value = hash

	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key)
		if (elem) {
			elem.innerHTML = langArr[key][hash]
		}
		
	}
}

changeLanguage()

const bars = document.querySelectorAll('');
console.clear();

setInterval(function(){
  bars.forEach(function(bar){
    const getWidth = parseFloat(bar.dataset.progress);
    
    for(let i = 0; i < getWidth; i++) {
      bar.style.width = i + '%';
    }
  });
}, 500);