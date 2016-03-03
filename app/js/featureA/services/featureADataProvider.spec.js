describe('Contact data provider service', function () {

    var featureADataProvider;
    var $scope;
    var $q;
    function APIServiceMock(){}

    beforeEach(module('app.featureA', function($provide) {
        $provide.service('APIService', APIServiceMock);
    }));

    beforeEach(function(){
        inject(function ($injector) {
            featureADataProvider = $injector.get('featureADataProvider');
            $scope = $injector.get('$rootScope').$new();
            $q = $injector.get('$q');
        });

        APIServiceMock.prototype.get = function(endpoint){
            var p = $q.defer();
            p.resolve(
                {
                    "title":"from API",
                    "description":"this data is from api",
                    "ignore": "from API but not inserted in entity"
                }
            );
            return p.promise;
        };

    });

    describe('calling getData method', function () {

        it('should get featureADataEntity object', function () {
            featureADataProvider
                .getData()
                .then(function (featureAData) {
                    expect(featureAData).toBeDefined();
                    expect(featureAData.title).toBe('from API');

                    // it should only return an object with parameters defined in featureAEntity even if API gives back other data
                    expect(featureAData.ignore).not.toBeDefined();
                });
            // $q needs a digest cycle in order to properly deal with the promise
            $scope.$digest();
        });

    });

});


