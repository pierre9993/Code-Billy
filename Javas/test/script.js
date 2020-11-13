var eleves = [
             ["Billy","Abdel","Rachid","Jeremy","Habib","Jc","Sabrina","Jessica"],
             ["20","35","40","20","25","30","31","28"] ,
             ["Mrl","Bdl","Rchd","Jrm","Hbb","Jcvd","Sbrn","Jsc"] 
            ];

var save=0;


function liste(){
    document.getElementById('eleve').innerHTML =" ";
for(x=0; x<eleves[0].length ; x++){
      document.getElementById('eleve').innerHTML += '<p>' + eleves[0][x] +' , Age: '+ eleves[1][x] +" ans , Acronyme :" + eleves[2][x]+'</p>';
}
}

function classer(){
    save=[[...eleves[0]] ];
    save[0].sort();
    document.getElementById('eleve').innerHTML =" ";

    for(x=0; x<save[0].length ; x++){
        document.getElementById('eleve').innerHTML += '<p>' + save[0][x] +' , Age: '+ eleves[1][x] +" ans , Acronyme :" + eleves[2][x]+'</p>';
    }
}