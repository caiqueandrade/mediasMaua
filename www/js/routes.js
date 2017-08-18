angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider

    .state('cursos', {
        url: '/cursos',
        templateUrl: 'templates/cursos.html',
        controller: 'CursosCtrl'
    })

    .state('periodos', {
        url: '/periodos',
        templateUrl: 'templates/periodos.html',
        controller: 'PeriodosCtrl'
    })

    .state('anos', {
        url: '/anos',
        templateUrl: 'templates/anos.html',
        controller: 'AnosCtrl'
    })

    .state('disciplinas', {
        url: '/disciplinas',
        templateUrl: 'templates/disciplinas.html',
        controller: 'DisciplinasCtrl'
    })

    $urlRouterProvider.otherwise('cursos');
})
