 const input = document.getElementById("resultado");

  function insert(valor) {
    input.value += valor;
  }

  function clean() {
    input.value = ""; //troca todos os caracteres para oq esta dentro das aspas duplas
  }

  function back() {
    input.value = input.value.slice(0, -1); //exclui o ultimo caractere digitado na calculadora
  }

  function calcular() {
    try {
      input.value = eval(input.value); //try é para tentar executar
    } catch {
      input.value = "Erro"; //catch é para, se algo der errado ele n trave tudo 
    }
  }