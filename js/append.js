//          where to add 
const fruits = document.getElementById('fruit-list');
 
//              what to add 

const addItem = document.createElement('addItem');
addItem.innerText='pepe';

//          add the child 

fruits.appendChild(addItem);


//                adding a section from main section 

//               where to add 
const mainContainer = document.getElementById('main-container');

//             what to add 
const section = document.createElement('section');
mainContainer.appendChild(section);

const h1= document.createElement('h1');
h1.innerText= 'fast food items :';
section.appendChild(h1);


const ul= document.createElement('ul');
section.appendChild(ul);

const li1= document.createElement('li1');
li1.innerText= 'burger';
ul.appendChild(li1);


const li2= document.createElement('li2');
li2.innerText= 'pizza ';
ul.appendChild(li2);



const li3= document.createElement('li3');
li3.innerText= 'shawrma';
ul.appendChild(li3);



//               set all inner text of element 




//                adding all child  to perfect  parents 


