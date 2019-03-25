"use strict"

const intro = {
    templateUrl:"./app/components/intro/intro.html",
    controller: ["$location", "Service", function ($location, Service) {
        const vm = this;

        vm.goEarthporn= () =>{
            $location.path('earthPorn');
        }; 

        vm.goAww = () => {
            $location.path('aww');
        }

        vm.onShow = () => {
            vm.showInstructions = !vm.showInstructions;
        }

        Service.getEarth();
        // Service.getAww();

    }]
}

angular 
    .module("HomeBrewReddit")
    .component("intro", intro);