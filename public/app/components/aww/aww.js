"use strict";

const aww = {
    templateUrl: "./app/components/aww/aww.html",
    controller: ["Service", "$location", "$scope", function(Service, $location, $scope) {
        
        var awwObj = Service.awwData;

        console.log(awwObj);
    }]
}

angular
    .module("HomeBrewReddit")
    .component("aww", aww);