
const form = document.querySelector('#meme');
const imageInput = document.querySelector('input[name = "image"]');
const topInput = document.querySelector('input[name = "top"]');
const bottomInput = document.querySelector('input[name = "bottom"]');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const t = topInput.value;
    console.log(t);
    
    const b = bottomInput.value;
    console.log(b);
    

    
    
    const container = document.createElement("div");
    document.body.appendChild(container);
    
    const memeDiv = document.createElement("div");

    container.appendChild(memeDiv);

    const img = document.createElement("img");
    img.src = imageInput.value;
    memeDiv.appendChild(img);

    const topText = document.createElement("h3");
    topText.innerText = t;
    topText.classList.add("centered-top");
    memeDiv.appendChild(topText);

    const botText = document.createElement("h3");
    botText.innerText = b;
    botText.classList.add("centered-bottom");
    memeDiv.appendChild(botText);
    
    
    
    
});



    

    










// const form = document.querySelector("form");

// const urlRequired = "Please enter the URL for the image";

// form.addEventListener("submit", function (event) {


// });


// function countdown(n){
//     let timer = setInterval(function(){
//         n--;
//         if (n <= 0){
//             clearInterval(n);
//             console.log('DONE!');
//         }
//         else{
//             console.log(n);
//         }
//     }, 1000)
// }


// const magicSquare = [
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ]


// let sum = 0;

// for(i = 0; i<magicSquare.length; i++){
//     row = magicSquare[i];
//     total = 0;
//     for (j = 0; j<row.length;j++){
//         console.log(row[j]);
//         total += row[j];
        
//     }
//     console.log(`3 numbers added up to ${total}`);
//     sum += total;
// }

// console.log(`everything added up to ${sum}`);




// const magicSquare = [
//     [2,7,6],
//     [9,5,1],
//     [4,3,8]
// ]


// let allSum = 0;

// for (let num of magicSquare){
 
//     let total = 0;
//     for (let n of num){
//         console.log(n);
//         total += n;
        
//     }
//     console.log(`each line is ${total}` );
//     allSum += total;
// }

// console.log(`sum is ${allSum}` );


// function sum(x,y){
//     console.log(x+y);
// }

// function sum(5,8);


// const scream = `hello`.toUpperCase;

// sentence = 'sgdhfj qwer oiu vnbvjxfxh ,mkugtucdtzrw'

// function isGram(sentence){
//     let lowerCase = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if (!lowerCase.includes(char)){
//             return false;
        
//         })
//         else console.log(true) ;   
//     }

// }






// function cD(n){

//     let fin = console.log('DONhvjhvjE!');
//     let n = 10;

//     while (n !== 0){
//         console.log(n);
//         n --; 
//     }

//     setTimeout(fin,9000);
   


// }



// function countDown2(){


//     let seconds = Math.floor(Math.random()*10 +1);
//     while (seconds <= .75){
//         console.log(seconds);
//         seconds --; 
//     }
//     console.log('DONE!');



// }






// function countDown(){

//     let tries = 0;
//     let n = 0;
//     while (n <= .75){
//         n = Math.random();
        
//         setInterval(console.log(n), 1000);
//         tries ++; 
//     }
    
//     console.log(`it took ${tries} tries`);
    
// }




// setInterval(countDown, 1000);





// function randomGame(){

//     setInterval(countDown, 1000);
//     console.log(tries)

//     let seconds = Math.floor(Math.random()*10 +1);
//     while (seconds =< .75){
//         console.log(seconds);
//         seconds --; 
//     }
//     console.log('DONE!');



// }

// function randomGame(){

//    let num;
//    let times = 0;
//    let timer = setInterval(function(){

//     num = Math.random();
//     times++
//     if(num>.75){
//         clearInterval(timer);
//         console.log(`it took ${times} tries`)
//     }

//    }, 1000)



// }

// let tries = 0;
// let n = 0;
// while (n <= .75){

//     setInterval(function(){

//     n = Math.random();
//     console.log(n);
    
    
//     tries ++; 

//     },1000)
    
// }

// console.log(`it took ${tries} tries`);


//console.log('asdf');




