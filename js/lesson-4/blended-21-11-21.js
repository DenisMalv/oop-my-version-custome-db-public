console.log(`Hi denis`)


// executeforEach ([1,2,3], function (el) {console.log (el * 2)}) // 2 4 6

// function executeforEach(arr, callback) {
  // for (const el of arr) {
  //   callback (el)
  // }
// }
// executeforEach ([1,2,3], function (el) {console.log (el * 2)})
const a =(el)=>console.log(el*2)
//1
const executeforEach = (arr, callback) => arr.forEach(el => callback(el));
executeforEach([1, 2, 3], a )


// 2. Функция записи, которая возвращает преобразованный массив на основе функции,
//   переданной в качестве второго параметра(обратный вызов).Если массив содержит
// число в виде строки, он должен преобразовать его и вернуть как число.
// При необходимости вы можете изменить тело этой функции обратного вызова.
// Повторно использовать функцию из задачи 1.

// mapArray ([2, '5', 8], function (el) {return el + 3}) // возвращает [5, 8, 11]

// function mapArray(arr, callback) {

//   const newArray = [];

//   for (const el of arr) {
   
//     newArray.push(callback(Number(el)))
  
//   }
//   return newArray;
// }
// console.log(mapArray ([2, '5', 8], function (el) {return el + 3}));
