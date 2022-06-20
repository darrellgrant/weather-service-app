//get api key from data.php
function getData(callback) {
  fetch("data.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      callback(data);
    });
}
let temp = document.querySelector(".temp");
let cityname = document.querySelector(".cityname");
let desc = document.querySelector(".desc");
let btnText = false;

getData(function (myData) {
  let myAppiKey = myData;

  let button = document.querySelector("#button");
  let inputValue = document.querySelector("#input");

  button.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.open(
      "GET",
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${myAppiKey}&units=imperial`
    );
    request.onload = function () {
      if (this.status == 200) {
        let response = request.response;
        let parsedData = JSON.parse(response);

        let nameValue = parsedData["name"];
        let tempValue = parsedData["main"]["temp"];
        let descValue = parsedData["weather"][0]["description"];

        //display city, temp, description
        cityname.innerHTML = `${nameValue}`;
        temp.innerHTML = `Temperature: ${tempValue} <span>&#8457;</span>`;
        desc.innerHTML = `Description: ${descValue}`;
        inputValue.value = ""; //clear input

        loadClearBTN();
      } else if (this.status == 404) {
        console.log("An error occured");
        document.getElementById("input").style.color = "red";
        //code to clear error
        document
          .getElementById("input")
          .addEventListener("mouseenter", errorClear);
      } else if (this.status == 400) {
        document.getElementById("input").style.backgroundColor = "pink";
        //coder to clear error
        document
          .getElementById("input")
          .addEventListener("mouseenter", errorClear);
      }
    };

    request.send();
  });
});

//clear error
function errorClear() {
  document.getElementById("input").style.color = "black";
  document.getElementById("input").style.backgroundColor = "white";
  document.getElementById("input").value = "";
}

//set variables outside to use in both functions
let clearDIV = document.getElementById("clear");
let clearBTN = document.createElement("button");

//display clear button
function loadClearBTN() {
  if (!btnText) {
    clearBTN.append("CLEAR");
    clearDIV.append(clearBTN);
    clearBTN.addEventListener("click", clearField);
    btnText = true;
  }
}

function clearField() {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  desc.innerHTML = "";
  //remove text from clear button
  clearBTN.innerHTML = "";
  //remove clear button (may not work in IE)
  clearBTN.remove();
  btnText = false;
}
