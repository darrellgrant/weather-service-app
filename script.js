function getData(callback) {
  fetch("data.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      callback(data);
      console.log(data);
    });
}

getData(function (myData) {
  console.log(myData);
  let myAppiKey = myData;
  console.log(myAppiKey);
  let button = document.querySelector("#button");
  let inputValue = document.querySelector("#input");
  let temp = document.querySelector(".temp");
  let cityname = document.querySelector(".cityname");
  let desc = document.querySelector(".desc");

  button.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    request.open(
      "GET",
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${myAppiKey}&units=imperial`
    );
    request.onload = function () {
      let response = request.response;
      let parsedData = JSON.parse(response);
      console.log(parsedData);
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
});
