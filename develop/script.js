var inputState = document.querySelector("#stateCode")
var searchButton = document.querySelector("#searchButton")
// Server Side API Response Website


function getData (state){
    fetch("https://api.covidactnow.org/v2/state/" + state + ".json?apiKey=09122ea58b9c408b9852a1b31c49f05a")

    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response);
        var totalCases = response.actuals.cases 
        var totalDeaths = response.actuals.deaths
        var positiveTests = response.actuals.positiveTests
        var icuBedCapacity = response.actuals.icuBeds.capacity
        var icuTotal = response.actuals.icuBeds.currentUsageTotal

        document.querySelector("#totalDeaths").textContent = totalDeaths
        document.querySelector("#totalCases").textContent = totalCases
        document.querySelector("#positiveTests").textContent = positiveTests
        document.querySelector("#icuCapacity").textContent = icuBedCapacity
        document.querySelector("#icuTotal").textContent = icuTotal
    })
    .catch(err => {
        console.error(err);
    });
}

searchButton.addEventListener("click", function(){
getData(inputState.value)
})

function getData2 (state){
    fetch("https://api.covidactnow.org/v2/state/" + state + ".json?apiKey=09122ea58b9c408b9852a1b31c49f05a")

    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response);
        var totalCases = response.actuals.cases 
        var totalDeaths = response.actuals.deaths
        var positiveTests = response.actuals.positiveTests
        var icuBedCapacity = response.actuals.icuBeds.capacity
        var icuTotal = response.actuals.icuBeds.currentUsageTotal

        document.querySelector("#totalDeaths2").textContent = totalDeaths
        document.querySelector("#totalCases2").textContent = totalCases
        document.querySelector("#positiveTests2").textContent = positiveTests
        document.querySelector("#icuCapacity2").textContent = icuBedCapacity
        document.querySelector("#icuTotal2").textContent = icuTotal
    })
    .catch(err => {
        console.error(err);
    });
}

searchButton2.addEventListener("click", function(){
getData2(inputState.value)
})