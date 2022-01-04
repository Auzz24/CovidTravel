
// Server Side API Response W
fetch("https://covid-19-usa-data-by-zt.p.rapidapi.com/GetUSHistoricalDataBetweenDatesForState?statecode=%3CREQUIRED%3E&start_date=%3CREQUIRED%3E&end_date=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-usa-data-by-zt.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});