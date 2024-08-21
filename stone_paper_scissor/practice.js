//arithmatic operatiors
//  let a=5;
//  let b=10;
//  console.log("a=",a, "b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a**b=",a**b);
// a++;
// console.log(a);

//assignment operators
// let a=5;
// let b=2;

// // // // // // // a+=4;//a=a+4;
// // // // // // // console.log("a=",a)//9

// // // // // // //comparision operator
// // // // // // let a=5;
// // // // // // let b=5;
// // // // // // console.log("5== b",a==b);

// // // // // // conditional statement
// // // // // let mode="dark";
// // // // // let color;
// // // // // if(mode === "dark"){
// // // // //     color = "black";
// // // // // }
// // // // // if(mode === "light"){
// // // // //     color = "white";
// // // // // }
// // // // // console.log(color);

// // // // //even odd
// // // // let n=11;
// // // // if(n%2 === 0){
// // // //     console.log("even");
// // // // }else{
// // // //     console.log("odd");
// // // // }

// // // //age checking
// // // let age=3;
// // // if(age< 18){
// // //     console.log("junior");
// // // }else if(age>50){
// // //     console.log("senior");
// // // }else{
// // //     console.log("middle");
// // // }

// // // alert("hello world !!!! im tabassum!!!!!");//one time popup message

//take a input from user using prompt
// let n = prompt("Enter name:");
// // console.log(n);

// //exercise
// let n = prompt("Enter name:");
// if(n%5===0){
//     console.log(n);
// }else{
//     console.log("its not")
// }

//let stud = 71;
// let gred = 1;
// if(gred >=80 && gred <=100 ){
//     console.log("A");
// }else if(gred >=70 && gred <=89){
//     console.log("B");
// }else if(gred >=60 && gred <=69){
//     console.log("C");
// }else if(gred >=50 && gred <=59){
//     console.log("D");
// }else{
//     console.log("F");
// }

//loopes in javascript
// for(let i=1; i<=100; i++){
//     console.log("tabassum khan");//execute for 5 time
// }
//for(initilization;condition;increment/decrement){}

//calculate sum of 1 to 5
// let sum=0;
// for(i=1;i<=5;i++){
//     sum=sum+i;
// }
// console.log("sum =", sum);

//while loop
//while(condition){
//code to be execute
//}
// let i=1;
// while(i<=5){
//     console.log("naznin khan");
//     i++;
// }

//do while loop
//do{
//code
//}while(condition)
// let i=1;
// do{
//     console.log("naaz khan",i);
//     i++;
// }while(i<=10);

//for of loop
// let str = "sameerkhannnnnnnn";
// for(let val of str){
//     console.log(val);
// }

//for in loop
// let std={
//     name: "rahul khan",
//     age:20,
//     cgpa:7.5,
//     isPass: true,
// };
// for(let key in std){
//     console.log("key=",key,"value=", std[key]);
// }

// for(let i=0;i<=100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }

// }

//mini game to find number
// let gameNum= 21;
// let userNum=prompt("miss naaz guess the number in between 15 to 25:");
// while(userNum !=gameNum){
//    userNum= prompt("hmmm noooo!!!!! try againnnnn:");
// }
// console.log("congratulations.....21 so go ...or momo ko do abhi ek kiss...haaa haaa haa");

//striinig is a sequence of caracter that represent string
// let str = "nazninkhan";
// str.length

// let fullName=prompt("enter your name without:");
// let userName="@"+fullName + fullName.length;
// console.log(userName);

//array
// let info=["sam",67,0.777];
// console.log( info);

//array indices
//let heroes=["ironman","hulk","spider man","thor","starlord","antman"];
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);

// }

//for of
// for(let i of heroes){
//     console.log(heroes);
// }
// let marks=[85,97,44,37,76,60]
// let sum=0
// for(let i of marks){
//     sum=sum+i;
// }
// let avg=sum/marks.length;
// console.log(`the average of the class ${avg}`);

// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     off=items[i]/10;
//     items[i]-=off;
// console.log(items[i]);

//Q1
// let companies=["blomberg","microsoft","Uber","geogle","IBM","Netflix"];
//  companies.shift();
// console.log(companies);

// //Q2
// companies.splice(1,2,"ola");
// console.log(companies);

// //Q3
// companies.push("Amazon");
// console.log(companies);

//functions
//a block of code that performs a specific task, can be invoke whenever they need

//function defination
// function myFunction(){
//     console.log("welcome to apna clg");
//     console.log("this is my first time making function in java script");
// }
// function call
// myFunction();

//function call using parameter
// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("i love java script");//arguments

// function sum(a,b)=>{
//     return  a + b;
// }
// const sum = (a,b) => {
//     console.log(a+b);
// }
// sum(4,6);

// const arrowMul =(x,y) => {
//     console.log(x*y);
// }
// arrowMul(6,6);

//question

// function countVowels(str){
//     let count=0;
//     for(const val of str){
//         if(val ==="a" || val ==="e" || val === "i" || val ==="o" ||
//             val ==="u"){
//                 count++;

