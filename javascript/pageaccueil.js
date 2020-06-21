
//requêtte pour afficher les images

var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/api/teddies";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        functionOurs(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send(null);

var x = "";
function functionOurs(objetOurs) {
    console.log("ours");
    objetOurs.forEach(element => {
        couleurs = element["colors"];
        name = element["name"];
        id = element["_id"];
        price = element["price"];
        image = element["imageUrl"];
        x = "<a href='produit.html?id=" + id + "'>" +couleurs+ " " + "<img src='" + image + "'/>" + " " + "prix:" + " " + price/100 + " " + "€" + " " + name + "</a>";
        console.log(x);
        document.getElementById("sectionours").innerHTML += x;
    });
}

var xmlhttpMeuble = new XMLHttpRequest();
var urlMeuble = "http://localhost:3000/api/furniture";

xmlhttpMeuble.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        functionMeubles(myArr);
    }
};
xmlhttpMeuble.open("GET", urlMeuble, true);
xmlhttpMeuble.send(null);

var z = "";
function functionMeubles(objetOurs) {
    console.log("meubles");
    objetOurs.forEach(element => {
        couleurs = element["varnish"];
        name = element["name"];
        id = element["_id"];
        price = element["price"];
        image = element["imageUrl"];
        z = "<a href='produit.html?id=" + id + "'>"+couleurs+" " + "<img src='" + image + "'/>" + " " + '<p>' + "prix:" + " " + price/100 + " " + "€" + " " + name + "</p></a>";
        console.log(z);
        document.getElementById("sectionmeubles").innerHTML += z;
    });
}

//Affichage des caméras
var xmlhttpCamera = new XMLHttpRequest();
var urlCamera = "http://localhost:3000/api/cameras";

xmlhttpCamera.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        functionCamera(myArr);
    }
};
xmlhttpCamera.open("GET", urlCamera, true);
xmlhttpCamera.send(null);

var y = "";
function functionCamera(objetOurs) {
    console.log("cameras");
    objetOurs.forEach(element => {
        couleurs = element["lenses"];
        name = element["name"];
        id = element["_id"];
        price = element["price"];
        image = element["imageUrl"];
        y = "<a href='produit.html?id=" + id + "'>" +couleurs+ " " + "<img src='" + image + "'/>" + " " + "prix:" + " " + price/100 + " " + "€" + " " + name + "</a>";
        console.log(y);
        document.getElementById("sectioncameras").innerHTML += y;
    });
}


