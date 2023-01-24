const textArea = document.querySelector(".texto01");
const mensaje = document.querySelector(".texto02");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","oder"],["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()


   for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])}
 }
 return stringEncriptada;
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
} 
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","oder"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    
       for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])}
     }
     return stringDesencriptada;
}

function cop(){
    var contenido = document.querySelector(".texto02");
    contenido.select();
    document.execCommand("copy");
    alert("Copio");
    textArea.value = "";
}