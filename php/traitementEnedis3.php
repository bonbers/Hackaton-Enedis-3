<?php
session_start();
$_SESSION['nom']=$_POST['nom'];
print_r($_SESSION);

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];
$mail = $_POST['mail'];
echo "mail".$mail;

$_SESSION['admin'] = true;

include("./config/connections.php");

$req = $bdd->prepare('INSERT INTO Mail(nom, prenom, mail) VALUES(:nom, :prenom, :mail)');
$req->execute(array(

    'nom' => $nom,

    'prenom' => $prenom,

    'mail' => $mail,

    ));
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TRAITEMENT</title>
    <link rel="stylesheet" href="./php/traitementenedis3.css" />
  </head>
  <body>
    <div class="container">
      <div class="identite">
      <?php
        if(!empty($_POST['nom'])){
        echo $_POST['nom'];
        } else {
        echo 'Remplir ce champ';
        }
      ?>
</br>
    <?php
        if(!empty($_POST['prenom'])){
        echo $_POST['prenom'];
        } else {
        echo 'Remplir ce champ';
        }
      ?>

        </div>
      <div class="informations">
        <div class="email">
            <?php
          if(!empty($_POST['mail'])){
          echo $_POST['mail'];
          } else {
          echo 'Remplir ce champ';
          }
          ?>
        </div>
      </div>
    </div>
  </div>
 </body>
</html>
