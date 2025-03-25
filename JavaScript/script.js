// console.log("hello")
// let x=10
// let y=20
// let a=++x
// let b=y++
// console.log("this is data")
// console.table(x+y,a+b,a,b,x,y)
// console.warn("this is warning")
//  let c=prompt("enter age")
//  if (c>18){
//    alert("you are 18+")

//  }
//  else {
//    var ans=confirm("are you and adult")
// }
// console.log(ans)

// var d=10
// var e=5
// var d=10
// console.log(d)
// while (ans===true){
//   ans=confirm("accha?")
// }
// JS Data Types
//  - premetive
//     -Number(1,2,3,4,5.6)
//     -String('a')
//     -Boolean (true,false)
//     -undefined
//     -null
//     -symbol  
//     -NaN
// -Reference 
//   -Array
//   -Object
//   -Function

var a=5
console.log(typeof(a))
// operators
// + : Addition , Concatination
// - :Sub
// * : Multiplication
// / : Division
// % : Modulus
// ** : Exponentiation
// ++ : Increment
// -- : Decrement



// Array and Obj
// var b=[1,2,3,'sda',4.5]
// console.log(a===b) //compare type not value
// console.log(a==b)//compare value not types
// console.log(b);
// var arr=[10,20,30,40]
// arr.forEach(function(i,e){
//   console.log('Hello',i,e)
// })
// var obj={
//   username:"Jaydeep",
//   age:22,
//   greet:function(){
//     console.log("Good Morning",obj.username)
//   },
// }
// obj.greet()
// console.log(obj);

// var arr=[{
//   a:10,
//   b:20,
//   c:30,
//   d:60,
//   e:50,
// }]

// console.log(arr);


// DOM Manipulation
// Dom has 4 pillars

// Selection of an Element

var a=document.querySelector("h1")
console.log(a);

// Changing Html

a.innerHTML="Frontend";

// Changing CSS
var h1=document.querySelector("h1")
h1.style.color="red";
var body=document.querySelector("body")
body.style.backgroundColor="skyblue"

// EventListner
var b=document.querySelector('h1')

b.addEventListener('mouseenter',function(){
  a.innerHTML="Changed";
  h1.style.color="blue";
  body.style.backgroundColor="yellow"
})
