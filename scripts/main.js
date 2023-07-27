// Examples

/* Get an element and set its text
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

/* Display a pop-up box
alert(message)
prompt(message)
*/

/* Events
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});
*/

// clickButton
let clickButton = document.getElementById("clickButton");
let clickText = document.getElementById("clickText");

clickButton.addEventListener("click", function () {
    let clicks = localStorage.getItem('clicks');
    if (!clicks || isNaN(parseInt(clicks))) {
        clicks = '0';
    }

    clicks = (parseInt(clicks) + 1).toString();
    localStorage.setItem('clicks', clicks);

    clickText.textContent = 'Clicks: ' + clicks;
});
