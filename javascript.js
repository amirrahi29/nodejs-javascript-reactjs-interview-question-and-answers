// 1.-----------------------------------------
// let a = [];
// let b = [];

// console.log(a==b);
// console.log(a===b);

// 2.-----------------------------------------
// let a = [];
// let b = a;

// console.log(a==b);
// console.log(a===b);

// 3.-----------------------------------------
// let a = [20];
// let b = [20];

// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

// 4.-----------------------------------------
// let z = [1,2,3,4];
// let a = {name:'amir'};
// console.log(...z);
//its destructered removed [] 

// 5.----------------------------------------
//its comes when we try to divide like (amir/2)
// console.log(typeof NaN);

//6.------------------------------------------
// let data = 10 - - 10;
// console.log(data);


//7.------------------------------------------
// const set = new Set([1,2,1,3,4,5,7,7]);
// console.log(set);

//8.---------------------------------------------
//we cannot delete data directly but if we have any property like name then we can delete.

// let data = {name:"amir",age:27};
// console.log(delete data.age);
// console.log(data);

//9.---------------------------------------------
// const data = ["amir", "rahi", "sam"];
// const [y] = data;
// console.log(y);

//10----------------------------------------------

// const data = {name:'amir',age:27,skill:"JS"};
// //firstway to read
// console.log(data.name);
// //secondway to read
// const {age} = data;
// console.log(age);


//11----------------------------------------------

// let data1 = [1,3,5,7,8,4];
// let data2 = [6,3,7,4,2,8,6,8];

// // add using spread operator
// let result = [...data1,...data2];

// console.log(result);

//12----------------------------------------------

// let data1 = [1,3,5,7,8,4];
// let data2 = [6,3,7,4,2,8,6,8];

// //spread operator
// let result = [data1,...data2];
// console.log(result);


//13-----------------------------------------------

//if the key is repeated then the position of key will be first repeated position and the value will be the last repaeated value.
// let data1 = {name:"amir",age:20,skill:"react"};
// let data2 = {subject:"maths",address:"jharkhand",skill:"node"};

// let result = {...data1,...data2};
// console.log(result);


//14------------------------------------------------

// const name = "amir";
// console.log(name());

//.15------------------------------------------------

// const result = false || {} || null;
// console.log(result);

//object is the positive value so output will be {}
// '' is not a positive value
// if not positive anything the it will pick last value bydefault

//16--------------------------------------------------
// const result = [] || 0 || true;
// console.log(result);

//17------------------------------------------------=
// const result = null || false || '';
// console.log(result);

//18-------------------------------------------------

// console.log(Promise.resolve(5));

//19--------------------------------------------------

// console.log('❤️' === '❤️');
// console.log('🤣' === '❤️');

//20---------------------------------------------------

// JSON.parse();
//converts json data to javascript value

//21---------------------------------------------------

// let name = "amir";

// function getName(){
//     console.log(name);
//     let name = 'rahi';
// }

// getName();

// throw error with let but it will fine in var

//22--------------------------------------------------------

// let name = "amir";
// function getName(){
//     console.log(name);
// }
// getName();


//23---------------------------------------------------------

// console.log(`${(x => x)('I Love')} to program`);

//24.-------------------------------------------------------

//how we can call this function (c is the answer)
// function sumValues(x,y,z){
//     return x+y+z;
// }

// console.log(sumValues(...[2,3,2]));

// A: sumValues([...1,2,3]);
// B: sumValues([...[1,2,3]]);
// C: sumValues(...[1,2,3]);
// D: sumValues([1,2,3]);


//25.--------------------------------------------------------

// const name = 'welcome amir rahi';
// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');
// console.log(!typeof name === false);
             // false            false
//26.----------------------------------------------------------

// const name = "amir";
// const age = 21;

// console.log(isNaN(name));
// console.log(isNaN(age));


//27.-----------------------------------------------------------

// let person = {name:'amir'};
// //what can modify person object
// Object.seal(person);
// person.name = "akhil";
// person.age = "29";
// //after seal added we cannot add extra data
// console.log(person);

