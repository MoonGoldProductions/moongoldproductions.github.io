var app = angular.module('mgpApp', []);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/kodu', {
            templateUrl: 'view-kodu.html',
            controller: 'koduCtrl'
        }).
        when('/teenused', {
            templateUrl: 'view-teenused.html'
        }).
        when('/projektid', {
            templateUrl: 'view-projektid.html'
        }).
        otherwise({
            redirectTo: '/kodu',
            controller: 'koduCtrl'
        });
  }
]);

app.controller('koduCtrl',
    function ($scope) {

    }
);