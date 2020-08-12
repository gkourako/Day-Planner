# Day-Planner
A day planner that allows the user lay out their day from 0900-1700.


 use rows and columns to create a grid for the calendar

 TIME | textBox | SaveBtn
 9      _______   Save id="button9"
 *
 *
 *
 *

 when querying for html elements you need a class or id
 so give the buttons a id and textBox a relative id

 once you create you html then youll need to listen for
 click event on the save button
 when you recieve a click
 you can read the button id and use that to find the right text input id
 take value from the textbox and save to localstorage

youll need to reference string indexes to chop the number from the id

let string = "cat9"

string[3]

