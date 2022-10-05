// This defines what the variables are.
currTime = 50;
var timeout = 5000;
// This function starts a timer based on what's inputted into the function.
function runTimer(x){
    //This basically give restrictions to the loop and tells it when to run.
    for (let currTime=50 ; currTime>=0 ;currTime-=5){
        setTimeout(function(){
            //An if statement for when a certain requirement is met
            if(currTime==25){ 
                alert("Warning Less than half way to launch, time left" + currTime)
                }
            if(currTime==0){ 
            alert("Blastoff!")
            }
        
            x.innerHTML = currTime;
            
         } , timeout);
        timeout = timeout + 5000;

            
    
        
        }
    }
    

// These 2 functions start or stop something based on whether a button was clicked.
function startButtonClick(){}
function stopButtonClick(){}
