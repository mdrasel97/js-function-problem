// 12 ince 1 ft

// function myfunc(number){
//     let ince = number / 2;
//     return ince;
// }

// let total = myfunc(ince);
// console.log(total);

// function addNumbers(a, b) {
//      a + b;
//     return a + b;
//   }
  
//   console.log(addNumbers(5, 10)); // 15
//   console.log(addNumbers(-3, 7)); // 4

// একটি ফাংশন isEven লেখ, যা একটি সংখ্যা ইনপুট নেবে এবং সেটি জোড় হলে true, অন্যথায় false রিটার্ন করবে।

// function isEven(number){
// if(number % 2 === 0){
//     return true;
// }
// else{
//     return false;
// }
// }

// console.log(isEven(20));
// console.log(isEven(7));


// একটি ফাংশন findMax লেখ, যা একটি সংখ্যা-অ্যারেকে ইনপুট হিসেবে নেবে এবং সর্বোচ্চ সংখ্যাটি রিটার্ন করবে।
// function findMax(arr) {
//     let array = Math.max(arr);
//     return array;
//   }
  
//   console.log(findMax([3, 7, 2, 9, 1])); // 9
//   console.log(findMax([-5, -1, -7, -2])); // -1

// ince to feet convert 
// function myfunc (ince){
//     const convert = ince / 12;
//     return convert;
// }


// function myfunc1(ince){
//     const inceToFeet = ince / 12;
//     const feetNumber = parseInt(inceToFeet);
//     const inceRemeining = feetNumber % 12;
//     const result = feetNumber + ' ft ' + inceRemeining + ' ince';
//     return result;
// }
// console.log(myfunc1(75));
// function mileToKelo (mile){
//     const result = mile * 1.609;
//     return result;
// }

// console.log(mileToKelo(2));

// function keloTomile (kelo){
//     const result = kelo * 0.621371;
//     return result;
// }

// console.log(keloTomile(2))


// leeep year
// function leepYear(year){
//     if(year % 4 === 0 && year % 100 !== 0){
//         return true;
//     }
//     else if(year % 100 === 0 && year % 400 === 0 ){
//         return true;
//     }
//     return false;
// }

// console.log(leepYear(2100));


// function leepYear(year){
// if(year % 4 ===0 && year % 100 !== 0){
//     return true;
// }
// else{
//     return false;
// }
// }
// const resultLeepYear = leepYear(2050);
// console.log(resultLeepYear)
  


// odd averege number 
// let numbers = [52, 41, 20, 15, 23, 24, 29, 23];
// function oddNumber (numbers){
//     let odd = [];
//     for(let number of numbers){
//         if(number % 2 === 1){
//            odd.push(number);
//         }
//     }

//     let sum = 0;
//     for(const number of odd){
//         sum = sum + number;
//     }
//     const avg = odd.length;
//     console.log(sum);
//     const final = sum / avg;
//     return final;
// }

// const result = oddNumber(numbers);
// console.log(result);

// let numbers = [52, 41, 20, 15, 23, 24, 29, 23];
// function oddNumber (numbers){
//     let eliment = [];
//     for(const number of numbers){
//         if (number % 2 === 1){
//             eliment.push(number);
//         }
//     }
//     let sum = 0;
//     for(const odd of eliment){
//         sum = sum + odd;
//     }
//         let count = eliment.length;
//         console.log(sum);
//         let final = sum / count;
//         return final;
// }

// let result = oddNumber(numbers);
// console.log(result);
  

// let names = ['abul', 'babul', 'kabul', 'cabul', 'abul', 'babul'];
// function biriyaniKhor(names){
//     let uniqueName = [];
//     for(const name of names){
//         if(uniqueName.includes(name) === false){
//             uniqueName.push(name);
//         }
//     }
//     return uniqueName;
// }

// let result = biriyaniKhor(names);
// console.log(result);

// let names = ['abul', 'babul', 'kabul', 'cabul', 'abul', 'babul'];
// function biriyaniKhor(names){
//     let uniqueName = [];
//     for(const name of names){
//         if(!uniqueName.includes(name)){
//             uniqueName.push(name);
//         }
//     }
//     return uniqueName;
// }

// let result = biriyaniKhor(names);
// console.log(result);

// min and max Number 
// let max = Math.max(20, 30, 40, 50, 10,25, 45, 314);
// console.log(max)

// let min = Math.min(20, 30, 40, 50, 10,25, 45, 314);
// console.log(min)
// console.log(Math.PI)
// console.log(Math.abs());
// console.log(Math.round(5.84));
// console.log(Math.floor(5.90))
// console.log(Math.random())

