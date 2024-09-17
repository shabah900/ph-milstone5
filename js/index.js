

// const liItem = document.getElementsByTagName('li');

// for(const li of liItem){
//     console.log(li.innerText);
// }

//     //  same element hoile class dia ooo element ar access kora jay 
// const places = document.getElementsByClassName('places');

// for(const place of places){
//     console.log(place);
// }

//  //------ querySelectorAll 

// const fruits = document.querySelectorAll('.fruits');

// for(const fruit of fruits){
//     console.log(fruit.innerText);
// }
 
const sections = document.querySelectorAll('section');

for(const section of sections ){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom ='10px'
}
       //------- 
// const places = document.getElementsByClassName('places');
// for(const place of places){
//     place.style.color= 'violet';

// }

//-------------- css file ar kono style js ar sathe add korar system 
//                classList.add dia  korte hbe 
const places = document.getElementById('text-center');
places.classList.add('text-center');

// same way te remove oo kora jay classlist.remove dia 

//         !!------------!! 

             // add a new element in a section or something 

const newLi = document.createElement('li');

newLi.innerText = 'i am the new li !!';

places.append(newLi);        // append use for add something like push in array 