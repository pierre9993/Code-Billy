
  /*   // commente la ligne
 *   ||= OU  &&= ET 
 */ a
/*
Le /* commente la zone balisé 
*/
    var mon_prenom= 'billy';
     

    function bonjour(){
        alert ('Bonjour !');


    }
    function fonction1(){   
        var prenom = prompt ("Quel est ton prénom ?");
        
        if (prenom == "Billy") {     
        alert("Bonjour " + prenom + " !") ; 
        }
        
        else if (prenom !="Billy"){
            confirm("Ton nom est "+ prenom +" ?");
            alert ('Qui est tu ?');
        }
        return prenom;
    }


    function question(){
    var age = prompt("Quel est ton age?");
    if (age < 6){
        var  conf = confirm("Tu as " + age + " an ?");
        
        if (conf == true){
            alert("J'ai des doutes mais d'accord.");
        }
        else if (conf == false){
            alert('En même temps ce serais louche.');
        }
    }
    else {
    var  conf = confirm("Tu as " + age + " ans ?");
    if (conf == true){
        alert("Cool !");
    }
    else if (conf == false){
        alert('Ressaye');
    }
}
     return (conf);
    }
/**
 * @param {number} prompt
 * @param {number} a 
 * @param {number} b 
 */
    function addition(x,y){
        var x = parseInt(prompt("Enter une première valeur", "0"));
        var y = parseInt(prompt("Enter une seconde valeur", "0"));
        
        
        alert ( x + y );
    }

   

    function justeprix(){
        alert('Essaye de trouver le juste prix!\n\t(entre 0 et 10 000€)');
    var proposition = 0;    
    var prix = Math.floor(Math.random()* 10000);
  
        while(prix!=proposition){
            var proposition = parseInt(prompt("Enter une première valeur"));
        if(proposition < prix){
            alert("C'est plus !");
        }

        else if(proposition > prix){
            alert("C'est moins !");
        }

        else if(proposition == prix){
            alert('Bonne réponse, bien joué !');
        }

       }
    }
    

