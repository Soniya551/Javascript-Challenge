var jokes=new Array();

function x(){

}
var count=0;
function fetchData(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      return response.json();

    })
    .then(data => {
        data.laughRate=(data.punchline).split(" ").length;
        jokes[count]=data;
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
       count++;
   
       
    })
    .catch()
}
 function ar(){
   



    for(var i=1;i<=5;i++){
       setTimeout(x, 1000);
       fetchData();
        

    }
     
console.log(jokes);
}
ar();