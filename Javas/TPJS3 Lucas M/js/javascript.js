var id = '1234';
var mdp = '5678' ;
var clic = 0;

function connexion(){
    alert("Veuillez entrer votre identifiant et votre mot de passe!");
   var idco = prompt('Identifiant');
   var mdpco = prompt('Mot de passe');

    if(id==idco && mdp==mdpco){
        alert('connexion réussie !')
        document.getElementById("bod").style.backgroundColor = 'khaki';

        document.getElementById("btn").innerHTML= '<div id="clic">0 clic</div><button onclick="plus()">+</button><button onclick="moins()">-</button>';

    }
    else {
        alert('Veuillez entrer un identifiant et un mot de passe valide');
    }

}

function plus(){
    if (clic ==10){
        alert('Valeur maximale atteinte');
    }
    else{
        clic = clic+1;
        document.getElementById("clic").innerHTML = clic + " clics";
    }
}

function moins(){
    if (clic ==0){
        ;
    }
    else if(clic ==1){
        clic = clic-1;
        document.getElementById("clic").innerHTML = clic + " clic";
    }
    else{
        clic = clic-1;
        document.getElementById("clic").innerHTML = clic + " clics";
    }
}