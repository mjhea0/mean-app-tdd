var app = angular.module('myApp', ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/main.html',
    restricted: true,
    preventLoggedIn: false
  })
  .when('/register',{
    templateUrl: 'templates/register.html',
    controller: 'registerController',
    restricted: false,
    preventLoggedIn: true
  })
  .when('/login', {
    templateUrl: 'templates/login.html',
    controller: 'loginController',
    restricted: false,
    preventLoggedIn: true
  })
  .when('/logout', {
    restricted: false,
    preventLoggedIn: false,
    resolve: {
      test: function(authService, $rootScope, $location) {
        authService.logout();
        $rootScope.currentUser = authService.getUserInfo();
        $location.path('/login');
      }
    }
  })
  .otherwise({redirectTo: '/login'});
  $httpProvider.interceptors.push('authInterceptor');
});

app.run(function($rootScope, $location, $window, authService) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    // if route us restricted and no token is present
    if(next.restricted && !$window.localStorage.getItem('token')) {
      $location.path('/login');
    }
    // if token and prevent logging in is true
    if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
      $location.path('/');
    }
  });
});