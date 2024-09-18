//         post done  function 
function postDone(){
    const commentBox = document.getElementById('new-comment');
    const  p = document.createElement('p');
    p.innerText = commentBox.value;
     const commentContainer =document.getElementById('comment-container');
     commentContainer.appendChild(p);
    

    // clear the text are 
     commentBox.value='';
}