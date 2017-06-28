$(document).ready(function(){

  var ck1 = 0;
  var ck2 = 0;
  var ck3 = 0;
  var ck4 = 0;
  var ck5 = 0;
  var ck6 = 0;
  var ck7 = 0;
  var ck8 = 0;
  var ck9 = 0;
  var ck10 = 0;
  var ck11= 0;
  var ck12 = 0;
  var ck13 = 0;
  var ck14 = 0;
  var ck15 = 0;
  var ck16 = 0;
  var ck17 = 0;
  var result = 0;

$("#summer").hide();
$("#winter").hide();
$("#summer").fadeIn(2000);
$("#winter").fadeIn(2000);

$("#summer").click(function(){
  // $(".text1").hide();
  // $(".text2").hide();
  // $(".text3").hide();
  // $(".text4").hide();
  // $(".text5").hide();
  // $(".text6").hide();
  // $(".text7").hide();
  // $(".text8").hide();

    $("#profil").hide();
	$("#profil").fadeIn(1000);
  	$(".boxresult").hide();
    $(".boxresult").fadeIn(1000);


	$("#boxresult").html(
	'<a class="btn btn-success" id="btnresult">Estimer le gain de consommation</a>'+
	'<h2 id="display"></h2>'
	);

    $("#profil").html(
'<div class="row menu2">'+
  '<div class="box boxp1 col-xs-12 col-sm-6">'+
    '<div id="p1">'+
      '<div class="rowcat row">'+
        '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
        '<img class="img" src="img/clim.png" alt="clim">'+
        '</div>'+
        '<div class="txtcat1 col-xs-12 col-sm-12 col-md-8">'+
          '<h3>Climatisation</h3>'+
        '</div>'+
        '</div>'+
        '</div>'+
    '<div class="text1"></div>'+
  '</div>'+

  '<div class="box boxp2 col-xs-12 col-sm-6">'+
    '<div id="p2">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/techno.png" alt="electronique">'+
      '</div>'+
      '<div class="txtcat2 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Electroménager / Multimédias</h3>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text2"></div>'+
  '</div>'+
  '</div>'+

'<div class="row menu2">'+
  '<div class="box boxp3 col-xs-12 col-sm-6">'+
    '<div id="p3">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/piscine.jpg" alt="piscine">'+
      '</div>'+
      '<div class="txtcat3 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Piscine</h3>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text3"></div>'+
  '</div>'+

  '<div class="box boxp4 col-xs-12 col-sm-6">'+
    '<div id="p4">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/light.png" alt="clim">'+
      '</div>'+
      '<div class="txtcat4 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Autres Conseils</h3>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text4"></div>'+
  '</div>'+

  '</div>'
);

});


$("#winter").click(function(){
  // $(".text1").hide();
  // $(".text2").hide();
  // $(".text3").hide();
  // $(".text4").hide();
  // $(".text5").hide();
  // $(".text6").hide();
  // $(".text7").hide();
  // $(".text8").hide();


    $("#profil").hide();
    $("#profil").fadeIn(1000);
	$(".boxresult").hide();
    $(".boxresult").fadeIn(1000);


	$("#boxresult").html(
	'<a class="btn btn-success" id="btnresult">Estimer le gain de consommation</a>'+
	'<h2 id="display"></h2>'
	);

    $("#profil").html(
'<div class="row menu2">'+
  '<div class="box boxp5 col-xs-12 col-sm-6">'+
    '<div id="p5">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/chauffage.jpg" alt="clim">'+
      '</div>'+
      '<div class="txtcat1 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Chauffage</h3>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text5"></div>'+
  '</div>'+

  '<div class="box boxp6 col-xs-12 col-sm-6">'+
    '<div id="p6">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/techno.png" alt="electronique">'+
      '</div>'+
      '<div class="txtcat2 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Electroménager / Multimédias</h3>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text6"></div>'+
  '</div>'+
'</div>'+

'<div class="row menu2">'+
  '<div class="box boxp7 col-xs-12 col-sm-6">'+
    '<div id="p7">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/eau.jpg" alt="chauffe-eau">'+
      '</div>'+
      '<div class="txtcat3 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Chauffe-eau</h3>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text7"></div>'+
  '</div>'+

  '<div class="box boxp8 col-xs-12 col-sm-6">'+
    '<div id="p8">'+
    '<div class="rowcat row">'+
      '<div class="imgcat col-xs-12 col-sm-12 col-md-4">'+
      '<img class="img" src="img/light.png" alt="clim">'+
      '</div>'+
      '<div class="txtcat4 col-xs-12 col-sm-12 col-md-8">'+
        '<h3>Autres conseils</h3>'+
      '</div>'+
      '</div>'+
    '</div>'+
    '<div class="text8"></div>'+
  '</div>'+

  '</div>'
);

});

$("#profil").delegate("#p1", "click", function(){

    $(".text1").html(


      '<p><input type="checkbox" name="chk1">&nbsp &nbsp &nbsp La climatisation est le premier poste de dépense d électricité en été. Dans la mesure du possible, il est conseillé d utiliser des ventilateurs, qui consomment moins d énergie et qui, même s ils ne refroidissent pas l air, permettent de mieux supporter la chaleur.</p>'+
      '<p><input type="checkbox" name="chk2">&nbsp &nbsp &nbsp Eviter de la régler sur une température trop froide. Une trop grande différence entre la température intérieure et extérieure peut comporter des risques pour la santé, alors qu une différence de 5° C avec la chaleur extérieure suffit le plus souvent au confort des occupants et réduira en même temps la consommation électrique.</p>'+
      '<p><input type="checkbox" name="chk3">&nbsp &nbsp &nbsp Choisir un appareil performant  (avec une étiquette énergie de classe A). En effet, ne serait-ce que pour 3 mois, les climatiseurs, énergivores, augmentent votre consommation d électricité de 2.000 kWh pour une petite surface (45 m2) et votre facture de 20 à 25%. De plus, de nombreux climatiseurs rejettent des gaz à effet de serre, en cause dans le réchauffement climatique.</p>'
    ).css("border" , "1px solid grey");
    $(".text1").toggle(500);
    $('input[name=chk1]').on("change", function(){
      if($(this).is(':checked')){
    ck1=1;
      }
      else {
	ck1=0;
      }
	})

    $('input[name=chk2]').on("change", function(){
      if($(this).is(':checked')){
    ck2=1;
      }
      else {
	ck2=0;
      }
	})

	    $('input[name=chk3]').on("change", function(){
      if($(this).is(':checked')){
    ck3=15;
      }
      else {
	ck3=0;
      }
	})

  });

  $("#profil").delegate("#p2", "click", function(){

      $(".text2").html(

        '<p><input type="checkbox" name="chk4">&nbsp &nbsp &nbsp Les ordinateurs, imprimantes, téléviseurs dégagent de la chaleur lors de leur utilisation, mais aussi lorsqu ils sont en position veille.</p>'+
        '<p><input type="checkbox" name="chk5">&nbsp &nbsp &nbsp Préférer les appareils à basse consommation et de les débrancher après leur utilisation.</p>'
      ).css("border" , "1px solid grey");
        $(".text2").toggle(500);
	      $('input[name=chk4]').on("change", function(){
      if($(this).is(':checked')){
    ck4=3;
      }
      else {
	ck4=0;
      }
	})

	    $('input[name=chk5]').on("change", function(){
      if($(this).is(':checked')){
    ck5=1;
      }
      else {
	ck5=0;
      }
	})

    });

    $("#profil").delegate("#p3", "click", function(){

        $(".text3").html(

          '<p><input type="checkbox" name="chk6">&nbsp &nbsp &nbsp Mettre une bache la nuit pour éviter les déperditions de chaleur. Faire tourner le moteur pendant les heures creuses. Une piscine bien exposée permet de gagner de précieux degrés.</p>'
        ).css("border" , "1px solid grey");
          $(".text3").toggle(500);
		    $('input[name=chk6]').on("change", function(){
      if($(this).is(':checked')){
    ck6=5;
      }
      else {
	ck6=0;
      }
	})
      });

      $("#profil").delegate("#p4", "click", function(){

          $(".text4").html(

            '<p>Afin de limiter la chaleur dans votre logement, il est recommandé de fermer les volets ou baisser les stores pendant la journée</p>'+
            '<p>Fermer les fenêtres lorsque la température extérieure est supérieure à la température intérieure.</p>'+
            '<p>A l’inverse, la nuit, quand les températures sont au plus bas, ouvrir les fenêtres, afin de créer des courants d’air.</p>'+
            '<a href="http://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-etre-ecocitoyen-a-la-maison.pdf">En savoir plus</a>'
          ).css("border" , "1px solid grey");
$(".text4").toggle(500);
        });

        $("#profil").delegate("#p5", "click", function(){

            $(".text5").html(


              '<p><input type="checkbox" name="chk7">&nbsp &nbsp &nbsp L utilisation d un thermostat d ambiance pendant l absence des habitants du foyer durant la journée permet d économiser et de réduire sa facture . 1 degré en moins c est 7% d economisé.'+
              'Le chauffage et l eau chaude représentant 75% des dépenses énergétiques d un ménage.</p>'+
              '<p><input type="checkbox" name="chk8">&nbsp &nbsp &nbsp Si vous soujaitez améliorer le confort de votre logement, l isolation est souvent la premiére mesure a envisager.</p>'+
              '<p><input type="checkbox" name="chk9">&nbsp &nbsp &nbsp La mise en place d’une VMC double flux afin d’optimiser le renouvellement d’air et limiter les pertes de chaleur permet d économiser de l énergie.</p>'+
              '<p><input type="checkbox" name="chk10">&nbsp &nbsp &nbsp Veillez à dégager les grilles de ventilations/aérations afin de diminuer l humidité du logement. La consommation du chauffage est plus élevée lorsqu il y a présence d humidité.</p>'
            ).css("border" , "1px solid grey");
            $(".text5").toggle(500);
				    $('input[name=chk7]').on("change", function(){
      if($(this).is(':checked')){
    ck7=5;
      }
      else {
	ck7=0;
      }
	})

		    $('input[name=chk8]').on("change", function(){
      if($(this).is(':checked')){
    ck8=10;
      }
      else {
	ck8=0;
      }
	})

		    $('input[name=chk9]').on("change", function(){
      if($(this).is(':checked')){
    ck9=1;
      }
      else {
	ck9=0;
      }
	})

		    $('input[name=chk10]').on("change", function(){
      if($(this).is(':checked')){
    ck10=1;
      }
      else {
	ck10=0;
      }
	})
          });

          $("#profil").delegate("#p6", "click", function(){

              $(".text6").html(

                '<p><input type="checkbox" name="chk11">&nbsp &nbsp &nbsp Opter pour du matériel informatique porteurs du logo "Energy" star et/ou de l écolabel Européen.</p>'+
                '<p><input type="checkbox" name="chk12">&nbsp &nbsp &nbsp Les equipements de loisirs informatique et audiovisuel sont devenus le premier poste de consomation electriques hors chauffage et eau chaude. Pensez donc a choisir votre électroménager et votre téléviseur avec l étiquette énergie, les classes A+, A++ et A+++ désignent les plus efficaces. </p>'+
                '<p><input type="checkbox" name="chk13">&nbsp &nbsp &nbsp De nombreux appareils électroniques (téléphones mobiles, ordinateurs portables, consoles de jeux, appareils photos...) sont dotés de de batteries rechargeables. ne les laissez pas branchés en charge en permanence plus que nécessaire, car ils consomment de l électricité tant qu ils sont en charge.</p>'+
                '<p><input type="checkbox" name="chk14">&nbsp &nbsp &nbsp Faire sécher son linge a l air libre ou dans un local bien ventilé, le séche linge peut consommer beaucoup d énergie.</p>'+
                '<p><input type="checkbox" name="chk15">&nbsp &nbsp &nbsp Pensez a éteindre tous les appareils électriques non utilisés, car en mode veille ils consomment de l’électricité, on estime a environ 85 euros par an et par foyer les pertes dues aux consommations fantômes.</p>'
              ).css("border" , "1px solid grey");
                $(".text6").toggle(500);
			  	    $('input[name=chk11]').on("change", function(){
      if($(this).is(':checked')){
    ck11=3;
      }
      else {
	ck11=1;
      }
	})
		    $('input[name=chk12]').on("change", function(){
      if($(this).is(':checked')){
    ck12=1;
      }
      else {
	ck12=0;
      }
	})
		    $('input[name=chk13]').on("change", function(){
      if($(this).is(':checked')){
    ck13=5;
      }
      else {
	ck13=0;
      }
	})
		    $('input[name=chk14]').on("change", function(){
      if($(this).is(':checked')){
    ck14=1;
      }
      else {
	ck14=0;
      }
	})
		    $('input[name=chk15]').on("change", function(){
      if($(this).is(':checked')){
    ck15=3;
      }
      else {
	ck15=0;
      }
	})
            });

            $("#profil").delegate("#p7", "click", function(){

                $(".text7").html(

                  '<p><input type="checkbox" name="chk16">&nbsp &nbsp &nbsp Régler la température de son chauffe-eau sur 50° a 60° permet de consommer moins d’énergie pour avoir de l’eau chaude et aussi de limiter le développement du calcaire.</p>'+
                  '<p><input type="checkbox" name="chk17">&nbsp &nbsp &nbsp Les chauffe-eau solaire individuels et les systémes solaires combinés sont des systémes robustes et fiables demandant peu d entretien. Un chauffe eau solaire peut couvrir 50 à 70% des besoins de la maison .Le systéme solaire combiné( systéme de chauffage solaire) couvre entre 25 à 60% des besoins annuels d eau chaude et de chauffage, selon la région et la taille de l installation.</p>'
                ).css("border" , "1px solid grey");
                $(".text7").toggle(500);
					    $('input[name=chk16]').on("change", function(){
      if($(this).is(':checked')){
    ck16=1;
      }
      else {
	ck16=0;
      }
	})

		    $('input[name=chk17]').on("change", function(){
      if($(this).is(':checked')){
    ck17=5;
      }
      else {
	ck17=0;
      }
	})
              });

              $("#profil").delegate("#p8", "click", function(){

                  $(".text8").html(

                    '<p>Changer les fenêtres ( huisseries) afin de réduire les deperditions par les fenêtres . 10 à 15% des déperditions d énergie de la maison sont le fait de fenêtres anciennes ou mal isolées.</p>'+
                    '<p>Vous pouvez réaliser un auto-diagnostique afin de réaliser un bilan de vos consommations et d obtenir des conseils quand a votre mode de vie, et vos habitudes a modifier dans le but de réaliser des économies d énergie.</p>'+
                    '<p>Vous pouvez aérer votre logement 10 minutes par jour, ainsi l’air du logement sera renouvelé.   ( pensez a éteindre le chauffage lorsque les fenêtres sont ouvertes ) </p>'+
                    '<p>Pensez a laisser les portes ouvertes, afin de faciliter la circulation d air naturel des pièces sèches (salon, bureau, chambres) vers les pièces humides( salle de bain, cuisine ) </p>'+
                      '<a href="http://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-etre-ecocitoyen-a-la-maison.pdf">En savoir plus</a>'
                  ).css("border" , "1px solid grey");
                      $(".text8").toggle(500);
                });

				$("#boxresult").delegate("#btnresult", "click", function(){

				result=ck1+ck2+ck3+ck4+ck5+ck6+ck7+ck8+ck9+ck10+ck11+ck12+ck13+ck14+ck15+ck16+ck17;
				$('#display').html('Vous économiserez jusqu\'à '+result+' % sur votre facture grâce à ces astuces.');
				});


});
