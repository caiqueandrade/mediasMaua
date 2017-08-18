angular.module('starter')

.service('DadosService', function(){
    var cursos = [
        {
            nome: "Administração",
            id: 0,
            escolhido: false,
            periodos: [
                "DiurnoA",
                "NoturnoA"
            ],
            anos: [
                {
                    nome: '1º Ano',
                    disciplinas: [
                        {
                            nome: 'Cálculo Aplicado à Administração',
                            codigo: 'ADM112'
                        },
                        {
                            nome: 'Cálculo e Pesquisa Operacional',
                            codigo: 'ADM113'
                        },
                        {
                            nome: 'Inovação e Novas Abordagens em Administração',
                            codigo: 'ADM114'
                        },
                        {
                            nome: 'Informática Aplicada à Administração',
                            codigo: 'ADM121'
                        },
                        {
                            nome: 'Informática',
                            codigo: 'ADM123'
                        },
                        {
                            nome: 'Teoria Geral dos Sistemas',
                            codigo: 'ADM124'
                        },
                        {
                            nome: 'Teoria Geral da Administração',
                            codigo: 'ADM130'
                        },
                        {
                            nome: 'Teoria Geral das Organizações',
                            codigo: 'ADM131'
                        },
                        {
                            nome: 'Comunicação Empresarial',
                            codigo: 'ADM151'
                        },
                        {
                            nome: 'Contabilidade Geral',
                            codigo: 'ADM250'
                        },
                        {
                            nome: 'Projetos e Atividades Especiais I',
                            codigo: 'PAE1AD'
                        }
                    ]
                }
            ]
        },
        {
            nome: "Design",
            id: 1,
            escolhido: false,
            periodos: [
                "DiurnoB",
                "NoturnoB"
            ]
        },
        {
            nome: "Engenharia de Alimentos",
            id: 2,
            escolhido: false,
            periodos: [
                "DiurnoB",
                "NoturnoB"
            ],
            anos: [
                {
                    nome: '1º Ano',
                    disciplinas: [
                        {
                            nome: 'Cálculo Diferencial e Integral I',
                            codigo: 'EFB105'
                        },
                        {
                            nome: 'Vetores e Geometria Analítica',
                            codigo: 'EFB106'
                        },
                        {
                            nome: 'Física I',
                            codigo: 'EFB205'
                        },
                        {
                            nome: 'Desenho',
                            codigo: 'EFB302'
                        },
                        {
                            nome: 'Algoritmos e Programação',
                            codigo: 'EFB403'
                        },
                        {
                            nome: 'Química Geral',
                            codigo: 'EFB502'
                        },
                        {
                            nome: 'Introdução à Engenharia',
                            codigo: 'EFB603'
                        },
                        {
                            nome: 'Projetos e Atividades Especiais I',
                            codigo: 'PAE1CB'
                        }
                    ]
                }
            ]
        }
    ];

    var listarCursos = function(){
        return cursos;
    };

    var listarCurso = function(){
        return cursos[id];
    };

    var verificarCurso = function(id){
        cursos[id].escolhido = !cursos[id].escolhido;
    };

    return {
        listarCursos: listarCursos,
        listarCurso: listarCurso,
        verificarCurso: verificarCurso
    };


    // [
    //     "Administração",
    //     "Design",
    //     "Engenharia de Alimentos",
    //     "Engenharia Civil",
    //     "Engenharia de Computação",
    //     "Engenharia de Controle e Automação",
    //     "Engenharia Elétrica",
    //     "Engenharia Eletrônica",
    //     "Engenharia Mecânica",
    //     "Engenharia de Produção",
    //     "Engenharia Química"
    // ];
})
