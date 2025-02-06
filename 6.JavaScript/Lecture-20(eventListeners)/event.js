function OnClick()
{
    document.getElementById("demo").innerHTML = "JavaScript Events!"
    document.getElementById("demo").style.background ="green"
}

/* Add EventLiseners */

document.getElementById("head").addEventListener("mouseout",greet)

function greet(){
    document.getElementById("head").style.color="orange";
}


