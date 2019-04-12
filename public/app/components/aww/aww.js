"use strict";

const aww = {
    templateUrl: "./app/components/aww/aww.html",
    controller: ["Service", "$location", "$scope", "$http", function(Service, $location, $scope, $http) {
        const self = this;
        $(document).ready(()=> {
          self.c = 0; 
            self.awwObj = Service.awwData

            self.next =() => {
                self.c++;
            }

            self.previous = () => {
                self.c--;
            }

        })
    }]
}

angular
    .module("HomeBrewReddit")
    .component("aww", aww);