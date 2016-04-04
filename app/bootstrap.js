System.register(['angular', 'angular-route', './home/home'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentController;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            angular.module('app', ['home', 'ngComponentRouter'])
                .config(function ($locationProvider) {
                $locationProvider.html5Mode(true);
            })
                .value('$routerRootComponent', 'component');
            ComponentController = (function () {
                function ComponentController() {
                    console.log('constructor');
                }
                ComponentController.prototype.$onInit = function () {
                    console.log('on init');
                    this.hello = 'toto';
                };
                return ComponentController;
            }());
            angular.module('app')
                .component('component', {
                controller: ComponentController,
                template: '<div>' +
                    '{{$ctrl.hello}}' +
                    '<a ng-link="[Home]">Home</a>' +
                    '<a ng-link="[Page1]">Page1</a>' +
                    '</div>' +
                    '<ng-outlet></ng-outlet>',
                $routeConfig: [
                    {
                        path: '/',
                        name: 'Home',
                        component: 'home',
                        useAsDefault: true
                    }
                ]
            });
        }
    }
});
/**
 * MainController
 */
//# sourceMappingURL=bootstrap.js.map