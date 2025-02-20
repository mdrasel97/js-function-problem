/*function signature/sample */
// function calculateVAT( price ) {
//     if(typeof price !== 'number' || price < 0){
//         return "Invalid"
//     }
//     let vat = price * 7.5 / 100;
//     return vat;
// }
// console.log(calculateVAT(-200))


// task 2
/*function signature/sample */
// function  validContact( contact ) {
//     if(typeof contact !== 'string'){
//         return "Invalid"
//     };
//     if(contact.length !== 11 || !contact.startsWith("01") || contact.includes(" ")){
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// console.log(validContact("01214567890"))


// task 3
/*function signature/sample */
// function  willSuccess( marks ) {

//     if(!Array.isArray(marks)){
//         return "Invalid"
//     }
//     for(let mark of marks){
//        if(mark >= 50 || mark <= 100){
//         return true;
//        }
//        else{
//         return false;
//        }
//     }
// }
// console.log(willSuccess(90))


/*function signature/sample */
// function  validProposal( person1, person2 ) {
//     if(typeof person1 !== 'object' || typeof person2 !== 'object'){
//         return "Invalid"
//     }
//     if(person1.gender === person2.gender || person1.age === person2.age){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// console.log(validProposal(
//     { name: "mitu", gender: "male", age: 32 }, "Mizan"

// ))



/*function signature/sample */
// function  calculateSleepTime( times ) {
//     let sum = 0;
//     for(let time of times){
//         if(typeof time !== 'number'){
//             return "Invalid"
//         }
//         sum = sum + time;
//     }
//     // console.log(sum)
//     let count = sum;
//     let hours = Math.floor(count / 3600);
//     let minutes = Math.floor((count % 3600) / 60);
//     let seconds = count % 60;

//     return {hours, minutes, seconds};
// }

// console.log(calculateSleepTime([100, 3800, 90]));


// function myfunc (str){
//   return str.split('').reverse().join('');
// }
// console.log(myfunc('string'))



// function myfunc (numbers){
//     let max = 0;
//   for(let i = 0; i < numbers.length; i++){
//     if(max < numbers[i]){
//         max = numbers[i];
//     }
// }
// return max;
// }
// console.log(myfunc([20, 30, 25, 26, 10, 80, 90]))


// function myfunc (numbers){
//     let sum = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] < sum){
//             sum = numbers[i]
//         }
//     }
//     return sum;

// }
// console.log(myfunc([20, 30, 25, 26, 10, 80, 90]))


// function myfunc (str){
//     let vowel = 'aeiouAEIOU';
//     let result = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vowel.includes(str[i])){
//             result ++;
//         }
//     }
// return result;
// }
// console.log(myfunc('Bangladesh'))



function myfunc (str){
    let vowel = 'aeiouAEIOU';
    let result = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i])){
            result ++;
        }
    }
return result;
}
console.log(myfunc('Bangladesh'))