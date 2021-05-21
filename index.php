
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exo test</title>
</head>
<body>

<?php

class Bdd 
{
    public static function connexion()
    {
        try{
            $bdd = new PDO ("mysql:host=localhost;dbname=exotest", "root", "root");
            return $bdd ;
        }catch(Exception $e){
            die('erreur de connexion à la bdd, $e');
            
        }
    }
}

class User
{


    public function setUser($sexe,$nom,$prenom,$ville,$description,$email,$mdp){
        $bdd= Bdd::connexion() ;   
        $sql= $bdd->prepare("INSERT INTO utilisateur (sexe,nom,prenom,ville,description,email,mdp) 
                                   VALUE (:sexe,:nom,:prenom,:ville,:description,:email,:mdp) ;");
      if( $sql->execute([":sexe"=>$sexe,
      ":nom"=>$nom,
      ":prenom"=>$prenom,
      ":ville"=>$ville,
      ":description"=>$description,
      ":email"=>$email,
      ":mdp"=>$mdp ]))
      {
        return 9;
        }
       else
       {
           
        return 1;
        }
        
        $bdd=null;
    }

    public function getPasswordByEmail($email){
        
        $bdd= Bdd::connexion();
        $sql= $bdd->prepare("SELECT mdp FROM utilisateur WHERE email=:email ;");
        $sql->execute([":email" => $email]);
        $mdp = $sql->fetch();
        return $mdp;
    }
}
/*
code pour creer bdd+table

CREATE DATABASE exotest;

CREATE TABLE utilisateur(
id INT NOT NULL AUTO_INCREMENT,
sexe VARCHAR(100),
nom VARCHAR(100),
prenom VARCHAR(100),
ville VARCHAR(100),
description MEDIUMTEXT,
email VARCHAR(100),
mdp VARCHAR(255),
PRIMARY KEY(id)
)ENGINE=INNODB DEFAULT CHARSET=utf8;

*/

if(isset($_POST["inscription"])){
    $mdp=password_hash($_POST["mdp"],PASSWORD_DEFAULT);
    if($_POST["sexe"] && $_POST["nom"] && $_POST["prenom"] && $_POST["ville"] && $_POST["description"] && $_POST["email"]){
    $user= new User;
    $resultat = $user->setUser($_POST["sexe"],$_POST["nom"],$_POST["prenom"],$_POST["ville"],$_POST["description"],$_POST["email"],$mdp);
    
}
    else{
        echo "Veuillez remplir le formulaire correctement";
    }
}

if(isset($_POST["connexion"])){
    $user= new User;
    $mdpUser= $user->getPasswordByEmail($_POST['email']);

    if(password_verify($_POST['mdp'], $mdpUser["mdp"])){
        $connexion= 1;
       
    }
    else{
        $connexion= -1;
    }

}


?>

<style>
.form{
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    margin: 0 0 0 20%;
}

</style>

    <form class="form" action="" method="POST" >
  
<h2>Inscription</h2>
    <div>
    <label for="sexe">Sexe :</label>
    <input type="radio" name="sexe" id='sexe1' value="homme">Homme</input>
    <input type="radio" name="sexe" id='sexe2' value="femme">Femme</input>
</div>

<div>
    <label for="nom">Nom :</label>
    <input type="text" name="nom"></input>
</div>

<div>
    <label for="prenom">Prénom :</label>
    <input type="text" name="prenom"></input>
    </div>

    <div>
    <label for="email">Email :</label>
    <input type="text" name="email"></input>
</div>

<div>
    <label for="ville">Ville :</label>
    <select name="ville" id="">
    <option value="Paris">Paris</option>
    <option value="Lyon">Lyon</option>
    <option value="Marseille">Marseille</option>
    </select>
</div>

<div>
    <label for="description">Description :</label>
    <textarea name="description" id="" ></textarea>
</div>

<div>
    <label  for="mdp">Mot de Passe :</label>
    <input type="password" name="mdp"></input>
</div>
<div style="display:flex;flex-direction:row;align-items:space-between;justify-content:space-between;width:45%">
    <button type="submit" name='inscription'>Envoyer </button> <?php 
   if(isset($resultat)){
       if($resultat<5){
           echo" <div style='color:red;' > Inscription échoué</div><br/><br/>";
       }
       if($resultat>5){
        echo" <div style='color:green;' > Inscription réussi</div><br/><br/>";
    }
   }
   ?></div>
    </form>
<br/>
<br/>
<br/>
<br/>

<form class="form" method="POST">
<h3>Test de Connexion</h3>
<?php 
if ($connexion !== 0){


 if ($connexion>0){
    echo " <div style='color:green;' > Connexion réussi !</div><br/><br/>";
 }
 else if($connexion<0){
    echo " <div style='color:red;' > Connexion échoué !</div><br/><br/>";

 }
}
?>
<div>
    <label for="email">Email :</label>
    <input type="text" name="email"></input>
</div>
<div>
    <label for="mdp">Mot de Passe :</label>
    <input type="password" name="mdp"></input>
</div>

<button type="submit" name='connexion'>Envoyer </button>
</form>

</body>
</html>