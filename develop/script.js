var inputState = document.querySelector("#stateCode")
var inputDestination = document.querySelector("#destination")
var searchButton = document.querySelector("#searchButton")
// Server Side API Response W


function getData (state){
    fetch("https://api.covidactnow.org/v2/state/" + state + ".json?apiKey=09122ea58b9c408b9852a1b31c49f05a")

    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log(response);
        var riskLevel = response.riskLevels.overall
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

function getFlightInfo (destination){
    fetch ("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/data/en-GB/airlines.json?apiKey=db93a64ddcmsh312cf56a679121dp127a3ejsne11329932c20")
    .then(response => {
        return response.json()
    })
}