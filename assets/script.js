console.log("Am I working")
const $CurrentDay = $("#currentDay"); 
$CurrentDay.text(moment().format("MMMM Do YYYY"));


$buttons = document.querySelectorAll(".saveBtn");
for(i =0; i < $buttons.length; i++){
    $buttons[i].addEventListener("click",Save)
    };

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