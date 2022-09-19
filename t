<!DOCTYPE html>
<html>
<!--Dylan Maxwell-->
<head>
    <title>UAT Space Program</title>
</head>
<body>
    <h1 style="color:dodgerblue;">UAT Space Program</h1>
    <img src="UatSpaceLogo.jpg">

    <p>
        Welcome to the UAT Space Program Launch!
    </p>

    <br>
    <br>


<P>
    Countdown: <span id="DisplayCountdown">Ready for takeoff</span>
</P>

<script>
currTime = 50;
    var timeout = 5000;

    let x = document.getElementById("DisplayCountdown");

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() {
        x.innerHTML = currTime;
        currTime = currTime - 5;
        
    }, timeout);
    timeout = timeout + 5000;

    setTimeout(function() { alert("Blastoff!"); }, timeout);

    function sum(num1, num2){
        result = num1 + num2;
        return result;
    }

    total = sum(5, 10);
    alert(total);

    number1=4
    number2=5

    function mult(num1, numb2){
        return num1 * num2;
    }
    
    newTotal = mult(number1, number2);

    alart(newTotal);

 
</script>
</body>
</html>
