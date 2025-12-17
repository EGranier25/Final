function choosePathOne()
{
    var choosePathOne = 0; /*Variable for choosing path one*/
    Math.floor(Math.random() * 2); /*Generates a random number between 0 and 1*/

    if (choosePathOne === 0) 
        {
            document.getElementById("results").innerHTML = "You chose to climb the tree and found a juicy apple! Yummy!"; /*Displays user choice in the results div*/
        }
    else (choosePathOne === 1)
        {
            document.getElementById("results").innerHTML = "You chose to climb the tree and found a juicy apple! Yummy!"; /*Displays user choice in the results div*/
        }
}

function choosePathTwo()
{   
    var choosePathTwo = 1; /*Variable for choosing path two*/
    Math.floor(Math.random() * 2); /*Generates a random number between 0 and 1*/

    if (choosePathTwo === 1) 
        {
            document.getElementById("results").innerHTML = "You chose to crawl down the hole and found a shiny emerald! Lucky you!"; /*Displays user choice in the results div*/
        }
    else (choosePathTwo === 0)
        {
            document.getElementById("results").innerHTML = "You chose to crawl down the hole and found a shiny emerald! Lucky you!"; /*Displays user choice in the results div*/
        }
}
