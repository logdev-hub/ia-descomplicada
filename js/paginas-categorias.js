document.addEventListener("DOMContentLoaded", () => {
  const categoriaAtual = document.body.getAttribute("data-categoria");
  const dados = Array.isArray(window.dadosPrompting) ? window.dadosPrompting : [];

  const configuracaoCategorias = {
    bases: {
      titulo: "Bases e Estrutura de Prompt",
      descricao: "Fundamentos para criar instrucoes claras, com contexto, persona e estrutura consistente.",
      campos: ["Educacao", "Atendimento", "Comunicacao institucional", "Treinamento interno"]
    },
    shots: {
      titulo: "Tecnicas por Shots",
      descricao: "Modelos com zero, um ou varios exemplos para controlar padrao e formato da resposta.",
      campos: ["Classificacao de textos", "Padronizacao de respostas", "Criacao de conteudo", "Extracao de dados"]
    },
    raciocinio: {
      titulo: "Raciocinio e Encadeamento",
      descricao: "Abordagens para resolver problemas em etapas, com planejamento e comparacao de caminhos.",
      campos: ["Resolucao de problemas", "Planejamento de projetos", "Decisao estrategica", "Agentes com ferramentas"]
    },
    controle: {
      titulo: "Niveis de Controle da Saida",
      descricao: "Ajustes de complexidade, tom, sentimento, foco e estilo para diferentes publicos.",
      campos: ["Conteudo didatico", "Redacao profissional", "Comunicacao com publico diverso", "Textos criativos"]
    },
    qualidade: {
      titulo: "Verificacao e Refinamento",
      descricao: "Tecnicas para reduzir alucinacoes, melhorar confiabilidade e iterar ate uma versao melhor.",
      campos: ["Verificacao de fatos", "Analise critica", "Conteudo sensivel", "Aprimoramento iterativo"]
    },
    interacao: {
      titulo: "Interacao e Metaprompts",
      descricao: "Prompting colaborativo para construir instrucoes melhores com perguntas e otimizacao automatica.",
      campos: ["Briefing guiado", "Refino colaborativo", "Otimização de prompt", "Produtividade em equipe"]
    }
  };

  const informacoes = configuracaoCategorias[categoriaAtual];
  const elementoTitulo = document.getElementById("tituloCategoria");
  const elementoDescricao = document.getElementById("descricaoCategoria");
  const elementoCampos = document.getElementById("listaCamposCategoria");
  const elementoContador = document.getElementById("contadorPromptsCategoria");
  const elementoGrade = document.getElementById("gradeCategoria");
  const formularioAplicacao = document.getElementById("formularioAplicacaoCategoria");
  const campoObjetivoAplicacao = document.getElementById("campoObjetivoAplicacao");
  const campoPublicoAplicacao = document.getElementById("campoPublicoAplicacao");
  const campoContextoAplicacao = document.getElementById("campoContextoAplicacao");
  const campoFormatoAplicacao = document.getElementById("campoFormatoAplicacao");
  const saidaAplicacao = document.getElementById("saidaAplicacaoCategoria");
  const botaoCopiarAplicacao = document.getElementById("botaoCopiarAplicacaoCategoria");

  if (!informacoes || !elementoGrade) {
    return;
  }

  function escaparHtml(texto) {
    return String(texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  const listaFiltrada = dados.filter((item) => item.categoria === categoriaAtual);

  if (elementoTitulo) {
    elementoTitulo.textContent = informacoes.titulo;
  }
  if (elementoDescricao) {
    elementoDescricao.textContent = informacoes.descricao;
  }
  if (elementoContador) {
    elementoContador.textContent = `${listaFiltrada.length} tecnicas nesta categoria`;
  }
  if (elementoCampos) {
    elementoCampos.innerHTML = informacoes.campos
      .map((campo) => `<li>${campo}</li>`)
      .join("");
  }

  if (!listaFiltrada.length) {
    elementoGrade.innerHTML = `
      <div class="col-12">
        <div class="alerta-vazio">Nenhuma tecnica encontrada para esta categoria.</div>
      </div>
    `;
    return;
  }

  elementoGrade.innerHTML = listaFiltrada
    .map((tecnica) => {
      const exemplosHtml = tecnica.exemplos
        .slice(0, 2)
        .map((exemplo) => {
          const promptCodificado = encodeURIComponent(exemplo.prompt);
          return `
            <article class="item-exemplo">
              <h4>${escaparHtml(exemplo.titulo)}</h4>
              <pre class="codigo-prompt">${escaparHtml(exemplo.prompt)}</pre>
              <button type="button" class="btn btn-sm btn-outline-primary btn-copiar" data-texto="${promptCodificado}">Copiar prompt</button>
            </article>
          `;
        })
        .join("");

      return `
        <div class="col-12">
          <article class="card card-tecnica">
            <div class="card-body">
              <div class="cabecalho-tecnica mb-2">
                <h3 class="h5 mb-0">${escaparHtml(tecnica.nome)}</h3>
                <span class="etiqueta-categoria">${escaparHtml(categoriaAtual)}</span>
              </div>
              <p class="texto-explicacao-categoria"><strong>Explicacao objetiva:</strong> ${escaparHtml(tecnica.resumo)}</p>
              <p class="texto-explicacao-categoria"><strong>Quando usar:</strong> ${escaparHtml(tecnica.quandoUsar)}</p>
              <p class="texto-explicacao-categoria mb-3"><strong>Campos de aplicacao:</strong> ${escaparHtml(informacoes.campos.join(", "))}.</p>
              <div class="lista-exemplos">
                ${exemplosHtml}
              </div>
            </div>
          </article>
        </div>
      `;
    })
    .join("");

  function mostrarToastLocal(mensagem) {
    const elementoToast = document.getElementById("toastCopia");
    const elementoMensagem = document.getElementById("mensagemToast");
    if (!elementoToast || !elementoMensagem) {
      return;
    }
    elementoMensagem.textContent = mensagem;
    const toast = new bootstrap.Toast(elementoToast, { delay: 1800 });
    toast.show();
  }

  async function copiarTexto(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      mostrarToastLocal("Prompt copiado com sucesso.");
    } catch (erro) {
      mostrarToastLocal("Nao foi possivel copiar automaticamente.");
    }
  }

  if (formularioAplicacao && saidaAplicacao) {
    formularioAplicacao.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const objetivo = campoObjetivoAplicacao ? campoObjetivoAplicacao.value.trim() : "";
      const publico = campoPublicoAplicacao ? campoPublicoAplicacao.value.trim() : "";
      const contexto = campoContextoAplicacao ? campoContextoAplicacao.value.trim() : "";
      const formato = campoFormatoAplicacao ? campoFormatoAplicacao.value.trim() : "";

      if (!objetivo || !publico) {
        mostrarToastLocal("Preencha objetivo e publico para gerar o prompt.");
        return;
      }

      const linhas = [
        `Atue como especialista na categoria ${informacoes.titulo}.`,
        `Objetivo: ${objetivo}.`,
        `Publico-alvo: ${publico}.`,
        `Contexto: ${contexto || "nao informado"}.`,
        `Formato de saida: ${formato || "lista objetiva em topicos"}.`,
        `Use linguagem clara, aplicada e com foco em ${informacoes.campos.join(", ")}.`,
        "Se necessario, faca ate 3 perguntas de refinamento antes da resposta final."
      ];

      saidaAplicacao.value = linhas.join("\n");
      mostrarToastLocal("Prompt da categoria gerado.");
    });
  }

  if (botaoCopiarAplicacao && saidaAplicacao) {
    botaoCopiarAplicacao.addEventListener("click", () => {
      if (!saidaAplicacao.value.trim()) {
        mostrarToastLocal("Gere um prompt de aplicacao antes de copiar.");
        return;
      }
      copiarTexto(saidaAplicacao.value);
    });
  }
});
