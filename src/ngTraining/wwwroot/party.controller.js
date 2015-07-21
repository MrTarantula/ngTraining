(function () {
    'use strict';

    angular.module('app').controller('PartyController', PartyController);

    PartyController.$inject = ['$scope'];

    function PartyController($scope) {

        var vm = this;

        vm.crimes = ["Murder", "Armed Robery", "Assault"];
        vm.parties = [];

        vm.add = function() {
            vm.parties.push($scope.newParty);
        }

        vm.clear = function() {
            $scope.newParty = null;
        }
    };


})();
