console.log('select2');
//import { getUsersFromApi } from "./select2-api/api.js";

// In your Javascript (external .js resource or <script> tag)
let selectunique2 = document.querySelector('#id_label_single');
$(document).ready(function() {
    $('.js-example-basic-single').select2({language});
});

$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});

console.log('---------------mon index pour les apis-----------------------------------------------');

 
 //console.log(select2);
async function getUsers() {
    let users = [];
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
        users = await response.json();
   }
 //console.log(users);
   return users;
}

getUsers().then(users =>{
    users.map((user) => {
        selectunique2.innerHTML += `<option value=${user.name}>${user.name}</option>`

        //console.log(user.name);

    })
})





