document.addEventListener("DOMContentLoaded", () => {
  const categoriaAtual = document.body.getAttribute("data-categoria");
  const dados = Array.isArray(window.dadosPrompting) ? window.dadosPrompting : [];
  const obterExemplosDiaADia = window.obterExemplosDiaADia || ((tecnica) => tecnica.exemplos || []);
  const gerarFundamentacaoSimples = window.gerarFundamentacaoSimples || (() => "Fundamentacao nao disponivel.");
  const gerarDesafioRapido = window.gerarDesafioRapido || (() => "Desafio nao disponivel.");

  const configuracaoCategorias = {
    bases: {
      titulo: "Bases e Estrutura de Prompt",
      descricao: "Fundamentos para criar instrucoes claras, com contexto, persona e estrutura consistente.",
      campos: ["Organizacao pessoal", "Atendimento ao cliente", "Comunicacao do dia a dia", "Planejamento de rotina"],
      analogiaGeral: "Pense como montar uma lista de compras: quando faltam detalhes, o resultado sai incompleto.",
      desafioPagina: "Desafio da pagina: pegue um pedido vago do seu dia a dia e refaca com objetivo, contexto, publico e formato."
    },
    shots: {
      titulo: "Tecnicas por Shots",
      descricao: "Modelos com zero, um ou varios exemplos para controlar padrao e formato da resposta.",
      campos: ["Mensagens", "Listas", "Classificacao de textos", "Padronizacao de conteudos"],
      analogiaGeral: "E como ensinar por exemplo: um modelo mostra o caminho, varios modelos reduzem interpretacoes erradas.",
      desafioPagina: "Desafio da pagina: monte um one-shot e um few-shot para a mesma tarefa e compare a consistencia da saida."
    },
    raciocinio: {
      titulo: "Raciocinio e Encadeamento",
      descricao: "Abordagens para resolver problemas em etapas, com planejamento e comparacao de caminhos.",
      campos: ["Decisoes pessoais", "Planejamento de viagem", "Organizacao financeira", "Resolucao de problemas"],
      analogiaGeral: "E igual resolver um problema de transito: voce compara rotas antes de escolher a melhor.",
      desafioPagina: "Desafio da pagina: escolha uma decisao real e descreva o raciocinio passo a passo antes da conclusao."
    },
    controle: {
      titulo: "Niveis de Controle da Saida",
      descricao: "Ajustes de complexidade, tom, sentimento, foco e estilo para diferentes publicos.",
      campos: ["Textos formais", "Mensagens casuais", "Resumo e detalhamento", "Comunicao adaptada"],
      analogiaGeral: "Pense num controle de volume: a mensagem e a mesma, mas a intensidade muda conforme o contexto.",
      desafioPagina: "Desafio da pagina: escreva o mesmo tema em dois tons diferentes e analise o impacto no leitor."
    },
    qualidade: {
      titulo: "Verificacao e Refinamento",
      descricao: "Tecnicas para reduzir alucinacoes, melhorar confiabilidade e iterar ate uma versao melhor.",
      campos: ["Checagem de informacoes", "Revisao critica", "Textos sensiveis", "Aprimoramento continuo"],
      analogiaGeral: "E como revisar um contrato: voce nao confia na primeira versao sem checar pontos criticos.",
      desafioPagina: "Desafio da pagina: escolha uma resposta longa e aplique verificacao em 3 perguntas de auditoria."
    },
    interacao: {
      titulo: "Interacao e Metaprompts",
      descricao: "Prompting colaborativo para construir instrucoes melhores com perguntas e otimizacao automatica.",
      campos: ["Briefing guiado", "Coleta de dados do usuario", "Refino colaborativo", "Otimização de prompt"],
      analogiaGeral: "Funciona como uma entrevista bem feita: primeiro voce coleta dados, depois entrega a solucao.",
      desafioPagina: "Desafio da pagina: construa um prompt que faca perguntas numeradas antes de gerar a resposta final."
    }
  };

  const informacoes = configuracaoCategorias[categoriaAtual];
  const elementoTitulo = document.getElementById("tituloCategoria");
  const elementoDescricao = document.getElementById("descricaoCategoria");
  const elementoCampos = document.getElementById("listaCamposCategoria");
  const elementoContador = document.getElementById("contadorPromptsCategoria");
  const elementoGrade = document.getElementById("gradeCategoria");
  const elementoFundamentacao = document.getElementById("fundamentacaoCategoria");
  const elementoDesafioPagina = document.getElementById("desafioCategoriaPagina");

  const formularioAplicacao = document.getElementById("formularioAplicacaoCategoria");
  const campoObjetivoAplicacao = document.getElementById("campoObjetivoAplicacao");
  const campoPublicoAplicacao = document.getElementById("campoPublicoAplicacao");
  const campoContextoAplicacao = document.getElementById("campoContextoAplicacao");
  const campoFormatoAplicacao = document.getElementById("campoFormatoAplicacao");
  const saidaAplicacao = document.getElementById("saidaAplicacaoCategoria");
  const botaoCopiarAplicacao = document.getElementById("botaoCopiarAplicacaoCategoria");
  const saidaMaisAplicacao = document.getElementById("saidaMaisAplicacaoCategoria");

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
    elementoCampos.innerHTML = informacoes.campos.map((campo) => `<li>${escaparHtml(campo)}</li>`).join("");
  }
  if (elementoFundamentacao) {
    elementoFundamentacao.innerHTML = `
      <p class="mb-2"><strong>Fundamentacao da categoria:</strong> ${escaparHtml(informacoes.analogiaGeral)}</p>
      <p class="mb-0">Objetivo didatico: transformar tecnicas em praticas aplicaveis, com linguagem simples e foco em situacoes reais do cotidiano.</p>
    `;
  }
  if (elementoDesafioPagina) {
    elementoDesafioPagina.textContent = informacoes.desafioPagina;
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
      const exemplosCotidianos = obterExemplosDiaADia(tecnica).slice(0, 2);
      const exemplosHtml = exemplosCotidianos
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
              <p class="texto-explicacao-categoria"><strong>Fundamentacao simples:</strong> ${escaparHtml(gerarFundamentacaoSimples(tecnica))}</p>
              <p class="texto-explicacao-categoria"><strong>Analogia:</strong> ${escaparHtml(tecnica.analogia)}</p>
              <p class="texto-explicacao-categoria"><strong>Quando usar:</strong> ${escaparHtml(tecnica.quandoUsar)}</p>
              <p class="texto-explicacao-categoria mb-3"><strong>Campos de aplicacao:</strong> ${escaparHtml(informacoes.campos.join(", "))}.</p>
              <div class="lista-exemplos">${exemplosHtml}</div>
              <div class="caixa-saida-mais mt-3">
                <h4 class="h6 mb-2">Desafio rapido da tecnica</h4>
                <p class="mb-0">${escaparHtml(gerarDesafioRapido(tecnica))}</p>
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
        `Campos prioritarios de aplicacao: ${informacoes.campos.join(", ")}.`,
        "Se necessario, faca ate 3 perguntas de refinamento antes da resposta final.",
        "Finalize com um bloco de orientacoes praticas para aplicacao imediata."
      ];

      saidaAplicacao.value = linhas.join("\n");
      if (saidaMaisAplicacao) {
        saidaMaisAplicacao.innerHTML = `
          <h3 class="h6 mb-2">Saida+ | Informacoes complementares</h3>
          <p class="mb-2"><strong>Checklist:</strong> confirme que o prompt inclui contexto real, publico e formato de resposta.</p>
          <p class="mb-0">Teste recomendado: execute 2 vezes com pequenas variacoes para validar consistencia.</p>
        `;
      }
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

  document.addEventListener("click", (evento) => {
    const botao = evento.target.closest(".btn-copiar");
    if (!botao) return;
    const textoCodificado = botao.getAttribute("data-texto");
    if (!textoCodificado) return;
    copiarTexto(decodeURIComponent(textoCodificado));
  });
});
