class CalculatePurchases{
    constructor(prices,fruitName,quantity){
        this.prices = prices
        this.fruitName = fruitName
        this.quantity = quantity

      

    }   
    
}

function calculateFruitCost(fruitName,quantity){
    let fruit = [{fruit: "Orange", price:30.00}]
    let fruits = fruit.find(item => item.fruit===fruitName)
    let itemPrice = fruits.price
    console.log(`${quantity} ${fruitName} for ${itemPrice * quantity} KES`)
    
}
calculateFruitCost("Orange", 2);



class KioskCalc{
    constructor(fruit2,quantity2){
        this.fruit2 = fruit2
        this.quantity2 = quantity2
        this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
        this.getTotalCost = function(){
            return `${quantity2} ${fruit2} for KES ${quantity2 * this.fruitsPriceList.mango}`
        }
    }
}

var kioskCalc = new KioskCalc("mango", 2);
console.log(kioskCalc.getTotalCost());