// const today = new Date();
// console.log(today);
// const date = new Date(1990-2-5);
// console.log(date.getMonth());

// let x = 5;
// let y = 7;
// console



// let disha = 75;
// let salman = 95;


// if(disha > salman){
//     console.log('disha will be strobery')
// }
// else{
//     console.log('salman will be strobery')
// }


// function getMax (num1, num2){
//     if(num1 > num2){
//         return num1;

//     }
//     else{
//         return num2;
//     }
// }

// console.log(getMax(58, 69))


// let kim = 50;
// let jim = 60;
// let alo = 95;

// function getMaxResult(kim, jim, alo){
//     if(kim > jim && kim > alo){
//         return kim;
//     }
//     else if(jim > kim && jim > alo){
//         return jim;
//     }
//     else{
//     return alo;
//     }
// }

// let result = getMaxResult(kim, jim, alo);
// console.log(`this is big number ${result}`)


// const max = Math.max(25, 65, 58, 42, 84);
// console.log(max)

// let min = Math.min(2, 5, 6, 8, 90);
// console.log(min)


// let heigth = [58, 56, 54, 58, 47, 12, 78, 95, 98, 200];

// function getMax(heigth){
//     return Math.max(...heigth);
// }

// console.log(getMax(heigth))

// function getMax (heigth){
//     let toll = heigth[0]
//     for(let num of heigth){
//         if(num > toll){
//             toll = num;
//         }
//     }
//     return toll;
// }

// console.log(getMax(heigth))

// function getMax(numbers){
//     let max = numbers[0];
//     for(let num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }

// console.log(getMax(heigth))



// function quantityCalculator (chair, table, bed){
//     const perChairWood = 3;
//     const pertableWood = 5;
//     const perBedWood = 50;

//     const totalChairQuantity = perChairWood * chair;
//     const totalTableQuantity = pertableWood * table;
//     const totalBetQuantity = perBedWood * bed;


//     let totalWood = totalChairQuantity + totalTableQuantity + totalBetQuantity;

//     return totalWood;

// }
// console.log(quantityCalculator(0, 0, 1))





// function stor(shirt, pant, ganji){
//     const shirtPrice = 500;
//     const pantPrice = 300;
//     const ganjiPrice = 100;

//     const shirtTotalPrice = shirtPrice * shirt;
//     const pantTotalPrice = pantPrice * pant;
//     const ganjiTotalPrice = ganjiPrice * ganji;

//     let totalPrice = shirtTotalPrice + pantTotalPrice + ganjiTotalPrice;
//     return totalPrice;
// }

// const result = stor(1, 1, 1);
// console.log(result);

// let prices = [12000, 50000, 60000, 46000, 100000, 18000, 25000];
// function getmin(prices){

//     let i = prices[0];
//     for(let price of prices){
//         if(price < i){
//             i = price;
//         }
//     }
//     return i;
// }
// const lowPrice = getmin(prices);
// console.log(lowPrice);

// let mobiles = [
//     {name: 'samsung', price: 12000, camera: '2mp', color: "black"},
//     {name: 'realme', price: 25000, camera: '2mp', color: "black"},
//     {name: 'redme node', price: 20000, camera: '2mp', color: "black"},
//     {name: 'i Phone', price: 120000, camera: '2mp', color: "black"},
//     {name: 'oppo', price: 10000, camera: '2mp', color: "black"}
// ];

// function getMobiles (mobiles){
//     let min = mobiles[0];
//     for(mobile of mobiles){
//         if(mobile.price < min.price){
//             min = mobile;
//         }
//     }
//     return min;
// }

// const result = getMobiles(mobiles);
// console.log(result)

// let mobiles = [
//     {name: 'samsung', price: 12000, camera: '2mp', color: "black"},
//     {name: 'realme', price: 25000, camera: '2mp', color: "black"},
//     {name: 'redme node', price: 20000, camera: '2mp', color: "black"},
//     {name: 'i Phone', price: 120000, camera: '2mp', color: "black"},
//     {name: 'oppo', price: 10000, camera: '2mp', color: "black"}
// ];

// function getMobiles (mobiles){
//     let min = mobiles[0];
//     for(mobile of mobiles){
//         if(mobile.price > min.price){
//             min = mobile;
//         }
//     }
//     return min;
// }

// const result = getMobiles(mobiles);
// console.log(result)

// let products = [
//     {name: 'pent', price: 1200},
//     {name: 'shirt', price: 800},
//     {name: 'shampu', price: 300},
//     {name: 'ciruni', price: 100}
// ]

