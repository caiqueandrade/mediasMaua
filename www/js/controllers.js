angular.module('starter')

.controller('CursosCtrl', function($scope, $state, DadosService){
    $scope.cursos = DadosService.listarCursos();

    $scope.ir = function(curso){
        DadosService.verificarCurso(curso.id);
        $state.go('periodos');
    };
})

.controller('PeriodosCtrl', function($scope, $state, DadosService){
    $scope.cursos = DadosService.listarCursos();

    for(curso in $scope.cursos){
        if($scope.cursos[curso].escolhido == true){
            $scope.curso = $scope.cursos[curso];
            $scope.periodos = $scope.curso.periodos;
        }
    }

    $scope.ir = function(){
        $state.go('anos');
    };
})

.controller('AnosCtrl', function($scope, $state, DadosService){
    $scope.cursos = DadosService.listarCursos();

    for(curso in $scope.cursos){
        if($scope.cursos[curso].escolhido == true){
            $scope.curso = $scope.cursos[curso];
            $scope.anos = $scope.curso.anos;
        }
    }

    $scope.ir = function(){
        $state.go('disciplinas');
    };

})

.controller('DisciplinasCtrl', function($scope, $state, DadosService){
    $scope.cursos = DadosService.listarCursos();
    console.log($scope.cursos);

    for(curso in $scope.cursos){
        if($scope.cursos[curso].escolhido == true){
            $scope.curso = $scope.cursos[curso];
            $scope.anos = $scope.curso.anos;
            $scope.disciplinas = $scope.anos[0].disciplinas;
            console.log($scope.disciplinas);
        }
    }
})
