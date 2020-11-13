var compte = 0;
var salaire = 1500;

function SalaireduMois(comptemois) {
    comptemois += salaire
    console.log (comptemois);
    return comptemois;
}


//     var mois = 0
function SalaireAnnuel(compteannee) {
    console.log (compteannee);
    for (mois = 0; mois < 12; mois++) {
        /*  while(mois<12){
           mois++;*/
           compteannee = SalaireduMois(compteannee);
    }
    return compteannee;
}



    function ajoutersala(){
        compte=SalaireAnnuel(compte);
    }


    function ajoutersalm(){
        compte=SalaireduMois(compte);
    }


    function amois(){
        console.log (compte);
    }

//    compte = SalaireAnnuel(compte);
// console.log(compte)