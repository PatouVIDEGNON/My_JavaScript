console.log('jesus');
// import { createProprietaire } from "../select2-api/api";
const form = document.forms[0];
const URL = 'http://directus.sylfleur.com:8055/items/proprietaire/';


form.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch(`${URL}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nom: e.target.validationCustom01.value,
      prenom: e.target.validationCustom02.value,
      telephone: e.target.validationCustom03.value,
      disposeIfu: e.target.validationCustom04.value,
    })
  }).then(r => r.json())
form.reset();
})

/*
async function createProprietaire(nom, prenom, telephone, disposeIfu) {
    return await fetch('http://directus.sylfleur.com:8055/items/proprietaire/', {
        method: 'POST',
        headers: {
            //  'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nom': nom,
            'prenom': prenom,
            'telephone': telephone,
            'disposeIfu': disposeIfu,
        })
    }).then()
}
 */
/* form.addEventListener('submit', function (event) {
  event.preventDefault();

  fetch(`${URL}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nom: event.target.validationCustom01.value,
      prenom: event.target.validationCustom02.value,
      telephone: event.target.validationCustom03.value,
      disposeIfu: event.target.validationCustom04.value,
    }
    ).then(data => console.log(data))

  })
 */

/*
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`${url}`, {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: elements.name.value,
          firstname: elements.firstname.value,
          email: elements.email.value,
          telephone: elements.telephone.value,
          Company: elements.company.value,
      })
  }).then(r => r.json())
      // .then(data => console.log(data))
      .then(data => {
          const dataArr = [];
          dataArr.push(data.data);
          renderUsers(dataArr)
      })

}) */








































// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     createClient(
//         `${event.target.nom.value}`,
//         `${event.target.prenom.value}`,
//         `${event.target.email.value}`,
//         `${event.target.entreprise.value}`,
//         )
//         .then(r => console.log(r))}