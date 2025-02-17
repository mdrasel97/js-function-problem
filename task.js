// task 1
// const numbers = [167, 190, 120, 165, 137];
// function getMinNumber(numbers){
//     let min = numbers[0];
//     for(let number of numbers){
//         if(number < min){
//             min = number
//         }
//     }
//     return min
// }
// const result = getMinNumber(numbers);
// console.log(result);

// task 2
// const smalleName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// function getMinName(smalleName){
//     let minName = smalleName[0]
//     for(let name of smalleName){
//         if(name.length < minName.length){
//             minName = name;
//         }
//     }
//     return minName;
// }

// const result = getMinName(smalleName);
// console.log(result);

// task 3
// let bugget = [
//     {laptop: 'dell', price: 35000 },
//     {tablet: 'hp', price: 15000},
//     {mobile: 'lenovo', price: 20000},
// ];

// function getbugget(bugget){
//     let sum = 0;
//     for(let bug of bugget){
//         // console.log(bug)
//         sum = sum + bug.price;

//     }
//     return sum;
// }
// const result = getbugget(bugget);
// console.log(result);

// task 4

// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(phones){
//     let sum = 0;
//     for(let phone of phones){
//         sum = sum + phone.price;
//     }
//     let count = phones.length;
//     let avg = sum / count;
//     return avg.toFixed(2);
// }

// const result = findAveragePhonePrice(phones);
// console.log(result);