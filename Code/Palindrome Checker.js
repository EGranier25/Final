function strings() // Palindrome Checker
{
    var string1 = document.getElementById("str1").value; // Get the input string from the user
    
    var newString =""; // Initialize an empty string to store the reversed string
        var i;
        for (i = string1.length - 1; i >= 0; i--) // Loop through the string in reverse order
        {
            newString += string1[i]; 
        }

        if(newString === string1)  // Check if the reversed string is the same as the original string
        {
            document.getElementById("result").innerHTML ="This is a palindrome. Congrats!";
        }   
        else // If not a palindrome
        {
            document.getElementById("result").innerHTML ="This is not a palindrome. Try again!";
        }

        if (string1.length === 0) // If the input string is empty
        {
            document.getElementById("result").innerHTML = "Please enter a word.";
        }
        
}

function sound(src) 
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}

function  play() 
{
    mySound = new sound("Zambolino - Horizon (freetouse.com).mp3");
    mySound.play();
}

function  stop()
{
    window.location.reload();
}
