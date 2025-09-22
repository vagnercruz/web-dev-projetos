const API_BASE = "https://api.frankfurter.app";
    const fromSel = document.getElementById("from");
    const toSel = document.getElementById("to");
    const amountInput = document.getElementById("amount");
    const resultEl = document.getElementById("result");
    const btn = document.getElementById("convertBtn");

    async function loadCurrencies() {
      try {
        const res = await fetch(`${API_BASE}/currencies`);
        const data = await res.json();
        for (const [code,name] of Object.entries(data)) {
          const opt1 = document.createElement("option");
          opt1.value = code;
          opt1.textContent = `${code} — ${name}`;
          fromSel.appendChild(opt1);

          const opt2 = opt1.cloneNode(true);
          toSel.appendChild(opt2);
        }
        fromSel.value = "USD";
        toSel.value = "BRL";
      } catch (e) {
        resultEl.textContent = "Erro ao carregar moedas.";
      }
    }

    async function convert() {
      const from = fromSel.value;
      const to = toSel.value;
      const amount = parseFloat(amountInput.value);
      if (!from || !to || isNaN(amount)) {
        resultEl.textContent = "Preencha os campos corretamente.";
        return;
      }
      try {
        const res = await fetch(`${API_BASE}/latest?amount=${amount}&from=${from}&to=${to}`);
        const data = await res.json();
        resultEl.textContent = `${amount} ${from} = ${data.rates[to]} ${to}`;
      } catch (e) {
        resultEl.textContent = "Erro na conversão.";
      }
    }

    btn.addEventListener("click", convert);

    loadCurrencies();