
function getPanierNumber(){
    if(typeof(Storage)!== "undefined"){
        document.getElementById("result").innerHTML = "" + sessionStorage.clickcount + "";
        } else{
            document.getElementById("result").innerHTML = "le storage n'a pas supporté !";
        }
}
// teddy = 1 camera = 2 et furniture = 3
var typeObjet = 0;
//Total panier
var totalPanier1 = 0;
/*var totalPanier2 = 0;
var totalPanier3 = 0;*/

var TableidGlobal = sessionStorage.getItem("listeGlobal");
console.log(TableidGlobal);
var TableidGlobal = TableidGlobal.split(",");
console.log(TableidGlobal);
//Panier si c'est un ours qui est choisi
TableidGlobal.forEach(element => {
    article = element.split(",");
    console.log(article);
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/api/teddies/"+article;
    console.log(url);
    xmlhttp.open("GET", url, false);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            typeObjet = 1;
            jsonArticle = JSON.parse(this.responseText);
            console.log(jsonArticle);
            z = "<img src='"+jsonArticle['imageUrl']+"' />"+"<p>"+"prix:"+" "+jsonArticle['price']/100+" "+"€"+"</p>"+"<p>"+jsonArticle['description']+"</p>";
            document.getElementById("panier1").innerHTML += z;
            totalPanier1 = totalPanier1+jsonArticle['price'];
            console.log(totalPanier1);
        }
    };
       xmlhttp.send();
    
});

//Affichage du sous-total
var panierTotal = (totalPanier1)/100;
document.getElementById("subtotal").innerHTML += panierTotal;
 
//Traitement du formulaire
document.getElementById("inscription").addEventListener("submit", function(e){
    e.preventDefault();
    var erreur;
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");
    var mail = document.getElementById("mail");
    var adress = document.getElementById("adress");
    var ville = document.getElementById("ville");
});

/* Envoi des données du formulaire à la base de données*/
function sendData(event) {
    event.preventDefault();
    var XHR = new XMLHttpRequest();
    
    // objToSendToTheServer : 
    // {
    //     contact : {firstname , lastname , ... }
    //     products :[id1 , id2 , idn ]
    // }

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;

    let contact = {
        firstName : firstName,
        lastName :lastName,
        email : email ,
        address: address ,
        city : city
    }

   var TableidGlobal = sessionStorage.getItem("listeGlobal");   
    
   if(TableidGlobal!= null || TableidGlobal!=undefined){
    var TableidGlobal = TableidGlobal.split(",");
   
}
 // Définissez ce qui se passe en cas de succès de soumission de données
    XHR.addEventListener('load', function(event) {
      console.log('Ouais ! Données envoyées et réponse chargée.');
    });
  
    // Définissez ce qui arrive en cas d'erreur
    XHR.addEventListener('error', function(event) {
        console.log('Oups! Quelque chose s\'est mal passé.');
    });
  
    XHR.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
           myArr   = JSON.parse(this.responseText)
           sessionStorage.setItem("order",this.responseText)
           window.open("command.html","_blank")
        }}

    // Configurez la requête sur teddies
    var url = "";
    if (typeObjet == 1){
        url = "http://localhost:3000/api/teddies/order";

    }else {
        alert("Error calling of API !");
    }
    
    XHR.open('POST', url,true);
  
    // Ajoutez l'en-tête HTTP requise pour requêtes POST de données de formulaire 
    XHR.setRequestHeader("Content-type", "application/json"); 
     
    var body = {};
    body.products = TableidGlobal;
    body.contact = contact;
    var body = JSON.stringify(body);
    // Finalement, envoyez les données.
    XHR.send(body);
  } //Fin send teddies














