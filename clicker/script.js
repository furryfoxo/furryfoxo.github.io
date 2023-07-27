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
