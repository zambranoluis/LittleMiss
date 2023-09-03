const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*10)+2+"s"
    body.appendChild(heart);
}
setInterval(createHeart,100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
        heartArr[0].remove()
    }
    //console.log(heartArr);
},100)


let fotos = [
    './Imagenes/pickJ/J(1).jpg',
    "./Imagenes/pickJ/J(2).jpg",
    "./Imagenes/pickJ/J(3).jpg",
    "./Imagenes/pickJ/J(4).jpg",
    "./Imagenes/pickJ/J(5).jpg",
    "./Imagenes/pickJ/J(6).jpg",
    "./Imagenes/pickJ/J(7).jpg",
    "./Imagenes/pickJ/J(8).jpg",
    "./Imagenes/pickJ/J(9).jpg",
    "./Imagenes/pickJ/J(10).jpg",
    "./Imagenes/pickJ/J(11).jpg",
    "./Imagenes/pickJ/J(12).jpg",
    "./Imagenes/pickJ/J(13).jpg",
    "./Imagenes/pickJ/J(14).jpg",
    "./Imagenes/pickJ/J(15).jpg",
    "./Imagenes/pickJ/J(16).jpg",
    "./Imagenes/pickJ/J(17).jpg",
    "./Imagenes/pickJ/J(18).jpg",
    "./Imagenes/pickJ/J(19).jpg",
    "./Imagenes/pickJ/J(20).jpg",
    "./Imagenes/pickJ/J(21).jpg",
    "./Imagenes/pickJ/J(22).jpg",
    "./Imagenes/pickJ/J(23).jpg",
    "./Imagenes/pickJ/J(24).jpg",
    "./Imagenes/pickJ/J(25).jpg",
    "./Imagenes/pickJ/J(26).jpg",
    "./Imagenes/pickJ/J(27).jpg",
    "./Imagenes/pickJ/J(28).jpg",
    "./Imagenes/pickJ/J(29).jpg",
    "./Imagenes/pickJ/J(30).jpg",
    "./Imagenes/pickJ/J(31).jpg",
    "./Imagenes/pickJ/J(32).jpg",
    "./Imagenes/pickJ/J(33).jpg",
    "./Imagenes/pickJ/J(34).jpg",
    "./Imagenes/pickJ/J(35).jpg",
    "./Imagenes/pickJ/J(36).jpg",
    "./Imagenes/pickJ/J(37).jpg",
    "./Imagenes/pickJ/J(38).jpg",
    "./Imagenes/pickJ/J(39).jpg",
    "./Imagenes/pickJ/J(40).jpg",
    "./Imagenes/pickJ/J(41).jpg",
    "./Imagenes/pickJ/J(42).jpg",
    "./Imagenes/pickJ/J(43).jpg",
    "./Imagenes/pickJ/J(44).jpg",
    "./Imagenes/pickJ/J(45).jpg",
    "./Imagenes/pickJ/J(46).jpg",
    "./Imagenes/pickJ/J(47).jpg",
];

let carrusel = document.getElementById("carrusel");
let i = 0;
carrusel.style.backgroundImage = `url('${fotos[0]}')`;

function cambioDerecha () {
    i++;
    if (i==fotos.length) {
        i = 0;
    }
    carrusel.style.backgroundImage = `url('${fotos[i]}')`;
    
}

function cambioIzquierda () {
    i--;
    if (i==-1) {
        i = fotos.length-1;
    }
    carrusel.style.backgroundImage = `url('${fotos[i]}')`;
}

setInterval(cambioDerecha, 3000);

