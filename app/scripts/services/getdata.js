

angular.module('qualittestApp')
.service("serviceData",function($http){
    return{
        get:function(url){
            return $http.get(url).then(function(response){
                return response.data;
            }).catch(function(e){
                return e;
            });
        }
    }




});