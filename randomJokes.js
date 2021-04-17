var jokes = new Array();
var iteration = 0;


function fetchData(){

    iteration++;

    if (iteration >= 5){

        clearInterval(interval);

    }

    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      return response.json();

    })
    .then(data => {
        data.laughRate=(data.punchline).split(" ").length;
        jokes.push(data);
        console.log("After 1 second without sorting: ", data);

        var n=jokes.length;
  
        for(var i=0;i<n;i++){
            for(var j=0;j<n-1;j++){
                if(jokes[j].laughRate>jokes[j+1].laughRate){
                var temp=jokes[j+1];
                jokes[j+1]=jokes[j];
                jokes[j]=temp;
            }
        }
    }

    })
    .catch();
}


function settime(){

 interval = setInterval(fetchData, 1000);

 console.log("with sorting :",jokes);
}

settime();
