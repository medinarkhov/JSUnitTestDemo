/// <reference path="~/Scripts/jasmine/jasmine.js" />

/// <reference path="../../web.javascript/scripts/angular.js" />
/// <reference path="../../web.javascript/scripts/angular-mocks.js" />

/// <reference path="../../web.javascript/app.js" />
/// <reference path="../../web.javascript/services/userservice.js" />
/// <reference path="../../web.javascript/controllers/userController.js" />

describe('userController', function () {

    beforeEach(module("userApp"));

    var $controller;
    var $scope;
    var $q;
    var userService;

    beforeEach(inject(function ($injector) {
        $scope = $injector.get('$rootScope').$new();
        $controller = $injector.get('$controller');
        $q = $injector.get('$q');
        userService = $injector.get('userService');
    }));

    var testHelper = function () {

        var getObjectUnderTest = function () {
            return $controller('userController', {
                $scope: $scope,
                userService: userService
            });
        }

        return {
            getObjectUnderTest: getObjectUnderTest,
            mockUserService: userService
        }
    }

    it('message is set', function () {
        //assert
        var helper = testHelper();
        //act
        helper.getObjectUnderTest();
        //assert
        expect($scope.userModel.message).toBeDefined();
    });

    it('get users service is called', function () {
        //assert
        var helper = testHelper();
        spyOn(userService, 'getUsers').and.returnValue($q.when([]));
        //act
        helper.getObjectUnderTest();
        //assert
        expect(helper.mockUserService.getUsers).toHaveBeenCalled();
        expect(helper.mockUserService.getUsers).toHaveBeenCalledWith();
    });

    it('sort users service is called', function () {
        //assert
        var helper = testHelper();
        spyOn(userService, 'getUsers').and.returnValue($q.when([]));
        spyOn(userService, 'sortUsers');
        //act
        helper.getObjectUnderTest();
        $scope.$digest();
        //assert
        expect(helper.mockUserService.sortUsers).toHaveBeenCalled();
        expect(helper.mockUserService.sortUsers).toHaveBeenCalledWith([]);
    });


    it('scope.users are set', function () {
        //assert
        var helper = testHelper();
        var users = ['Alex', 'Harry', 'Dan'];
        var usersSorted = ['Alex', 'Dan', 'Harry'];
        spyOn(userService, 'getUsers').and.returnValue($q.when(users));
        //act
        helper.getObjectUnderTest();
        $scope.$digest();
        //assert
        expect($scope.userModel.users).toEqual(usersSorted);
    });
})