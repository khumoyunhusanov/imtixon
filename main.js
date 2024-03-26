let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [

{

name: 'Milk',

price: 3.25

},

{

name: 'Coffee',

price: 1.5

},

{

name: 'Ice Cream',

price: 7.85

},

{

name: 'Tomatos',

price: 4.14

},

{

name: 'Onion',

price: 2.25

}

]

let arr_sale = []


const setup = (b) => {
    
//  MAX 


   let max = []
    for (let item of arr) {
      max.push(item.price)
    }
    let big = Math.max(...max)
    let name = arr.filter((item) => item.price === big)
    

    console.log(arr[2]);
    // console.log(name);
    // console.log(max);
    console.log(`max ${big}`);
   

    // TOTAL

    let total = max.reduce((item, prev) => {
        return item + prev
    }, 0)
     
    
    
    console.log(`total ${total}`);
    

    // MIN
    let min = []
    for (let item of arr) {
      min.push(item.price)
    }
    let small = Math.min(...min)
    let ism = arr.filter((item) => item.price === small)

    // console.log(ism);
    console.log(`min ${small}`);
    console.log(arr[1]);
}


setup()



