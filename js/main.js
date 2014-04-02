angular.module('minicurso', ['ngRoute', 'hljs'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/:snippet', {
                templateUrl: 'partials/snippets.html',
                controller: 'SnippetCtrl'
            })
            .otherwise({redirectTo: '/1'});
    })

    .provider('Snippets', function () {
        var snippets = [
            'snippets/node-install.html',
            'snippets/node-install-prebuilt.html',
            'snippets/async.html'
        ];

        this.$get = function () {
            return snippets;
        }
    })

    .controller('SnippetCtrl', function($scope, $location, $routeParams, Snippets) {
        $scope.snippets = Snippets;

        if (!parseInt($routeParams.snippet, 10)) {
            $location.path('/1');
        }

        $scope.curSnippetNo = parseInt($routeParams.snippet, 10);
        $scope.curSnippet = $scope.snippets[$scope.curSnippetNo-1];

        $scope.prev = null;
        $scope.next = null;

        if ($scope.curSnippetNo > 1)
            $scope.prev = $scope.curSnippetNo - 1;

        if ($scope.curSnippetNo < $scope.snippets.length)
            $scope.next = $scope.curSnippetNo + 1;

        $scope.goPrev = function () {
            $location.path('/'+$scope.prev);
        };

        $scope.goNext = function () {
            $location.path('/'+$scope.next);
        };
    })