//28.--------------------------------------------------------------

// let data = [2,9,0,10];
// //remove first element
// data.shift();
// console.log(data);

//29.--------------------------------------------------------------

// let data = [2,9,0,10];
// //remove last element
// data.pop();
// console.log(data);


//30.------------------------------------------------------------
//check even number
// let a = 30;
// console.log(a%2);

//31.------------------------------------------------------------

// let data = {
//     name: "amir"
// }

// delete data.name;
// console.log(data);

//32.-------------------------------------------------------------

// let data = "true";
// //convert data to boolean false value
// console.log(!typeof data);


//33.----------------------------------------------------------

// let data = "true";
// //convert data to boolean false to true type of boolean
// console.log(!!typeof data);

//34.-----------------------------------------------------------

//difference between map and forloop
//map - having return value
//forloop - not having any return value

//35.------------------------------------------------------------

// let data = ['amir','rahi','akhil','abc'];
// delete data[1];
// console.log(data);

//36.-----------------------------------------------------------

// let data = ['amir','rahi','akhil','abc'];
// delete data[1];
// console.log(data.length);

//37.------------------------------------------------------------
//merge two array
// let data1 = [2,4,6,7];
// let data2 = [4,7,3,6,5];

// console.log(...data1,...data2);

//38.---------------------------------------------------------
//its s square
// let c = 3**3; //3x3x3
// console.log(c);

//39.---------------------------------------------------------

// let a = 2;
// setTimeout(() => {
//     console.log(a);
// }, 0);
// a = 100;

//40.-------------------------------------------------------------

// let a = 2;
// let A = 4;

// console.log(A);

//41.--------------------------------------------------------------
//javascript rule: variable cant numberic at first
// let A10 = "LIKE";
// console.log(A10);

//42.-------------------------------------------------------------

// let a = "like";
// let b = `like`;
// console.log(a===b);

//43.------------------------------------------------------------

// let a = 1;
// let b = 2;

// console.log(--b === a);

//44.-----------------------------------------------------------------

// let a = 1;
// let b = 1;
// let c = 2;

// console.log(a === b === --c);
//            true === --c
        //so it is false

//45.-----------------------------------------------------------------

// console.log(3*3); //9
// console.log(3**3); //27
// console.log(3***3); //error

//46.-----------------------------------------------------------------
//will be undefined
// console.log(a);
// var a;


//47.-------------------------------------------------------------------
//not defined
// console.log(a);

//48.---------------------------------------------------------------

//one-one data available on each array accept on last array. i.e empty
// console.log([[[[]]]]);

//49.------------------------------------------------------------------

//how to find os name if javascript

// navigator.platform run on browser

//50.--------------------------------------------------------------------
//reserved syntax in javascript so we cannot use as variable.
// let for = 100;

//51.--------------------------------------------------------------------

// function abc(){
//     console.log(name);
//     console.log(age);

//     var name = "amir";
//     let age = 27;
// }
// abc();

//52.------------------------------------------------------------------

// if var with forloop then settimeout will execute after forllop completed so last value will print 5 times

// for(var i = 0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1);
// }

//53.-----------------------------------------------------------------

// for(let i = 0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1);
// }

//54.----------------------------------------------------------------

// console.log(+true);
// console.log(typeof +true);

//55.---------------------------------------------------------------

// console.log(!"amir");
// console.log(typeof("anil"));

//56.-------------------------------------------------------------

// let data = "size";
// const bird = {
//     size:"small",
// }
// console.log(bird[data]);
// console.log(bird['size']);
// console.log(bird.size);
// console.log(bird.data);

//57.--------------------------------------------------------------

// let c = {name: "amir"};
// let d;
//  d = c;
//  c.name = "rahi";
//  console.log(d.name);

//bcoz it copy the location so the last value will be answer

//58.--------------------------------------------------------------------

// var x;
// var x = 10;
// console.log(x);

//59.-----------------------------------------------------------------

