let nome = prompt("Qual é o seu nome?");

let renda = Number(prompt("Qual é a sua renda mensal? (R$)"));
while (isNaN(renda)) {
  renda = Number(prompt("Valor inválido. Digite sua renda mensal (R$):"));
}

let quantidadeDespesas = Number(prompt("Quantas despesas você vai informar? (1 a 5)"));
while (isNaN(quantidadeDespesas)) {
  quantidadeDespesas = Number(prompt("Valor inválido. Quantas despesas? (1 a 5)"));
}

if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = Number(prompt("Despesa " + i + ": Qual o valor? (R$)"));
  while (isNaN(despesa)) {
    despesa = Number(prompt("Valor inválido. Despesa " + i + ": Qual o valor? (R$)"));
  }
  totalDespesas = totalDespesas + despesa;
}

let sobra = renda - totalDespesas;
let classificacao = "";

if (totalDespesas > renda) {
  classificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else if (sobra >= renda * 0.30) {
  classificacao = "✅ Ótimo: boa margem de sobra.";
} else {
  classificacao = "🙂 Ok: dá para melhorar a sobra.";
}

let resultado =
  "Usuário: " + nome + "\n" +
  "Renda: R$" + renda.toFixed(2) + "\n" +
  "Total de despesas: R$" + totalDespesas.toFixed(2) + "\n" +
  "Sobra: R$" + sobra.toFixed(2) + "\n" +
  classificacao;

alert(resultado);
console.log(resultado);