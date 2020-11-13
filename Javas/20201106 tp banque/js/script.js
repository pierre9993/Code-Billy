/**
 * Fonction qui récupère les données nécessaires
 * au calcul des revenus.
 */
function getCalculInfos(cible) {
    var total = document.querySelector(
        "article#" + cible + ">section:first-of-type>h3>span"
    ).innerHTML;
    total = parseFloat(total);

    var salaire = document.querySelector(
        "form#" + cible + ">input#salaire"
    ).value;
    salaire = parseFloat(salaire);

    var duree = document.querySelector(
        "form#" + cible + ">input#duree"
    ).value;
    duree = parseInt(duree);

    return [total, salaire, duree];
}

function affichePrevision(montantPrevisionnel, cible) {
    champResultat = document.querySelector(
        "form#" + cible + "+h3>span"
    ).innerHTML = montantPrevisionnel;
}

/**
 * Ajoute le salaire donné sur le compte donné.
 * 
 * @param {number} compte 
 * @param {number} salaire 
 * @returns {number}
 */
function paieSalaire(compte, salaire) {
    return compte + salaire;
}

/**
 * Paie le salaire donné sur le compte donné, 
 * durant "duree" mois.
 * 
 * @param {number} compte Montant sur le compte
 * @param {number} salaire 
 * @param {number} duree Nombre, en mois, où le salaire est versé
 */
function paieSalairePendantDuree(compte, salaire, duree) {
    for (t = 0; t < duree; t++) {
        compte = paieSalaire(compte, salaire);
    }
    return compte;
}

/**
 * Fonction qui calcule le montant prévisionnel
 * disponible sur le compte, en fonction des
 * informations entrées par l'utilisateur dans le
 * formulaire.
 */
function calculePrevision(event, cible) {
    if (event) event.preventDefault();
    var infos = getCalculInfos(cible);
    var total = infos[0];
    var salaire = infos[1];
    var duree = infos[2];

    var compte = paieSalairePendantDuree(total, salaire, duree);

    affichePrevision(compte, cible);
}

// TRANSACTION
/**
 * 
 * @param {*} event 
 * @param {*} cible 
 */
function transac(event, cible) {
    //on fait en sorte de ne pas envoyer le formulaire pour ne pas recharger la page
    if (event) event.preventDefault();
    // On récupère les infos du tableaux
    var info = getTransacInfos(cible);
    //on place les infos récupéré dans des variables correspondantes
    var date = info[0];
    var libelle = info[1];
    var montant = info[2];
    // On affiche les différentes info dans une ligne du tableau
    afficheTransac(date, libelle, montant, cible);
    //on change le montant du total correspondant au total après transaction
    afficheTotal(montant, cible);
}
/**
 *  On récupère les valeurs indiqué dans le tableaux 
 * @param {*} cible 
 */
function getTransacInfos(cible) {
    var date = document.querySelector("main>article#" + cible + ">section>form>input#date"
    ).value;

    var libelle = document.querySelector(
        "main>article#" + cible + ">section>form>input#libelle"
    ).value;

    var montant = document.querySelector(
        "main>article#" + cible + ">section>form>input#montant"
    ).value;
    montant = parseInt(montant);

    return [date, libelle, montant];
}
/**
 * Change le total pour mettre la valeur d'après transaction
 * @param {*} montant 
 * @param {*} cible 
 */
function afficheTotal(montant, cible) {
        //récupe le total du compte choisi
    var total = document.querySelector("main>article#" + cible + ">section>h3>span.euro"
    ).innerHTML;
    parseInt(total);
        // on soustrait au total le montant de la transaction
    total = total - montant;
        //on affiche le nouveau total
    document.querySelector("main>article#" + cible + ">section>h3>span.euro").innerHTML = total;

    return total
}
/**
 * Creer une ligne qui récapitule la date, le libellé et le montant de la transaction
 * @param {*} date 
 * @param {*} libelle 
 * @param {*} montant 
 * @param {*} cible 
 */
function afficheTransac(date, libelle, montant, cible) {
    // on affiche dans une nouvelle ligne du tableau les info récupéré auparavant
    document.querySelector("main>article#" + cible + ">section>table>tbody").innerHTML += "<tr> <td>" + date + "</td><td>" + libelle + "</td> <td class=\"euro\">-" + montant + "</td> </tr>";
}