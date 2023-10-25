document.addEventListener("DOMContentLoaded", function () 
{
    const inputSeconds = document.getElementById("inputSeconds");
    const startButton = document.getElementById("startButton");
    const timerDisplay = document.getElementById("timer");
    let intervalId;
    
    startButton.addEventListener("click", function () 
    {
        const seconds = parseInt(inputSeconds.value);
        
        if (!isNaN(seconds) && seconds > 0) 
        {
            clearInterval(intervalId);
            startHourglass(seconds);
        }
    });
    
    function startHourglass(totalSeconds) 
    {
        let secondsLeft = totalSeconds;
        displayTime(secondsLeft);
        
        intervalId = setInterval(function () 
        {
            secondsLeft--;
            displayTime(secondsLeft);
            
            if (secondsLeft <= 0) 
            {
                clearInterval(intervalId);
                timerDisplay.innerHTML = "Ваше время истекло";
            }
        }, 1000);
    }
    
    function displayTime(seconds) 
    {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        
        const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
        timerDisplay.innerHTML = formattedTime;
    }
    
    function pad(number) 
    {
        return number < 10 ? `0${number}` : number;
    }
});