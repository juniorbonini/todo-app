require("dotenv").config();
const { Groq } = require("groq-sdk");

console.log(
  "A variável GROQ_API_KEY foi lida?",
  process.env.GROQ_API_KEY ? "SIM" : "NÃO",
);

try {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log("Instância do Groq criada com sucesso!");
} catch (e) {
  console.error("Erro ao instanciar o Groq:", e.message);
}
