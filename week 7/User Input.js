

function strings()
{
    var string1 = document.getElementById("First Name").value;
    var string2 = document.getElementById("Last Name").value;
    var string3 = document.getElementById("Zip Code").value;
    var both = string1 + string2;
    var backwards = string1 + string2;
    var firstNameInput = false;
    var lastNameInput = false;
    var zipCodeInput = false;
    counter = 0;


    document.getElementById("nameResults1").innerHTML =  " " + string1;
    document.getElementById("nameResults2").innerHTML = " " + string2;
    document.getElementById("zipResults").innerHTML = " " + string3;

    var len = string1.length;
    //alert("length of first name = " + len);
    if (string1.length  < 20)
    {
        document.getElementById("nameResults1").innerHTML = "Correct number of digits for  first name!";
        firstNameInput = true;
    }

    else if (len > 20)
    {
        document.getElementById("nameResults1").innerHTML = "Name must not exceed 20 digits.";
        firstNameInput = false;
    }

    else if (len == 0)
    {
        document.getElementById("nameResults1").innerHTML = "Name cannot be blank.";
        firstNameInput = false;
    }
   

    var len = string2.length;
    //alert("length of last name = " + len);
    if (string2.length  < 20)
    {
        document.getElementById("nameResults2").innerHTML = "Correct number of digits for  last name!";
        lastNameInput = true;
    }

    else if (len > 20)
    {
        document.getElementById("nameResults2").innerHTML = "Name must not exceed 20 digits.";
        lastNameInput = false;
    }

    else if (len == 0)
    {
        document.getElementById("nameResults2").innerHTML = "Name cannot be blank.";
        lastNameInput = false;
    }
    
    
    var len = string3.length;
    //alert("length of zip code = " + len);
    if (string3.length  == 5)
    {
        document.getElementById("zipResults").innerHTML = "Correct number of digits for zip code!";
        zipCodeInput = true;
    } 

    else if (len > 5)
    {
        document.getElementById("zipResults").innerHTML = "Zip code must be exactly 5 digits.";
        zipCodeInput = false;
    }

    else if (len < 5)
    {
        document.getElementById("zipResults").innerHTML = "Zip code must be exactly 5 digits.";
        zipCodeInput = false;
    }
   

if (firstNameInput === true)
    {
        counter = counter + 1;
    }
else if (firstNameInput === false)
    {
        counter = counter - 1;
    }

if (lastNameInput === true)
    {
        counter = counter + 1;
    }
else if (lastNameInput === false)
    {
        counter = counter - 1;
    }

if (zipCodeInput === true)
    {
    counter = counter + 1;
    }
else if (zipCodeInput === false)
    {
        counter = counter - 1;
    }

if (counter === 3)
{
    alert("Congratulations! You have entered all the correct information and deserve a secret message! The secret message is: 'You are a genius!'");
}

}