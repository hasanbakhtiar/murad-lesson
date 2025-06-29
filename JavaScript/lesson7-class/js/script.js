// function Car(title,color,year) {
//  this.ititle = title;
// }
//
// const myCar = new Car("BMW");
// console.log(myCar.ititle)

// class Car {
//   constructor(title, color, year) {
//     this.ititle = title;
//     this.icolor = color;
//     this.iyear = year;
//   }
//   calculateSpeed(km,h){
//     return `${this.ititle} speed: ${km/h}km/h`
//   }
// }
//
// const myCar = new Car('BMW', 'red', 2010);
// console.log(myCar.ititle);
// console.log(myCar.calculateSpeed(300,2));
//
//
// class Moto extends Car{
//   constructor(title, color, year) {
//     super(title, color, year);
//   }
// }
//
// const myMoto = new Moto("Yamaha","black",2020);
// console.log(myMoto.ititle)
// console.log(myMoto.calculateSpeed(400,2))

// const text = "Hello how a you";
// const result = text.match(/h/ig);
// console.log(result);

// function useRegex(input) {
//       let regex = /\.com/i;
//       return regex.test(input);
// }
// console.log(useRegex("hasan.co"))

// const productsJson = [
//   {
//     "title": "asus",
//     "price": 4000
//   },
//   {
//     "title": "acer",
//     "price": 2000
//   }, {
//     "title": "msi",
//     "price": 1000
//   }

// ]

// const chnageData = JSON.stringify(productsJson);

// localStorage.setItem('data',chnageData)

// const mydata = JSON.parse(localStorage.getItem('data'));
// console.log(mydata);

