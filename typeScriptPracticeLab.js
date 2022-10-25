var mountains = [{ name: 'Kilimanjaro', height: 19341 }, { name: 'Everest', height: 29029 }, { name: 'Denali', height: 20310 }];
function findNameOfTallestMountain(mtArray) {
    var tallest = mtArray.reduce(function (prev, current) { return prev.height > current.height ? prev : current; });
    console.log(tallest.name);
}
findNameOfTallestMountain(mountains);
var products = [{ name: 'red fish', price: 1.00 }, { name: 'blue fish', price: 2.00 }];
function calcAverageProductPrice(prArray) {
    var sum = 0;
    for (var i = 0; i < prArray.length; i++) {
        sum += prArray[i].price;
    }
    var avg = sum / prArray.length;
    console.log(avg);
}
calcAverageProductPrice(products);
var inventory = [{ product: { name: 'motor', price: 10.00 }, quantity: 10 }, { product: { name: 'sensor', price: 12.50 }, quantity: 4 }, { product: { name: 'LED', price: 1.00 }, quantity: 20 }];
function calcInventoryValue(inArray) {
    var inValue = 0;
    var inValuePerItem = 0;
    for (var i = 0; i < inArray.length; i++) {
        var inValuePerItem_1 = (inArray[i].product.price * inArray[i].quantity);
        inValue += inValuePerItem_1;
        inValuePerItem_1 = 0;
    }
    console.log(inValue);
}
calcInventoryValue(inventory);
//# sourceMappingURL=typeScriptPracticeLab.js.map