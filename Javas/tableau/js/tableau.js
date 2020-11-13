var car = new Array('Volvo', 'Renauld', 'Ferrari', 'Lotus', 'Mazzerati', 'Audi');
// PEUT AUSSI S'ECRIRE              var car =['Volvo','Renauld','Ferrari'];
//Entre crochet ça s'appelle des clés        ['clé0' , 'clé1'  , 'clé2'  ];

// alert(car[0]);

//document.querySelector('#voiture')
var menu = ['Acceuil', 'Google', 'Yahoo', 'W3School']
var menulink = ['#menu', 'https://www.google.com/webhp?hl=fr&sa=X&ved=0ahUKEwjR76PkmfXsAhVIQhoKHdluBUoQPAgI', 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj486jrmfXsAhXJzIUKHcSWA94QFjAAegQIDxAD&url=https%3A%2F%2Ffr.yahoo.com%2F&usg=AOvVaw0AscW_yKiCEkoNH98eREby', 'https://www.w3schools.com/']



car.push('Hummer');

alert(car.length);
for (i = 0; i < car.length; i++) {
    document.querySelector('#voiture').innerHTML += "<li> Clé " + i + " : " + car[i] + "</li>"
}


var ligne = 0;
if (menu.length <= menulink.length) {
    ligne = menulink.length;
}
else {
    ligne = menu.length;
}

for (i = 0; i < ligne; i++) {
    document.querySelector('#menu').innerHTML += "<li> <a target=\"_blank\" href='" + menulink[i] + "  '> " + menu[i] + "</a></li>";
}