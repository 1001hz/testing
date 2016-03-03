describe('controller: featureACtrl', function() {
    var ctrl, scope, getDataDeferred, view;

    beforeEach(module('app.featureA'));
    beforeEach(module('app.views'));

    beforeEach(inject(function($rootScope, $controller, _$q_) {
        $q = _$q_; // q is needed for promises
        scope = $rootScope.$new();

        // mock the injected service
        featureADataProvider = {
            getData: function() {}
        };

        // set function on mocked service to return a promise
        getDataDeferred = _$q_.defer();
        spyOn(featureADataProvider, 'getData').and.returnValue(getDataDeferred.promise);

        // create controller and inject mocked service
        ctrl = $controller('featureACtrl', { featureADataProvider: featureADataProvider });
    }));

    it('should set featureAEntity', function() {
        // set mocked response data
        getDataDeferred.resolve({ title: "Hello", description: "world" });
        // needed to resolve promise
        scope.$apply();

        // test returned data is set in controller
        expect(ctrl.featureAEntity.title).toBe("Hello");
    });

});