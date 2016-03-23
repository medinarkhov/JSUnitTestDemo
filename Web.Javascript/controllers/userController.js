app.controller('userController', function ($scope, userService) {

    $scope.userModel = {};

    $scope.userModel.message = userService.message;

    userService.getUsers().then(function(response) {
        $scope.userModel.users = userService.sortUsers(response);
    });

})