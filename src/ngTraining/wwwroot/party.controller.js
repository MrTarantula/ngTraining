(function () {
    'use strict';

    angular.module('app').controller('PartyController', PartyController);

    PartyController.$inject = ['$scope'];

    function PartyController($scope) {

        var vm = this;

        vm.crimes = ["Murder", "Armed Robbery", "Assault"];
        vm.parties = [];

        vm.add = function() {
            vm.parties.push(angular.copy($scope.newParty));
            vm.clearFilter();
            vm.clear();

            $('#name').focus();
        }

        vm.clear = function() {
            $scope.newParty = null;
        }

        vm.remove = function(party) {
            vm.parties.splice(vm.parties.indexOf(party), 1);
        }

        vm.clearFilter = function() {
            if ($scope.search != null) {
                $scope.search.name = "";
            }
        }
    };


})();
