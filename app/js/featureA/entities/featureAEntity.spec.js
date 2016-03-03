describe('Assessment entity service', function () {

    var featureAEntity, featureAEntityInstance;

    beforeEach(module('app.featureA'));

    beforeEach(inject(function(_featureAEntity_) {
        featureAEntity = _featureAEntity_;
        // passing data from API call
        featureAEntityInstance = featureAEntity.buildFromApiData(
            {
                "title":"from API",
                "description":"this data is from api"
            }
        );

    }));

    it('should create a featureAEntity object', function () {
        expect(featureAEntityInstance.title).toBe('from API');
    });


})