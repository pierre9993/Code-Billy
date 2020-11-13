


var compte1 = 32000;
var compte2 = 450;
var w = 0;
document.getElementById('toto1').innerHTML = compte1 + ' €' ;
document.getElementById('toto2').innerHTML = compte2 + ' €';
//document.getElementById('toto1').innerHTML = 'Total : ' +compte1+' €';
function tot1() {
    document.getElementById('toto1').innerHTML = compte1 + ' €';
}
function tot2() {
    document.getElementById('toto2').innerHTML = compte2 + ' €';
}
function ajout1() {
    var date = new Date();
    var libelle = prompt('Veuillez indiquer la nature de l\'opération');
    var montant = parseInt(prompt('Veuillez indiquer le montant'));

    if (date && libelle && montant) {
        if (w % 2 == 0) {
            document.getElementById('line1').innerHTML = document.getElementById('line1').innerHTML + "<tr style=\"background-color: rgb(184, 202, 179);\"><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>-" + montant + "€</td> </tr>";
            compte1 -= montant;
            tot1();
            w++;
        }

        else if (w % 2 == 1) {
            document.getElementById('line1').innerHTML = document.getElementById('line1').innerHTML + "<tr><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>-" + montant + "€</td> </tr>";
            compte1 -= montant;
            tot1();
            w++;
        }
    }
    else {

    }
}

var g = 0;
function ajout2() {
    var date = new Date();
    var libelle = prompt('Veuillez indiquer la nature de l\'opération');
    var montant = parseInt(prompt('Veuillez indiquer le montant'));
    if (date && libelle && montant) {
        if (g % 2 == 0) {
            document.getElementById('line2').innerHTML = document.getElementById('line2').innerHTML + "<tr style=\"background-color: rgb(184, 202, 179);\"><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>-" + montant + "€</td> </tr>";
            compte2 -= montant;
            tot2();
            g++;
        }

        else if (g % 2 == 1) {
            document.getElementById('line2').innerHTML = document.getElementById('line2').innerHTML + "<tr><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>-" + montant + "€</td> </tr>";
            compte2 -= montant;
            tot2();
            g++;
        }
    }
    else {

    }
}

function sal() { }

function calcule1() {
    var sal = parseInt(document.getElementById('sal1').value);
    var dur = parseInt(document.getElementById('dur1').value);
    if (sal && dur) {
        var tota = sal * dur;
        document.getElementById('sal1').innerHTML = sal + ' €';
        document.getElementById('dur1').innerHTML = dur + ' mois';
        document.getElementById('tota1').innerHTML = tota + compte1 + ' €';
    }
    else {

    }
}

function calcule2() {
    var sal2 = parseInt(document.getElementById('sal2').value);
    var dur2 = parseInt(document.getElementById('dur2').value);
    if (sal2 && dur2) {
        var tota = sal2 * dur2;
        document.getElementById('sal2').innerHTML = sal2 + ' €';
        document.getElementById('dur2').innerHTML = dur2 + ' mois';
        document.getElementById('tota2').innerHTML = tota + compte2 + ' €';
    }
    else {

    }
}
function fond1() {

    var date = new Date();
    // var libelle = prompt('Veuillez indiquer la nature de l\'opération');
    var libelle = 'Ajout de fond'
    var fond = parseInt(prompt('Quel est le montant que vous voulez rajouter ?'));
    if (date && fond) {
        if (w % 2 == 0) {
            document.getElementById('line1').innerHTML = document.getElementById('line1').innerHTML + "<tr style=\"background-color: rgb(184, 202, 179);\"><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>+" + fond + "€</td> </tr>";
            compte1 += fond;
            tot1();
            w++;
        }

        else if (w % 2 == 1) {
            document.getElementById('line1').innerHTML = document.getElementById('line1').innerHTML + "<tr><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>+" + fond + "€</td> </tr>";
            compte1 += fond;
            tot1();
            w++;
        }
    }
    else {

    }
}
function fond2() {
    var date = new Date();

    // var libelle = prompt('Veuillez indiquer la nature de l\'opération');
    var libelle = 'Ajout de fond';
    var fond = parseInt(prompt('Quel est le montant que vous voulez rajouter ?'));
    if (date && fond) {
        if (g % 2 == 0) {
            document.getElementById('line2').innerHTML = document.getElementById('line2').innerHTML + "<tr style=\"background-color: rgb(184, 202, 179);\"><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>+" + fond + "€</td> </tr>";
            compte2 += fond;
            tot2();
            g++;
        }

        else if (g % 2 == 1) {
            document.getElementById('line2').innerHTML = document.getElementById('line2').innerHTML + "<tr><td id=\"numero\">" + date.toDateString() + "</td>  <td>" + libelle + "</td>   <td>+" + fond + "€</td> </tr>";
            compte2 += fond;
            tot2();
            g++;
        }
    }
    else {

    }
}
function sal() {
    var toto= document.getElementById('sal1').innerHTML;
    
    console.log(toto);

    var ctn =  parseInt(toto);
    
    console.log(ctn);

    return parseInt(ctn);
}