var listaCognomi = ["tombola", "pappalardo", "abate", "lobriola", "vernieri",];
var primoCognome;
var j = 0;
var k = 0;
var newList = [];

var userCognome = prompt("inserisci il tuo cognome");
listaCognomi.push(userCognome);

while (listaCognomi.length > 0) {
  primoCognome = listaCognomi[0];
  j = 0;
  for (var i = 0; i < listaCognomi.length; i++) {
    if (listaCognomi[i] < primoCognome) {
      primoCognome = listaCognomi[i];
      j = i;
    }
  }
  newList.push(primoCognome);
  if (primoCognome == userCognome) {
    k = newList.length;
  }
  listaCognomi.splice(j, 1);
  document.getElementById('lista-cognomi').innerHTML += "<li>" + primoCognome + "</li>"
 }

document.getElementById('posizione').innerHTML = userCognome + " si trova in " + k + "a posizione.";
