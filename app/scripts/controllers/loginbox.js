'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:LoginboxCtrl
 * @description
 * # LoginboxCtrl
 * Форма входа с проверкой полей
 */
angular.module('sportTestApp')
  .controller('LoginboxCtrl', function ($scope, $location,  UserData) {

        // отображать ли форму входа
        $scope.showLoginBox = true;


        //данные пользователя
        $scope.user = {
            name:       'Иванов Алексей',
            group:      'М3',
            curriculum: '',
            course:     ''
        };

        // регулярные выражения для группы и имени пользователя
        $scope.groupPattern = /^[А-Я,а-я]+\s*[1-4].*$/;
        $scope.namePattern = /^[А-Я,а-я]{2,15}\s+[А-Я,а-я]{2,15}$/;

        //вычисляем курс в зависимости от введенной группы
        function setCurriculum() {
            //если группа не определена или пустая
            if ($scope.user.group === undefined || $scope.user.group === '') {
                $scope.user.course = '';
            }
            else {
                try {
                    var re = /\d/gim;
                    var courses = $scope.user.group.match(re);
                    $scope.user.curriculum = parseInt(courses[0], 10);

                    // если курс 4, то сделать его 3
                    if ($scope.user.curriculum === 4) {
                        $scope.user.curriculum = 3;
                    }

                    $scope.user.course = courses[0] + ' курс';
                }
                catch (e) {
                    console.log('беда в парсинге курса =(');
                }
            }
        }

        // следим за валидностью поля группа
        $scope.$watch('loginform.inputGroup.$invalid', setCurriculum);
        
        // действие по нажатию кнопки [Войти]
        $scope.logIn = function () {
            UserData.login($scope.user, function (success) {
                if (success) {
                    $scope.showLoginBox = false;
                    $location.path('/questions');
                }
            });
        };
  });
