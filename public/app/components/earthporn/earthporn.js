"use strict";

const earthPorn = {
    templateUrl:"./app/components/earthporn/earthporn.html",
    controller: ["$http","Service", "$location" , "$scope", function ($http, Service, $location, $scope) {
        const vm = this;

        // Service.getEarth()

        $(document).ready(() => {
            vm.i = 0;
            vm.earthObj = Service.reply;


            vm.next =() => {
                vm.i++;
            }

            vm.previous = () => {
                vm.i--;
            }
        //response contains api info, but with strange form
        console.log(vm.earthObj);
        
        //counter initialized
        // var i = 0;
    
        //ng-click to trigger i ++,
    
        
        })
    }]
}

angular
    .module("HomeBrewReddit")
    .component("earthPorn", earthPorn);

    // $.get("https://www.reddit.com/r/EarthPorn.json")
    //          .then((response) => {
    //            console.log(response);
    //            const reddit = response.data.children;
    //            for (let i = 0; i < 10; i++) {
    //                console.log(reddit);
    //              $("body").append(`
    //               <section class= "container">
    //                  <h3>${reddit[i].data.title}</h3>
    //                  <p>u/${reddit[i].data.author}</p>
    //                  <img class="user-pic" src= "${reddit[i].data.preview.images["0"].source.url}" >
    //                  <a href="${reddit[i].data.preview.images["0"].source.url}">>>> Link <<<</a>
    //                  </section>    
    //                  `)
                 
    //              }
        
    //     })