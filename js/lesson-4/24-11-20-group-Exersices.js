console.log('24-11-20')

// 1. Write function, which iterates over array and executes function on each element.

// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

function executeforEach(arr, callback) {
    for (const elem of arr) {
        callback(elem)
    }
}
executeforEach([1, 2, 3], function (el) { console.log(el * 2)})


// 2. Write function, which returns transformed array based on function, which passed as a second parameter (callback). If array contains a number as string, it should convert it and return as number. You're allowed to change a body of that callback function if you need. Reuse function from task 1.

// mapArray([2, '5', 8], function(el) {return el + 3}) // returns [5, 8, 11]
function mapArray(arr, callback) {
   const resMapArr = []

    executeforEach(arr, (elem) => {
        if (typeof elem === "string") {
            elem= +elem
        }
    resMapArr.push(callback(elem))

    })
    return resMapArr
}

console.log(mapArray([2, '5', 8], function(el) {return (el + 3)}))
// 3. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 1.

// filterArray([2, 5, 8], function(el) { return el % 2 === 0 }) 
// // returns [2, 8]
// (elem) => {
//         if (typeof elem === "string") {
//             elem= +elem
//         }
//         console.log(elem)
//     })
function filterArray(arr, callback) {
    const res = []
    executeforEach(arr, (elem) => {
        if (callback(elem) === true) {
        res.push(elem)
        }
    })
       return res
}

console.log(filterArray([2, 5, 8], function (el) { return (el % 2 === 0) }))

// 4. Write a function that accepts an array of object and returns new array of values by passed key name.
// That function should not change the original array. Reuse function from task 1. 
 
const fruits = [
  { name: 'apple', weight: 0.5 },
  { name: 'pineapple', weight: 2 }
];


// getArrayOfKeys(fruits, 'name'); 
// // returns ['apple', 'pineapple']

function getArrayOfKeys(obj, keyName) {
const resKeys = []
    executeforEach(obj, (eachObject) => {
        resKeys.push(eachObject[keyName])
        }
    )
    return resKeys
}
console.log(getArrayOfKeys(fruits, 'name'))
console.log(getArrayOfKeys(fruits, 'weight'))
// 5. Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 20 and greater than 10 with '*'. It should return a new array with numbers and '*' instead of these numbers. Reuse function from task 2.

// substitute([58, 14, 48, 12, 31, 19, 10]); 
// // returns [58, '*', 48, '*', 31, '*', 10]
function substitute(array) {
    
    return mapArray(array, (elem) => {
        if (elem < 20 && elem > 10) {
           elem='*'
       }
        return elem
    })

}
console.log(substitute([58, 14, 48, 12, 31, 19, 10]))

console.log(mapArray([58, 14, 48, 12, 31, 19, 10],function (el) { return el }))