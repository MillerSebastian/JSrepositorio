function calcularIMC() {

    const btn = document.getElementById("calcularBtn");
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 200);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let estado = "";

    if (imc < 18.5) {
        estado = "Estás bajo de peso";
    } else if (imc >= 18.5 && imc < 25) {
        estado = "Tienes un peso saludable";
    } else if (imc >= 25 && imc < 30) {
        estado = "Estás con sobrepeso";
    } else {
        estado = "Tienes obesidad";
    }

  resultado.textContent = `Tu IMC es ${imc.toFixed(2)}. ${estado}.`;
}