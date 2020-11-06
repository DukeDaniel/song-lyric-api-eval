'use strict';

function getLyrics(artist, title) {
    artist = $('.js-query-artist').val()
    title = $('.js-query-title').val()
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
                .then(response => response.json()) 
                .then(responsejson => {
                    console.log(responsejson);
                    displayResults(responsejson);
                })
                .catch('this failed')
    };

function displayResults(results) {
    console.log(results.lyrics)
    $('#results').html(results.lyrics)

}

function watchForm() {
    $('body').on('submit', '.js-search-form', function() {

        getLyrics();
    });
}

$(watchForm);

