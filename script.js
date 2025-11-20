const questions = [
  { q: "Você usa autenticação em duas etapas nas contas da empresa?", a: ["Sim", "Às vezes", "Não"] },
  { q: "Você realiza backups regularmente?", a: ["Sim", "Raramente", "Nunca"] },
  { q: "Seus dispositivos ficam atualizados?", a: ["Sempre", "Às vezes", "Nunca"] },
  { q: "Você verifica links e e-mails antes de clicar?", a: ["Sim", "Às vezes", "Não"] },
  { q: "Você usa antivírus confiável e atualizado?", a: ["Sim", "Às vezes", "Não"] },
  { q: "Sua empresa tem senhas fortes e únicas?", a: ["Sim", "Parcialmente", "Não"] },
  { q: "Você usa Wi-Fi público para acessar dados da empresa?", a: ["Nunca", "Às vezes", "Sempre"] },
  { q: "Seus funcionários recebem orientação sobre golpes?", a: ["Sim", "Pouco", "Não"] },
  { q: "Você usa WhatsApp Business com PIN e 2FA?", a: ["Sim", "Parcialmente", "Não"] },
  { q: "Você faria algo diferente após conhecer os riscos?", a: ["Sim", "Talvez", "Não"] },
];

const quizArea = document.getElementById("quiz-area");

// Criar cards para cada pergunta
questions.forEach((item, i) => {
  const div = document.createElement("div");
  div.classList.add("card", "card-hov");
  div.style.marginBottom = "12px";

  let html = `<p><strong>${i+1}. ${item.q}</strong></p>`;
  
  item.a.forEach(ans => {
    html += `
      <label style="display:block; margin:6px 0;">
        <input type="radio" name="q${i}" value="${ans}"> ${ans}
      </label>
    `;
  });

  div.innerHTML = html;
  quizArea.appendChild(div);
});

// Botão de resultado
document.getElementById("btn-submit").addEventListener("click", () => {
  const result = document.getElementById("quiz-result");
  let score = 0;

  document.querySelectorAll("input[type=radio]:checked").forEach(r => {
    if (r.value === "Sim" || r.value === "Sempre" || r.value === "Nunca") score++;
  });

  result.style.display = "block";

  if (score >= 8) {
    result.innerHTML = "<strong>Excelente!</strong> Sua empresa está bem protegida, continue assim!";
  } else if (score >= 5) {
    result.innerHTML = "<strong>Bom!</strong> Sua segurança é razoável, mas ainda há pontos importantes para melhorar.";
  } else {
    result.innerHTML = "<strong>Atenção!</strong> Sua empresa corre riscos sérios. Reforce urgentemente suas medidas.";
  }
});

// Botão de reset
document.getElementById("btn-reset").addEventListener("click", () => {
  document.querySelectorAll("input[type=radio]").forEach(i => i.checked = false);
  document.getElementById("quiz-result").style.display = "none";
});
