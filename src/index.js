// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let CoinsCostArray = [["H", 0], ["Q", 0], ["D", 0], ["N", 0], ["P", 0]];
    let result = {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    while (currency > 0){
        if (currency >= 50) {currency -= 50; CoinsCostArray[0][1]++;}
        else if (currency >= 25) {currency -= 25; CoinsCostArray[1][1]++;}
        else if (currency >= 10) {currency -= 10; CoinsCostArray[2][1]++;}
        else if (currency >= 5) {currency -= 5; CoinsCostArray[3][1]++;}
        else {currency -= 1; CoinsCostArray[4][1]++;}
    }
    CoinsCostArray.forEach((elem)=>{
        if (elem[1] !== 0) result[elem[0]] = elem[1];   
    })
    return result;
}
