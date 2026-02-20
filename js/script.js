
document.addEventListener("DOMContentLoaded", () => {
  const dadosBrutos = [
    ["prompt-basico", "Prompt basico", "bases", "Comece com instrucao simples antes de sofisticar o pedido.", "Como testar microfone antes da apresentacao.", "Inicio de tema novo", [["Resumo", "Resuma o texto em 3 frases simples para iniciantes em IA."], ["Lista", "Liste 5 aplicacoes praticas de IA para secretaria escolar."]]],
    ["instrucoes-claras", "Instrucoes claras", "bases", "Define formato, tamanho e objetivo da resposta.", "Pedido completo no restaurante reduz erro.", "Quando respostas ficam vagas", [["Topicos", "Explique machine learning em 4 topicos, com no maximo 12 palavras por topico."], ["Analogia", "Explique IA com analogia de cozinha, sem termos tecnicos."]]],
    ["uso-contexto", "Uso de contexto", "bases", "Inclui cenario e publico para reduzir resposta generica.", "Endereco completo para entrega.", "Quando falta aderencia ao caso real", [["Turma", "Contexto: turma de ensino medio iniciante. Crie dinamica de 15 minutos para apresentar IA."], ["Rotina semanal", "Contexto: familia com agenda cheia durante a semana. Gere sequencia de atividades por prioridade."]]],
    ["persona", "Definicao de persona", "bases", "Atribui papel para guiar tom e profundidade.", "Escolher especialista certo para conversar.", "Quando precisa adaptar linguagem", [["Educador", "Voce e educador de computacao para adolescentes. Explique algoritmo com exemplos escolares."], ["RH", "Voce e analista de RH. Crie mini plano de formacao em IA para equipe administrativa."]]],
    ["segunda-pessoa", "Tecnica da segunda pessoa", "bases", "Transforma perfil em comando 'Voce agora e'.", "Converter curriculo em instrucao de trabalho.", "Criacao rapida de persona", [["Reescrita", "Descreva perfil de tutor de IA e reescreva em segunda pessoa comecando com 'Voce agora e...'."], ["Operacional", "Converta a descricao em prompt operacional de atendimento ao aluno, em segunda pessoa."]]],
    ["delimitadores", "Uso de delimitadores", "bases", "Separa contexto, dados e tarefa com tags.", "Etiquetas em caixas de mudanca.", "Quando ha textos longos", [["Comparacao", "<texto1>Explique IA tecnicamente.</texto1><texto2>Explique IA com explicacao simplificada.</texto2>Tarefa: gere versao equilibrada."], ["Estrutura", "<contexto>Mudanca para apartamento com 4 moradores.</contexto><tarefa>Crie plano de organizacao em 20 minutos por dia.</tarefa><formato>Lista.</formato>"]]],
    ["forneca-exemplos", "Forneca exemplos", "bases", "Mostra padrao esperado para replicacao.", "Modelo preenchido antes de novo formulario.", "Quando precisa consistencia", [["Email", "Use o e-mail em <exemplo> como referencia e escreva novo e-mail formal de atraso."], ["Classificacao", "Exemplo: 'Entrega atrasou e fiquei frustrado' -> Negativo. Agora classifique: 'A aula foi util, mas cansativa'."]]],
    ["prompt-depurador", "Prompt depurador", "bases", "Lista acoes que a IA executaria sem executar o pedido.", "Checklist antes de executar projeto.", "Teste e refinamento", [["Acoes", "Liste o que um assistente faria ao executar o prompt delimitado. Nao execute, apenas descreva as acoes."], ["Ambiguidades", "Analise o prompt 'Explique IA para minha turma' e aponte lacunas e melhorias."]]],
    ["zero-shot", "Zero-shot prompting", "shots", "Executa tarefa sem exemplos previos.", "Pergunta direta sem demonstracao.", "Tarefas simples", [["Sentimento", "Classifique o sentimento: 'As ferias foram ok'."], ["Conceito", "Explique o que e IA para um publico de 12 anos."]]],
    ["one-shot", "One-shot prompting", "shots", "Usa um exemplo para ensinar o formato.", "Aprender por imitacao unica.", "Leve ambiguidade de estilo", [["Espelho", "Exemplo: 'O que e IA?' -> 'Tecnologia que aprende com dados.' Agora explique machine learning no mesmo formato."], ["Padrao", "Exemplo de saida: Tema + Resumo. Aplique ao tema 'Uso responsavel da IA'."]]],
    ["few-shot", "Few-shot prompting", "shots", "Usa dois ou mais exemplos para reforcar padrao.", "Treino com varios casos.", "Tarefa com formato especifico", [["Titulos", "Exemplos de titulos de aula de IA... Agora crie 5 novos no mesmo estilo."], ["Extracao", "Com base em 2 exemplos Nome|Idade|Cidade, extraia da frase: 'Marcos, 31 anos, Gravatai'."]]],
    ["cot", "Chain-of-Thought (CoT)", "raciocinio", "Pede raciocinio por etapas.", "Mostrar conta no caderno.", "Problemas logicos e planejamento", [["Matematica", "Resolva passo a passo: Roger tem 5 bolas e compra 2 latas com 3 cada. Total?"], ["Planejamento", "Explique passo a passo como organizar uma mudanca de apartamento em 7 dias."]]],
    ["zero-shot-cot", "Zero-shot CoT", "raciocinio", "CoT sem exemplos previos, apenas com instrucao de etapa.", "Pedir para explicar como pensou.", "Tarefa nova sem exemplos", [["Estoque", "Explique como otimizar estoque em escola tecnica. Pense passo a passo."], ["Ferramenta", "Qual ferramenta de IA usar para plano de aula? Raciocine passo a passo e recomende."]]],
    ["self-consistency", "Self-Consistency", "raciocinio", "Gera varios raciocinios e escolhe o mais consistente.", "Conferir conta por metodos diferentes.", "Incerteza e calculo", [["Tres caminhos", "Gere 3 raciocinios para estimar custo de um aniversario em casa e escolha o mais consistente."], ["Consenso", "Resolva por 3 abordagens e apresente resposta final por consenso."]]],
    ["least-to-most", "Least-to-Most", "raciocinio", "Quebra problema do simples ao complexo.", "Aprender letra, palavra e texto.", "Projeto longo", [["Etapas", "Divida implantacao de IA em: diagnostico, piloto, expansao e acompanhamento."], ["Chatbot", "Resolva em ordem: objetivo, FAQ, fluxos e metricas de chatbot."]]],
    ["prompt-chaining", "Prompt chaining", "raciocinio", "Encadeia saida de uma etapa na entrada da outra.", "Linha de producao.", "Fluxo analise-sintese", [["Diagnostico+plano", "Etapa 1: diagnostico de medos sobre IA. Etapa 2: plano de aula baseado nisso."], ["Erros+reescrita", "Etapa 1: analise erros do prompt. Etapa 2: checklist. Etapa 3: reescreva prompt final."]]],
    ["tot", "Tree-of-Thoughts (ToT)", "raciocinio", "Explora caminhos, compara e poda opcoes.", "Arvore de decisao.", "Escolha estrategica", [["Viagem", "Crie 3 caminhos para planejar uma viagem curta, compare pros/contras e escolha o melhor."], ["Projeto final", "Explore 3 ideias de projeto pessoal, estime esforco e impacto, e recomende."]]],
    ["react", "ReAct", "raciocinio", "Alterna pensar, agir, observar e ajustar.", "Ciclo curto de melhoria.", "Agentes com ferramentas", [["Pesquisa", "Use ciclo Pensar->Agir->Observar->Ajustar para levantar 5 tendencias de IA na educacao tecnica."], ["Recursos", "Use ReAct para identificar recursos de aprendizagem, comparar qualidade e montar recomendacao final."]]],
    ["prompt-interativo", "Prompt interativo", "interacao", "A IA faz perguntas para refinar o prompt final.", "Cocriacao de briefing em conversa.", "Objetivo ainda incompleto", [["Criador", "Voce sera meu criador pessoal de prompts: revisar, sugerir, perguntar e entregar versao final."], ["Campanha", "Faca ate 8 perguntas numeradas para melhorar meu prompt de plano de marketing de uma cafeteria local."]]],
    ["generated-knowledge", "Generated knowledge", "qualidade", "Gera fatos antes da tarefa principal.", "Estudar notas antes da redacao.", "Tema exige base previa", [["Arduino", "Liste 5 fatos sobre Arduino e depois crie tutorial basico de 30 minutos."], ["Glossario", "Crie glossario de 8 termos de IA e depois um plano de aula introdutorio."]]],
    ["self-refine", "Self-refine", "qualidade", "Gera versao inicial, critica e melhora.", "Rascunho, revisao e versao final.", "Elevar qualidade de saida", [["Plano", "Escreva plano de aula de IA, critique a propria resposta e entregue versao revisada."], ["Etica", "Escreva texto sobre etica em IA (v1), faca autoavaliacao em 5 criterios e gere v2."]]],
    ["ape", "Automatic Prompt Engineer", "interacao", "Cria e compara variacoes de prompts para otimizar resultado.", "Teste A/B de prompts.", "Quando busca prompt mais eficiente", [["Variacoes", "Crie 5 variacoes de prompt para explicar IA a iniciantes, avalie e indique o melhor."], ["Melhor prompt", "Gere o melhor prompt para ensinar engenharia de prompts e apresente versao alternativa."]]],
    ["cove", "Chain-of-Verification (CoVe)", "qualidade", "Resposta inicial + perguntas de verificacao + resposta revisada.", "Responder, checar e publicar.", "Precisao factual critica", [["Data", "Responda: Em que data Ayrton Senna faleceu? Depois verifique com perguntas internas e reformule resposta final."], ["Energia", "Analise impacto de trocar fosseis por renovaveis ate 2050 com etapa de verificacao e conclusao revisada."]]],
    ["kd-cot", "KD-CoT", "qualidade", "Combina raciocinio por etapas com conhecimento previo estruturado.", "Roteiro + manual tecnico.", "Tema complexo com base conceitual", [["Segmentacao", "Com base em <problema>, confirme entendimento, quebre em subquestoes e conclua. <problema>Segmentacao de publico para curso livre de fotografia.</problema>"], ["Conceito", "Ensine relatividade via KD-CoT: decomposicao, explicacao progressiva, verificacao e sintese final."]]],
    ["autorreflexao", "Autorreflexao", "qualidade", "Alterna perfis de criacao e critica em ciclos.", "Criativo e revisor trabalhando juntos.", "Reducao de alucinacao", [["Dois perfis", "<idealista>Crie proposta para engajar jovens em campanha de leitura no bairro.</idealista><critico>Avalie e sugira melhorias.</critico> Gere versao aprimorada."], ["Loop", "Execute 5 ciclos: Idealista propoe, Critico revisa, Idealista atualiza. Mostre so a versao final."]]],
    ["controle-complexidade", "Controle de complexidade", "controle", "Ajusta profundidade para publico com explicacao simplificada ou tecnico.", "Regular volume conforme publico.", "Mesmo tema para publicos diferentes", [["Baixo", "Explique fotossintese para criancas de 10 anos. Complexidade 2 (1-10)."], ["Alto", "Escreva analise detalhada da fotossintese. Complexidade 9 (1-10)."]]],
    ["controle-entonacao", "Controle de entonacao", "controle", "Define tom da resposta de casual a formal.", "Roupa certa para cada ocasiao.", "Mudanca de tom por publico", [["Formal", "Escreva e-mail solicitando reuniao com direcao. Entonacao 9 (1 casual, 10 formal)."], ["Casual", "Escreva convite para encontro de estudo sobre IA. Entonacao 2 (1 casual, 10 formal)."]]],
    ["controle-sentimento", "Controle de sentimento", "controle", "Ajusta carga emocional da mensagem.", "Regular temperatura emocional.", "Apoio, feedback e temas sensiveis", [["Positivo", "Escreva mensagem de encorajamento para colega em dificuldade. Sentimento 9 (1-10)."], ["Neutro", "Redija feedback construtivo sobre projeto que precisa melhorar. Sentimento 4 (1-10)."]]],
    ["controle-perspectiva", "Controle de perspectiva", "controle", "Escolhe 1a, 2a ou 3a pessoa na narrativa.", "Trocar camera de filmagem.", "Historias, guias e relatorios", [["Primeira", "Escreva relato de viagem ao Japao. Perspectiva 1 (1 primeira, 2 segunda, 3 terceira)."], ["Segunda", "Escreva guia para montar computador. Perspectiva 2 (1 primeira, 2 segunda, 3 terceira)."]]],
    ["controle-foco-topico", "Foco no topico", "controle", "Define o quanto a resposta se mantem no tema central.", "Ajustar zoom.", "Evitar desvio de assunto", [["Foco alto", "Escreva artigo sobre poluicao do ar e saude. Foco 9 (1 amplo, 10 restrito)."], ["Foco medio", "Escreva post sobre jardinagem urbana. Foco 6 (1 amplo, 10 restrito)."]]],
    ["nivel-surpresa", "Nivel de surpresa", "controle", "Controla previsibilidade e reviravoltas.", "Filme linear ou com plot twist.", "Narrativa criativa ou instrucional", [["Alto", "Escreva conto de suspense com reviravoltas. Surpresa 9 (1 previsivel, 10 surpreendente)."], ["Baixo", "Escreva manual para montar movel. Surpresa 1 (1 previsivel, 10 surpreendente)."]]],
    ["nivel-detalhe", "Nivel de detalhe", "controle", "Regula profundidade descritiva da resposta.", "Mapa simplificado vs mapa completo.", "Resumo executivo ou descricao rica", [["Detalhado", "Descreva jantar elegante em restaurante luxuoso. Detalhe 9 (1-10)."], ["Sintetico", "Escreva resumo executivo de resultados trimestrais. Detalhe 2 (1-10)."]]],
    ["controle-originalidade", "Controle de originalidade", "controle", "Ajusta inovacao versus convencionalidade.", "Receita classica ou prato autoral.", "Slogan criativo ou texto tecnico", [["Alta", "Crie slogan para novo clube de corrida do bairro. Originalidade 9 (1 convencional, 10 inovador)."], ["Baixa", "Escreva relatorio tecnico de eficiencia energetica. Originalidade 2 (1 convencional, 10 inovador)."]]],
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

  const exemplosCotidianosPorTecnica = {
    "prompt-basico": [
      { titulo: "Resumo de recado", prompt: "Resuma este recado em 2 frases objetivas: \"Chego as 19h, preciso passar no mercado e levar o boleto\"." },
      { titulo: "Lista rapida", prompt: "Liste 5 tarefas para organizar a casa em 30 minutos." }
    ],
    "instrucoes-claras": [
      { titulo: "Roteiro de compra", prompt: "Crie uma lista de compras para 3 dias, separada por categorias, com no maximo 12 itens." },
      { titulo: "Planejamento curto", prompt: "Monte um plano de estudo de 45 minutos, dividido em 3 blocos de 15 minutos." }
    ],
    "uso-contexto": [
      { titulo: "Contexto familiar", prompt: "Contexto: casal com dois filhos pequenos e pouco tempo. Tarefa: sugerir rotina noturna simples para evitar atrasos pela manha." },
      { titulo: "Contexto financeiro", prompt: "Contexto: pessoa com renda variavel e contas fixas. Tarefa: criar controle semanal de gastos em formato de checklist." }
    ],
    "persona": [
      { titulo: "Persona nutricionista", prompt: "Voce e nutricionista focado em rotina corrida. Sugira 5 lanches praticos para levar ao trabalho." },
      { titulo: "Persona organizador", prompt: "Voce e organizador pessoal. Crie uma rotina de 20 minutos diarios para manter a casa em ordem." }
    ],
    "segunda-pessoa": [
      { titulo: "Perfil em segunda pessoa", prompt: "Descreva um planejador financeiro em um paragrafo e depois reescreva em segunda pessoa comecando por 'Voce agora e...'." },
      { titulo: "Atendente em segunda pessoa", prompt: "Reescreva o perfil abaixo em segunda pessoa e transforme em prompt operacional para atendimento ao cliente." }
    ],
    "delimitadores": [
      { titulo: "Comparar dois textos", prompt: "<texto1>Lista de tarefas da semana.</texto1><texto2>Compromissos com horario fixo.</texto2>Tarefa: unir em um unico cronograma diario." },
      { titulo: "Separar dados", prompt: "<contexto>Pessoa com rotina de trabalho e estudo.</contexto><restricoes>2 horas livres por dia.</restricoes><tarefa>Montar agenda equilibrada.</tarefa>" }
    ],
    "forneca-exemplos": [
      { titulo: "E-mail cotidiano", prompt: "Use o exemplo em <modelo> para escrever um e-mail educado avisando atraso em um compromisso pessoal." },
      { titulo: "Padrao de resposta", prompt: "Exemplo: Pedido: 'lembrete de consulta' -> Resposta: 'confirme data, horario e local'. Agora aplique ao pedido 'renovacao de documento'." }
    ],
    "prompt-depurador": [
      { titulo: "Auditoria de pedido", prompt: "Liste o que um assistente deve executar no prompt abaixo sem responder a tarefa final: 'Organize minha semana em topicos'." },
      { titulo: "Lacunas do prompt", prompt: "Analise este prompt e aponte ambiguidades: 'Me ajuda a economizar dinheiro'." }
    ],
    "zero-shot": [
      { titulo: "Sentimento de avaliacao", prompt: "Classifique o sentimento: 'O filme foi bom, mas longo'." },
      { titulo: "Explicacao simples", prompt: "Explique em linguagem simples a diferenca entre gasto fixo e gasto variavel." }
    ],
    "one-shot": [
      { titulo: "Modelo unico", prompt: "Exemplo: 'O que e rotina matinal?' -> 'Sequencia de habitos para comecar o dia'. Agora explique 'o que e rotina noturna' no mesmo formato." },
      { titulo: "Padrao de checklist", prompt: "Exemplo: Tarefa: lavar roupa -> Passos: separar, lavar, secar. Agora faca o mesmo para 'limpar geladeira'." }
    ],
    "few-shot": [
      { titulo: "Titulos de eventos", prompt: "Exemplos: 'Sabado sem bagunca', 'Segunda sem atrasos', 'Quarta de financas'. Agora crie 5 novos titulos no mesmo estilo." },
      { titulo: "Classificacao de despesas", prompt: "Exemplo 1: Aluguel -> Fixo. Exemplo 2: Mercado -> Variavel. Exemplo 3: Internet -> Fixo. Classifique: Combustivel." }
    ],
    "cot": [
      { titulo: "Conta de compras", prompt: "Resolva passo a passo: 3 camisetas de R$35 e 1 tenis de R$120. Qual o total?" },
      { titulo: "Planejamento diario", prompt: "Explique passo a passo como organizar uma rotina de trabalho remoto com pausas e exercicios." }
    ],
    "zero-shot-cot": [
      { titulo: "Orcamento mensal", prompt: "Mostre passo a passo como dividir salario entre contas, reserva e lazer." },
      { titulo: "Viagem curta", prompt: "Pense passo a passo e monte um planejamento de viagem de fim de semana com baixo custo." }
    ],
    "self-consistency": [
      { titulo: "Escolha de plano", prompt: "Gere 3 raciocinios para escolher um plano de internet residencial e indique o mais consistente." },
      { titulo: "Comparacao de opcoes", prompt: "Compare 3 estrategias para reduzir gastos no supermercado e escolha a mais viavel." }
    ],
    "least-to-most": [
      { titulo: "Mudanca de casa", prompt: "Divida a mudanca de casa em etapas do simples ao complexo e entregue um plano semanal." },
      { titulo: "Organizacao de festa", prompt: "Resolva do mais simples ao mais complexo: lista de convidados, orcamento, cardapio, logistica do evento." }
    ],
    "prompt-chaining": [
      { titulo: "Planejamento em etapas", prompt: "Etapa 1: levante compromissos da semana. Etapa 2: classifique por prioridade. Etapa 3: gere agenda final com horarios." },
      { titulo: "Compra consciente", prompt: "Etapa 1: liste despesas mensais. Etapa 2: identifique excessos. Etapa 3: gere plano de corte de gastos." }
    ],
    "tot": [
      { titulo: "Decisao de transporte", prompt: "Explore 3 caminhos para ir ao trabalho (carro, onibus, bicicleta), compare tempo, custo e esforco e escolha a melhor opcao." },
      { titulo: "Escolha de curso", prompt: "Crie uma arvore de decisoes para escolher um curso livre com base em tempo, custo e objetivo profissional." }
    ],
    "react": [
      { titulo: "Pesquisa de bairro", prompt: "Use ciclo pensar-agir-observar-ajustar para comparar bairros antes de alugar um imovel." },
      { titulo: "Planejamento de fim de semana", prompt: "Siga ReAct para montar roteiro de fim de semana com chuva prevista e limite de gasto." }
    ],
    "prompt-interativo": [
      { titulo: "Briefing de viagem", prompt: "Faca perguntas numeradas para montar um roteiro de viagem personalizado e depois entregue o plano final." },
      { titulo: "Rotina personalizada", prompt: "Conduza uma entrevista curta para entender minha rotina e depois proponha um cronograma realista." }
    ],
    "generated-knowledge": [
      { titulo: "Conhecimento previo culinario", prompt: "Liste 6 fatos sobre conservacao de alimentos e depois crie um guia de organizacao da geladeira." },
      { titulo: "Conhecimento previo financeiro", prompt: "Gere 5 principios basicos de planejamento financeiro e em seguida monte plano mensal pratico." }
    ],
    "self-refine": [
      { titulo: "Texto de apresentacao", prompt: "Escreva um texto curto de apresentacao pessoal, critique pontos fracos e entregue versao melhorada." },
      { titulo: "Plano de estudos", prompt: "Crie plano de estudos semanal, avalie falhas de viabilidade e entregue versao ajustada." }
    ],
    ape: [
      { titulo: "Otimizacao de pedido", prompt: "Crie 5 versoes de prompt para montar lista de compras economica e selecione a mais clara." },
      { titulo: "Melhor prompt para agenda", prompt: "Gere o melhor prompt para organizar agenda semanal e apresente uma alternativa mais curta." }
    ],
    cove: [
      { titulo: "Checagem de informacao", prompt: "Responda: Qual a validade da CNH? Depois faça perguntas de verificacao e entregue resposta final revisada." },
      { titulo: "Verificacao de orientacao", prompt: "Analise a afirmacao 'guardar alimento quente na geladeira estraga tudo'. Verifique e reformule resposta baseada em checagem." }
    ],
    "kd-cot": [
      { titulo: "Escolha de bairro", prompt: "Com base em custo, seguranca e mobilidade, decomponha a decisao de bairro ideal e conclua com recomendacao." },
      { titulo: "Troca de carreira", prompt: "Use conhecimento de mercado + raciocinio em etapas para orientar uma transicao de carreira em 6 meses." }
    ],
    autorreflexao: [
      { titulo: "Ideia de presente", prompt: "Idealista: proponha presente para aniversario com baixo custo. Critico: revise e melhore. Entregue versao final." },
      { titulo: "Plano de rotina", prompt: "Execute ciclos de idealista e critico para melhorar uma rotina diaria de autocuidado." }
    ],
    "controle-complexidade": [
      { titulo: "Receita para criancas", prompt: "Explique receita de panqueca para criancas de 10 anos. Complexidade 2 (1-10)." },
      { titulo: "Receita tecnica", prompt: "Descreva tecnicamente a fermentacao do pao para estudantes de gastronomia. Complexidade 9 (1-10)." }
    ],
    "controle-entonacao": [
      { titulo: "Mensagem formal", prompt: "Escreva e-mail formal pedindo segunda via de boleto. Entonacao 9 (1 casual, 10 formal)." },
      { titulo: "Mensagem casual", prompt: "Escreva convite informal para churrasco de domingo. Entonacao 2 (1 casual, 10 formal)." }
    ],
    "controle-sentimento": [
      { titulo: "Apoio positivo", prompt: "Escreva mensagem de apoio para amigo ansioso antes de prova. Sentimento 9 (1-10)." },
      { titulo: "Feedback equilibrado", prompt: "Redija feedback sobre atraso recorrente sem agressividade. Sentimento 4 (1-10)." }
    ],
    "controle-perspectiva": [
      { titulo: "Relato pessoal", prompt: "Descreva um dia de mudanca de casa na primeira pessoa. Perspectiva 1." },
      { titulo: "Guia direto", prompt: "Escreva guia de organizacao de mochila na segunda pessoa. Perspectiva 2." }
    ],
    "controle-foco-topico": [
      { titulo: "Foco alto", prompt: "Escreva texto sobre economia de agua em casa com foco 9 (1 amplo, 10 restrito)." },
      { titulo: "Foco medio", prompt: "Escreva texto sobre bem-estar no trabalho com foco 6 (1 amplo, 10 restrito)." }
    ],
    "nivel-surpresa": [
      { titulo: "Narrativa criativa", prompt: "Escreva conto curto de aniversario com surpresa no final. Surpresa 9 (1-10)." },
      { titulo: "Instrucao previsivel", prompt: "Escreva passo a passo para trocar lampada com surpresa 1 (1-10)." }
    ],
    "nivel-detalhe": [
      { titulo: "Descricao rica", prompt: "Descreva um cafe da manha de domingo em familia. Detalhe 9 (1-10)." },
      { titulo: "Resumo objetivo", prompt: "Resuma uma reuniao de condominio em 5 linhas. Detalhe 2 (1-10)." }
    ],
    "controle-originalidade": [
      { titulo: "Ideia criativa", prompt: "Crie nome original para grupo de corrida de bairro. Originalidade 9 (1-10)." },
      { titulo: "Texto convencional", prompt: "Escreva aviso padrao para falta de agua no predio. Originalidade 2 (1-10)." }
    ],
    "nivel-abstracao": [
      { titulo: "Conceitual", prompt: "Reflexao sobre o conceito de tempo na rotina moderna. Abstracao 9 (1-10)." },
      { titulo: "Pratico", prompt: "Guia pratico para separar roupas antes da lavagem. Abstracao 2 (1-10)." }
    ]
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

  function obterExemplosDiaADia(tecnica) {
    const exemplos = exemplosCotidianosPorTecnica[tecnica.id];
    if (Array.isArray(exemplos) && exemplos.length) {
      return exemplos;
    }
    return tecnica.exemplos;
  }

  function gerarFundamentacaoSimples(tecnica) {
    const basePorCategoria = {
      bases: "Esta tecnica melhora a resposta porque reduz ambiguidades e deixa o pedido mais explicito para o modelo.",
      shots: "Esta tecnica funciona por demonstracao de padrao: quanto melhor o exemplo, mais previsivel a resposta.",
      raciocinio: "Esta tecnica melhora desempenho ao quebrar problemas em etapas, facilitando coerencia logica.",
      controle: "Esta tecnica aumenta qualidade por ajuste de parametros de linguagem, tornando a saida adequada ao contexto.",
      qualidade: "Esta tecnica reforca confiabilidade com verificacao, refinamento e revisao antes da resposta final.",
      interacao: "Esta tecnica melhora aderencia porque coleta dados faltantes e adapta a resposta ao usuario."
    };
    return basePorCategoria[tecnica.categoria] || "Esta tecnica ajuda a estruturar melhor o pedido e reduzir respostas vagas.";
  }

  function gerarDesafioRapido(tecnica) {
    const desafiosPorCategoria = {
      bases: "Desafio: reescreva um pedido vago (ex.: 'me ajuda com a semana') em um prompt com contexto, publico e formato.",
      shots: "Desafio: crie 1 exemplo (one-shot) e depois 3 exemplos (few-shot) para a mesma tarefa e compare a saida.",
      raciocinio: "Desafio: escolha um problema cotidiano e force a resolucao em passos numerados para validar a logica.",
      controle: "Desafio: use o mesmo tema em 2 tons diferentes (formal e casual) e compare impacto da comunicacao.",
      qualidade: "Desafio: pegue uma resposta longa e aplique verificacao de fatos com 3 perguntas criticas.",
      interacao: "Desafio: monte um prompt que primeiro faca 5 perguntas para coletar dados e so depois entregue a resposta."
    };
    return desafiosPorCategoria[tecnica.categoria] || "Desafio: refine este prompt ate que a resposta fique clara, objetiva e aplicavel.";
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
              <p><strong>Fundamentacao simples:</strong> ${escaparHtml(gerarFundamentacaoSimples(tecnica))}</p>
              <p><strong>Analogia:</strong> ${escaparHtml(tecnica.analogia)}</p>
              <p class="mb-0"><strong>Quando usar:</strong> ${escaparHtml(tecnica.quandoUsar)}</p>
            </div>
            <div class="lista-exemplos">${montarHtmlExemplos(obterExemplosDiaADia(tecnica), tecnica.id)}</div>
            <div class="caixa-saida-mais mt-3">
              <h4 class="h6 mb-2">Desafio rápido</h4>
              <p class="mb-0">${escaparHtml(gerarDesafioRapido(tecnica))}</p>
            </div>
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

      const exemplosBusca = obterExemplosDiaADia(tecnica);
      const busca = normalizarTexto(`${tecnica.nome} ${tecnica.resumo} ${tecnica.analogia} ${tecnica.quandoUsar} ${exemplosBusca.map((x) => x.titulo).join(" ")}`);
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
    const saidaMais = document.getElementById("saidaMaisGerador");
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
      const formato = campoFormato.value.trim();
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
      if (formato) linhas.push(`Formato de saida obrigatorio: ${formato}.`);
      if (campoTom.value.trim()) linhas.push(`Tom e estilo: ${campoTom.value.trim()}.`);
      if (campoRestricoes.value.trim()) linhas.push(`Restricoes: ${campoRestricoes.value.trim()}.`);
      if (campoTecnica.value && campoTecnica.value !== "Nenhuma") linhas.push(`Tecnica sugerida: ${campoTecnica.value}.`);

      linhas.push("Se faltar informacao para executar bem, faca ate 3 perguntas objetivas antes da resposta final.");
      linhas.push("Ao final, inclua checagem breve de qualidade e limites.");
      saida.value = linhas.join("\n");
      if (saidaMais) {
        saidaMais.innerHTML = `
          <h3 class="h6 mb-2">Saida+ | Informacoes complementares</h3>
          <p class="mb-2"><strong>Resumo:</strong> objetivo "${escaparHtml(objetivo)}", publico "${escaparHtml(publico)}" e formato "${escaparHtml(formato || "nao definido")}".</p>
          <p class="mb-0">Proximo passo: rode o prompt e revise se a resposta ficou acionavel em ate 3 ajustes curtos.</p>
        `;
      }
      mostrarToast("Prompt gerado.");
    });

    if (botaoExemplo) {
      botaoExemplo.addEventListener("click", () => {
        campoObjetivo.value = "Planejar uma viagem de fim de semana sem estourar o orcamento";
        campoPublico.value = "Casal adulto com rotina de trabalho intensa";
        campoContexto.value = "Viagem curta, saindo sexta a noite e voltando domingo";
        campoFormato.value = "roteiro em etapas com custos estimados";
        campoTom.value = "simples, pratico e amigavel";
        campoRestricoes.value = "orcamento maximo de R$ 1000";
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
        if (saidaMais) {
          saidaMais.innerHTML = `
            <h3 class="h6 mb-2">Saida+ | Informacoes complementares</h3>
            <p class="mb-2">Depois de gerar o prompt, valide se ele contem objetivo claro, contexto real e formato de saida definido.</p>
            <p class="mb-0">Dica: teste 2 versoes com pequenas mudancas de tom para comparar resultados.</p>
          `;
        }
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
        ok: /(contexto|cenario|situacao|projeto|empresa|turma|aula|rotina|familia)/i.test(textoNormalizado)
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
    const saidaMais = document.getElementById("saidaMaisDebug");
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
      if (saidaMais) {
        saidaMais.innerHTML = `
          <h3 class="h6 mb-2">Saida+ | Informacoes complementares</h3>
          <p class="mb-2">Pontuacao de cobertura: ${diagnostico.totalOk}/${diagnostico.total}. Priorize os itens com selo AJUSTAR.</p>
          <p class="mb-0">Ajuste primeiro contexto e formato de saida antes de aumentar complexidade.</p>
        `;
      }
      mostrarToast("Debug concluido com sugestao de prompt depurado.");
    });

    if (botaoExemplo) {
      botaoExemplo.addEventListener("click", () => {
        entrada.value = "Me ajuda a organizar minhas contas do mes?";
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
        if (saidaMais) {
          saidaMais.innerHTML = `
            <h3 class="h6 mb-2">Saida+ | Informacoes complementares</h3>
            <p class="mb-2">Use o diagnostico para revisar primeiro os itens com selo "AJUSTAR".</p>
            <p class="mb-0">Regra pratica: quanto menos ambiguidade no pedido, maior a consistencia da resposta.</p>
          `;
        }
      });
    }
  }

  function configurarInterativoAvancado() {
    const formulario = document.getElementById("formularioInterativoAvancado");
    const saida = document.getElementById("saidaInterativoAvancado");
    const saidaMais = document.getElementById("saidaMaisInterativo");
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

      if (saidaMais) {
        saidaMais.innerHTML = `
          <h3 class="h6 mb-2">Saida+ | Informacoes complementares</h3>
          <p class="mb-2">Contexto estruturado para <strong>${escaparHtml(setor)}</strong> com publico <strong>${escaparHtml(publico)}</strong>.</p>
          <p class="mb-0">Mantenha perguntas de refinamento ativas se os dados iniciais forem insuficientes.</p>
        `;
      }

      mostrarToast("Prompt interativo avancado gerado.");
    });

    if (botaoExemplo) {
      botaoExemplo.addEventListener("click", () => {
        campoSetor.value = "Organizacao pessoal";
        campoObjetivo.value = "Criar rotina semanal equilibrada entre trabalho, casa e lazer";
        campoPublico.value = "Adulto com jornada de trabalho integral";
        campoNivel.value = "iniciante";
        campoFormato.value = "plano semanal em blocos de tempo com prioridades";
        campoTom.value = "didatico, direto e acolhedor";
        campoDados.value = "Horario de trabalho 9h-18h, 2 filhos em idade escolar, 1h livre por noite";
        campoRestricoes.value = "sem sugestoes caras; manter rotina realista";
        campoCriterios.value = "viabilidade, clareza e equilibrio";
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
        if (saidaMais) {
          saidaMais.innerHTML = `
            <h3 class="h6 mb-2">Saida+ | Informacoes complementares</h3>
            <p class="mb-2">Se o usuario nao tiver dados suficientes, mantenha o fluxo de perguntas numeradas ativo.</p>
            <p class="mb-0">Finalize sempre com confirmacao de entendimento e proximos passos objetivos.</p>
          `;
        }
      });
    }
  }

  function configurarQuizAvaliativo() {
    const formularioQuiz = document.getElementById("formularioQuizAvaliativo");
    const botaoCorrigir = document.getElementById("botaoCorrigirQuiz");
    const botaoReiniciar = document.getElementById("botaoReiniciarQuiz");
    const resultadoQuiz = document.getElementById("resultadoQuiz");

    if (!formularioQuiz || !botaoCorrigir || !resultadoQuiz) {
      return;
    }

    const perguntasQuiz = Array.from(formularioQuiz.querySelectorAll(".pergunta-quiz"));

    function limparEstadoQuiz() {
      perguntasQuiz.forEach((pergunta) => {
        pergunta.classList.remove("quiz-correta", "quiz-incorreta");
        const feedback = pergunta.querySelector(".feedback-pergunta");
        if (feedback) {
          feedback.textContent = "";
          feedback.className = "feedback-pergunta mb-0";
        }
      });
    }

    botaoCorrigir.addEventListener("click", () => {
      limparEstadoQuiz();
      let acertos = 0;
      let respondidas = 0;

      perguntasQuiz.forEach((pergunta) => {
        const numeroPergunta = pergunta.getAttribute("data-pergunta");
        const alternativaCorreta = pergunta.getAttribute("data-correta");
        const alternativaSelecionada = formularioQuiz.querySelector(`input[name="quizPergunta${numeroPergunta}"]:checked`);
        const feedback = pergunta.querySelector(".feedback-pergunta");

        if (!alternativaSelecionada) {
          if (feedback) {
            feedback.textContent = "Selecione uma alternativa para esta pergunta.";
            feedback.classList.add("feedback-aviso");
          }
          return;
        }

        respondidas += 1;
        if (alternativaSelecionada.value === alternativaCorreta) {
          acertos += 1;
          pergunta.classList.add("quiz-correta");
          if (feedback) {
            feedback.textContent = "Resposta correta.";
            feedback.classList.add("feedback-correto");
          }
        } else {
          pergunta.classList.add("quiz-incorreta");
          if (feedback) {
            feedback.textContent = "Resposta incorreta. Revise este conceito no módulo correspondente.";
            feedback.classList.add("feedback-incorreto");
          }
        }
      });

      if (respondidas !== perguntasQuiz.length) {
        resultadoQuiz.innerHTML = "<p class=\"mb-0\"><strong>Quiz incompleto:</strong> responda todas as perguntas antes de corrigir.</p>";
        mostrarToast("Responda todas as perguntas do quiz.");
        return;
      }

      const percentual = Math.round((acertos / perguntasQuiz.length) * 100);
      let faixa = "Revise os pontos principais e refaça o quiz.";
      if (percentual >= 80) {
        faixa = "Excelente! Voce dominou os fundamentos centrais.";
      } else if (percentual >= 60) {
        faixa = "Bom resultado. Revise os itens marcados para consolidar.";
      }

      resultadoQuiz.innerHTML = `
        <p class="mb-2"><strong>Resultado:</strong> ${acertos}/${perguntasQuiz.length} acertos (${percentual}%).</p>
        <p class="mb-0">${faixa}</p>
      `;
      mostrarToast("Quiz corrigido.");
    });

    if (botaoReiniciar) {
      botaoReiniciar.addEventListener("click", () => {
        formularioQuiz.reset();
        limparEstadoQuiz();
        resultadoQuiz.innerHTML = "Responda as 5 questoes e clique em \"Corrigir quiz\" para ver seu resultado.";
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

  window.obterExemplosDiaADia = obterExemplosDiaADia;
  window.gerarFundamentacaoSimples = gerarFundamentacaoSimples;
  window.gerarDesafioRapido = gerarDesafioRapido;

  restaurarChecklist();
  configurarGerador();
  configurarDebugPrompts();
  configurarInterativoAvancado();
  configurarQuizAvaliativo();
  renderizarTecnicas(tecnicasPrompting);
});
