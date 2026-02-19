
document.addEventListener("DOMContentLoaded", () => {
  const dadosBrutos = [
    ["prompt-basico", "Prompt basico", "bases", "Comece com instrucao simples antes de sofisticar o pedido.", "Como testar microfone antes da apresentacao.", "Inicio de tema novo", [["Resumo", "Resuma o texto em 3 frases simples para iniciantes em IA."], ["Lista", "Liste 5 aplicacoes praticas de IA para secretaria escolar."]]],
    ["instrucoes-claras", "Instrucoes claras", "bases", "Define formato, tamanho e objetivo da resposta.", "Pedido completo no restaurante reduz erro.", "Quando respostas ficam vagas", [["Topicos", "Explique machine learning em 4 topicos, com no maximo 12 palavras por topico."], ["Analogia", "Explique IA com analogia de cozinha, sem termos tecnicos."]]],
    ["uso-contexto", "Uso de contexto", "bases", "Inclui cenario e publico para reduzir resposta generica.", "Endereco completo para entrega.", "Quando falta aderencia ao caso real", [["Turma", "Contexto: turma de ensino medio iniciante. Crie dinamica de 15 minutos para apresentar IA."], ["Oficina", "Contexto: oficina Senac de 4 horas. Gere sequencia de atividades crescente."]]],
    ["persona", "Definicao de persona", "bases", "Atribui papel para guiar tom e profundidade.", "Escolher especialista certo para conversar.", "Quando precisa adaptar linguagem", [["Educador", "Voce e educador de computacao para adolescentes. Explique algoritmo com exemplos escolares."], ["RH", "Voce e analista de RH. Crie mini plano de formacao em IA para equipe administrativa."]]],
    ["segunda-pessoa", "Tecnica da segunda pessoa", "bases", "Transforma perfil em comando 'Voce agora e'.", "Converter curriculo em instrucao de trabalho.", "Criacao rapida de persona", [["Reescrita", "Descreva perfil de tutor de IA e reescreva em segunda pessoa comecando com 'Voce agora e...'."], ["Operacional", "Converta a descricao em prompt operacional de atendimento ao aluno, em segunda pessoa."]]],
    ["delimitadores", "Uso de delimitadores", "bases", "Separa contexto, dados e tarefa com tags.", "Etiquetas em caixas de mudanca.", "Quando ha textos longos", [["Comparacao", "<texto1>Explique IA tecnicamente.</texto1><texto2>Explique IA para leigos.</texto2>Tarefa: gere versao equilibrada."], ["Estrutura", "<contexto>Oficina com 30 participantes.</contexto><tarefa>Crie atividade de 20 minutos.</tarefa><formato>Lista.</formato>"]]],
    ["forneca-exemplos", "Forneca exemplos", "bases", "Mostra padrao esperado para replicacao.", "Modelo preenchido antes de novo formulario.", "Quando precisa consistencia", [["Email", "Use o e-mail em <exemplo> como referencia e escreva novo e-mail formal de atraso."], ["Classificacao", "Exemplo: 'Entrega atrasou e fiquei frustrado' -> Negativo. Agora classifique: 'A aula foi util, mas cansativa'."]]],
    ["prompt-depurador", "Prompt depurador", "bases", "Lista acoes que a IA executaria sem executar o pedido.", "Checklist antes de executar projeto.", "Teste e refinamento", [["Acoes", "Liste o que um assistente faria ao executar o prompt delimitado. Nao execute, apenas descreva as acoes."], ["Ambiguidades", "Analise o prompt 'Explique IA para minha turma' e aponte lacunas e melhorias."]]],
    ["zero-shot", "Zero-shot prompting", "shots", "Executa tarefa sem exemplos previos.", "Pergunta direta sem demonstracao.", "Tarefas simples", [["Sentimento", "Classifique o sentimento: 'As ferias foram ok'."], ["Conceito", "Explique o que e IA para um publico de 12 anos."]]],
    ["one-shot", "One-shot prompting", "shots", "Usa um exemplo para ensinar o formato.", "Aprender por imitacao unica.", "Leve ambiguidade de estilo", [["Espelho", "Exemplo: 'O que e IA?' -> 'Tecnologia que aprende com dados.' Agora explique machine learning no mesmo formato."], ["Padrao", "Exemplo de saida: Tema + Resumo. Aplique ao tema 'Uso responsavel da IA'."]]],
    ["few-shot", "Few-shot prompting", "shots", "Usa dois ou mais exemplos para reforcar padrao.", "Treino com varios casos.", "Tarefa com formato especifico", [["Titulos", "Exemplos de titulos de aula de IA... Agora crie 5 novos no mesmo estilo."], ["Extracao", "Com base em 2 exemplos Nome|Idade|Cidade, extraia da frase: 'Marcos, 31 anos, Gravatai'."]]],
    ["cot", "Chain-of-Thought (CoT)", "raciocinio", "Pede raciocinio por etapas.", "Mostrar conta no caderno.", "Problemas logicos e planejamento", [["Matematica", "Resolva passo a passo: Roger tem 5 bolas e compra 2 latas com 3 cada. Total?"], ["Planejamento", "Explique passo a passo como organizar oficina de IA de 4 horas."]]],
    ["zero-shot-cot", "Zero-shot CoT", "raciocinio", "CoT sem exemplos previos, apenas com instrucao de etapa.", "Pedir para explicar como pensou.", "Tarefa nova sem exemplos", [["Estoque", "Explique como otimizar estoque em escola tecnica. Pense passo a passo."], ["Ferramenta", "Qual ferramenta de IA usar para plano de aula? Raciocine passo a passo e recomende."]]],
    ["self-consistency", "Self-Consistency", "raciocinio", "Gera varios raciocinios e escolhe o mais consistente.", "Conferir conta por metodos diferentes.", "Incerteza e calculo", [["Tres caminhos", "Gere 3 raciocinios para estimar custo da oficina e escolha o mais consistente."], ["Consenso", "Resolva por 3 abordagens e apresente resposta final por consenso."]]],
    ["least-to-most", "Least-to-Most", "raciocinio", "Quebra problema do simples ao complexo.", "Aprender letra, palavra e texto.", "Projeto longo", [["Etapas", "Divida implantacao de IA em: diagnostico, piloto, expansao e acompanhamento."], ["Chatbot", "Resolva em ordem: objetivo, FAQ, fluxos e metricas de chatbot."]]],
    ["prompt-chaining", "Prompt chaining", "raciocinio", "Encadeia saida de uma etapa na entrada da outra.", "Linha de producao.", "Fluxo analise-sintese", [["Diagnostico+plano", "Etapa 1: diagnostico de medos sobre IA. Etapa 2: plano de aula baseado nisso."], ["Erros+reescrita", "Etapa 1: analise erros do prompt. Etapa 2: checklist. Etapa 3: reescreva prompt final."]]],
    ["tot", "Tree-of-Thoughts (ToT)", "raciocinio", "Explora caminhos, compara e poda opcoes.", "Arvore de decisao.", "Escolha estrategica", [["Divulgacao", "Crie 3 caminhos de divulgacao para oficina de IA, compare pros/contras e escolha."], ["Projeto final", "Explore 3 ideias de projeto final, estime esforco e impacto, e recomende."]]],
    ["react", "ReAct", "raciocinio", "Alterna pensar, agir, observar e ajustar.", "Ciclo curto de melhoria.", "Agentes com ferramentas", [["Pesquisa", "Use ciclo Pensar->Agir->Observar->Ajustar para levantar 5 tendencias de IA na educacao tecnica."], ["Recursos", "Use ReAct para identificar recursos de aprendizagem, comparar qualidade e montar recomendacao final."]]],
    ["prompt-interativo", "Prompt interativo", "interacao", "A IA faz perguntas para refinar o prompt final.", "Cocriacao de briefing em conversa.", "Objetivo ainda incompleto", [["Criador", "Voce sera meu criador pessoal de prompts: revisar, sugerir, perguntar e entregar versao final."], ["Campanha", "Faca ate 8 perguntas numeradas para melhorar meu prompt de plano de marketing da oficina."]]],
    ["generated-knowledge", "Generated knowledge", "qualidade", "Gera fatos antes da tarefa principal.", "Estudar notas antes da redacao.", "Tema exige base previa", [["Arduino", "Liste 5 fatos sobre Arduino e depois crie tutorial basico de 30 minutos."], ["Glossario", "Crie glossario de 8 termos de IA e depois um plano de aula introdutorio."]]],
    ["self-refine", "Self-refine", "qualidade", "Gera versao inicial, critica e melhora.", "Rascunho, revisao e versao final.", "Elevar qualidade de saida", [["Plano", "Escreva plano de aula de IA, critique a propria resposta e entregue versao revisada."], ["Etica", "Escreva texto sobre etica em IA (v1), faca autoavaliacao em 5 criterios e gere v2."]]],
    ["ape", "Automatic Prompt Engineer", "interacao", "Cria e compara variacoes de prompts para otimizar resultado.", "Teste A/B de prompts.", "Quando busca prompt mais eficiente", [["Variacoes", "Crie 5 variacoes de prompt para explicar IA a iniciantes, avalie e indique o melhor."], ["Melhor prompt", "Gere o melhor prompt para ensinar engenharia de prompts e apresente versao alternativa."]]],
    ["cove", "Chain-of-Verification (CoVe)", "qualidade", "Resposta inicial + perguntas de verificacao + resposta revisada.", "Responder, checar e publicar.", "Precisao factual critica", [["Data", "Responda: Em que data Ayrton Senna faleceu? Depois verifique com perguntas internas e reformule resposta final."], ["Energia", "Analise impacto de trocar fosseis por renovaveis ate 2050 com etapa de verificacao e conclusao revisada."]]],
    ["kd-cot", "KD-CoT", "qualidade", "Combina raciocinio por etapas com conhecimento previo estruturado.", "Roteiro + manual tecnico.", "Tema complexo com base conceitual", [["Segmentacao", "Com base em <problema>, confirme entendimento, quebre em subquestoes e conclua. <problema>Segmentacao de publico para oficina de IA.</problema>"], ["Conceito", "Ensine relatividade via KD-CoT: decomposicao, explicacao progressiva, verificacao e sintese final."]]],
    ["autorreflexao", "Autorreflexao", "qualidade", "Alterna perfis de criacao e critica em ciclos.", "Criativo e revisor trabalhando juntos.", "Reducao de alucinacao", [["Dois perfis", "<idealista>Crie proposta para engajar jovens em oficina de IA.</idealista><critico>Avalie e sugira melhorias.</critico> Gere versao aprimorada."], ["Loop", "Execute 5 ciclos: Idealista propoe, Critico revisa, Idealista atualiza. Mostre so a versao final."]]],
    ["controle-complexidade", "Controle de complexidade", "controle", "Ajusta profundidade para publico leigo ou tecnico.", "Regular volume conforme publico.", "Mesmo tema para publicos diferentes", [["Baixo", "Explique fotossintese para criancas de 10 anos. Complexidade 2 (1-10)."], ["Alto", "Escreva analise detalhada da fotossintese. Complexidade 9 (1-10)."]]],
    ["controle-entonacao", "Controle de entonacao", "controle", "Define tom da resposta de casual a formal.", "Roupa certa para cada ocasiao.", "Mudanca de tom por publico", [["Formal", "Escreva e-mail solicitando reuniao com direcao. Entonacao 9 (1 casual, 10 formal)."], ["Casual", "Escreva convite para encontro de estudo sobre IA. Entonacao 2 (1 casual, 10 formal)."]]],
    ["controle-sentimento", "Controle de sentimento", "controle", "Ajusta carga emocional da mensagem.", "Regular temperatura emocional.", "Apoio, feedback e temas sensiveis", [["Positivo", "Escreva mensagem de encorajamento para colega em dificuldade. Sentimento 9 (1-10)."], ["Neutro", "Redija feedback construtivo sobre projeto que precisa melhorar. Sentimento 4 (1-10)."]]],
    ["controle-perspectiva", "Controle de perspectiva", "controle", "Escolhe 1a, 2a ou 3a pessoa na narrativa.", "Trocar camera de filmagem.", "Historias, guias e relatorios", [["Primeira", "Escreva relato de viagem ao Japao. Perspectiva 1 (1 primeira, 2 segunda, 3 terceira)."], ["Segunda", "Escreva guia para montar computador. Perspectiva 2 (1 primeira, 2 segunda, 3 terceira)."]]],
    ["controle-foco-topico", "Foco no topico", "controle", "Define o quanto a resposta se mantem no tema central.", "Ajustar zoom.", "Evitar desvio de assunto", [["Foco alto", "Escreva artigo sobre poluicao do ar e saude. Foco 9 (1 amplo, 10 restrito)."], ["Foco medio", "Escreva post sobre jardinagem urbana. Foco 6 (1 amplo, 10 restrito)."]]],
    ["nivel-surpresa", "Nivel de surpresa", "controle", "Controla previsibilidade e reviravoltas.", "Filme linear ou com plot twist.", "Narrativa criativa ou instrucional", [["Alto", "Escreva conto de suspense com reviravoltas. Surpresa 9 (1 previsivel, 10 surpreendente)."], ["Baixo", "Escreva manual para montar movel. Surpresa 1 (1 previsivel, 10 surpreendente)."]]],
    ["nivel-detalhe", "Nivel de detalhe", "controle", "Regula profundidade descritiva da resposta.", "Mapa simplificado vs mapa completo.", "Resumo executivo ou descricao rica", [["Detalhado", "Descreva jantar elegante em restaurante luxuoso. Detalhe 9 (1-10)."], ["Sintetico", "Escreva resumo executivo de resultados trimestrais. Detalhe 2 (1-10)."]]],
    ["controle-originalidade", "Controle de originalidade", "controle", "Ajusta inovacao versus convencionalidade.", "Receita classica ou prato autoral.", "Slogan criativo ou texto tecnico", [["Alta", "Crie slogan para nova oficina de IA. Originalidade 9 (1 convencional, 10 inovador)."], ["Baixa", "Escreva relatorio tecnico de eficiencia energetica. Originalidade 2 (1 convencional, 10 inovador)."]]],
    ["nivel-abstracao", "Nivel de abstracao", "controle", "Controla se texto sera teorico ou pratico.", "Teoria geral ou instrucao de execucao.", "Alternar entre conceitual e concreto", [["Abstrato", "Desenvolva teoria filosofica sobre consciencia. Abstracao 9 (1 concreto, 10 abstrato)."], ["Concreto", "Escreva guia pratico para plantar ervas em casa. Abstracao 2 (1 concreto, 10 abstrato)."]]]
  ];

  const tecnicasPrompting = dadosBrutos.map((item) => ({
    id: item[0],
    nome: item[1],
    categoria: item[2],
    resumo: item[3],
    analogia: item[4],
    quandoUsar: item[5],
    exemplos: item[6].map((exemplo) => ({ titulo: exemplo[0], prompt: exemplo[1] }))
  }));
  window.dadosPrompting = tecnicasPrompting;

  const rotulosCategoria = {
    bases: "Bases e estrutura",
    shots: "Tecnicas por shots",
    raciocinio: "Raciocinio e encadeamento",
    controle: "Niveis de controle",
    qualidade: "Verificacao e refinamento",
    interacao: "Interacao e metaprompts"
  };

  const elementoGrade = document.getElementById("gradeTecnicas");
  const elementoBusca = document.getElementById("filtroBusca");
  const elementoCategoria = document.getElementById("filtroCategoria");
  const elementoTotal = document.getElementById("totalTecnicas");
  const botaoLimparFiltros = document.getElementById("botaoLimparFiltros");
  const elementoToast = document.getElementById("toastCopia");
  const mensagemToast = document.getElementById("mensagemToast");
  const instanciaToast = elementoToast ? new bootstrap.Toast(elementoToast, { delay: 1800 }) : null;

  const normalizarTexto = (texto) => texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  function escaparHtml(texto) {
    return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function mostrarToast(mensagem) {
    if (!mensagemToast || !instanciaToast) return;
    mensagemToast.textContent = mensagem;
    instanciaToast.show();
  }

  async function copiarTexto(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      mostrarToast("Prompt copiado com sucesso.");
    } catch (erro) {
      const area = document.createElement("textarea");
      area.value = texto;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
      mostrarToast("Prompt copiado (modo compativel).");
    }
  }

  function montarHtmlExemplos(exemplos, idTecnica) {
    return exemplos.map((exemplo) => {
      const textoCodificado = encodeURIComponent(exemplo.prompt);
      return `
        <article class="item-exemplo">
          <h4>${escaparHtml(exemplo.titulo)}</h4>
          <pre class="codigo-prompt">${escaparHtml(exemplo.prompt)}</pre>
          <button type="button" class="btn btn-sm btn-outline-primary btn-copiar" data-texto="${textoCodificado}" data-origem="${idTecnica}">Copiar prompt</button>
        </article>
      `;
    }).join("");
  }

  function atualizarContador(totalFiltrado) {
    if (!elementoTotal) return;
    elementoTotal.textContent = `${totalFiltrado} de ${tecnicasPrompting.length} tecnicas`;
  }

  function renderizarTecnicas(lista) {
    if (!elementoGrade) return;
    atualizarContador(lista.length);

    if (!lista.length) {
      elementoGrade.innerHTML = `<div class="col-12"><div class="alerta-vazio">Nenhuma tecnica encontrada. Ajuste os filtros.</div></div>`;
      return;
    }

    elementoGrade.innerHTML = lista.map((tecnica) => `
      <div class="col-12 col-xl-6">
        <article class="card card-tecnica">
          <div class="card-body">
            <div class="cabecalho-tecnica mb-2">
              <h3 class="h5 mb-0">${escaparHtml(tecnica.nome)}</h3>
              <span class="etiqueta-categoria">${escaparHtml(rotulosCategoria[tecnica.categoria] || tecnica.categoria)}</span>
            </div>
            <div class="bloco-explicacao">
              <p><strong>Conceito:</strong> ${escaparHtml(tecnica.resumo)}</p>
              <p><strong>Analogia:</strong> ${escaparHtml(tecnica.analogia)}</p>
              <p class="mb-0"><strong>Quando usar:</strong> ${escaparHtml(tecnica.quandoUsar)}</p>
            </div>
            <div class="lista-exemplos">${montarHtmlExemplos(tecnica.exemplos, tecnica.id)}</div>
          </div>
        </article>
      </div>
    `).join("");
  }

  function aplicarFiltros() {
    const termo = normalizarTexto(elementoBusca ? elementoBusca.value.trim() : "");
    const categoria = elementoCategoria ? elementoCategoria.value : "todas";

    const filtradas = tecnicasPrompting.filter((tecnica) => {
      const categoriaOk = categoria === "todas" || tecnica.categoria === categoria;
      if (!categoriaOk) return false;
      if (!termo) return true;

      const busca = normalizarTexto(`${tecnica.nome} ${tecnica.resumo} ${tecnica.analogia} ${tecnica.quandoUsar} ${tecnica.exemplos.map((x) => x.titulo).join(" ")}`);
      return busca.includes(termo);
    });

    renderizarTecnicas(filtradas);
  }

  function restaurarChecklist() {
    const itens = Array.from(document.querySelectorAll(".lista-checklist input[type='checkbox']"));
    if (!itens.length) return;
    const chave = "ia_descomplicada_checklist";
    const salvo = JSON.parse(localStorage.getItem(chave) || "{}");

    itens.forEach((item) => {
      item.checked = Boolean(salvo[item.id]);
      item.addEventListener("change", () => {
        const novo = Object.fromEntries(itens.map((x) => [x.id, x.checked]));
        localStorage.setItem(chave, JSON.stringify(novo));
      });
    });
  }

  function configurarGerador() {
    const formulario = document.getElementById("formularioGerador");
    const saida = document.getElementById("saidaPrompt");
    if (!formulario || !saida) return;

    const campoObjetivo = document.getElementById("campoObjetivo");
    const campoPublico = document.getElementById("campoPublico");
    const campoContexto = document.getElementById("campoContexto");
    const campoFormato = document.getElementById("campoFormato");
    const campoTom = document.getElementById("campoTom");
    const campoRestricoes = document.getElementById("campoRestricoes");
    const campoTecnica = document.getElementById("campoTecnica");

    const botaoExemplo = document.getElementById("botaoExemploGerador");
    const botaoCopiar = document.getElementById("botaoCopiarPromptGerado");
    const botaoLimpar = document.getElementById("botaoLimparPromptGerado");

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const objetivo = campoObjetivo.value.trim();
      const publico = campoPublico.value.trim();
      if (!objetivo || !publico) {
        mostrarToast("Preencha objetivo e publico-alvo.");
        return;
      }

      const linhas = [
        "Atue como especialista em educacao e IA aplicada.",
        `Objetivo principal: ${objetivo}.`,
        `Publico-alvo: ${publico}.`
      ];

      if (campoContexto.value.trim()) linhas.push(`Contexto adicional: ${campoContexto.value.trim()}.`);
      if (campoFormato.value.trim()) linhas.push(`Formato de saida obrigatorio: ${campoFormato.value.trim()}.`);
      if (campoTom.value.trim()) linhas.push(`Tom e estilo: ${campoTom.value.trim()}.`);
      if (campoRestricoes.value.trim()) linhas.push(`Restricoes: ${campoRestricoes.value.trim()}.`);
      if (campoTecnica.value && campoTecnica.value !== "Nenhuma") linhas.push(`Tecnica sugerida: ${campoTecnica.value}.`);

      linhas.push("Se faltar informacao para executar bem, faca ate 3 perguntas objetivas antes da resposta final.");
      linhas.push("Ao final, inclua checagem breve de qualidade e limites.");
      saida.value = linhas.join("\n");
      mostrarToast("Prompt gerado.");
    });

    if (botaoExemplo) {
      botaoExemplo.addEventListener("click", () => {
        campoObjetivo.value = "Criar atividade pratica para apresentar IA de forma leve";
        campoPublico.value = "Alunos iniciantes da educacao profissional";
        campoContexto.value = "Oficina de 4 horas em grupos de 5 pessoas";
        campoFormato.value = "3 etapas com tempo e resultado esperado";
        campoTom.value = "didatico e objetivo";
        campoRestricoes.value = "sem jargoes; pt-br; maximo 350 palavras";
        campoTecnica.value = "Few-shot";
        mostrarToast("Exemplo preenchido.");
      });
    }

    if (botaoCopiar) {
      botaoCopiar.addEventListener("click", () => {
        if (!saida.value.trim()) {
          mostrarToast("Gere um prompt antes de copiar.");
          return;
        }
        copiarTexto(saida.value);
      });
    }

    if (botaoLimpar) {
      botaoLimpar.addEventListener("click", () => {
        formulario.reset();
        saida.value = "";
      });
    }
  }

  function analisarPromptDebug(textoPrompt) {
    const textoNormalizado = normalizarTexto(textoPrompt);
    const verificacoes = [
      {
        id: "acao",
        titulo: "Acao principal",
        dica: "Use um verbo claro (ex.: explique, liste, compare, crie).",
        ok: /(crie|explique|liste|resuma|analise|elabore|compare|gere|redija|planeje|descreva)/i.test(textoPrompt)
      },
      {
        id: "contexto",
        titulo: "Contexto",
        dica: "Informe cenario, objetivo do projeto ou ambiente de uso.",
        ok: /(contexto|cenario|situacao|oficina|projeto|empresa|turma|aula)/i.test(textoNormalizado)
      },
      {
        id: "publico",
        titulo: "Publico-alvo",
        dica: "Defina para quem a resposta sera preparada.",
        ok: /(publico|aluno|cliente|gestor|usuario|equipe|turma|iniciante|adolescente|crianca)/i.test(textoNormalizado)
      },
      {
        id: "formato",
        titulo: "Formato de saida",
        dica: "Especifique estrutura de resposta (lista, tabela, json, passos).",
        ok: /(formato|lista|tabela|json|topico|passo|paragrafo|checklist|estrutura)/i.test(textoNormalizado)
      },
      {
        id: "restricoes",
        titulo: "Restricoes",
        dica: "Inclua limites como tamanho maximo, linguagem e itens proibidos.",
        ok: /(restri|maximo|minimo|limite|evite|nao use|nao incluir|sem )/i.test(textoNormalizado)
      },
      {
        id: "metatags",
        titulo: "Metatags",
        dica: "Use tags para separar dados (ex.: <objetivo>, <contexto>).",
        ok: /<\s*[a-zA-Z_][a-zA-Z0-9_\-]*\s*>/.test(textoPrompt)
      },
      {
        id: "validacao",
        titulo: "Validacao",
        dica: "Peça verificacao de fatos e declaracao de limitacoes.",
        ok: /(verifique|valide|checagem|confirme|fontes|limitacoes|criterios de qualidade)/i.test(textoNormalizado)
      }
    ];

    const totalOk = verificacoes.filter((item) => item.ok).length;
    return {
      verificacoes,
      totalOk,
      total: verificacoes.length
    };
  }

  function gerarPromptDepurado(textoOriginal, diagnostico) {
    const itensPendentes = diagnostico.verificacoes
      .filter((item) => !item.ok)
      .map((item) => item.titulo);

    const blocoPendencias = itensPendentes.length
      ? itensPendentes.join(", ")
      : "Nenhum item critico pendente.";

    return [
      "Atue como Especialista em Depuracao de Prompts e Engenharia de Prompting.",
      "Objetivo: entregar resposta precisa, aplicavel e validada para o contexto.",
      "",
      "<metadados_usuario>",
      "<objetivo>[preencher objetivo especifico]</objetivo>",
      "<publico_alvo>[preencher publico-alvo]</publico_alvo>",
      "<contexto>[preencher contexto de uso]</contexto>",
      "<dados_disponiveis>[incluir dados, fatos e restricoes reais]</dados_disponiveis>",
      "<formato_saida>[definir formato esperado]</formato_saida>",
      "<restricoes>[limites de linguagem, tamanho e escopo]</restricoes>",
      "<criterios_qualidade>[clareza, precisao, aplicabilidade, verificacao]</criterios_qualidade>",
      "</metadados_usuario>",
      "",
      "<solicitacao_original>",
      textoOriginal,
      "</solicitacao_original>",
      "",
      "<itens_para_refino>",
      blocoPendencias,
      "</itens_para_refino>",
      "",
      "Fluxo obrigatorio:",
      "1) Analise as metatags e identifique lacunas.",
      "2) Se houver campo vazio, faca ate 5 perguntas numeradas para captar dados faltantes.",
      "3) Reconfirme entendimento em lista curta antes da resposta final.",
      "4) Gere a resposta final no formato solicitado.",
      "5) Inclua checagem final: fatos criticos, limitacoes e proximos passos."
    ].join("\n");
  }

  function configurarDebugPrompts() {
    const entrada = document.getElementById("entradaPromptDebug");
    const botaoAnalisar = document.getElementById("botaoAnalisarPromptDebug");
    const botaoExemplo = document.getElementById("botaoExemploPromptDebug");
    const saidaDiagnostico = document.getElementById("saidaDiagnosticoPromptDebug");
    const saidaDepurada = document.getElementById("saidaPromptDepurado");
    const botaoCopiar = document.getElementById("botaoCopiarPromptDepurado");
    const botaoLimpar = document.getElementById("botaoLimparPromptDepurado");

    if (!entrada || !botaoAnalisar || !saidaDiagnostico || !saidaDepurada) {
      return;
    }

    function renderizarDiagnostico(diagnostico) {
      const percentual = Math.round((diagnostico.totalOk / diagnostico.total) * 100);
      const itensHtml = diagnostico.verificacoes
        .map((item) => `
          <li class="item-diagnostico">
            <span class="selo-diagnostico ${item.ok ? "selo-ok" : "selo-ajuste"}">${item.ok ? "OK" : "AJUSTAR"}</span>
            <span><strong>${escaparHtml(item.titulo)}:</strong> ${escaparHtml(item.ok ? "identificado no prompt." : item.dica)}</span>
          </li>
        `)
        .join("");

      saidaDiagnostico.innerHTML = `
        <p class="mb-2"><strong>Pontuacao:</strong> ${diagnostico.totalOk}/${diagnostico.total} (${percentual}%).</p>
        <ul class="lista-diagnostico">${itensHtml}</ul>
      `;
    }

    botaoAnalisar.addEventListener("click", () => {
      const texto = entrada.value.trim();
      if (!texto) {
        mostrarToast("Cole um prompt para executar o debug.");
        return;
      }

      const diagnostico = analisarPromptDebug(texto);
      renderizarDiagnostico(diagnostico);
      saidaDepurada.value = gerarPromptDepurado(texto, diagnostico);
      mostrarToast("Debug concluido com sugestao de prompt depurado.");
    });

    if (botaoExemplo) {
      botaoExemplo.addEventListener("click", () => {
        entrada.value = "Me ajude com IA para uma aula de 4 horas.";
        mostrarToast("Exemplo de prompt carregado para depuracao.");
      });
    }

    if (botaoCopiar) {
      botaoCopiar.addEventListener("click", () => {
        if (!saidaDepurada.value.trim()) {
          mostrarToast("Execute a analise antes de copiar o prompt depurado.");
          return;
        }
        copiarTexto(saidaDepurada.value);
      });
    }

    if (botaoLimpar) {
      botaoLimpar.addEventListener("click", () => {
        entrada.value = "";
        saidaDepurada.value = "";
        saidaDiagnostico.innerHTML = "Digite um prompt e clique em \"Analisar e depurar\" para ver o diagnostico.";
      });
    }
  }

  function configurarInterativoAvancado() {
    const formulario = document.getElementById("formularioInterativoAvancado");
    const saida = document.getElementById("saidaInterativoAvancado");
    if (!formulario || !saida) {
      return;
    }

    const campoSetor = document.getElementById("campoSetorInterativo");
    const campoObjetivo = document.getElementById("campoObjetivoInterativo");
    const campoPublico = document.getElementById("campoPublicoInterativo");
    const campoNivel = document.getElementById("campoNivelInterativo");
    const campoFormato = document.getElementById("campoFormatoInterativo");
    const campoTom = document.getElementById("campoTomInterativo");
    const campoDados = document.getElementById("campoDadosInterativo");
    const campoRestricoes = document.getElementById("campoRestricoesInterativo");
    const campoCriterios = document.getElementById("campoCriteriosInterativo");

    const checkMetatags = document.getElementById("checkMetatagsInterativo");
    const checkColeta = document.getElementById("checkColetaInterativo");
    const checkValidacao = document.getElementById("checkValidacaoInterativo");

    const botaoExemplo = document.getElementById("botaoExemploInterativoAvancado");
    const botaoCopiar = document.getElementById("botaoCopiarInterativoAvancado");
    const botaoLimpar = document.getElementById("botaoLimparInterativoAvancado");

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const setor = campoSetor.value.trim() || "[nao informado]";
      const objetivo = campoObjetivo.value.trim() || "[nao informado]";
      const publico = campoPublico.value.trim() || "[nao informado]";
      const nivel = campoNivel.value.trim() || "iniciante";
      const formato = campoFormato.value.trim() || "lista objetiva em topicos";
      const tom = campoTom.value.trim() || "didatico e claro";
      const dadosDisponiveis = campoDados.value.trim() || "[sem dados adicionais]";
      const restricoes = campoRestricoes.value.trim() || "[sem restricoes adicionais]";
      const criterios = campoCriterios.value.trim() || "clareza, aplicabilidade e consistencia";

      const usarMetatags = Boolean(checkMetatags && checkMetatags.checked);
      const ativarColeta = Boolean(checkColeta && checkColeta.checked);
      const exigirValidacao = Boolean(checkValidacao && checkValidacao.checked);

      const instrucoesColeta = ativarColeta
        ? "Se alguma informacao estiver ausente ou vaga, faca ate 6 perguntas numeradas para captar os dados faltantes antes da resposta final."
        : "Nao faca perguntas adicionais. Trabalhe apenas com os dados fornecidos.";

      const instrucaoValidacao = exigirValidacao
        ? "Valide fatos criticos, sinalize incertezas e informe limitacoes da resposta."
        : "Validacao de fatos nao obrigatoria para este caso.";

      if (usarMetatags) {
        saida.value = [
          "Atue como Arquiteto de Prompt Interativo Avancado.",
          "Sua missao e entregar resposta altamente personalizada e util para o usuario.",
          "",
          "<perfil_usuario>",
          `<setor>${setor}</setor>`,
          `<publico_alvo>${publico}</publico_alvo>`,
          `<nivel_publico>${nivel}</nivel_publico>`,
          "</perfil_usuario>",
          "",
          "<intencao>",
          `<objetivo>${objetivo}</objetivo>`,
          `<contexto>${setor}</contexto>`,
          `<dados_disponiveis>${dadosDisponiveis}</dados_disponiveis>`,
          "</intencao>",
          "",
          "<parametros_saida>",
          `<formato_saida>${formato}</formato_saida>`,
          `<tom_estilo>${tom}</tom_estilo>`,
          `<restricoes>${restricoes}</restricoes>`,
          `<criterios_qualidade>${criterios}</criterios_qualidade>`,
          "</parametros_saida>",
          "",
          "Fluxo de execucao obrigatorio:",
          `1) ${instrucoesColeta}`,
          "2) Reconfirme entendimento em ate 5 bullets objetivos.",
          "3) Gere a resposta final alinhada ao formato e tom solicitados.",
          `4) ${instrucaoValidacao}`,
          "5) Finalize com secao 'Proximos passos recomendados'."
        ].join("\n");
      } else {
        saida.value = [
          "Atue como Arquiteto de Prompt Interativo Avancado.",
          `Setor: ${setor}.`,
          `Objetivo: ${objetivo}.`,
          `Publico-alvo: ${publico} (nivel ${nivel}).`,
          `Dados disponiveis: ${dadosDisponiveis}.`,
          `Formato de saida: ${formato}.`,
          `Tom e estilo: ${tom}.`,
          `Restricoes: ${restricoes}.`,
          `Criterios de qualidade: ${criterios}.`,
          "",
          "Fluxo obrigatorio:",
          `1) ${instrucoesColeta}`,
          "2) Reconfirme entendimento antes da resposta final.",
          `3) ${instrucaoValidacao}`,
          "4) Entregue resposta final e inclua proximos passos."
        ].join("\n");
      }

      mostrarToast("Prompt interativo avancado gerado.");
    });

    if (botaoExemplo) {
      botaoExemplo.addEventListener("click", () => {
        campoSetor.value = "Educacao profissional";
        campoObjetivo.value = "Criar plano de oficina introdutoria de IA com foco em prompt engineering";
        campoPublico.value = "Turma iniciante com adultos de diferentes areas";
        campoNivel.value = "iniciante";
        campoFormato.value = "roteiro em etapas com tempo estimado e atividades";
        campoTom.value = "didatico, pratico e acolhedor";
        campoDados.value = "Duracao total de 4 horas, turma com 30 pessoas, laboratorio com projetor";
        campoRestricoes.value = "evitar jargoes e limitar a 500 palavras";
        campoCriterios.value = "clareza, sequencia logica, aplicabilidade imediata";
        if (checkMetatags) checkMetatags.checked = true;
        if (checkColeta) checkColeta.checked = true;
        if (checkValidacao) checkValidacao.checked = true;
        mostrarToast("Exemplo preenchido no construtor avancado.");
      });
    }

    if (botaoCopiar) {
      botaoCopiar.addEventListener("click", () => {
        if (!saida.value.trim()) {
          mostrarToast("Gere o prompt avancado antes de copiar.");
          return;
        }
        copiarTexto(saida.value);
      });
    }

    if (botaoLimpar) {
      botaoLimpar.addEventListener("click", () => {
        formulario.reset();
        saida.value = "";
      });
    }
  }

  if (elementoBusca) elementoBusca.addEventListener("input", aplicarFiltros);
  if (elementoCategoria) elementoCategoria.addEventListener("change", aplicarFiltros);

  if (botaoLimparFiltros) {
    botaoLimparFiltros.addEventListener("click", () => {
      if (elementoBusca) elementoBusca.value = "";
      if (elementoCategoria) elementoCategoria.value = "todas";
      aplicarFiltros();
    });
  }

  document.addEventListener("click", (evento) => {
    const botao = evento.target.closest(".btn-copiar");
    if (!botao) return;
    const textoCodificado = botao.getAttribute("data-texto");
    if (!textoCodificado) return;
    copiarTexto(decodeURIComponent(textoCodificado));
  });

  restaurarChecklist();
  configurarGerador();
  configurarDebugPrompts();
  configurarInterativoAvancado();
  renderizarTecnicas(tecnicasPrompting);
});
