
   var prixGlobal;
   var imageGlobal;
   var titreGlobal;
   var idGlobal;
   var descriptionGlobal;
   //ajouter le contenu si l'image est choisie.

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);
	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}
//id du produit choisi
var id = $_GET("id");

//Affichage d'un élément ours choisi
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/api/teddies/"+id;
console.log(url);
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse("["+this.responseText+"]"); 
        functionOurs(myArr);
       
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
function functionOurs(objetOurs){
    objetOurs.forEach(element => {
    couleurs = element["colors"];
    id = element["_id"];
    price = element["price"];
    image = element["imageUrl"];
    idGlobal = id;
    imageGlobal = image;
    titreGlobal = element["name"];
    descriptionGlobal = element["description"];
    prixGlobal = price;
    x = "<img src='"+image+"'/>";
    des = descriptionGlobal;
    document.getElementById("descript").innerHTML += des;
    console.log("Les couleurs de mes ours sont:" +couleurs);
    document.getElementById("balide1").innerHTML += x;
    //article name
    document.getElementById("nom_article").innerHTML += "<h6>Article "+titreGlobal+"</h6>";
    //prix article
    document.getElementById("prix_article").innerHTML += "<h6>Prix "+price/100+" €</h6>";
    //La partie personnalistaion des couleurs
    for(element in couleurs){
        var opt = document.createElement("option");
        opt.value = couleurs[element];
        opt.innerHTML = couleurs[element];
        document.getElementById("couleurs").appendChild(opt);
    }
});
}

//Affichage d'un élément camera choisi
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/api/cameras/"+id;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse("["+this.responseText+"]"); 
        functionCamera(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
function functionCamera(objetOurs){
    objetOurs.forEach(element => {
        if(id == element["_id"]){
    couleurs = element["lenses"];
    id = element["_id"];
    price = element["price"];
    image = element["imageUrl"];
    idGlobal = id;
    imageGlobal = image;
    titreGlobal = element["name"];
    descriptionGlobal = element["description"];
    prixGlobal = price;
    x = "<img src='"+image+"'/>";
    des = descriptionGlobal;
    document.getElementById("descript").innerHTML += des;
    console.log("Les couleurs de mes ours sont:" +couleurs);
    document.getElementById("balide1").innerHTML += x;
    //article name
    document.getElementById("nom_article").innerHTML += "<h6>Article "+titreGlobal+"</h6>";
    //prix article
    document.getElementById("prix_article").innerHTML += "<h6>Prix "+price/100+" €</h6>";
    //La partie personnalistaion des couleurs
    for(element in couleurs){
        var opt = document.createElement("option");
        opt.value = couleurs[element];
        opt.innerHTML = couleurs[element];
        document.getElementById("couleurs").appendChild(opt);
    }
        }
    });
}
//Affichage d'un élément meubles choisi
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/api/furniture/"+id;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse("["+this.responseText+"]"); 
        functionMeuble(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
var   x = "";
var xcol = "";
function functionMeuble(objetOurs){
    objetOurs.forEach(element => {
        if(id == element["_id"]){
    couleurs = element["varnish"];
    id = element["_id"];
    price = element["price"];
    image = element["imageUrl"];
    idGlobal = id;
    imageGlobal = image;
    titreGlobal = element["name"];
    descriptionGlobal = element["description"];
    prixGlobal = price;
    x = "<img src='"+image+"'/>";
    des = descriptionGlobal;
    document.getElementById("descript").innerHTML += des;
    console.log("Les couleurs de mes ours sont:" +couleurs);
    document.getElementById("balide1").innerHTML += x;
    //article name
    document.getElementById("nom_article").innerHTML += "<h6>Article "+titreGlobal+"</h6>";
    //prix article
    document.getElementById("prix_article").innerHTML += "<h6>Prix "+price/100+" €</h6>";
    //La partie personnalistaion des couleurs
    for(element in couleurs){
        var opt = document.createElement("option");
        opt.value = couleurs[element];
        opt.innerHTML = couleurs[element];
        document.getElementById("couleurs").appendChild(opt);
        }
    }
    });
}

//Indiquer le nombre de produit dans le panier 

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } else {
        sessionStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "" + sessionStorage.clickcount + "";
    } else {
      document.getElementById("result").innerHTML = "Désolé, le localStorage n'a pas supporté...";
    }
  }

/*fonction pour alimenter le Storage du produit choisi*/
function rechercheProduit(){
    var ajoutPanier = document.getElementById("bouton");
    ajoutPanier.addEventListener('click', function(){
    console.log("le produit choisi");
    var TableGlobal = [
         idGlobal,
         imageGlobal,
         descriptionGlobal,
         titreGlobal,
         prixGlobal
    ];
    var TableauString = TableGlobal.join();
    sessionStorage.setItem(idGlobal, TableauString);
    
    var TableidGlobal = sessionStorage.getItem("listeGlobal");
    if(TableidGlobal == null){
        TableidGlobal = [idGlobal];
        console.log("ça passe par le if TableidGlobal");
    }else {
        console.log(TableidGlobal);
        TableidGlobal = TableidGlobal.split();
        console.log(TableidGlobal);
        TableidGlobal.push(idGlobal);
        console.log(TableidGlobal);
        
    }
    console.log(TableidGlobal);
    TableidGlobal = TableidGlobal.join();
    console.log(TableidGlobal);
    sessionStorage.setItem("listeGlobal", TableidGlobal);

    console.log(" Au moins un article est ajouté dans le panier" +TableauString);
    console.log(sessionStorage.getItem("listeGlobal"));
    });
}
rechercheProduit();









 






















