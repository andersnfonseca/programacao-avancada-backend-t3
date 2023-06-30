class Calculadora {
	constructor(numero1, numero2) {
		this.soma = numero1 + numero2
		this.subtracao = numero1 - numero2
		this.multiplicacao = numero1 * numero2
		this.divisao = numero1 / numero2
	}
}

function calcular() {

	let n1 = parseFloat(document.getElementById("n1").value)
	let n2 = parseFloat(document.getElementById("n2").value)
	
	const calculadora = new Calculadora(n1, n2)
	
	let elementoResultado = document.getElementById("resultado")
	
	elementoResultado.innerHTML = JSON.stringify(calculadora)
}

