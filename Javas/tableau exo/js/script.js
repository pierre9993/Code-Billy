var total = 0;
var btn = 0;

var img = ["https://picsum.photos/399/300", "https://picsum.photos/300/299", "https://picsum.photos/290/300", "https://picsum.photos/300/301", 'https://picsum.photos/295/300', 'https://picsum.photos/301/301']
function nouvelArticle(nom, prix, image) {
    total += parseInt(prix);
    afficherdanspanier(nom, prix, image);
    affichertotal(prix);
    if (btn == 0) {
        document.getElementById('borre').innerHTML += "<button style=\"width:100%\" onclick=\"paye()\"><i class=\"fas fa-cash-register\"></i></button> <br/> <button style=\"width:100%\" onclick=\"reset()\"><i class=\"fas fa-redo-alt\"></i></button>";
        btn++;
    }
    else {

    }
}
function afficherdanspanier(nom, prix, image) {
    document.querySelector(".panier>ul").innerHTML += '<li style="width: 150px;margin-bottom:10px;">' + nom + ' : ' + prix + ' € <img  style="text-align: end;width: 50px;height: 50px;" src=' + img[image] + ' /></li>';
}
function affichertotal(prix) {
    document.getElementById('tot').innerHTML = "Total : " + total + " €";

}
function reset() {
    total = 0;
    document.querySelector(".panier>ul").innerHTML = '';
    document.getElementById('tot').innerHTML = "Total : " + total + " €";
    document.querySelector(".wind").style.display = 'none';
    btn = 0;
    document.getElementById('borre').innerHTML = ' ';
}
function merce() {
    alert('Merci de votre visite !');
    reset();
}
function paye() {
    var total = document.querySelector('.tot').innerHTML;
    document.querySelector(".wind").innerHTML = "<button style=\"margin:0 0 0 162px;\"  onclick=\"annule()\"><i class=\"fas fa-redo-alt\"></i></button><center><h2>Panier</h2><hr></center>" + document.querySelector(".panier").innerHTML + "<center><hr><strong>" + total + "</strong></center>" + "<button style=\"width: 100%;margin-top: 5px;\" onclick=\"merce()\" ><i class=\"fas fa-money-bill-wave\"></i></button>";
    document.querySelector(".wind").style.display = 'block';
}
function annule() {
    document.querySelector(".wind").style.display = 'none';
}
function fcont() {
    document.querySelector(".contform").style.display = 'block';
}
function annulef() {
    document.querySelector(".contform").style.display = 'none';
}


function envoyerf() {
    var nom = document.forms["contact"]["nom"].value;
    var prenom = document.forms["contact"]["prenom"].value;
    var email = document.forms["contact"]["email"].value;
    var tel = document.forms["contact"]["tel"].value;
    if (nom == '') {
        alert("Veuillez entrer votre nom");
    }
    if (prenom == '') {
        alert("Veuillez entrer votre prénom");
    }
    if (email == '') {
        alert("Veuillez entrer votre mail");
    }
    if (tel == '') {
        alert("Veuillez entrer votre numéro de téléphone");
    }
    else {

    }

}


function annulec() {
    document.querySelector("#connec").style.display = 'none';
}
function bconnec() {
    document.querySelector("#connec").style.display = 'block';
}

function envoyerc() {
    var id = document.forms["connexion"]["id"].value;
    var mdp = document.forms["connexion"]["mdp"].value;
    if (id == '' || mdp == '') {
        alert('Veuillez entrer un identifiant / un mot de passe');
    }
    else if (id == mdp) {
        alert("Connexion réussie");
    }

    else {
        alert('Identifiant / Mot de passe incorrect');
    }
}