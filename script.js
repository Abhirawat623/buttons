// // let buttonRed = document.querySelector("#btn-red");
// // console.log(buttonRed);

// // let buttonyellow = document.querySelector("#btn-yellow");
// // console.log(buttonyellow);

// // let buttongreen= document.querySelector("#btn-green");
// // console.log(buttongreen);

// //to select all classes or select an id from that class

// // let buttonAll = document.querySelectorAll(".button");
// // console.log(buttonAll[0]);
// // console.log(buttonAll[1]);
// // console.log(buttonAll[2]);

// let buttonYellow = document.querySelector("#btn-yellow");

// // function showMe(){
// //     console.log("yellow button clicked");
// // }

// // buttonYellow.addEventListener("click",showMe);

// // {to increase the value in console by clicking on the yellow button}
//  let value =0;
// buttonYellow.addEventListener("click", ()=>{
   
// value++;
// console.log(value)

// })

// // for arrow function
// // let buttonRed = document.querySelector("#btn-red");
// // buttonRed.addEventListener("click", ()=> {
// //     console.log("button red clicked")
// // }
// // )

// //change innertext of buttons by clikcing
// let greenBtn = document.querySelector("#btn-green");

// greenBtn.addEventListener("click", ()=>{

// if(greenBtn.innerText ==="Green"){
//     greenBtn.innerText ="Clicked"
// }
// else{
//     greenBtn.innerText ="Green"
// }

// })
// // decrease value
// let buttonRed= document.querySelector("#btn-red");
// buttonRed.addEventListener("click", ()=>{
// value--;
// console.log(value);


// })



//
 let yellowButton = document.querySelector("#btn-yellow");
 yellowButton.addEventListener("click", ()=>{
 
    //  yellowButton.classList.add("btn-newgreen"); // change the colour to red or class list add
   yellowButton.classList.toggle("btn-newgreen"); // it also chekc this class in the real html if its not present itn th it then it removes to original background
 })

 let input = document.querySelector(".input");
//  input.addEventListener("change" , () =>{  / change value on click

//     console.log(input.value);
//  })
 
//  input.addEventListener("input" , () =>{
//                                             /change value after every word typed
//     console.log(input.value);
//  })
 
// input.addEventListener("focus",()=>{            / shows value after clicking only on input section
 
//     console.log(input.value)


// })


// input.addEventListener("keyup", () =>{
// console.log(input.value)

// })

document.body.addEventListener("mousedown", (event)=>{   //for full page
let xcor = event.clientX;
let ycor = event.clientY;
console.log(`${ycor}  , ${xcor}`)
})




// input.addEventListener("mousedown",(event)=>{         // for input
//  let xcor = event.pageX;
//  let ycor = event.pageY;
//  let fullcor = `X cor -${xcor} , Y cor - ${ycor} `;
//  console.log(fullcor);

// })