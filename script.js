
 var display=document.getElementById("display")
function displayfunction(input){
    display.value +=input;
}

function calculatefunction(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}

function clearfunction(){
    display.value="";

}