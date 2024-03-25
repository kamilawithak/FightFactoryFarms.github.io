/* .js files add interaction to your website */
var displayInfo = document.getElementById("message");
var button = document.getElementById("submit");

if (button) {
  button.addEventListener("click", displayMessage);
}

function displayMessage() {
  var name = document.getElementById("name").value
  var city = document.getElementById("city").value
  displayInfo.innerHTML = name + " you can make a difference in " + city + " by putting up flyers, attending meetings at anti-factory farm organizations or starting your own, and spreading awareness through word of mouth."
}

