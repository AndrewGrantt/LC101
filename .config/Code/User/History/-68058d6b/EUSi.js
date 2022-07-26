window.addEventListener("load", function() {
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
       response.json().then(function(json) {
          console.log(json);
       });
    });
});

        //    const destination = document.getElementById("destination");
        //    let index = 0;
        //    destination.addEventListener("click", function(){
        //       destination.innerHTML = `code here