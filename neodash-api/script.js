const ADDRESS = 'https://indirectly-fast-gorilla.ngrok-free.app'

let btn = document.getElementById('btn');
let tableBody = document.getElementById('tableBody')


btn.addEventListener('click', function () {
	let http = new XMLHttpRequest();
	let endpoint = '/hall-of-fame'

	http.open('GET', ADDRESS+endpoint)
	http.setRequestHeader('ngrok-skip-browser-warning', '*')
	http.send()

	http.onreadystatechange = () => {
		if (http.readyState == http.DONE && http.status == 200) {
			while (tableBody.firstChild) {tableBody.firstChild.remove()}

			let data = JSON.parse(http.responseText)
			let users = data.users
			let scores = data.scores

			for (let i = 0; i < scores.length; i++) {
				let row = document.createElement('tr')
				let rank = document.createElement('td')
				let user = document.createElement('td')
				let score = document.createElement('td')

				if (i == 0) {row.className = 'first'}
				else if (i == 1) {row.className = 'second'}
				else if (i == 2) {row.className = 'third'}

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
