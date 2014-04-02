angular.module('minicurso', ['ngRoute', 'hljs'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/1', { templateUrl: 'partials/part1.html' })
            .when('/2', { templateUrl: 'partials/part2.html' })
            .when('/3', { templateUrl: 'partials/part3.html' })
            .otherwise({redirectTo: '/1'});
    })

    .controller('MainCtrl', function($scope, $location) {
        $scope.partNo = null;

        $scope.$on("$routeChangeSuccess", function (event, current, previous) {
            $scope.prev = null;
            $scope.next = null;

            $scope.partNo = parseInt($location.path().slice(1), 10);

            if ($scope.partNo > 1)
                $scope.prev = $scope.partNo - 1;

            if ($scope.partNo < 2)
                $scope.next = $scope.partNo + 1;
        });

        $scope.goPrev = function () {
            $location.path('/'+$scope.prev);
        };

        $scope.goNext = function () {
            $location.path('/'+$scope.next);
        };
    })
