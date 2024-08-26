//Tem que ir nesta ordem
//e - entre
//o - ober
//i - vezes
//a - ai
//você - ufat

function criptografar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase(); 
    //i deve afetar letras minúsculas e maiúsculas -- e_E
    //g é para a linha inteira
    //m afeta múltiplas linhas ou frases
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    // Limpa o campo de entrada
    document.getElementById("inputTexto").value = "";

}
function descriptografar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase(); 
    //i deve afetar letras minúsculas e maiúsculas -- e_else {}
    //g é para a linha inteira
    //m afeta múltiplas linhas ou frases
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
     // Limpa o campo de entrada
     document.getElementById("inputTexto").value = "";
 

}

function copiar(){
     var contenido = document.querySelector("#texto2");
         contenido.select();
        document.execCommand("copy");
   alert("O texto foi copiado!");
   contenido.innerHTML = "";

}