// var x;
// let x = 10;
// console.log(x);

//already been declared error


//60.------------------------------------------------------------------

// let a = 3;
// let b = new Number(3);

// console.log(a == b);
// console.log(a === b);


//61.------------------------------------------------------------------

// let name; //wil be undefined when we will console
// mname = "amir"; // we can use without data type so it will not throw error
// console.log(mname);


//62.-------------------------------------------------------------

// function fruit(){
//     console.log("rahi");
// }
// fruit.name = "amir";
// fruit()


//63.---------------------------------------------------------------

// function sum(x,y){
//     return x+y;
// }
// console.log(sum(2,"3"));

//64,-------------------------------------------------------------------

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);


//65.-----------------------------------------------------------------

// function getAge(...args){
//     console.log(typeof args);
// }

// getAge();

//66.--------------------------------------------------------------

// function getAge(){
//     'use strict';
//     let age = 22;
//     console.log(22);
// }
// getAge();


//67.-------------------------------------------------------------
//eval covert this  to expression and multiple and add
// const sum= eval("10*10+5");
// console.log(sum);


//67.------------------------------------------------------------

// session storage till browser tab close

//68.-------------------------------------------------------------

// const obj = {1:'a',2:'v',3:'c',4:'r'};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));


//69.---------------------------------------------------------------

// const obj = {a:'one',b:'two',a:'three'};
// console.log(obj);

//68.------------------------------------------------------------

// for(let i = 0; i<5; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i);
// }


//69.--------------------------------------------------------------

// const foo = console.log('first');
// const bar = setTimeout(() => {
//     console.log('middle')
// });
// const buz = console.log('last');


//70.-------------------------------------------------------------

// const person = {name:'amir'};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

//call already call hota hai isliye value return krega
//bind function return krega but value lene ke liye bind ko call krna pdega like console.log(sayHi.bind(person, 21)());

//71.----------------------------------------------------------------

// function sayHi(){
//     return (()=>0)();
// }

// console.log(typeof sayHi());


//72.-----------------------------------------------------------------

// function sayHi(){
//     return ()=>0;
// }

// console.log(typeof sayHi());

//73.----------------------------------------------------------------

//number writen in string so it will be string
// console.log(typeof typeof 1);

//74.--------------------------------------------------------------

// const numbers = [1,3,5];
// numbers[6] = 9;
// console.log(numbers);

//75.---------------------------------------------------------------
//it will go to infinite
// const numbers = [1,3,5];
// numbers[6] = numbers;
// console.log(numbers);

//76.--------------------------------------------------------------

//Everything in javascript is primitive or object;
//primitives types like string, number boolean etc.

//77.-------------------------------------------------------------

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

//78.--------------------------------------------------------------

//it gives unique id's. with the help of different different id's we can stop.

// console.log(setInterval(() => {console.log("hi")}, 1000));
// console.log(setInterval(() => {console.log("hi")}, 1000));
// console.log(setInterval(() => {console.log("hi")}, 1000));

//79.----------------------------------------------------------------

// console.log([..."amir"]);


//79.----------------------------------------------------------------
//jo jyada speed hoga wahi print hoga.
// const firstPromise = new Promise((req,res)=>{
//     setTimeout(req,500,'one');
// });
// const secondPromise = new Promise((req,res)=>{
//     setTimeout(req,100,'two');
// });
// Promise.race([firstPromise,secondPromise])
// .then(req=>console.log(req));

//80.---------------------------------------------------------------

//naya array bnne pr memory location change ho jata h isliye person to null ho jayega lekin members me data rah jayega
// let person = {name: 'amir'};
// const members = [person];
// person = null;
// console.log(members);

//81,-----------------------------------------------------------

//key milega

// const person={
//     name:"amir",
//     age:28
// };

// for(const item in person){
//     console.log(item);
// }


//82.----------------------------------------------------------

// let data = 3+4+'7';
// console.log(typeof data);

//83.----------------------------------------------------------
//operation is executing from left to right so 
// console.log(typeof 3 + 4 + '7');
// //                int  string

