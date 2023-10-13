console.log('Hello World!');

const ADDRESS = 'https://indirectly-fast-gorilla.ngrok-free.app'
let btn = document.getElementById('btn');
let tableBody = document.getElementById('tableBody')

btn.addEventListener('click', function () {
	let endpoint = '/hall-of-fame'
	let http = new XMLHttpRequest();
	console.log('Requesting', endpoint)
	http.open('GET', ADDRESS+endpoint)
	http.send()
	http.onreadystatechange = () => {
		if (http.readyState == http.DONE && http.status == 200) {
			let data = JSON.parse(http.responseText)
			while (tableBody.firstChild) {
				tableBody.firstChild.remove()
			}
			let users = data.users
			let scores = data.scores
			for (let i = 0; i < scores.length; i++) {
				let row = document.createElement('tr')
				if (i == 0) {row.className = 'first'}
				else if (i == 1) {row.className = 'second'}
				else if (i == 2) {row.className = 'third'}
				let rank = document.createElement('td')
				let user = document.createElement('td')
				let score = document.createElement('td')
				row.appendChild(rank)
				row.appendChild(user)
				row.appendChild(score)
				rank.textContent = i+1
				user.textContent = users[i]
				score.textContent = scores[i]
				tableBody.appendChild(row)
			}
		}
	}
})
