import { Product } from "./product"
import { AbstractPurchase } from "./abstract-purchase"
import { PurchaseWithSale } from "./purchase-with-sale"
import { PurchaseWithCountSale } from "./purchase-with-count-sale"
import { PurchaseWithDelivery } from "./purchase-with-delivery"


function sortPurchaseArray(purchaseArray: Array<AbstractPurchase>) {

    for (let i = 0, endI = purchaseArray.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (purchaseArray[j].compare(purchaseArray[j + 1])) {
                var swap = purchaseArray[j];
                purchaseArray[j] = purchaseArray[j + 1];
                purchaseArray[j + 1] = swap;
            }
        }
    }
    return purchaseArray;
}


let purchaseArray: Array<AbstractPurchase> = [
    new PurchaseWithSale(new Product("Банан", 1231), 15, 10, false),
    new PurchaseWithSale(new Product("Банановый сок", 123123213), 1, 40, false),
    new PurchaseWithCountSale(new Product("Булочка с бананом", 123123123), 1, 50, true, 30),
    new PurchaseWithCountSale(new Product("Мясо с бананом (деликатес)", 123123123123123), 17, 65, false, 20),
    new PurchaseWithDelivery(new Product("Банан фаршированный", 123), 1, 150),
    new PurchaseWithDelivery(new Product("Банан сушеный", 321), 1, 500),
]

for (let i = 0; i < purchaseArray.length; i++) {
    console.log(purchaseArray[i].log());
    console.log(purchaseArray[i].getCost());
}

purchaseArray = sortPurchaseArray(purchaseArray);
for (let i = 0; i < purchaseArray.length; i++) {
    console.log(purchaseArray[i].getCost());
}
