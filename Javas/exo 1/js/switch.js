var a= 3 ;
var b=2
function fdp(){ 
var a = prompt();
    switch(a){ //C'est Sympa mais les "IF" et "Else IF" peuvent faire pareil

    case 3:
                alert("La valeur est 3");
                 break;
    case 5:
                 alert("La valeur est 5");
                 break;

    case a>b:
                alert("A est supérieur ou égal a b");
                break;
    case a==b:
        
                 alert("A est égal a B");
                 break;

    case  "admin" :
                alert("Votre rôle est admin");
                 break;

    case  "visiteur" :
                  alert("Votre rôle est Visiteur");
                  break;

                  default:
                    alert('La valeur est invalide');
       
          }
        }
/**
*
*  if (a>=b){       /* case */
/*           alert("A est supérieur ou égal a b");
*              }// break;
/* case */ /* else if (a==b){
                 alert("A est égal a B");
               } // break;
/*default:*/ /* else{
                     alert('La valeur n\'est pas valide')
                    }
                    */