// hosting local server and calling express
const express = require('express')
const app = express()
const PORT = 4060
// making  a static index page
app.use(express.static('index.html'))
// making the app listen on a port
app.listen(PORT, () => {
    console.log(`Express server listening at http://localhost:${PORT}`)
})
//coin counter function
var coinCounter = function (total) {
    // taking user input to convert
    var returnValue = total;
    // used to display the total amount of coins
    var totalcoins = {};

    // values for the coins 
    const coinTypes = ["pound", "fifty", "twenty", "ten", "five", "two", "one"]
    const coinValues = [100, 50, 20, 10, 5, 2, 1]
    //function for working out the amount
    var amount;
    for (var i = 0; i < coinValues.length; i++) {
        // dividing the returnValues by the coinValues to recieve the amount of coins
        amount = Math.floor(returnValue / coinValues[i]);
        // if the amount is greater than 0 start to count the different amount of coins
        if (amount > 0) {
            // declaring that the total amount be displayed in coin types
            totalcoins[coinTypes[i]] = amount;
            // taking user input and matching it by the coin values to produce the amount of coin types
            returnValue = returnValue % coinValues[i]
        }
    }
    // end of the function displaying the amount of coins
    return totalcoins;
}


app.use(express.json())
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// express endpoint
app.get('/number', (req, res) => {
    // takes user input
    let x = req.query.bar
    x = x.replace('p', '')

    // if x include £ multiply by 100
    if (x.includes('£')) {
        // removing the £ from the user input
        x = x.replace('£', '')
        // setting to 2 decimal places
        x = Number(x).toFixed(2)
        // multiplying by 100
        x = x * 100
    } else if (x.includes('.')) { // x is 2.50
        x = Number(x).toFixed(2)
        x = x.replace('.', '') // 250
    }
    // is not a number or x if invalid input refers user to enter valid input
    if (isNaN(x) || ! x){
        console.log(x)
        return res.json("enter valid input")
        
    } 
    //prints userinput to the json part on the numbers page
    res.json(coinCounter(x))
})