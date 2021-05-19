
// Grabbed the id attrtribute in the Header and store it in variable
// Then changed the text content using Moment to the current day
console.log("Am I working")
const $CurrentDay = $("#currentDay"); 
$CurrentDay.text(moment().format("MMMM Do YYYY"));

// Grabbed all the elements with a class of ".saveBtn and stored them 
// in a array called "$buttons"
// Created a for loop that loops through all the newely formed array and added an EventListnet to them that 
// would react with a "click" and that would call "Save function"
$buttons = document.querySelectorAll(".saveBtn");
for(i =0; i < $buttons.length; i++){
    $buttons[i].addEventListener("click",Save)
    };

    //  Created a save function.
    // In the funciton I created two variables 
    //  Usint "this" I stored the value of the "text area" in a varible called "Input"
    // 
function Save(){
 let Input =  $(this).siblings("textarea").val();
 let Key = $(this).siblings("textarea").attr("id");
 localStorage.setItem(Key,Input);

}

let $textarea = document.querySelectorAll("textarea");

function Saved(){
for(i=0; i <$textarea.length; i ++)
$textarea[i].textContent= localStorage.getItem($textarea[i].id);
};

Saved();

for(i=0; i<$textarea.length; i++){
    let currentName =parseInt( $textarea[i].name);
    let currentTime = parseInt(moment().format("HH"));
    if(currentName === currentTime){$textarea[i].className = "present col-10"}
    else if(currentName < currentTime){$textarea[i].className= "past col-10"}
    else if(currentName > currentTime){$textarea[i].className= "future col-10"}
};