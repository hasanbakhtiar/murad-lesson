type carType = {
  brand: string;
  year: number;
  status: boolean;
};
class Car {
  private ibrand: string;
  protected iyear: number;
  public istatus: boolean;

  constructor(brand: string, year: number, status: boolean) {
    this.ibrand = brand;
    this.iyear = year;
    this.istatus = status;
  }

  public calculateSpeed(km: number, hour: number) {
    return `${this.ibrand}: speed is ${km / hour}km/h`;
  }
}

var myCar = new Car("BMW", 2000, false);
console.log(myCar.calculateSpeed(2000, 40));

class Moto extends Car {
  constructor(brand: string, year: number, status: boolean) {
    super(brand, year, status);
  }
  public testFunc() {
    return this.iyear;
  }
}
const myMoto = new Moto("Yamaha", 2025, true);
console.log(myMoto.istatus);
