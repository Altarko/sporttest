'use strict';

/**
 * @ngdoc service
 * @name sportTestApp.testingResult
 * @description
 * # testingResult
 * Сервия для обработки результатов тестирования
 */
angular.module('sportTestApp')
  .service('Testingresult', function Testingresult() {
    var results;
        return {
            setResults: function (res) {
                results = res;
                this.analyseResults();
                console.log(this.analyseResults());
            },

            // считаем количество верных и неверных ответов
            analyseResults: function () {
                var totalQuestions = results.length, // всего  вопросов
                    correctAnswers = 0,              // верных ответов
                    wrongAnswers = 0;                // неверных ответов

                for (var i = 0; i < totalQuestions; i++) {
                    if (results[i].correctAnswer === results[i].selectedAnswer) {
                        correctAnswers ++;
                    }
                    else {
                        wrongAnswers ++;
                    }
                }
                return {
                    correct: correctAnswers,
                    wrong: wrongAnswers,
                    correctPercent: this.calculatePercent({total:totalQuestions,correct:correctAnswers})
                };
            },

            calculatePercent: function (obj) {
                var total = obj.total,
                    correct = obj.correct;
                return (correct * 100 / total);
            }
        };
  });
