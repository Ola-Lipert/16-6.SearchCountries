'use strict';

var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';

    resp.forEach(function(item) {
        console.log(item);
        var ulEl = document.createElement('ul');
        var liEl = document.createElement('li');
        var liEl1 = document.createElement('li');
        liEl.innerHTML = item.name;
        liEl1.innerHTML = item.capital;
        countriesList.appendChild(ulEl);
        ulEl.appendChild(liEl);
        ulEl.appendChild(liEl1);
    });
}