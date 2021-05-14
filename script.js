let button = document.querySelector("#button");
let inputValue = document.querySelector("#input");
let temp = document.querySelector(".temp");
let cityname = document.querySelector(".cityname");
let desc = document.querySelector(".desc");

button.addEventListener("click", function () {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=d384f81f1bdc231bcfb8532ef31237f0&units=imperial"
  );
  request.onload = function () {
    let response = request.response;
    let parsedData = JSON.parse(response);
    let nameValue = parsedData["name"];
    let tempValue = parsedData["main"]["temp"];
    let descValue = parsedData["weather"][0]["description"];
    console.log(parsedData);
    cityname.innerHTML = `${nameValue}`;
    temp.innerHTML = `Temperature: ${tempValue}`;
    desc.innerHTML = `Description: ${descValue}`;
  };
  request.send();
});
