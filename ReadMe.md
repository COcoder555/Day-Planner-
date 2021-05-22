 # Day Planner

## Constructing time, text area, and buttons in HTML
 
 *  Created rows that seperated into 3 columns 
     One column for time that consisted of 1 blocok, One coloumn 
     of text areas that took up 10 blocks, and One column for buttons
     that took up 1 block
 

## Displaying the current day
* I grabbed the id attrtribute in the Header and stored it in variable
  Then changed the text content using Moment to the current day.

## Fucntions  and loops that were created in JS

*  I Grabbed all the elements with a class of ".saveBtn and stored them 
   in a array called "$buttons."

*  I Created a for loop that loops through all the newely formed array and added an EventListnet to them that 
   would react with a "click" and that would call "Save function."

*  I created a fucntion that would take the useres input into the text areas and save them to local storage

*  I created another fucction that retrieved the saved data from local storage and so that the text would persist when the page
   was refreshed.

* I created a for loop that would change the background color of the text areas depending the time associated with that text area
    was in the past, present, or future. 



