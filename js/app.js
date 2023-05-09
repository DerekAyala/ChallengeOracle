const entrada = document.querySelector(".entrada__campo");
const salida = document.querySelector(".salida__formulario p");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector(".btnCopiar");
const salidaAntes = document.querySelector(".salida--antes");
const salidaDespues = document.querySelector(".salida--despues");

function encriptar(){
  let textoEncriptado = entrada.value.toLowerCase()
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat");

  salidaAntes.style.display = "none";
  salidaDespues.style.display = "block";

  salida.textContent = textoEncriptado
}

function desencriptar(){
  let textoDesencriptado = entrada.value
  .replace(/enter/gi, "e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o")
  .replace(/ufat/gi, "u");

  salidaAntes.style.display = "none";
  salidaDespues.style.display = "block";

  salida.textContent = textoDesencriptado
}

function copiar(){
  const textoCopiar = salida.textContent;

  navigator.clipboard.writeText(textoCopiar)
  .then(() => {
    alert("El texto se ha copiado al portapapeles.");
  })
  .catch((error) => {
    console.error("Error al copiar al texto: ", error);
  });
};

btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click",desencriptar);
btnCopiar.addEventListener("click",copiar);
