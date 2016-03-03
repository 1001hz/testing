describe('API service', function () {

    var APIService,httpBackend;

    beforeEach(module('app.common'));

    beforeEach(inject(function(_APIService_, _$httpBackend_) {
        APIService = _APIService_;
        httpBackend = _$httpBackend_;
    }));

    describe('get call', function(){

        // TODO: Finish test
        /*
        it('should invoke service and return a promise', function(){
            $httpBackend.expectGET('/foo/bar')
                .respond(function (method, url, data, headers) {
                    return [409, 'response body', {}, 'TestPhrase'];
                });

            APIService.getAction('/foo/bar');
            $httpBackend.flush();
        });
        */
    });

})