let img = document.createElement('img');
let status = document.getElementById('msg');
let ligado = false;
let foto = document.getElementById('foto');
function process(){
    img.id = 'img';
    img.src = 'b983w.jpg';
    foto.insertAdjacentElement("afterbegin",foto.appendChild(img));
}
function ligar(){
    if(ligado){
        window.alert("A Lâmpada já está ligada");
    }else{
        ligado=true;
        status.innerHTML = 'A Lâmpada está ligada';
        img.src = 'ybxlO.jpg';
    }
}
function desligar(){
    if(ligado){
        ligado=false;
        status.innerHTML = 'A Lâmpada está desligada';
        img.src = 'b983w.jpg';
    }else{
        window.alert("A Lâmpada já está desligada");
    }
}

