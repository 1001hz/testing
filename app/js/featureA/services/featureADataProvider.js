(function(){

    "use strict";

    angular
        .module("app.featureA")
        .factory("featureADataProvider", featureADataProvider);

    featureADataProvider.$inject = ['APIService', 'featureAEntity'];

    function featureADataProvider(APIService, featureAEntity) {

        return {
            getData: function () {
                return APIService.get('/api/featureA/data')
                    .then(featureAEntity.buildFromApiData);
            }
        };

    }

})();