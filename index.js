const calculateIMC = (weight, height) => {
  const weightToNumber = Number(weight);
  const heightToNumber = Number(height);

  const imc = weightToNumber / (heightToNumber * heightToNumber);
  const roundImc = Math.round(imc * 100) / 100;

  return roundImc;
};

const messageResult = (imcResult) => {
  const resultValue = document.querySelector("#result-value");
  const resultMessage = document.querySelector("#result-message");

  if (imcResult > 16 && imcResult < 17) {
    resultValue.style.color = "red";
    resultMessage.style.color = "red";

    return "Muito abaixo do peso";
  }
  if (imcResult >= 17 && imcResult < 18.5) {
    resultValue.style.color = "orange";
    resultMessage.style.color = "orange";

    return "Abaixo do peso";
  }
  if (imcResult >= 18.5 && imcResult < 25) {
    resultValue.style.color = "green";
    resultMessage.style.color = "green";

    return "Peso ideal";
  }
  if (imcResult >= 25 && imcResult < 30) {
    resultValue.style.color = "orange";
    resultMessage.style.color = "orange";

    return "Acima do peso";
  }
  if (imcResult >= 30 && imcResult < 35) {
    resultValue.style.color = "orange";
    resultMessage.style.color = "orange";

    return "Obesidade I";
  }
  if (imcResult >= 35 && imcResult < 40) {
    resultValue.style.color = "red";
    resultMessage.style.color = "red";

    return "Obesidade II (severa)";
  }
  if (imcResult >= 40) {
    resultValue.style.color = "red";
    resultMessage.style.color = "red";

    return "Obesidade III (mórbida)";
  }

  return "inválido";
};

const showResult = (imcResult) => {
  const resultValue = document.querySelector("#result-value");
  const resultMessage = document.querySelector("#result-message");

  const formtedImcResult = imcResult.toString().replace(".", ",");
  const finalImcResultText = `Seu IMC é ${formtedImcResult}.`;
  const textResult = document.createTextNode(finalImcResultText);

  const message = messageResult(imcResult);
  const textMessage = document.createTextNode(message);

  resultValue.innerHTML = "";
  resultMessage.innerHTML = "";

  resultValue.appendChild(textResult);
  resultMessage.appendChild(textMessage);

  return;
};

const calculate = () => {
  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");
  const btnCalculate = document.querySelector("#btn-calculate");

  return btnCalculate.addEventListener("click", (event) => {
    event.preventDefault();
    const imcResult = calculateIMC(weight.value, height.value);

    showResult(imcResult);

    return;
  });
};

calculate();
