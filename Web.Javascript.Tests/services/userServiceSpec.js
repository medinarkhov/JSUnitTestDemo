/// <reference path="~/Scripts/jasmine/jasmine.js" />

/// <reference path="../../web.javascript/scripts/angular.js" />
/// <reference path="../../web.javascript/scripts/angular-mocks.js" />

/// <reference path="../../web.javascript/app.js" />
/// <reference path="../../web.javascript/services/userservice.js" />

describe('userService', function () {

    beforeEach(module("userApp"));

    var userService;
    var $httpBackend;

    beforeEach(inject(function ($injector) {
        userService = $injector.get('userService');
        $httpBackend = $injector.get('$httpBackend');
    }));


    it('users are sorted ascending', function () {

        //arrange
        var users = ['Alex', 'Harry', 'Dan'];
        var usersSorted = ['Alex', 'Dan', 'Harry'];

        //act
        var result = userService.sortUsers(users);

        //assert
        expect(result).toEqual(usersSorted);
    });


});
