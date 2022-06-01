console.log('Mes appels api jsonplaceholder');

/* async function getUsers() {
  let users = [];
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (response.ok) {
    users = await response.json();
  }
  //console.log(users);
  return users;
};

 */
export async function createProprietaire(nom, prenom, telephone, disposeIfu) {
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
  })
}