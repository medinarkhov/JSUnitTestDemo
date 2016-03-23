//example of route config

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        }).
        when('/about', {
            templateUrl: 'about.html',
            controller: 'aboutController'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);