import angular from 'angular';
import 'angular-ui-router';

angular.module('abigale', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'sample',
                url: '/sample',
                templateUrl: './sample/index.html'
            })
            .state({
                name: 'sample.first',
                url: '/first',
                templateUrl: './sample/first.html'
            })
            .state({
                name: 'sample.second',
                url: '/second',
                templateUrl: './sample/second.html'
            })
            .state({
                name: 'withParams',
                url: '/withParams/:paramId',
                templateUrl: './withParams/index.html',
                controller: 'withParamsController',
                controllerAs: 'vm',
                resolve: {
                    getParams: function ($stateParams) {
                        return $stateParams
                    }
                }

            })
            .state({
                name: 'withParams.no',
                url: '/withParams',
                templateUrl: './withParams/noParams.html',
                controller: 'withParamsController',
                controllerAs: 'vm',
                resolve: {
                    getParams: function ($stateParams) {
                        return $stateParams
                    }
                }

            })
            .state({
                name: 'withParams.has',
                url: '/withParams/:paramId',
                templateUrl: './withParams/hasParams.html',
                controller: 'withParamsController',
                controllerAs: 'vm',
                resolve: {
                    getParams: function ($stateParams) {
                        return $stateParams
                    }
                }

            });
    })
    .controller('withParamsController', ['getParams', function (getParams) {
        console.log(getParams)
        let vm = this;
        vm.paramsId = getParams.paramId;

    }])

    ;

