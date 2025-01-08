angular.module('myApp.services', []).
    value('version', '0.1')
    .constant('API_KEY', 'duyegwzk6gafk8jzq4v3pddm')

    .factory('rtmFactory', function () {
        var countries = [
            { name: 'USA', population: 327_500_000 },
            { name: 'Canada', population: 37_500_000 },
            { name: 'UK', population: 66_000_000 },
            { name: 'France', population: 67_000_000 },
            { name: 'Germany', population: 83_000_000 }
        ];
        return {
            getCountries: function () {
                return countries;
            },
            getMovies: function () {
                // TODO: Implement API call to get movies
                return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country=' + countryCode + '&callback=JSON_CALLBACK&apikey=' + APIKEY);
            }
        };
    })