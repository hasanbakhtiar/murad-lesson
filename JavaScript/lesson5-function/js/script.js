// function name(params) {
//
// }

// function info(name) {
//   console.log('Hello,'+name);
// }
// info("Hasan");
// info("Murad");
// info("Ali");

// console.log("----------------Function Declaration------------------");
//
// info();
// function info() {
// console.log("Function Declaration");
// }
//
//
// console.log("----------------Function Expression------------------");
//
// const infoTwo = function(){
//   console.log("Function Expression")
// }
// infoTwo();
//
// console.log("----------------Arrow function------------------");
//
// const infoThree =()=>{
//   console.log("ES6 | Arrow function | ()=>{} | Function Expression")
// }
// infoThree();
//
//
// console.log("----------------IIFE------------------");
//
// (function () {
//     console.log('IIFE');
// })();

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting

const laptop = [
  {
    title: 'Acer Predator',
    price: 3200,
    color: ['black', 'red'],
  },
  {
    title: 'Asus ROG',
    price: 4100,
    color: ['blue', 'yellow'],
  },
  {
    title: 'Hp evobook',
    price: 2000,
  },
  {
    title: 'Lenovo Legion',
    price: 5000,
  },
];
const phones = [
    {
          title: 'iPhone 15 Pro',
          price: 4500,
          color: ['black', 'silver', 'blue'],
        },
    {
          title: 'Samsung Galaxy S24 Ultra',
          price: 4200,
          color: ['gray', 'violet', 'black'],
        },
    {
          title: 'Xiaomi 14 Ultra',
          price: 3000,
          color: ['white', 'black'],
        },
    {
          title: 'OnePlus 12',
          price: 3200,
          color: ['green', 'black'],
        },
];

function filterData(data) {
  return data();
 }
//
// function dataLength(data) {
//   return filterData(data).length;
// }
//
console.log(filterData(()=>{
  for (const iterator of laptop) {
    if (iterator.price > 2000) {
     return  `${iterator.title}-${iterator.price}`;
    }
  }
}))
console.log('--------------------------')
// console.log(filterData(phones,3000))
// console.log(dataLength(phones));



// const info =(data)=>{
//   return data();
// }
//
// const cbInfo = ()=>{
//     const a = 5, b = 10; 
//     const c = a + b;
//     return c;
// }
//
// console.log(info(cbInfo));
