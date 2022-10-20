function getUserInput(){
    do{
        //This creates a prompt for the user to enter the data requested.
        firstname = prompt("Please Enter Your First Name: ");
        lastname = prompt("Please Enter Your Last Name: ");
        //This is creating a variable called name based on what was entered before.
        username = firstname + " " + lastname;
        alert("Name Entered: " + username)
        //This tells to program to alert the user if the previous variable is a certain length.
        if (username.length > 20){
            alert("Please enter a shorter name, current name is: " + username.length)

        }
    
    }while(username.length > 20);

    do{
        badgenumber = prompt("Please Enter Your Badge Number: ")

        alert("Badge Number Entered: " + badgenumber)

        if(badgenumber > 1000){
            alert("Please enter a shorter Badge Number, current number is :" + badgenumber)

        }
    }while(badgenumber > 1000);

}

var intervalIds = new Array();

// These 2 functions start or stop something based on whether a button was clicked.
function startButtonClick(){
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    //This calls for X to run a timer which is below
    let x = document.getElementById("DisplayCountdown");
    runTimer(x);
}
function stopButtonClick(){
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    //This uses a for loop to basically stop the code based on the timeout below
    for (let currTime=50 ; currTime>=0 ;currTime-=5){
        clearTimeout(intervalIds[currTime]);

    }
}

// This defines what the variables are.
currTime = 50;
var timeout = 5000;
// This function starts a timer based on what's inputted into the function.
function runTimer(x){
    //This basically give restrictions to the loop and tells it when to run.
    for (let currTime=50 ; currTime>=0 ;currTime-=5){
        intervalIds[currTime] = setTimeout(function(){
            //An if statement for when a certain requirement is met
            if(currTime==25){ 
                alert("Warning Less than half way to launch, time left " + currTime)
                }
            if(currTime==0){ 
            alert("Blastoff!")
            }

            x.innerHTML = currTime;

         } , timeout);
        timeout = timeout + 5000;




        }
    }
