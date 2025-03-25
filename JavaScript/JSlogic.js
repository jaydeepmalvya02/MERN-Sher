const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// For Each

names.forEach((e,i)=>{
    if (i==2){
      console.log("hello",e);
      
    }
    else{
      console.log(e,i)
    }
    
    
})
// Map it create the new  array from old array and return the new array and also manipulate element 
let x=names.map((e)=>{
  return e+" Ji"
})
console.log(x)

// Filter it return the array with the condition 
let y=names.filter((e,i)=>{
  return i>1
})
console.log(y)
//  reduce it return the single value

let a=names.reduce((acc,e)=>{
  return acc+" "+e
})
console.log(a)
// Create a detailed user object using destructuring




// let [j,b,c,d,e]=names
// console.log(j,b,c,d,e)
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  hobbies: ["reading", "traveling", "coding"],
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user);
console.log("Full Name:", user.fullName());
let {zip,city,state}=user.address

let [d,e,f]=user.hobbies
console.log(zip,city,state,d,e,f)

// spread operator
const user1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  hobbies: ["reading", "traveling", "coding"],
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
let user3={...user1}
console.log(user3)
let arr1=[1,2,3,4,5]
let arr2=[...arr1]
arr2.push(6)
console.log(arr2)
console.log(arr1)

// Rest operator
let v=(l,k,j,h,g,...e)=>{
  console.log(l,k,j,h,g,...e)
}
v(1,2,3,4,5,6,7,8,9,0)

// merge two arrays using spread operator

let a1=["Alice", "Bob", "Charlie", "David", "Eve"]
let a2=["yadav", "chamar", "chaplin", "miller", "adam"]

let a3=[...a1,...a2]
console.log(a3)

// filtering array of objects o display items based on search query like name or age
const products=[
  {id:1,name:"Apple",price:100,age:20},
  {id:2,name:"Banana",price:50,age:30},
  {id:3,name:"Orange",price:150,age:40},
  {id:4,name:"Grapes",price:200,age:50},
  {id:5,name:"Mango",price:250,age:60}

]
let b1=products.filter((e)=>{
  return e.price>50
})
console.log(b1);

// Mapping over an array of user data to create a list of user cards.

const user4=[
  {id:1,name:"Alice",age:20},
  {id:2,name:"Bob",age:30},
  {id:3,name:"Charlie",age:40},
  {id:4,name:"David",age:50},
]
let b3=user4.map((e)=>{
  return `<div> <h3>id:${e.id},name:${e.name},age:${e.age}</h3></div>`
})
console.log(b3)
// Grouping an array of objects by a specific property like grouping by role
const user5=[
  {id:1,name:"Alice",age:20,role:"admin"},
  {id:2,name:"Bob",age:30,role:"user"},
  {id:3,name:"Charlie",age:40,role:"admin"},
  {id:4,name:"David",age:50,role:"user"},
]

let obj={}
user5.forEach((e)=>{
  if(obj[e.role]){
    obj[e.role].push(e)
  }
  else{
    obj[e.role]=[e]
  }
})
console.log(obj)