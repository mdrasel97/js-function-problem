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
