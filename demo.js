function getBreweries(state) {
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
                .then(response => response.Json) 
                .then(responseJson => console.log(responseJson))
    };

function displayResults(responseJson) {



}

function watchForm() {
  $('body').on('submit', '#js-search-form', function(){
    getBreweries();
  });
}

$(watchForm);