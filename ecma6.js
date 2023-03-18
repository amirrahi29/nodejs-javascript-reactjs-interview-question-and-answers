//1. difference b/w  let, var, const............................

//let: block level scope

// let a = "ghghg";
// if(true){
//     let a;
//     a="abc";
// }
// console.log(a);

//var: global scope
// var a = 20;
// if(true){
//     a = 30;
// }
// console.log(a);

//2. ............................................................
// for(var i = 0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// for(let i = 0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }


//3. default parameter...................................................

// function add(a,b = 20){
//     return a+b;
// }
// console.log(add(10));


//4. default parameter...................................................

// function add(a,b = add()){
//     return a+b;
// }
// console.log(add(10,30));


//5. template literals?------------------------------------------------

// backtick and add string

//6.differnce between find and findindex--------------------------------------------------

//it will give value.....................
// let data = [10,20,7,50,1,100];
// let result = data.find((item)=>{
//     return item > 20 && item < 100;
// });

// console.log(result);

//it will give index.....................
// let data = [10,20,7,50,1,100];
// let result = data.findIndex((item)=>{
//     return item>20;
// });
// console.log(result);


// let data = [
//     {id:20,name:"amir"},
//     {id:30,name:"akhil"},
//     {id:40,name:"rohit"},
//     {id:25,name:"priya"},
//     {id:49,name:"priyanka"},
// ];

// let result = data.find((item,index)=>{
//     return item.id>20 && item.id<30;
// });

// console.log(result);


//7. Normal function and arrow function ..........................................

//normal funtion: need to write function before function name.
//arrow function : very simple, no need to write function. 
//no need to add return statement, arrow function having no these keyword it automatically point to the parent this


// let data = [3,4,5,6,7,8,2];

// let result = data.map((item)=>item*2);
// console.log(result);

//8. class---ecma6------------------------------------------------------

// class Fruits{
//     constructor(){
//         console.log("constructor");
//     }
//     name = "amir";
//     getFruits(){
//         return "my fudsvsdbvwd result"
//     }
// }

// let f1 = new Fruits();
// // console.log(f1.name);
// console.log(f1.getFruits());

//no need to write function before function name
// no need to write data types before data;


//9. Inheritance...................................................

// class Category{
//     restaurant(){
//         return "baba ka dhaba";
//     }
//     grocery(){
//         return "spar hypermart";
//     }
// }

// class Fruits extends Category{

//     constructor(){
//         super();
//         console.log('constructor');
//     }
//     getFruits(){
//         return "My all fruits";
//     }
// }

// let f1=new Fruits();
// console.log(f1.restaurant());

//10. Lexical Scope for this------------------------------------------------

//Lexical scope: means kisi chij ki kitni range hai
//jab hum koi object declare karte hai or usi object ke andar jab hum usi object ki dusri property ko use krte hai to hum use krte hai this
//lexical scope problem resolved by arrow function.

// let data = {
//     list: 'friend',
//     names: ['buice','peter','sam'],
//     getFruits:function (){
// let that = this;
//         // this.names.map(function(item){
//         //     console.log(that.list+": "+item);
//         // })
//         //arrow function resolve this issue here
//         // this.names.map((item)=>{
//         //     console.log(this.list+": "+item);
//         // });
//     }
// }
// data.getFruits();


//11. Rest Operator-------------------------------------------------

// function fruits(a,...b){
//     return b;
// }

// console.log(fruits("banana","mango","orange"));

//12. Promise  ---------------------------------

//during api call we call two promises to resolve.... that is also called promise chaning.
//finally keyword is there to execute on both resolve and reject case

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("heloooooo: 3");
//     }, 3000);
//     setTimeout(() => {
//         resolve("heloooooo: 1");
//     }, 1000);
//     setTimeout(() => {
//         resolve("heloooooo: 2");
//     }, 2000);
// })
// myPromise.then((value) => {
//     console.log('resolved result: '+ value);
// })
// myPromise.catch((err) => {
//     console.log('resolved error');
// });

//promise types
//promise.all: worked when multiple promises working, after all operation completed then give result. either only resolve or reject
//promise.allsettlled: worked when multiple promises working, after all operation completed then give result either resolve or reject
//promise.race: worked when multiple promises working, fast promise will be the first promise

// let myPromise = Promise.all([
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("helooooooooooooo2");
//         }, 2000);
//         setTimeout(() => {
//             resolve("helooooooooooooo5");
//         }, 5000);
//         setTimeout(() => {
//             resolve("helooooooooooooo1");
//         }, 1000);
//         setTimeout(() => {
//             resolve("helooooooooooooo3");
//         }, 3000);
//     })
// ]).then((item)=>{
//     console.log(item);
// })
// .catch((err)=>{
//     console.log(err)
// })


//13. new global function------------------------------------------------

// isNaN: ye function tab return karta hai jab isko number value return nhi krta hai Like isNaN(10)
// isFinite: ye function tab true return karta hai jab isko numbefr value mita hai Like isFinite(10)

//14. destructuring array..................................................

//types of destructuring
    //a. array
    //b. object

//arra destructring----------------------------- it depends on index

//unpacking array inside variable called destructuring.
//const [name, setName] = useState(); //called destructuring
// here we are destructuring array inside two variables name and setName()

// let fruits = ["mango","orange","guava"];
//if we want to destructure this array then use
// const [fruit1,fruit2,fruit3,fruit4="unknown"] = fruits;
// console.log(fruit3);
// //undefined when out of range then undefined or defult value
// console.log(fruit4);

// const [fruit1,...fruitx] = fruits;
// console.log(fruit1,fruitx);


//object destructuring.....................it depends on key
// let user = {name:"amir",age:20,gender:"male"};
// const {name,...age} = user;
// console.log(age);


//14. spread operator------------------------------------------

// let fruits = ["banana","apple","kiwi"];

// function allFruits(a,b,c){
//     console.log(a,b,c);
// }

// allFruits(...fruits);

//15. exponentiation operator..................................

// **
// console.log(2**3); //2x2x2 (2 ka power 3)

// let data = [1,2,4,6,5];
// //find max/min/random number from array
// console.log(Math.max(...data));
//find power of any numner
// console.log(Math.pow(2,3));
            

//16. generator------------------------------------------------
// generator: it is type of function but wen can pause and resume this
//Yeild is use to pause and stop

// function* abc(){
//     let a = 20; 
//     let b = 50;

//     console.log(a+b);
//     yield 'step1 completed';
//     console.log(b-a);
//     yield 'step 2 completed';
//     console.log(a*b);
//     yield 'step3 completed';

//     return 'all steps completed'
// }

// let data = abc(); 
// data.next();


//17. --------------------------------------