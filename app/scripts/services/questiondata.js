'use strict';

/**
 * @ngdoc service
 * @name sportTestApp.questionData
 * @description
 * # questionData
 * Service in the sportTestApp.
 */
angular.module('sportTestApp')
  .service('Questiondata', function Questiondata() {
        return(
            [
                {
                    'id': 1,
                    'number': 1,
                    'question': 'Чем обеспечивается твердость кости?',
                    'variants': {
                        'v1': 'большими физическими нагрузками',
                        'v2': 'химическим составом кости',
                        'v3': 'возрастными показателями',
                        'v4': 'минеральными солями'
                    },
                    'correctAnswer': '2'
                },
                {
                    'id': 2,
                    'number': 2,
                    'question': 'Каково общее количество крови в организме человека?',
                    'variants': {
                        'v1': '3-4 % от массы тела',
                        'v2': '7-8% от массы тела',
                        'v3': '10-12% от массы тела',
                        'v4': '15-16% от массы тела'
                    },
                    'correctAnswer': '2'
                },
                {
                    'id': 3,
                    'number': 3,
                    'question': 'Где и в каком году был поднят впервые Олимпийский флаг?',
                    'variants': {
                        'v1': 'на Олимпийских играх в Греции в 1896 году',
                        'v2': 'на Олимпийских играх в Сент-Луисе в 1903 году',
                        'v3': 'на Олимпийских играх в Риме в 1960 году',
                        'v4': 'на Олимпийских играх в Риме в 2002 году'
                    },
                    'correctAnswer': '2'
                },
                {
                    'id': 4,
                    'number': 4,
                    'question': 'Эластичность и упругость кости зависит от наличия в ней...',
                    'variants': {
                        'v1': 'минеральных солей',
                        'v2': 'большого количества кальция',
                        'v3': 'преобладания натрия',
                        'v4': 'органических веществ'
                    },
                    'correctAnswer': '2'
                },
                {
                    'id': 5,
                    'number': 5,
                    'question': 'Какова цель физической культуры?',
                    'variants': {
                        'v1': 'достижение высоких спортивных результатов',
                        'v2': 'обучение отдельным физическим упражнениям',
                        'v3': 'организация занимающихся',
                        'v4': 'укрепление здоровья, гармоническое развитие личности'
                    },
                    'correctAnswer': '2'
                }
            ]);
  });
