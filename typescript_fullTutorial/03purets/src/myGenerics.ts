const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number ): boolean | number {
  return val
}

function identityTwo(val: any): any {
  return val
}

function identityThree<Type>(val: Type): Type {
  return val
}

// identityThree(3)

function identityFour<T>(val: T): T {
  return val
}

interface Bootle{
    brand: string,
    type: number,
}

// identityFour<Bootle>({brand: "sss", type: 2})


function getSearchProducts<T,>(products: Array<T>): T{
    const myIndex = 0
    return products[myIndex]
}


const getMoreSearchProducts = <T,>(products: Array<T>): T => {
    const myIndex = 2
    return products[myIndex]
}

interface Database{
  connection: string,
  username: string,
  password: string,
}

// function randomFunc<T, K extends Database>(valOne: T, valTwo: K): object {
//     return {valOne, valTwo}
// }

// randomFunc(3, {})

function randomFunc<T, K extends Database>(valOne: T, valTwo: K): object {
    return {valOne, valTwo}
}

interface Quiz{
  name: string,
  type: string,
}

interface Copurse{
  name: string,
  author: string,
  subject: string,
}


class Sellable<T>{
  public cart: T[] = []

  addToCart(products: T){
    this.cart.push(products)
  }
}