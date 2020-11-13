var w = 1
function tableau(){
    var nbr = parseInt(prompt('combien de personne voulez vous rajouter ?'));
    var z=0 ;
    /*for ( z=1; z<=nbr ; z++) {//( base; condition pour que ça se fasse; incrémentation de fin )
        tab()
    }*/
    while(z != nbr){
        tab()
        z++;
    }
}
 
function tab(){
    var nom = prompt('Veuillez entrer le Nom');
    var pre = prompt('Veuillez entrer le Prénom');
    if(pre && nom){
        if(w%2==0){
        document.getElementById('line').innerHTML= document.getElementById('line').innerHTML + "<tr style=\"background-color: rgb(184, 202, 179);\"><td id=\"numero\">"+ w +"</td>  <td>"+ nom +"</td>   <td>"+ pre + "</td> </tr>";
        w++;
    }
        
        else{
        document.getElementById('line').innerHTML= document.getElementById('line').innerHTML + "<tr><td id=\"numero\">"+ w +"</td>  <td>"+ nom +"</td>   <td>"+ pre + "</td> </tr>";
        w++;
        }
        }   
    else{

        }
}
   /* while (z<nbr) // ça marche aussi
    {
        var nom = prompt('Veuillez entrer le Nom');
        var pre = prompt('Veuillez entrer le Prénom');
        document.getElementById('line').innerHTML= document.getElementById('line').innerHTML + "<tr>  <td>"+ nom +"</td>   <td>"+ pre + "</td> </tr>";
        z++;
    }*/




/*  var b=5
while (b>=0){
    console.log("b = " + b)
    b--;
}  */


/*
for ( c=0;c<5;  c++){
    console.log("c="+c);
} */