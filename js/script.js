var listaCognomi = ["tombola", "pappalardo", "abate", "lobriola", "vernieri",];
var primoCognome;
var j = 0;
var newLista = [];

var userCognome = prompt("inserisci il tuo cognome");
listaCognomi.push(userCognome);

while (listaCognomi.length > 0) {
  primoCognome = listaCognomi[0];
  j = 0;
  for (var i = 1; i <= listaCognomi.length; i++) {
    if (listaCognomi[i] < primoCognome) {
      primoCognome = listaCognomi[i];
      j = i;
    }
  }
  newLista.push(primoCognome);
  listaCognomi.splice(j, 1);
  document.getElementById('lista-cognomi').innerHTML += "<li>" + primoCognome + "</li>"
 }
