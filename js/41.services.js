angular.module('myApp.services', []).
    value('version', '0.1')

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
            }
        };
    })