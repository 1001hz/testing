(function(){

    "use strict";

    angular
        .module("app.featureA")
        .factory("featureAEntity", featureAEntity);

    function featureAEntity() {

        /**
         * Constructor, with class name
         */
        function featureAEntity(data) {
            // Public properties, assigned to the instance ('this')
            this.title = data.title == undefined ? '' : data.title;
            this.description = data.description == undefined ? '' : data.description;
        }


        /**
         * Static method, assigned to class
         * Instance ('this') is not available in static context
         */
        featureAEntity.buildFromApiData = function (responseData) {
            return new featureAEntity(responseData);
        };


        /**
         * Return the constructor function
         */
        return featureAEntity;

    }

})();