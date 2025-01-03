document.querySelector('#inscrire').onclick = function(){
    var password = document.querySelector('#password').value,
    confirmpassword = document.querySelector('#confirmpassword').value,
    
    name = document.querySelector('#name').value,
    prenome = document.querySelector('#prenome').value,
    number = document.querySelector('#number').value,
    email = document.querySelector('#email').value,
    dep = document.querySelector('#dep').value,
    message = document.querySelector('#message').value;
   if(name=="" || prename=="" || number=="" || email=="" || nom=="" || message=="" ){
       alert("vérifier que vous avez bien remplis tous les champs !");
       return false;
   }
   else if(password !=confirmpassword ){
       alert("le mot de passe ne correspond pas réessayez ! ");
       return false;
   }
   else return true;
}
</script>
<script >
  //select 1
const main = document.querySelector('.Container');
const select = document.querySelector('#cars');
const span = document.querySelector('.title');


main.addEventListener('mousedown', e=> {
e.preventDefault();

const select2 = main.children[0];
const ul = document.createElement('ul');

[...select2.children].forEach(option => {
const li = document.createElement('li');
li.textContent = option.textContent;

li.addEventListener('mousedown', e=> {
e.stopPropagation();

select.value = option.value;
main.value = option.value;

select.style.border = '2px solid #e9f543';
span.style.color = ' #e9f543';
i.style.color = ' #e9f543';
ul.remove();
});

ul.appendChild(li);
});

main.appendChild(ul);
});

document.addEventListener('click', e=> {
if (!main.contains(e.target)) {
select.style.border = '1px solid lightgray'; 
span.style.color = 'rgb(245, 147, 67)';
i.style.color = '#1E49A8';
}
}); 