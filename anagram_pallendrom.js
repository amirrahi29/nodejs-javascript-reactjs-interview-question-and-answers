//Anagram string

// Eg. (LISTEN,SILENT)
// Eg. (HEART,EARTH)
// Eg. (CAT,TAC,ACT)
//length must be same
//----------------------------------------------------

// function checkAnagram(a, b) {

//     //new array
//     let newData = {};

//     //check length
//     if (a.length != b.length) {
//         return false
//     }
//     //a
//     for (ch of a) {
//         newData[ch] = (newData[ch] || 0) + 1;
//     }
//     //b
//     for (ch of b) {
//         if (!newData[ch]) {
//             return false;
//         }
//         newData[ch]--
//     }
//     return true;
// }

// let LISTEN = "HELLO";
// let SILENT = "OLHEL";

// console.log(checkAnagram(LISTEN, SILENT));


//pallendrom

//Eg. (LOL, LEVEL, MAM, aba, abcba)

// function pallendrom(myString){
//     let start = 0;
//     let end = myString.length-1;
//     let result = true;
//     while(end>start){
//         if(myString[start] != myString[end]){
//             result = false;
//         }
//         start++;
//         end--;
//     }
//     return result;
// }


// console.log(pallendrom("LEVEL"));

