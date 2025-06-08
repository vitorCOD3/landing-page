const perguntas = [
  "Qual é a sua cor favorita?",
  "Qual estilo de roupa você mais gosta?",
  "Qual música sempre te anima?",
  "Qual disciplina da escola você curte mais?",
  "Qual foi o último filme que te fez sorrir?",
  "Você prefere praia ou montanha?",
  "Qual comida te deixa feliz?",
  "Se você tivesse um superpoder, qual seria?",
  "Qual é o nome do seu pet (se tiver)?",
  "Qual cidade você gostaria de visitar?",
  "Qual emoji mais te representa hoje?",
  "Se pudesse ser um animal por um dia, qual escolheria?",
  "Qual é seu doce favorito?",
  "Qual desenho animado marcou sua infância?",
  "Prefere friozinho com coberta ou calor com sorvete?",
  "Qual é a sua série ou anime favorito?",
  "Qual palavra te define hoje?",
  "Qual foi a coisa mais legal que te disseram hoje?",
  "Qual sua bebida preferida pra relaxar?",
  "Se você fosse uma cor, qual seria?"
];

const frasesAdmiracao = [
  "Uau! Que resposta incrível!",
  "Você arrasa demais! 🔥",
  "Isso foi brilhante! ✨",
  "Adorei sua resposta! 💖",
  "Você é puro charme e inteligência! 😍"
];

let respostasEnviadas = 0;

window.onload = () => {
  sortearPergunta();
};

function mostrar() {
  const respostaInput = document.getElementById("resposta");
  const resposta = respostaInput.value.trim();

  if (!resposta) {
    alert("Responda antes de enviar!");
    return;
  }

  respostasEnviadas++;

  const mensagem = document.getElementById("mensagem");

  if (respostasEnviadas === 5) {
    // Mensagem especial após 5 respostas
    mensagem.innerText = "E aí, está gostando dessa minha surpresa toda feita especialmente pra você? 💖😊";
    mensagem.style.display = "block";

    // Esconder input, pergunta e botão temporariamente
    document.getElementById("pergunta").style.display = "none";
    respostaInput.style.display = "none";
    document.querySelector("button").style.display = "none";

    // Espera 3 segundos antes de continuar
    setTimeout(() => {
      respostasEnviadas = 0; // reseta contador

      mensagem.style.display = "none";
      document.getElementById("pergunta").style.display = "block";
      respostaInput.style.display = "block";
      document.querySelector("button").style.display = "inline-block";

      respostaInput.value = "";
      sortearPergunta();
    }, 3000);

    return;
  }

  // Mensagem normal de admiração
  const frase = frasesAdmiracao[Math.floor(Math.random() * frasesAdmiracao.length)];
  mensagem.innerText = frase;
  mensagem.style.display = "block";

  // Começa a gerar corações
  const interval = setInterval(criarCoracao, 200);

  // Para animação e atualiza pergunta após 3 segundos
  setTimeout(() => {
    clearInterval(interval);
    mensagem.style.display = "none";
    respostaInput.value = "";
    sortearPergunta();
  }, 3000);
}

function sortearPergunta() {
  const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];
  document.getElementById("pergunta").innerText = pergunta;
}

function criarCoracao() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = getRandomHeart();
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = 12 + Math.random() * 30 + "px";
  heart.style.color = getRandomColor();
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

function getRandomColor() {
  const cores = [
    "#e91e63", "#ff1493", "#ff69b4", "#db7093", "#ff6347", "#ff4500",
    "#ffcc00", "#00bcd4", "#03a9f4", "#4caf50", "#9c27b0", "#673ab7"
  ];
  return cores[Math.floor(Math.random() * cores.length)];
}

function getRandomHeart() {
  const coracoes = ["❤️ε(´｡•᎑•`)っ", "🧡", "💛", "💚", "ε(´｡•᎑•`)っ💙", "💜", "<3", "❣️", "🤍", "🤎", "💕"];
  return coracoes[Math.floor(Math.random() * coracoes.length)];
}