//             }
//     }
//     console.log(count);
// }
// const countVow=(str) =>{
//     let count=0;
//     for(const val of str){
//         if(val ==="a" || val ==="e" || val === "i" || val ==="o" ||
//             val ==="u"){
//                 count++;

//             }
//     }
//     console.log(count);

// }

// let num=[7,8,90];
// num.forEach((s) =>{
//     //let x=s*s;
//     console.log(s*s);
// })

// let marks=[45,67,89,12,90,96,34,58];
// let ans=marks.filter((val) =>{
//     return val > 90;
// })
// console.log(ans)

// let n=prompt("enter a number:");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((res, curr) => {
//     return res + curr;
// })
// console.log(sum);

// let factorial=arr.reduce((res, curr) => {
//     return res * curr;
// })
// console.log(factorial);

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText +   "from apna clg student";

// let div=document.querySelectorAll(".box");
// console.dir(div);

// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText +   "from apna clg student";

// let div=document.querySelectorAll(".box");
// //div[0].innerText = "new unique value 1";
// let idx =1;
// for( val of div){
//     val.innerText = `new unique value ${idx}`;
//     idx++;
// }
// let div=document.querySelectorAll(".box");
// //div[0].innerText = "new unique value 1";
// let idx =1;
// for( val of div){
//     val.innerText = `new unique value ${idx}`;
//     idx++;
// }
// let div = document.querySelector("div");
// div.style.backgroundColor ="green";
// div.style.fontSize ="26px";
//  let newBtn = document.createElement("button");
//  newBtn.innerText = "click me!";
//  console.log(newBtn);
//  let div = document.querySelector("div");
//  div.after(newBtn);

// let newBtn = document.createElement("button");
// newBtn.innerText="click me!!";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color="white";
// console.log(newBtn);
// document.querySelector("body").prepend(newBtn);

//<button onclick="console.log('the button was clicked'); alert('hello world')">click me!!</button>
//let btn1 = document.querySelector("button");
// btn1.onclick =() =>{
//     console.log("button was clicked");
//     let a=25;
//     a++;
//     console.log(a);

// }
// let btn1 = document.querySelector("button");
// btn1.onclick =(evt) =>{
//  console.log(evt);
//  console.log(evt.type);
//  console.log(evt.target);
//  console.log(evt.clientX, evt.clientY);
//  }
// let div = document.querySelector("div");
// div.onmouseover =() =>{
//     console.log("you are inside the div");
// }
//  btn1.addEventLitsner("click", ()=>{
//        console.log("button was clicked");
//       });

//     btn1.addEventListener("click",()=>{
//         console.log("button was clicked");
//     });

// const handler3 =()=>{
//     console.log("button was clicked handler -3");
// };
// btn1.removeEventListener("click",handler3);
//let modeBtn=document.querySelector("#mode");
// let currMode="light";
// let body = document.querySelector("body");

// modeBtn.addEventListener("click",() =>{
// //console.log("your changing the mode");
// if(currMode === "light"){
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");

// }else{
//     currMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");

// }
// console.log(currMode);
// });

// const employee = {
//   caltax() {
//     console.log("tax rate is 10%");
//   },
// };

// const karanArjun1 = {
//   salary: 50000,
//   caltax() {
//     console.log("tax rate is 20%");
//   },
// };

// karanArjun1.__proto__ = employee;

//class person {
//   constructor() {
//     console.log("enter parent cunstructor");
//     this.species = "homo species";
//   }
//   eat() {
//     console.log("eat");
//   }
// }

// class engineer extends person {
//   constructor(branch) {
//     console.log("enter child cunstructor");
//     super(); // to invoke parent class cunstructor
//     this.branch = branch;
//     console.log("exist child cunstructor");
//   }
//   work() {
//     console.log("work on something to be done");
//   }
// }
// let obj = new engineer("chemical engineer");

//let Data = "Secret information";
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("data=", Data);
//   }
// }

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     Data = "new info";
//   }
// }

// let student1 = new User("tabassum", "abc@gmail.com");
// let student2 = new User("salar", "dd@gmail.com");
// let admin1 = new Admin("tabassum2", "xyz@gmail.com");

//a = 5;
// b = 10;
// console.log("a=", a);
// console.log("b=", b);
// console.log("a+b=", a + b);
// try {
//   console.log("a+b=", c);
// } catch (err) {
//   console.log(err);
// }
// console.log("a+b=", a + b);
// console.log("a+b=", a + b);
// console.log("a+b=", a + b);

//console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("hello");
// }, 2000); //timeout 2s=2000ms
// console.log("three");
// console.log("four");

// function getData(dataId, getNextData) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");

//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

//  const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     ////reject("some error accured");
//     resolve("success");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fullfield", res);
// });
// promise.catch((err) => {
//   console.log("promise rejected", err);
// });

//function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data 1.....");
// asyncFunc1().then((res) => {
//   console.log("fetching data2.....");
//   asyncFunc2().then((res) => {});
// });
//  console.log("fetching data 1");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log(res);
// });
