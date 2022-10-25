interface Mountain {
    name: string;
    height: number;
}

let mountains = [{name: 'Kilimanjaro', height: 19341}, {name: 'Everest', height: 29029}, {name: 'Denali', height: 20310}]

function findNameOfTallestMountain(mtArray) {
    let tallest = mtArray.reduce((prev, current) => {return prev.height > current.height ? prev : current})
    console.log(tallest.name)
}

findNameOfTallestMountain(mountains)

interface Product{
    name: string;
    price: number;
}

let products = [{name: 'red fish', price: 1.00}, {name: 'blue fish', price: 2.00}]

function calcAverageProductPrice(prArray) {
    let sum = 0;
    for (let i = 0; i < prArray.length; i++) {
        sum += prArray[i].price
    }
    let avg = sum / prArray.length
    console.log(avg)
}

calcAverageProductPrice(products)

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory = [{product: {name: 'motor', price: 10.00}, quantity: 10}, {product: {name: 'sensor', price: 12.50}, quantity: 4}, {product: {name: 'LED', price: 1.00}, quantity: 20}]

function calcInventoryValue(inArray) {
    let inValue = 0
    let inValuePerItem = 0
    for (let i = 0; i < inArray.length; i++) {
        let inValuePerItem = (inArray[i].product.price * inArray[i].quantity)
        inValue += inValuePerItem
        inValuePerItem = 0 
    }
    console.log(inValue)
}

calcInventoryValue(inventory)