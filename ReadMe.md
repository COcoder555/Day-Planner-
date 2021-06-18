 # Day Planner
### Built With:
  * HTML
  * J

## Constructing time, text area and buttons in HTML
 
 *  I created rows seperated into 3 columns: 
     One column for time that consisted of 1 block, one column 
     of text areas that took up 10 blocks and one column for buttons
     that took up 1 block.
 

## Displaying the current day
* I grabbed the id attrtribute in the Header and stored it in a variable.
  I then changed the text content using Moment.js to the current day.

## Fucntions  and loops that were created in JS

*  I grabbed all the elements with a class of ".saveBtn" and stored them 
   in an array called "$buttons."

*  I created a "for loop" that loops through all the newely formed array and added an EventListner to them that would react with a "click" and would call "Save function."

*  I created a fucntion that would take the user's input into the text areas and save them to local storage.

*  I created another function that retrieves the saved data from local storage so that the text will persist when the page is refreshed.

* I created a "for loop" that would change the background color of the text areas depending if the time associated with that text area
was in the past, present, or future. 

  [Day Planner](https://cocoder555.github.io/Day-Planner-/)

   ![Day Planner](./assets/Screenshot%20.png)

