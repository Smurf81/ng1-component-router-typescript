System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Home;
    return {
        setters:[],
        execute: function() {
            Home = (function () {
                /*@ngInject*/
                function Home($scope) {
                    this.scope = $scope;
                }
                Home.prototype.$onInit = function () {
                    var _this = this;
                    this.input = 'test';
                    this.scope.$watch(function () { return _this.input; }, function (o, n) {
                        console.log(n);
                    });
                };
                Home.prototype.$onChanges = function (obj) {
                    if (obj.input) {
                        console.log(obj.input);
                    }
                };
                return Home;
            }());
            exports_1("Home", Home);
            angular.module('home', []).component('home', {
                controller: Home,
                templateUrl: 'app/home/home.html'
            });
        }
    }
});
//# sourceMappingURL=home.js.map