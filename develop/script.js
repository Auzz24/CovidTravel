
// Server Side API Response Website
var inputState = document.querySelector("#stateCode")
var inputState2 = document.querySelector("#stateCode2")
var searchButton = document.querySelector("#searchButton")
var searchButton2 = document.querySelector("#searchButton2")

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

        var myData = {
            totalCases: totalCases,
            totalDeaths: totalDeaths,
            positiveTests: positiveTests,
            icuBedCapacity: icuBedCapacity,
            icuTotal: icuTotal
       }
       
       localStorage.setItem("mySavedData", JSON.stringify(myData))
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
        var totalCases2 = response.actuals.cases 
        var totalDeaths2 = response.actuals.deaths
        var positiveTests2 = response.actuals.positiveTests
        var icuBedCapacity2 = response.actuals.icuBeds.capacity
        var icuTotal2 = response.actuals.icuBeds.currentUsageTotal

        document.querySelector("#totalDeaths2").textContent = totalDeaths2
        document.querySelector("#totalCases2").textContent = totalCases2
        document.querySelector("#positiveTests2").textContent = positiveTests2
        document.querySelector("#icuCapacity2").textContent = icuBedCapacity2
        document.querySelector("#icuTotal2").textContent = icuTotal2

        var myData = {
            totalCases2: totalCases2,
            totalDeaths2: totalDeaths2,
            positiveTests2: positiveTests2,
            icuBedCapacity2: icuBedCapacity2,
            icuTotal2: icuTotal2
       }
       
       localStorage.setItem("mySavedData", JSON.stringify(myData))
    })
    .catch(err => {
        console.error(err);
    });
}

searchButton2.addEventListener("click", function(){
getData2(inputState2.value)
})
