 var numeroSecreto = Math.floor(Math.random() * 100) + 1;
  var tentativas = 0;

  function verificar() {
    var palpite = Number(document.getElementById("palpite").value);
    tentativas++;

    if (palpite === numeroSecreto) {
      document.getElementById("mensagem").innerText = "🎉 Parabéns! Você acertou!";
      document.getElementById("tentativas").innerText = "Número de tentativas: " + tentativas;
    } else if (palpite > numeroSecreto) {
      document.getElementById("mensagem").innerText = "O número secreto é menor ⬇️";
    } else if (palpite < numeroSecreto) {
      document.getElementById("mensagem").innerText = "O número secreto é maior ⬆️";
    }
  }