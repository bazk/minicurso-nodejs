angular.module('blog', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/index.html',
                controller: 'IndexCtrl'
            })
            .otherwise({redirectTo: '/'});
    })


    .controller('IndexCtrl', function ($scope) {
        $scope.conteudo = 'posts do blog...';
    });