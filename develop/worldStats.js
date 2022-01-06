function worldData (){

    fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world", {
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
        var totalCases = response[0].TotalCases
        var totalDeaths = response[0].TotalDeaths
        var activeCases = response[0].ActiveCases
        var totalRecovered = response[0].TotalRecovered
 

        document.querySelector("#worldTotalDeaths").textContent = totalDeaths
        document.querySelector("#worldTotalCases").textContent = totalCases
        document.querySelector("#worldActiveCases").textContent = activeCases
        document.querySelector("#worldRecovered").textContent = totalRecovered
    })
    .catch(err => {
        console.error(err);
    });
}

worldData()