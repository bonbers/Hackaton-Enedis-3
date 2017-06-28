<?php
$annee = date('Y');
//$timestamp_infoEte = mktime( 05, 01, $annee);
//$timestamp_infoHiver = mktime( 09, 01, $annee);

// $messageinfoEte = '
//
//      <html>
//      <head>
//      </head>
//      <body>
// <h1>infos économie énergie été d\''$année'</h1>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper dui eu rutrum elementum. Etiam maximus leo et quam condimentum varius. Morbi volutpat ultrices imperdiet. Donec fermentum elementum erat, a ornare purus vulputate sit amet. Pellentesque pellentesque nulla mauris, a maximus eros sodales et. Proin nisi justo, euismod sed leo at, laoreet finibus eros. Nulla ante nulla, commodo nec odio id, egestas egestas urna. Donec vel metus ac lacus ornare aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla euismod enim nisl, ac scelerisque felis rhoncus non. Sed dictum porttitor gravida. Cras pretium velit sit amet faucibus.</p>
//      </body>
//      </html>
// ';
$sujet = 'Economisez cet été';

// $messageinfoHiver = '
//
//      <html>
//      <head>
//      </head>
//      <body>
// <h1>infos économie énergie hiver d\''$année'</h1>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper dui eu rutrum elementum. Etiam maximus leo et quam condimentum varius. Morbi volutpat ultrices imperdiet. Donec fermentum elementum erat, a ornare purus vulputate sit amet. Pellentesque pellentesque nulla mauris, a maximus eros sodales et. Proin nisi justo, euismod sed leo at, laoreet finibus eros. Nulla ante nulla, commodo nec odio id, egestas egestas urna. Donec vel metus ac lacus ornare aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla euismod enim nisl, ac scelerisque felis rhoncus non. Sed dictum porttitor gravida. Cras pretium velit sit amet faucibus. </p>
//      </body>
//      </html>
// ';
$sujet = 'Economisez cet été';

$headers  = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


// if(time() == $timestamp_infoEte)
// {
//
// if(time() == $timestamp_infoHiver)
// {

include("./config/connections.php");
/*
  mysqli_connect("localhost", "root", "Meslunettes2");
   mysqli_select_db("enedis3");
   $req = mysqli_query("SELECT * FROM mail");
     if($mail = mysqli_fetch_array($req))
   {
     mail($mail['mail'], $sujet, $messageinfoEte, $headers);
     echo 'Mail bien envoyé à '.$mail['mail'].'';
   }

  }
  else
  {

    echo 'Désolé c\'est pas le bon jour :p';

  }

  mysql_close();


*/


$reponse = $bdd->query('SELECT * FROM Mail');


while ($donnees = $reponse->fetch())
{
  echo $donnees["nom"];
  echo $donnees["prenoms"];
  echo $donnees["mail"];

}

?>
