"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3)
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({brand: "sss", type: 2})
function getSearchProducts(products) {
    const myIndex = 0;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 2;
    return products[myIndex];
};
// function randomFunc<T, K extends Database>(valOne: T, valTwo: K): object {
//     return {valOne, valTwo}
// }
// randomFunc(3, {})
function randomFunc(valOne, valTwo) {
    return { valOne, valTwo };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
