document.getElementById('input-type').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text==='delete'){
      deleteButton.removeAttribute('disabled');
    }
    else deleteButton.setAttribute('disabled',true);
})

document.getElementById('btn-delete').addEventListener('click',function(){
   const h1= document.getElementById('h1');

   h1.style.display = 'none';


})

