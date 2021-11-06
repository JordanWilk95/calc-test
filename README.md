# Coin Calc test
## Summary
- I initially started of by creating the basic javascript function to produce the coin amounts. This was done by setting the values and the types. once those variables were setup i began making a function that would divide the reurn value by the coin values to give the total amount of coins needed. then if the amount was greater than 0 then the function would start and would provide the total coins which was the cointypes equal to the amount of entered. Then the next part was to match the userinput value to the coinvalues. This created the running totals of the amounts needed.

- I then went on to create the node local server this required express package to be install to the project. I felt rather rusty with this and had to do some research to acheive it. I researched how to setup an endpoint using express on stack overflow to get it all working correctly. This led to a static page for the index html working on local host.

- I created an express endpoint to display the amounts this would be used to validate the inputs and output the coins amounts.

- For the "p" to be removed from the string i simply used replace to remove it. 

- For the £ i first checked if the string included the symbol then if it did i removed it and multiplied the amount left over by 100 to convert the pounds amount into pence.

- The . didn't require multiplication however i needed to set to two decimal places. So that when the dot was removed the amount would not be overly multiplied and coverted to the coins.

- For the isNaN section of the function this was done to make sure that any string that wasn't caught by the pound or p logic was thrown as an error. This then prompts the user to enter a valid input.

### Improvements
- The first improvement that comes to mind would be to change the result to appear dynamically using a fetch request. Rather than the user submitting a form and being redirected. This would allow the user to make multiple queries in a row with having to go back.

### Experience
- Overall The test gave me a lot of challenges that required me to read up on different topics and find solutions to various problems. This has given me a lot of new experiences and valuable insights to how specific parts of node and javascript worked. This experience will be very rewarding in future projects and help me solve more problems.

## How to use
- `npm i` 
- `npm start` 
- http://localhost:4060/
- enter a number: "£2.50", "250", "2.45" will all produce valid inputs
- invalid inputs are eg: empty strings, "£p", "1x"