/**
 * 
 * @param {string} mot1 
 * @param {string} mot2 
 * @param {string} return
 */
     function attache(mot1,mot2){
        var texte11 =( mot1 +  " " + mot2 + " !");
      
        
        return texte11;
    }

    /**
     * 
     * @param {string} texte1 
     * @param {string} texte2 
     */
    function attacheaffiche (texte1,texte2){
        var msg = attache(texte1,texte2);
        alert (msg);
        returnmsg
    }
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * 
     */

function multiple (x,y){
    alert (x*y)
   return  x*y;
}
/**
 * 
 * @param {string} y 
 */
function bonjour(y){
    z = attache('Bonjour', y);
    return z;
}
/**
 * 
 * @param {string} y 
 */
function aurevoir(y){
    z = attache('Aurevoir', y);
    return z;
}
function interactif(){
    var prenom = prompt ("Balance ton blaz");
    var message = bonjour(prenom);
    return message;
}

function Changertitre(){
    var elementh1 = document.querySelector("main>article>h1") ;
    var prenom = interactif() ;
    elementh1.innerText = prenom ;
}