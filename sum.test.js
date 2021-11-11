var coinCounter = function(total) {
    let x = total
    x = x.replace('p', '')

    // if x include £ multiply by 100
    if (x.includes('£')) {
        // removing the £ from the user input
        x = x.replace('£', '')
        console.log(x)
            // setting to 2 decimal places
        x = Number(x).toFixed(2)
        console.log(x)
            // multiplying by 100
        x = x * 100
        console.log(x)
    } else if (x.includes('.')) { // x is 2.50
        x = Number(x).toFixed(2)
        console.log(x)
        x = x.replace('.', '') // 250
        console.log(x)
    }
    // is not a number or x if invalid input refers user to enter valid input
    if (isNaN(x) || !x) {
        console.log(x)
        return null
    }
    //prints userinput to the json part on the numbers page
    // taking user input to convert
    var returnValue = x;
    // used to display the total amount of coins
    var totalcoins = {};

    // values for the coins 
    const coinTypes = ["twopound", "pound", "fifty", "twenty", "two", "one"]
    const coinValues = [200, 100, 50, 20, 2, 1]
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

test('shows 4p', () => {
    let x = coinCounter("4");
    //console.log(coinCounter("4"))
    expect(x.two).toBe(2);
});
test('shows 85p', () => {
    let x = coinCounter("85");
    //console.log(coinCounter("85"))
    expect(x.fifty).toBe(1);
    expect(x.twenty).toBe(1);
    expect(x.two).toBe(7);
    expect(x.one).toBe(1);
});
test('shows £1.85p', () => {
    let x = coinCounter("£1.85p");
    console.log(coinCounter("£1.85p"))
    console.log(x)
    expect(x.pound).toBe(1);
    expect(x.fifty).toBe(1);
    expect(x.twenty).toBe(1);
    expect(x.two).toBe(7);
    expect(x.one).toBe(1);
});

test('invalid input', () => {
    let x = coinCounter("£p")
    expect(x).toBe(null);
})