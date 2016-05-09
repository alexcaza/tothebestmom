export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/m/:name', {
        templateUrl: 'app/mother/celebrate.html',
        controller: 'CelebrateController',
        controllerAs: 'celebrate'
    })
    .otherwise({
      redirectTo: '/'
    });
}
