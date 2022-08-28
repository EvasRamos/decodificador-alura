function carregar(){
var saudacao = document.getElementById('saudacao')
var dateano = document.querySelector('span.dataeano')
var fundosite = document.getElementById('fundosite')
var hora = new Date
var horaatual = hora.getHours()
var configLocal = 'pt-BR';
var configData = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

dateano.innerHTML = hora.toLocaleDateString(configLocal, configData);
if(horaatual > 0 && horaatual <12){
    saudacao.innerHTML = ('Olá! bom dia, agora são: ' + hora.toLocaleTimeString(configLocal))
    fundosite.className = 'manha'
}

else if(horaatual >= 12 && horaatual < 18){
    saudacao.innerHTML = ('Olá! boa tarde, agora são: ' + hora.toLocaleTimeString(configLocal))
    fundosite.className = 'tarde'
}

else{
    saudacao.innerHTML = ('Olá! boa noite, agora são: ' + hora.toLocaleTimeString(configLocal))
    fundosite.className = 'noite'
}


    }


setInterval(carregar, 1000);



function criptografar(){

    let textoDigitado = document.getElementById('areatexto').value.toLowerCase();
  
    let textoCripto = textoDigitado  .replaceAll("e", "enter") .replaceAll("i", "imes")  .replaceAll("a", "ai")  .replaceAll("o", "ober")  .replaceAll("u", "ufat");

    document.querySelector("#areatexto2").innerHTML = textoCripto;
    document.querySelector("#boneco").style.display = "none";
    document.querySelector(".container").style.display = "inline";
    
}


function descriptograrar(){

    let textoCriptografado = document.getElementById('areatexto2').value.toLowerCase();

    let textoDescripto = textoCriptografado  .replaceAll("enter", "e") .replaceAll("imes", "i")  .replaceAll("ai", "a")  .replaceAll("ober", "o")  .replaceAll("ufat", "u");
    
    
    document.querySelector("#areatexto2").innerHTML = textoDescripto;   
        
}


function apagarTexto() {

    document.getElementById("areatexto").value = "";
        	
}

function copiar(){
    
        let textoCopiado = document.getElementById("areatexto2");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("O texto é: " + textoCopiado.value);
    }

