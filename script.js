const value1=document.querySelector("#value1");
var value2;
let song1;
const apiLink="https://api.dictionaryapi.dev/api/v2/entries/en/";
var audio = new Audio("http://music.ogg");
window.onload=reset;
async function fetching()
{   
    value2=value1.value;
    if(value2 != "")
    {
    const response=await fetch(apiLink+value2);
    var data=await response.json();
    document.getElementById("meaning").innerHTML=data[0].meanings[0].definitions[0].definition;
    song1=data[0].phonetics[0].audio;
    }
    else
    {
        document.getElementById("meaning").innerHTML="Please Enter A Character or a Word";
    }
    
}
function music(){
  new Audio(song1).play();
}
function reset()
{
    value1.innerHTML=""
}