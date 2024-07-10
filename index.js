
// single threaded

function addPara(){
   let para =document.createElement('p');
   para.textContent = "Js is Single Threaded language";
   document.body.appendChild(para);
}

function appendNewMessage(){
   let para = document.createElement('p');
   para.textContent = "Hello Mr.Blacksmith";
   document.body.appendChild(para);
}

addPara();
appendNewMessage();
// Document fragment

// let fragment = document.createDocumentFragment();
// for(let i=0;i<=100;i++){
//    let newElement = document.createElement('p');
//    newElement.textContent = 'This is Para ' + i;

//    fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); //1Reflow, 1Repaint


// Adding 100 para
// const t1=performance.now();
// for (let i=0;i<=100;i++){
//    let newElement=document.createElement('p');
//    newElement.textContent='This is Para' + i;

//    document.body.appendChild(newElement);

// }
// const t2 = performance.now();
// console.log("This took: " + (t2-t1) + ' ms');


// // optimising a bit
// const t3=performance.now();
// let myDiv = document.createElement('div');

// for(let i=0;i<=100;i++){
//    let element = document.createElement('p');
//    element.textContent = 'This is Para' + i;

//    myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("This took: " + (t4-t3) + ' ms');



// function eventFunction(){
//    console.log('I have clicked on the document');
// }
// document.addEventListener('click',eventFunction);
// document.removeEventListener('click',eventFunction);

// const content =document.querySelector('#wrapper');
// content.addEventListener('click',function(event) {
//    console.log(event);
// })

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click',function(event) {
//    event.preventDefault();
//    console.log('Maza aaya, accha laga ');
// });

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//    // console.log('I have clicked on para');
//    console.log('Para' + event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus);
// for(let i=1; i<=100; i++){
//    let newElement = document.createElement('p');
//    newElement.textContent = 'This is para' + i;

//    myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//    if(event.target.nodeName === 'SPAN'){
//       console.log('span pr click kia hai ' + event.target.textContent);
//    }
  
// });