let inp = document.querySelector(".inp");
let batton = document.querySelector('.batton');
let text = document.querySelector(".text");
let piyoda = document.querySelector(".piyoda")
let velosaped = document.querySelector(".velosiped")
let moshina = document.querySelector(".moshina")
let samalyot = document.querySelector(".samalyot")

batton.addEventListener("click", function(){
    let item1 = parseInt (inp.value) / 3.6;
    let item2 = parseInt (inp.value) / 20.1;
    let item3 = parseInt (inp.value) / 70;
    let item4 = parseInt (inp.value) / 800;

    piyoda.textContent = `${item1.toFixed(2)} soat`
    velosaped.textContent = `${item2.toFixed(2)} soat`
    moshina.textContent = `${item3.toFixed(2)} soat`
    samalyot.textContent = `${item4.toFixed(2)} soat`

    inp.value = "";
})