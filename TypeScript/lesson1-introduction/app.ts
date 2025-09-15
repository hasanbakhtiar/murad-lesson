// const resultFunc = (): void => {
//   const infoOne: number = 5;
//   const infoTwo: string = "Hello Wolrd";
//   const infoThree: boolean = true;
//   console.log(infoOne, infoTwo, infoThree);
// };
//
// resultFunc();

//const info: Array<string | number> = [1, 2, 3, 4, 5, "Hello"];

interface objType {
  title: string;
  price: number;
  active: boolean;
  color: Array<string | number>;
}

var infoObj: objType = {
  title: "Asus Zenbook",
  price: 2000,
  active: true,
  color: ["red", "black", 1],
};
console.log(infoObj);

const carInfo = (brand: string, price: number, newCar: boolean) => {
  return {
    brand: brand,
    price: price,
    newCar: newCar,
  };
};

console.log(carInfo("BMW", 40000, true));
