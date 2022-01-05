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

var inputCountry = document.querySelector("#countryCode")
var searchCountryButton = document.querySelector("#searchCounrtyButton")
function getCountryInfo(country){
    fetch ("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/northamerica", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
            "x-rapidapi-key": "94c895e35bmsha5d3d63d53d272ap14d10cjsn4a1ba9717cc5"
        }
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response);
	})
};

getCountryInfo ()

