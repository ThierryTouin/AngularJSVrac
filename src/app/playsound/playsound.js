(function() {
    'use strict';

    angular.module('playsound', [])
        .config(function ($stateProvider) {
            $stateProvider.state('playsound', {
                url: '/',
                views: {
                    main: {
                        templateUrl: 'playsound/playsound.tpl.html',
                        controller: 'PlaysoundController',
                        controllerAs: 'playsound'
                    }
                }
            });
        })

        .controller('PlaysoundController', function () {
            var self = this;

        });
})();