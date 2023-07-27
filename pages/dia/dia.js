// Initialite Table

const aInput = document.getElementById('activityInput');
const aTable = document.getElementById('activityTable');

aInput.addEventListener('keydown', function (event) {
	if (!event.repeat && event.key == 'Enter') {
		addDataToTable(new Date().toLocaleString(), aInput.value)
		aInput.value = ''
	}
});

function addDataToTable(date, activity) {
  let row = document.createElement('tr');

  let timeCell = document.createElement('td');
  timeCell.innerHTML = date;
  row.appendChild(timeCell);

  let activityCell = document.createElement('td');
  activityCell.innerHTML = activity;
  row.appendChild(activityCell);

  aTable.appendChild(row);

	saveTable(aTable)
}


// Store Table
function saveTable(table) {
	let dates = [];
	let activities = [];

	for (let row of table.rows) {
		let date = row.cells[0].textContent;
		let activity = row.cells[1].textContent;
	
		dates.push(date);
		activities.push(activity);
	}
	
	console.log('Saving table...');

	localStorage.setItem('activity', JSON.stringify(
		{
			'dates': dates,
			'activities': activities}
	))
}


// Retrieve Table
document.addEventListener("DOMContentLoaded", loadTable);

function loadTable() {
	console.log('Loading table...');

	let data = localStorage.getItem('activity');
	if (data) {
		let json = JSON.parse(data);

		let dates = json['dates'];
		let activities = json['activities'];
	
		// i = 1; ignore headers
		for (let i = 1; i < activities.length; i++) {
			let date = dates[i];
			let activity = activities[i];
			
			addDataToTable(date, activity)
		}

		return
	}

	console.log('No data to load.')
}


// Reset
const aReset = document.getElementById('activityReset');

aReset.addEventListener('click', function () {
	console.log('Clearing table...')
	localStorage.setItem('activity', '');
	clearTable();
})

function clearTable() {
	let rows = aTable.rows.length
	for (let i = 1; i < rows; i++) {
		let row = aTable.rows[1];
		row.remove();
	}
}
