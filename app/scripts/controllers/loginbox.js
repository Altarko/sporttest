'use strict';

/**
 * @ngdoc function
 * @name sportTestApp.controller:LoginboxCtrl
 * @description
 * # LoginboxCtrl
 * Controller of the sportTestApp
 */
angular.module('sportTestApp')
  .controller('LoginboxCtrl', function ($scope, $location,  UserData) {

        // отображать ли форму входа
       // $scope.showLoginBox = UserData.getLogin();

        //данные пользователя
        $scope.user = {
            name:       'Иванов Алексей',
            group:      'М4',
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
                    $scope.user.curriculum = courses[0];
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
            //UserData.setUserData($scope.user);
            //UserData.setLogin();
            UserData.login($scope.user, function (success) {
                if (success) {

                    $location.path('/questions');
                    console.log($location.path());
                }
            });
        };
  });
