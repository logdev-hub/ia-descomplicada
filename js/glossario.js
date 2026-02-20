const termosGlossario = [
  { termo: "Algoritmo", categoria: "fundamentos", explicacao: "Sequencia de regras para resolver um problema.", exemplo: "Receita de bolo e um algoritmo: passo 1, 2, 3..." },
  { termo: "Modelo", categoria: "fundamentos", explicacao: "Estrutura matematica treinada para reconhecer padroes.", exemplo: "Um modelo pode prever atraso em entrega com base em dados anteriores." },
  { termo: "Dado", categoria: "fundamentos", explicacao: "Informacao usada para treinar, validar e testar um sistema.", exemplo: "Historico de vendas, mensagens de clientes e horarios de atendimento." },
  { termo: "Treinamento", categoria: "modelagem", explicacao: "Fase em que o modelo ajusta parametros para reduzir erro.", exemplo: "A cada rodada, o modelo aprende com acertos e erros." },
  { termo: "Inferencia", categoria: "modelagem", explicacao: "Uso do modelo treinado para gerar previsao ou resposta.", exemplo: "Voce envia um prompt e recebe uma resposta: isso e inferencia." },
  { termo: "Parametro", categoria: "modelagem", explicacao: "Valor interno ajustado durante o treinamento.", exemplo: "Modelos grandes possuem milhoes ou bilhoes de parametros." },
  { termo: "Token", categoria: "modelagem", explicacao: "Unidade de texto processada pelo modelo.", exemplo: "Uma frase e quebrada em partes menores chamadas tokens." },
  { termo: "Overfitting", categoria: "qualidade", explicacao: "Quando o modelo aprende demais os exemplos de treino e piora em casos novos.", exemplo: "Acerta exercicios antigos, mas erra quando muda o enunciado." },
  { termo: "Generalizacao", categoria: "qualidade", explicacao: "Capacidade de funcionar bem em situacoes novas.", exemplo: "Aplicar o que aprendeu em textos diferentes dos de treino." },
  { termo: "Acuracia", categoria: "qualidade", explicacao: "Percentual de respostas corretas em uma tarefa.", exemplo: "Se acertou 90 de 100 casos, acuracia de 90%." },
  { termo: "Precisao", categoria: "qualidade", explicacao: "Entre as previsoes positivas, quantas estao corretas.", exemplo: "De 20 alertas de fraude, 15 eram fraude de verdade." },
  { termo: "Recall", categoria: "qualidade", explicacao: "Entre os casos realmente positivos, quantos foram detectados.", exemplo: "Detectou 15 de 20 fraudes reais." },
  { termo: "Probabilidade", categoria: "fundamentos", explicacao: "Medida de chance de um evento acontecer.", exemplo: "O modelo escolhe palavras com maior probabilidade no contexto." },
  { termo: "Prompt", categoria: "prompting", explicacao: "Instrucao enviada ao modelo para orientar a resposta.", exemplo: "Resuma este texto em 3 topicos." },
  { termo: "Prompt engineering", categoria: "prompting", explicacao: "Pratica de criar prompts claros, com contexto e formato.", exemplo: "Adicionar publico-alvo e restricoes para melhorar resultado." },
  { termo: "Zero-shot", categoria: "prompting", explicacao: "Pedido sem exemplos previos.", exemplo: "Classifique o sentimento desta frase." },
  { termo: "Few-shot", categoria: "prompting", explicacao: "Pedido com alguns exemplos para guiar o padrao.", exemplo: "Mostra 3 exemplos e pede mais 5 no mesmo estilo." },
  { termo: "Chain-of-Thought", categoria: "prompting", explicacao: "Tecnica para pedir raciocinio em etapas.", exemplo: "Resolva passo a passo antes da resposta final." },
  { termo: "CoVe", categoria: "qualidade", explicacao: "Chain-of-Verification: resposta inicial + verificacao + resposta revisada.", exemplo: "Checar fatos antes de concluir." },
  { termo: "Autorreflexao", categoria: "qualidade", explicacao: "Tecnica em que o modelo gera, critica e refina a propria resposta.", exemplo: "Versao 1, revisao critica e versao final melhorada." },
  { termo: "Temperatura", categoria: "modelagem", explicacao: "Parametro que controla variacao da resposta.", exemplo: "Temperatura baixa tende a resposta mais previsivel." },
  { termo: "Hallucinacao", categoria: "qualidade", explicacao: "Quando o modelo inventa informacao plausivel, mas incorreta.", exemplo: "Citar dado ou fonte que nao existe." },
  { termo: "Embedding", categoria: "modelagem", explicacao: "Representacao numerica de palavras ou frases para comparar significado.", exemplo: "Agrupar mensagens parecidas por similaridade vetorial." },
  { termo: "Fine-tuning", categoria: "modelagem", explicacao: "Ajuste adicional de um modelo em dominio especifico.", exemplo: "Treinar novamente para linguagem juridica ou medica." }
];

document.addEventListener("DOMContentLoaded", () => {
  const campoBusca = document.getElementById("buscaGlossario");
  const campoCategoria = document.getElementById("filtroCategoriaGlossario");
  const botaoLimpar = document.getElementById("botaoLimparBuscaGlossario");
  const contador = document.getElementById("contadorGlossario");
  const grade = document.getElementById("gradeGlossario");

  if (!campoBusca || !campoCategoria || !grade) {
    return;
  }

  const normalizarTexto = (texto) => String(texto).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const escaparHtml = (texto) => String(texto).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");

  function renderizar(lista) {
    if (contador) {
      contador.textContent = `${lista.length} termos`;
    }

    if (!lista.length) {
      grade.innerHTML = `<div class="col-12"><div class="alerta-vazio">Nenhum termo encontrado com esse filtro.</div></div>`;
      return;
    }

    grade.innerHTML = lista
      .map((item) => `
        <div class="col-12 col-md-6">
          <article class="card card-tecnica h-100">
            <div class="card-body">
              <div class="cabecalho-tecnica mb-2">
                <h3 class="h5 mb-0">${escaparHtml(item.termo)}</h3>
                <span class="etiqueta-categoria">${escaparHtml(item.categoria)}</span>
              </div>
              <p class="mb-2"><strong>Explicacao:</strong> ${escaparHtml(item.explicacao)}</p>
              <div class="caixa-saida-mais mt-2">
                <h4 class="h6 mb-2">Exemplo pratico</h4>
                <p class="mb-0">${escaparHtml(item.exemplo)}</p>
              </div>
            </div>
          </article>
        </div>
      `)
      .join("");
  }

  function aplicarFiltros() {
    const termo = normalizarTexto(campoBusca.value.trim());
    const categoria = campoCategoria.value;

    const filtrados = termosGlossario.filter((item) => {
      const categoriaOk = categoria === "todas" || item.categoria === categoria;
      if (!categoriaOk) return false;
      if (!termo) return true;

      const base = normalizarTexto(`${item.termo} ${item.explicacao} ${item.exemplo} ${item.categoria}`);
      return base.includes(termo);
    });

    renderizar(filtrados);
  }

  campoBusca.addEventListener("input", aplicarFiltros);
  campoCategoria.addEventListener("change", aplicarFiltros);

  if (botaoLimpar) {
    botaoLimpar.addEventListener("click", () => {
      campoBusca.value = "";
      campoCategoria.value = "todas";
      aplicarFiltros();
    });
  }

  renderizar(termosGlossario);
});
