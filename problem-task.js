// You are given an array of numbers. Count how many times the a number is repeated in the array.

// let numbers = [5,6,11,12,98, 5];
// let eliment = [];
// for(let number of numbers){
//     if(eliment.includes(number) === false){
//         eliment.push(number)
//     }
// }
// console.log(eliment)

// function uniqueNumber(numbers){

// }
// const result = uniqueNumber(numbers);
// console.log(result)
// // 
// task 2
// function tempToForen (temp){
//     const result = (temp * 9/5) + 32;
//     return result;
// }

// console.log(tempToForen(38))


// task 4

// let str = "Bangladesh";
// function vowelNumber (str){
//     let vowel = "aeiouAEIOU";
//     let count = 0;

//     for(let number of str){
//         if(vowel.includes(number)){
//             count++;
//         }
//     }
//     return count;
// }

// const result = vowelNumber(str);
// console.log(result)

// task 3
// let str = "I am learning Programming to become a programmer";
// function biggerStr(str){
//     let words = str.split(" ")
//     let longWord = "";

//     for(let word of words){
//         if(word.length > longWord.length){
//             longWord = word;
//         }
//     }
//     return longWord;
// }

// console.log(biggerStr(str))


// let str = "I am learning Programming to become a programmer";
// function myProgram (str){
//     let words = str.split(" ");
//     let biggerStr = "";
//     for(let word of words){
//         if(word.length > biggerStr.length){
//             biggerStr = word;
//         }
//     }
//     return biggerStr;
// }

// console.log(myProgram(str))


// task 4
// Generate a random number between 10 to 20.
// function generateRendomNumber (){
//     return Math.floor(Math.random() * 20)
// }
// console.log(generateRendomNumber())



// let lists = [
//     {name: 'rasel', member: 1},
//     {name: 'ali', member: 3},
//     {name: 'hossain', member: 5},
//     {name: 'rojina', member: 1},
//     {name: 'morjina', member: 12},
//     {name: 'bisti', member: 1},
//     {name: 'akash', member: 8},
//     {name: 'hena', member: 6},
//     {name: 'rasel', member: 9},
//     {name: 'mridha', member: 5},
//     {name: 'rasel', member: 4}
// ]

// function getgestList (lists){
//     let element = [];

//     for(let list of lists){
//         let isunique = true;
//         if(list.name === element.name){
//             isunique= false;
//             break;  
//         }
//         if(isunique){
//             element.push(list)
//         }
//     }
//     return element;
// }

// const result = getgestList(lists);
// console.log(result);

function validContact(contact){
    if (typeof contact !== 'string'){
        return "Invalid";
    }

    if (contact.length !== 11 || !contact.startsWith("01") || contact.includes(" ")){
        return false;
    }
    return true;
}
const number = validContact("01819234567");
console.log(number);