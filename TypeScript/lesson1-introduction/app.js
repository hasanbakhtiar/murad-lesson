// const resultFunc = (): void => {
//   const infoOne: number = 5;
//   const infoTwo: string = "Hello Wolrd";
//   const infoThree: boolean = true;
//   console.log(infoOne, infoTwo, infoThree);
// };
//
// resultFunc();
var infoObj = {
    title: "Asus Zenbook",
    price: 2000,
    active: true,
    color: ["red", "black", 1],
};
console.log(infoObj);
var carInfo = function (brand, price, newCar) {
    return {
        brand: brand,
        price: price,
        newCar: newCar,
    };
};
console.log(carInfo("BMW", 40000, true));
