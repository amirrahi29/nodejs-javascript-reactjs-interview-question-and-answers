//1.profiler...........................................................
//profiler is used to check the performance of application.
//specificode time and rerender (according to the it check performance)

//2.diffrence b/w javascript function and react custom hooks............
// we cannot use react features inside javascript but we can use javascript features inside react

//3.difference b/w library and framework..................................
//library: we can defined flow according to our need 
//framework: already defined flow like laravel mvc.

//4.which 3 lifecycles method which hooks donot cover?....................
// getsSnapshotBeforeUpdate();
// getDerivedStateFromError();
// componentDidCatch();

//5. What is JSX?
//jsx is the javascript extension, with the help of jsx we can use html codes inside javascript.

//6. is context api is the alternate of redux?....................
//no,context api is used to resolve the issue of pro drilling.if we want to send the data from parent to child and vise versa then we use.
//but also we can use redux for same case, but many uses are there of redux, we can use redux data as globaly,
// we can separate code by redux also.
//both are different.
// we can use both is necessary.

//7. Map vs foreach................................................

//these are javascript functions.

// //map
// data.map((e)=>{
//     return e;
// });

// //foreach
// data.foreach((e)=>{
//     console.log(e);
// })

//8.custom hooks vs functions in react js.....................

//custom hooks: we can use react js lifecycle.
//function: we cannot use react lifecycles.

//9. is react js follow mvc architecure?.........................
// No. Only represents view. if we want to use model then we can use with redux.

//10. how react js very fast?......................................
// react js internally virtual dom ko use karta hai, virtual dom hamesa 2 layer rakhta hai, 
// 1 change se pehle ki or 1 change hone ke baad ki virtual dom dono layer ko compare krke specific 
// div ho koi tag to specifically use he update kr eta hai.


//11. useId Hook in react 18?..............................................
//use id hook ka use unique id generate krne ke liye hota hai iska use multiple checkbox etc.
//jaha unique id generate karna hota hai waha use krte hai.

//12. strict mode in react and javascript
// strict mode in javascript: 'use strict' //to check validation.
// strict mode in react js: React.StrictMode //to check validation.

//only in development mode.....
//react strict mode also can apply on specific code.


//13. deep and shallow copy.

//closure : when the child function have the access of parent function. so its called closure.


// function parent() {
//     var a = 20;
//     function child() {
//         var a = 30;
//         return a
//     }
//     return child();
// }

// console.log(parent());


// -------------------------------JIRA----------------------------------
// =====================================================================

// SCRUM : It is the meeting place where everyone will be included like testers, developers, managers etc, it occurs on the daily basis.

// SPRINTS : sprint meeting is done when it is approved, tested on n days which was assigned and done in a particular time frame.

// STORY & DEFECT : these are like problem statements that can be an existing project envireonment and are they can be new so based on that story will be created or if it existing bug then defect will be created.


// node--inspect to debug node application.


// throtling and debouncing: debouncing when searhing and stop searching after few second api will fire to get api.
// throttle is used to stop click again and again same api. settimeout 5 second


// memoization: when we have the data and we want to use it again on some other places then we dont need to re-render that is called memoization.

// Flux: it is pattern which works redux.

//state and props