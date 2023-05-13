function calcularImc1() {
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	var idade = document.getElementById("idade").value;

	if (peso == "" || altura == "" || idade == "") {
		alert("Preencha todos os campos");
		return;
	}

	var imc = peso / (altura * altura);

	var resultado = document.getElementById("resultado");


    resultado.innerHTML = "Seu IMC é " + imc.toFixed(2);
    
    if (idade <60) {
        resultado.innerHTML = " VC NAO E IDOSO ";
        
    } else if(imc <= 22 && idade >=60) {
        resultado.innerHTML += " (Abaixo do peso)";
        
    } else if (imc >22 && imc < 27 && idade >=60) {
        
        resultado.innerHTML += " (Peso normal)";
        
    } else if (imc >= 27 && idade >=60) {
        
        resultado.innerHTML += " (Sobrepeso)";  



    }

    
}