//84.----------------------------------------------------------

// console.log(typeof (3 + 4 + '7'));

//85.-----------------------------------------------------------
//jb kisi string ke age + lgate h to int bn jata h
// console.log(typeof (3 + 4 + + '7'));

//86.-----------------------------------------------------------
// 2 array ka memory location same nhi hota h 
// console.log([] == []);

//87.-----------------------------------------------------------
//jb v returhn khali hota h to o undefined ho jata  h
// let data = [1,2,3].map(num=>{
//     if(typeof num === 'number') return;
//     return num*2;
// });

// console.log(data);

//88.-------------------------------------------------------------

// function getInfo(member){
//     member.name="rahi";
// }

// const person = {name:"amir"};
// getInfo(person);
// console.log(person);


//89.-----------------------------------------------------------

// function Car(){
//     this.make = "tata";
//     return {make: "kia"};
// }

// const myCar = new Car();
// console.log(myCar.make);


//90.----------------------------------------------------------

// (()=>{
//     let x = (y = 10);
// })();

// console.log(typeof x);

//91.--------------------------------------------------------------

//y ke pass data type nhi h isliye bahar v accessible hoga

// (()=>{
//     let x = y = 10;
// })();

// console.log(typeof y);

//92.----------------------------------------------------------

// (()=>{
//     let x = 10;
// })();

// (()=>{
//     let x = 20;
// })();

// console.log(typeof x);


//93.----------------------------------------------------------

// (()=>{
//     let x = y = 10;
// })();

// (()=>{
//     let x = y = 20;
// })();

// console.log(typeof y);


//94.-----------------------------------------------------------

// let x = 100; 

// (()=>{
//     var x = 20;
// })();

// console.log(x);


//95.---------------------------------------------------------------

// console.log(!true - true);
//  !true = 0
//   -true = -1

//96.-----------------------------------------------------------

// console.log(true + +"10");


//97.----------------------------------------------------------

//convert string to array
// let str = "Hello amir rahi";
// //1st way
// console.log(str.split());
// //2nd way
// console.log([str]);


//98.------------------------------------------------------------
//convert ever character as array
// let str = "Welcome amir rahi";
// //1st way
// console.log([...str]);
// //2nd way
// console.log(str.split(''));

//99.------------------------------------------------------------
//convert ever character as array and also with space words
// let str = "Welcome amir rahi";
// //1st way
// console.log([...str]);
// //2nd way
// console.log(str.split(' '));


//100.------------------------------------------------------------
//convert ever character as array and also on the basis of a
// let str = "Welcome amir rahi";
// //1st way
// console.log([...str]);
// //2nd way
// console.log(str.split('a'));


//101.-----------------------------------------------------------
//replace only for one character available
// let str = "How are you";
// console.log(str.replace("o","_"));

//101.-----------------------------------------------------------
//replace for all character available
// let str = "How are you";
// console.log(str.replace(/o/g,"_"));

//102.---------------------------------------------------------
// let str = "How are you, i am fine";
// console.log(str.substring(2,6));

//103.---------------------------------------------------------
//to remove only first character
// let str = "How are you, i am fine";
// console.log(str.substring(2,str.length));
                 // position to remove

//104.-------------------------------------------------------

//to remove only last character
// let str = "How are you, i am fine";
// console.log(str.substring(0,str.length-2));
                //  0 fix            //position

//105.---------------------------------------------------------

//remove all characters before 'o'
// let str = "How are you, i am fine";
// let temp = str.split('o');
// console.log(temp[0]);

//106.----------------------------------------------------------

//reverse whole string
// let str = "How are you, i am fine";
// let temp = str.split("").reverse().join("");
// console.log(temp);

//107.-----------------------------------------------------------
//remove extra spaces

// let str = "      amir                    ";
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

//108.---------------------------------------------------------
//concat two strings
// let a = "amir";
// let b = "rahi";

// console.log(a.concat(b));
// console.log(a.concat(" "+b));
