
// const date1 = Date.parse(new Date(2020, 0, 1))
// const date21 = Date.parse(new Date(2020, 0, 2))
// const date22 = date21 - date1
// const date23 = date1 - date22
// const ress = new Date(date23)

// const date3= new Date(date1) 
// console.log(date1)
// console.log(date1)
// console.log(date21)
// console.log(date22)
// console.log(date23)
// console.log(ress)

// console.log(date3)

// 6. Напишите функцию, которая возвращает номер дня, который был несколько дней назад с прошедшей даты.
// Это не должно изменять указанную дату источника.

// const date = новая дата (2020, 0, 2);
// getPastDay (дата, 1); // 1, (1 января 2020 г.)
// getPastDay (дата, 2); // 31, (31 декабря 2019 г.)
// getPastDay (дата, 365); // 2, (2 января 2019 г.)

// const date = new Date(2020, 0, 2);
// function getPastDay(date, day) {
//     const date1 = Date.parse(date);
//     const date2 = day * 86400000
//     const resultDay = new Date((date1 - date2))

//     console.log(`Текущая дата : ${String(date.getDate()).padStart(2,0)}.${String(date.getMonth() + 1).padStart(2,0)}.${date.getFullYear()}`)
//     console.log(`Количество дней : ${day}`)
//     console.log(`Результат : ${String(resultDay.getDate()).padStart(2, 0)}.${String(resultDay.getMonth() + 1).padStart(2, 0)}.${resultDay.getFullYear()}`)
    
//     return resultDay
// }
// getPastDay(date, 365)



// =============== с текущей даты
// function getPastDay(day) {
//     const date1 = Date.parse(new Date());
//     // console.log(date1)
//     const date2 = day * 86400000
//     // console.log(date2)
//     const date3 = date1 - date2
    
//     const resultDay = new Date(date3)
//     console.log(`Текущая дата : ${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`)

//     console.log(`Результат : ${resultDay.getDate()}.${resultDay.getMonth() + 1}.${resultDay.getFullYear()}`)
//     return resultDay
// }
// getPastDay(365)
