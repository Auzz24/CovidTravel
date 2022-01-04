var inputState = document.querySelector("#stateCode")
var searchButton = document.querySelector("#searchButton")
// Server Side API Response W


function getData (state){
    fetch("https://api.covidactnow.org/v2/state/" + state + ".json?apiKey=09122ea58b9c408b9852a1b31c49f05a")

    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response);
        var totalCases = response.actuals.cases 
        var totalDeaths = response.actuals.deaths
        document.querySelector("#totalDeaths").textContent = totalDeaths
        document.querySelector("#totalCases").textContent = totalCases
    })
    .catch(err => {
        console.error(err);
    });
}

searchButton.addEventListener("click", function(){
getData(inputState.value)
})