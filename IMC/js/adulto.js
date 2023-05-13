function calcularImc2() {
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
    

    if (imc < 18.5 && idade <60) {
        resultado.innerHTML += " (Abaixo do peso)";

    } else if (imc >= 18.5 && imc < 25 && idade <60) {
        resultado.innerHTML += " (Peso normal)";

    } else if (imc >= 25 && imc < 30 && idade <60 ) {
        resultado.innerHTML += " (Sobrepeso)";

    } else if (imc >= 30 && imc < 35) {
        resultado.innerHTML += " (Obesidade grau I)";

    } else if (imc >= 35 && imc < 40) {
        resultado.innerHTML += " (Obesidade grau II)";

    } else {
        resultado.innerHTML += " (Obesidade grau III)";
    }


    
}