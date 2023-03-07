angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapilh-env.eba-wpuv9dpm.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);