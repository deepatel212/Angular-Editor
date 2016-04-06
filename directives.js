myApp.directive('jumbotron', function ($compile) {
    return {
        restrict: 'E',
//        scope: { text: '@' },
        templateUrl: "directives/jumbotron.html",
        controller: function ($scope, $element) {
            $scope.add = function () {
                var el = $compile("<jumbotron></jumbotron>")($scope);
                $element.parent().append(el);
            };
        }
    };
});
myApp.directive('divs', function ($compile) {
    return {
        restrict: 'E',
        //        scope: { text: '@' },
        templateUrl: "directives/divs.html",
        controller: function ($scope, $element) {
            $scope.add = function () {
                var el = $compile("<divs></divs>")($scope);
                $element.parent().append(el);
            };
        }
    };
});
myApp.directive('htmlcontent', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.templateUrl = "directives/htmlcontent.html";

    directive.scope = {
    //        user: "=user"
}

return directive;
})