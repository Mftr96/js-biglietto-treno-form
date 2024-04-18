//condizioni iniziali

const prezzo_km=0.21;

//richiesta dati utente 
const km_passeggero=document.getElementById("km-input");

const eta_passeggero=document.getElementById("age-input");
const prezzo_base= prezzo_km * km_passeggero.value;
console.log(prezzo_base.value);


const my_button=document.getElementById("bt-form");


my_button.addEventListener('click',function(){

  console.log(eta_passeggero.value);
  console.log(km_passeggero.value);
  const prezzo_base= prezzo_km * km_passeggero.value;
  console.log(prezzo_base);

})


