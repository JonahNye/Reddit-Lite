"use strict";
$(document).ready(() => {
    $.get("https://www.reddit.com/r/EarthPorn.json")
     .then((response) => {
       console.log(response);
       const reddit = response.data.children;
       for (let i = 0; i < 10; i++) {
           console.log(reddit);
         $("body").append(`
          <section class= "container">
             <h3>${reddit[i].data.title}</h3>
             <p>${reddit[i].data.author}</p>
             <img src= "${reddit[i].data.preview.images["0"].source.url}" >
             <a href="${reddit[i].data.preview.images["0"].source.url}">Link</a>
             </section>    
             `)
         
         }

})
})
   