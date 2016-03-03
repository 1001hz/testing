(function () {

    "use strict";

    angular
        .module("app.featureA")
        .controller("featureACtrl", featureACtrl);

    featureACtrl.$inject = ['featureADataProvider'];

    function featureACtrl(featureADataProvider) {

        // *** vm variables ***

        var vm = this;


        // *** initialisation ***
        getData();


        function getData(){
            featureADataProvider.getData()
                .then(setData)
                .catch(showError);
        }

        function setData(featureAEntity){
            vm.featureAEntity = featureAEntity;
        }

        function showError(error){
            vm.error = error;
        }

    }



})();
