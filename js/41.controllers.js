'use strict';

angular.module('myApp.controllers', [])
    .controller('ListaPelisCtrl', ['$scope', 'rtmFactory', 
        function($scope) {
            $scope.countries = rtmFactory.getCountries();

            $scope.loadMovies = function(countryCode) {
                rtmFactory.getMovies(countryCode).then(function (response) {
                        var movieArray = response.data.movies;

                        console.log(JSON.stringify(movieArray));

                        $scope.movies = movieArray;
                    },
                    function (response) {
                        console.error('Error:', response.data.error);
                    }
                )
            };

            $scope.loadMovies('US'); // Load movies for the United States by default
        }
    ]);