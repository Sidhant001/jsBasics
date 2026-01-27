const cars = [
  { brand: "Toyota", model: "Corolla", year: 2018, price: 800000 },
  { brand: "Honda", model: "City", year: 2020, price: 1100000 },
  { brand: "Hyundai", model: "i20", year: 2017, price: 600000 },
  { brand: "Tata", model: "Nexon", year: 2021, price: 1300000 },
  { brand: "Maruti", model: "Swift", year: 2016, price: 550000 },
  { brand: "Kia", model: "Seltos", year: 2022, price: 1500000 },
  { brand: "Mahindra", model: "XUV300", year: 2019, price: 900000 }
];

//Find cars priced above ₹10,00,000

let expensivecars = []
for (let a =0 ; a< cars.length ; a++){
    if (cars[a].price > 1000000) {
    expensivecars.push(cars[a])       
    }
}console.log(expensivecars)

//Find the oldest car

let oldestcar = cars[0]
for(let b=0 ; b<cars.length ; b++){
    if(cars[b].year<oldestcar.year){
        oldestcar= cars[b]
    }
}console.log(oldestcar)

//Find the average price

let averageprice=0;
for (let c =0; c< cars.length; c++){
    averageprice += cars[c].price;
}                       
const avrprice = averageprice / cars.length;
console.log(avrprice);

//Sort by price (low → high)












