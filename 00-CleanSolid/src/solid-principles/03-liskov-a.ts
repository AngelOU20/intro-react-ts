import {
  Tesla,
  Audi,
  Toyota,
  Honda,
  Volvo,
  Vehicle,
  Nisan,
  Ford,
} from './03-liskov-b';

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    //* Con un map
    // cars.map((car) =>
    //   console.log(car.constructor.name, car.getNumberOfSeats())
    // );

    //* Con un for of - acá no aplicamos el principio de abierto y cerrado
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log('Tesla', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log('Audi', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log('Toyota', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log('Honda', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Volvo) {
    //     console.log('Volvo', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Nisan) {
    //     console.log('Nisan', car.getNumberOfSeats());
    //     continue;
    //   }
    // }

    //* Con un foreach
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(2),
    new Nisan(4),
    new Ford(5),
  ];

  printCarSeats(cars);
})();
