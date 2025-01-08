'use strict';

angular.module('myApp.controllers', [])
    .controller('ListaPelisCtrl', ['$scope', 'rtmFactory', 
        function($scope) {
            $scope.countries = rtmFactory.getCountries();
        }
    ]);