// function getshoping(products){
//     let total = 0;
//     for(let product of products){
//             total = total + product.price;
//     }
//     return total;
// }
// const result = getshoping(products);
// console.log(result);


// let products = [
//     {name: 'pent', price: 1200, quantity: 2 },
//     {name: 'shirt', price: 800, quantity: 5 },
//     {name: 'shampu', price: 300, quantity: 4 },
//     {name: 'ciruni', price: 100, quantity: 1 }
// ]
// function getProductCost(products){
//     let total = 0;
//     for(const product of products){
//         let sumOfTotal = product.price * product.quantity;
//         total = total + sumOfTotal;
//     }
//     return total;

// }
// const totalCost = getProductCost(products);
// console.log(totalCost);

// function discountPrice (quantity){
//     if(quantity <= 100){
//         const total = quantity * 100;
//         return total;
//     }
//     else if(quantity <= 200){
//         const total = quantity * 90;
//         return total;
//     }
//     else{
//         const total = quantity * 70;
//         return total;
//     }
// }
// const result = discountPrice(5);
// console.log(result)


// function leyearDiscountPrice (quantity){
//     const fristprice = 100;
//     const secondPrice = 90;
//     const threePrice = 70;
//     if(quantity <= 100){
//         const total = quantity * fristprice;
//         return total;
//     }
//     else if(quantity <= 200){
//         const fast100Price = 100 * fristprice;
//         const remeiningQuantity = quantity - 100;
//         const remeiningTotal = remeiningQuantity * secondPrice;
//         const total = fast100Price + remeiningTotal;
//         return total
//     }
//     else{
//         const fast100Price = 100 * fristprice;
//         const second100Price = 100 * secondPrice;
//         const remeiningQuantity = quantity - 200;
//         const remeiningTotal = remeiningQuantity * threePrice;
//         const total = fast100Price + second100Price + remeiningTotal;
//         return total;
//     }
// }
// const result = leyearDiscountPrice(201);
// console.log(result)
// প্রথমে অপারেশন ফাংশন ডিফাইন করতে হবে
// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     if (num2 === 0) {
//         return "Cannot divide by zero!";
//     }
//     return num1 / num2;
// }


// function getadd (num1, num2, oparetion){
//     if(oparetion === 'add'){
//         const result = add(num1, num2);
//         return result;
//     }
//     else if(oparetion === 'subtract'){
//         const result = subtract(num1, num2);
//         return result;
//     }
//     else if(oparetion === 'multipol'){
//         const result = multiply(num1, num2);
//         return result;
//     }
//     else if(oparetion === 'devide'){
//         const result = divide(num1, num2);
//         return result;
//     }
// }
// const result = getadd(5, 4, 'devide');
// console.log(result);



// function myfunc(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'please provide a number'
//     }
//     const total = num1 * num2;
//     return total;
// }

// console.log(myfunc(5, 'seven'));



// let totalMoney = 500;
// let chilli = 100;
// let vagitabol = 50;
// let fish = 250;

// function bazarhisab(totalMoney, chilli, vagitabol, fish){
//     let cost = chilli + vagitabol+ fish;
//     let sum = totalMoney - cost;
//     return sum;
// }

// const result = bazarhisab(totalMoney, chilli, vagitabol, fish);
// console.log(result);


// let patriList = ['tamanna', 'lima', 'rubaiya', 'sathi', 'cameli', 'jannat'];

// function getList(patriList){

//     let temp = [];
//     for(let i = 0; i < patriList.length; i++){
//         let eliment = patriList[i];
//         // console.log(patriList)
//         if(eliment.includes('m')){
//             temp.push(eliment)
//         }
//     }
//     return temp;
// }

// const newlist = getList(patriList);
// console.log(newlist);


// let mybioData = {
//     name: 'Hero alom',
//     age: 25,
//     profeson: 'developer',
//     city: 'cumilla',
// };

// let patriBio = {
//     name: 'tamanna', 
//     age: 21,
//     profeson: 'developer',
//     city: 'sylet',
// }

// function bioList(mybioData, patriBio){
//     if(mybioData.profeson === patriBio.profeson){
//         console.log('yes ok done');
//     }
//     else{
//         console.log('Nooooooooo')
//     }
// }

// const result = bioList(mybioData, patriBio);
// console.log(result);


// let str = "I am learning Programming to become a programmer";
// function getsplit (str){
// let biggerStr = "";
// for(let word of str.split(" ")){
//     if(word.length > biggerStr.length){
//         biggerStr = word;
//     }
// }
// return biggerStr;
// }

// const result = getsplit(str);
// console.log(result);


