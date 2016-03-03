(function(){

    "use strict";

    angular
        .module("app.common")
        .factory("APIService", APIService);

    APIService.$inject = ['$http', '$q'];

    function APIService($http, $q) {

        return {
            get: getAction,
            post: postAction,
            delete: deleteAction,
            put: putAction
        };

        function getAction(endpoint){
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: endpoint
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(error){
                defer.reject(error);
            });
            return defer.promise;
        }

        function deleteAction(endpoint, jsonData){
            var defer = $q.defer();
            $http({
                method: 'DELETE',
                url: endpoint,
                data: jsonData
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(error){
                defer.reject(error);
            });
            return defer.promise;
        }

        function postAction(endpoint, object){
            var defer = $q.defer();
            $http({
                method: 'POST',
                url: endpoint,
                data: JSON.stringify(object)
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(error){
                defer.reject(error);
            });
            return defer.promise;
        }


        function putAction(endpoint, object){
            var defer = $q.defer();
            $http({
                method: 'PUT',
                url: endpoint,
                data: JSON.stringify(object)
            }).then(function(response){
                defer.resolve(response.data);
            }).catch(function(error){
                defer.reject(error);
            });
            return defer.promise;
        }

    }

})();