var inputUSA = document.querySelector("#usa")
var searchCountryButton = document.querySelector("#searchCountryButton")
function getUSAInfo(usa){
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
            var deathPerMill = response[1].Deaths_1M_pop
            var usaTotalDeath = response[1].TotalDeaths
            var usaTotalCases = response[1].TotalCases
            var usaActiveCases = response[1].ActiveCases
            var usaTotalRecovered = response[1].TotalRecovered

            document.querySelector("#usaPerMillion").textContent = deathPerMill
            document.querySelector("#usaTotalDeath").textContent = usaTotalDeath
            document.querySelector("#usaTotalCases").textContent = usaTotalCases
            document.querySelector("#usaActiveCases").textContent = usaActiveCases
            document.querySelector("#usaTotalRecovered").textContent = usaTotalRecovered
	})
    .catch(err => {
        console.error(err);
    });
}
getUSAInfo()

var inputCountry = document.querySelector("#countryCode")
var searchCountryButton = document.querySelector("#searchCountryButton")
function getCountryInfo(country){
    fetch ("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/reports/" + country, {
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
            var countryPerMill = response[0].Deaths_1M_pop
            var countryTotalDeath = response[0].TotalDeaths
            var countryTotalCases = response[0].TotalCases
            var countryActiveCases = response[0].ActiveCases
            var countryTotalRecovered = response[0].TotalRecovered

            document.querySelector("#countryPerMillion").textContent = countryPerMill
            document.querySelector("#countryTotalDeath").textContent = countryTotalDeath
            document.querySelector("#countryTotalCases").textContent = countryTotalCases
            document.querySelector("#countryActiveCases").textContent = countryActiveCases
            document.querySelector("#countryTotalRecovered").textContent = countryTotalRecovered    
	})
    .catch(err => {
        console.error(err);
    });
}

searchCountryButton.addEventListener("click", function(){
    getCountryInfo(inputCountry.value)
    })

