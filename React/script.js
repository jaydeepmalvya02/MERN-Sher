// var h1=document.querySelector("h1")
// console.log(h1);

// h1.innerHTML="Hello World"

// h1.addEventListener("click",function(){
//   h1.style.color="brown"
//   h1.innerHTML="SiyaRam"
//   h1.style.backgroundColor="rgb(255, 87, 9)"
// })


// var root=document.querySelector("#root")
// var h2=document.createElement("h2")
// h2.innerHTML="Radhe Krishna";
// h2.style.color=''
// root.appendChild(h2)
// console.log(h2)
// h2.addEventListener("click",function(){
//     h2.style.color="rgb(255, 87, 9)"
//     h2.innerHTML="SiyaRam"
//      h2.style.backgroundColor="black"
//    })

  // console.log(React);
  var h1=React.createElement("h1",null,"Shri Ram")
  
 var Parent= document.querySelector('#parent')
 console.log(Parent);
 
var root= ReactDOM.createRoot(Parent).render(h1)
root.render(h1)