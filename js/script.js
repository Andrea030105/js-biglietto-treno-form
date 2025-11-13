const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

reset.addEventListener("click", function () {

    document.getElementById("nome").value = "";

    document.getElementById("km").value = "";

    document.getElementById("stampa-nome").innerHTML = "###### ######";

    document.getElementById("stampa-offerta").innerHTML = "######";

    document.getElementById("stampa-carrozza").innerHTML = "######";

    document.getElementById("stampa-codice").innerHTML = "######";

    document.getElementById("stampa-prezzo").innerHTML = "######";

})

submit.addEventListener("click", function () {
    let nome = document.getElementById("nome").value;
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;
    let prezzo_calcolato
    let offerta

    console.log(nome, km, eta);

    if (eta == 1) {

        let prezzo = (0.21 * km * 0.8).toFixed(2);
        prezzo_calcolato = prezzo
        offerta = "20%"
        console.log("sei minorenne, 20% di sconto " + prezzo);

    } else if (eta == 3) {

        let prezzo = (0.21 * km * 0.6).toFixed(2);
        prezzo_calcolato = prezzo
        offerta = "40%"
        console.log("sei over 65, 40% di sconto " + prezzo);

    } else {

        let prezzo = (0.21 * km).toFixed(2);
        prezzo_calcolato = prezzo
        console.log("prezzo pieno " + prezzo);

    }

    document.getElementById("stampa-nome").innerHTML = nome;
    document.getElementById("stampa-offerta").innerHTML = offerta;

    document.getElementById("stampa-carrozza").innerHTML = Math.floor(Math.random() * 10);

    document.getElementById("stampa-codice").innerHTML = Math.floor(Math.random() * 90000) + 10000;

    document.getElementById("stampa-prezzo").innerHTML = prezzo_calcolato;

    if (nome == "" || km == "") {
        alert("devi inserire prima i campi");

        document.getElementById("stampa-nome").innerHTML = "###### ######";

        document.getElementById("stampa-offerta").innerHTML = "######";

        document.getElementById("stampa-carrozza").innerHTML = "######";

        document.getElementById("stampa-codice").innerHTML = "######";

        document.getElementById("stampa-prezzo").innerHTML = "######";


    }

})

