angular.module('minicurso', ['ngRoute', 'hljs'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/:snippet', {
                templateUrl: 'partials/snippets.html',
                controller: 'SnippetCtrl'
            })
            .otherwise({redirectTo: '/1'});
    })

    .directive('unescape', function ($compile) {
        return function(scope, element, attrs) {
            element.attr('hljs', '');
            element.attr('language', 'html');
            element.removeAttr('unescape');

            var div = document.createElement('div');
            div.innerHTML = element[0].innerHTML;
            element[0].innerHTML = div.innerText;

            $compile(element)(scope);
        }
    })

    .provider('Snippets', function () {
        var snippets = [
            [ { language: 'bash', source: 'snippets/node-install.sh' } ],
            [ { language: 'bash', source: 'snippets/node-install-prebuilt.sh' } ],
            [ { language: 'bash', source: 'snippets/node-install-path.sh' } ],
            [ { language: 'javascript', source: 'snippets/hello-world.js' } ],
            [ { language: 'javascript', source: 'snippets/timeout.js' } ],
            [ { language: 'javascript', source: 'snippets/timeout-queuing.js' } ],
            [ { language: 'javascript', source: 'snippets/async.js' } ],
            [ { language: 'javascript', source: 'snippets/parallel-async.js' } ],
            [ { language: 'javascript', source: 'snippets/sequential-async.js' } ],
            [ { language: 'bash', source: 'snippets/new-project.sh' } ],
            [
                { language: 'bash', source: 'snippets/new-package.json.sh' },
                { language: 'json', source: 'snippets/new-package.json' }
            ],
            [ { language: 'bash', source: 'snippets/first-npm-install.sh' } ],
            [ { language: 'bash', source: 'snippets/git-ignore.sh' } ],
            [ { language: 'bash', source: 'snippets/git-commit.sh' } ],
            [ { language: 'javascript', source: 'snippets/first-server.js' } ],
            [ { language: 'javascript', source: 'snippets/hello-world-server.js' } ],
            [
                { language: 'bash', source: 'snippets/hello-world-index.mkdir.sh' },
                { language: 'html', source: 'snippets/hello-world-index.index.html' },
                { language: 'javascript', source: 'snippets/hello-world-index.server.js' }
            ],
            [ { language: 'bash', source: 'snippets/git-commit.sh' } ],
            [ { language: 'bash', source: 'snippets/npm-install-bower.sh' } ],
            [
                { language: 'bash', source: 'snippets/bower.json.sh' },
                { language: 'json', source: 'snippets/bower.json' }
            ],
            [ { language: 'bash', source: 'snippets/bower-install-angular.sh' } ],
            [ { language: 'bash', source: 'snippets/git-commit.sh' } ],
            [
                { language: 'bash', source: 'snippets/angular-index.html.sh' },
                { language: 'html', source: 'snippets/angular-index.html' }
            ],
            [
                { language: 'bash', source: 'snippets/angular-main.js.sh' },
                { language: 'javascript', source: 'snippets/angular-main.js' }
            ],
            [
                { language: 'bash', source: 'snippets/angular-partials-index.html.sh' },
                { language: 'html', source: 'snippets/angular-partials-index.html' }
            ],
            [ { language: 'bash', source: 'snippets/git-commit.sh' } ]
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
