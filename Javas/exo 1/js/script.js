function changertitre(){
document.getElementById("titre").innerHTML = "<img src=\"img/tenor.gif\">";
document.body.style.animationName='tuf';
document.body.style.animationDuration='2s';
document.body.style.animationIterationCount= "infinite";
document.body.style.animationdirection= 'alternate';
document.getElementById("teuf").style.animationName='teuf';
document.getElementById("teuf").style.animationDuration='2s';
document.getElementById("teuf").style.animationIterationCount= "infinite";
}

function reset(){
    document.getElementById("titre").innerHTML = "Titre";
    document.getElementById("teuf").style.animationName='tef';
    document.body.style.animationName='tef';
}
function zoo(){
    document.getElementById("titre").innerHTML = "<button onclick='alertons()'>ALERTE</button>";

}
function alertons(){
    alert(' *Ricardo entre dans la pièce* \n EXCES DE TEUF EN APPROCHE');
}
function cliquons(){
    if (clic==10){
        alert('Nombre trop haut');
    }
    else{
    clic = clic+1; //ON RAJOUTE 1 A LA VARIABLE CLIC A CHAQUE FOIS QUE LA FONCTION SE JOUE
    }
    afficherclic(clic);
}
var clic=0;
function cliquez(){
    if(clic<=0){
        alert('Nombre trop bas')
    }
    else{
        clic = clic-1; //ON retire 1 A LA VARIABLE CLIC A CHAQUE FOIS QUE LA FONCTION SE JOUE
    }
    afficherclic(clic); 
}
function afficherclic(X){
   
    if(clic < 6 || clic>6){
        document.body.style.backgroundColor='lightgreen';
        
        document.getElementById("titre").style.color='black';
    }
    else if(clic == 6)  {
        document.body.style.backgroundColor='white';
        document.getElementById("titre").style.color='red';
}
    document.getElementById("clic").innerHTML = X + " clics";
}
