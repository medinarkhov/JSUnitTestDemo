app.service('userService', function ($http) {

    var getUsers = function() {
        return $http.get('http://localhost:54027/User/GetUsers').then(function (response) {
            return response.data;
        });
    }

    var sortUsers = function(users) {
        return users.concat().sort();
    }

    return {
        message: 'Hello from angular service!',
        getUsers: getUsers,
        sortUsers: sortUsers
    };
})