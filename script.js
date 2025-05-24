const questions = [
    {
        question: "1) Qual a finalidade do uso do aquecedor indutivo no processo de tratamento térmico?",
        answers: [
            { text: "Dilatar a peça, facilitando sua montagem.", correct: false },
            { text: "Aumento da dureza superficial da peça e resistência ao desgaste.", correct: true },
            { text: "Contrair a peça, facilitando sua montagem.", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "2) Onde estão disponíveis as Diretivas (Exemplo: D SRC2-17-06 – Controle de Produção)?",
        answers: [
            { text: "Outlook.", correct: false },
            { text: "Skype.", correct: false },
            { text: "Gestão de Diretivas.", correct: true },
            { text: "SAP.", correct: false }
        ]
    },
    {
        question: "3) Quando deve ser utilizado o cartão de interditado?",
        answers: [
            { text: "Para identificar peças não conformes ou suspeitas.", correct: true },
            { text: "Para entregar as peças no final do turno.", correct: false },
            { text: "Para identificar peças com tratamento térmico.", correct: false },
            { text: "Para identificar as peças faltando operação.", correct: false }
        ]
    },
    {
        question: "4) O que é uma intervenção realizada em uma máquina ou equipamento após a detecção de uma falha?",
        answers: [
            { text: "Manutenção Planejada.", correct: false },
            { text: "Manutenção Preditiva.", correct: false },
            { text: "Manutenção Preventiva.", correct: false },
            { text: "Manutenção Corretiva.", correct: true }
        ]
    },
    {
        question: "5) O que é necessário estar no posto de trabalho para que este seja considerado “ok” durante uma auditoria?",
        answers: [
            { text: "Um colaborador executando seu trabalho.", correct: false },
            { text: "Os meios de medição e inspeção contidos no roteiro, instrução de trabalho, plano de controle e desenho.", correct: true },
            { text: "Os meios de medição e inspeção especificados em desenho.", correct: false },
            { text: "Os meios de medição e inspeção similares ao do roteiro.", correct: false }
        ]
    },
    {
        question: "6) O que é uma intervenção sistemática realizada planejadamente, em períodos determinados, por meio de um plano de manutenção e um cronograma orientativo anual?",
        answers: [
            { text: "Manutenção Preventiva.", correct: true },
            { text: "Manutenção Corretiva.", correct: false },
            { text: "Manutenção Preditiva.", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "7) Onde deve-se armazenar peças não-conformes?",
        answers: [
            { text: "No posto de trabalho sem necessidade de identificação.", correct: false },
            { text: "Em uma caixa de madeira no posto de trabalho.", correct: false },
            { text: "Nos locais pré-definidos de segregação previstos para este fim (área de segregação).", correct: true },
            { text: "Em uma caixa de papelão no corredor.", correct: false }
        ]
    },
    {
        question: "8) O que é Picking List?",
        answers: [
            { text: "É um sistema eletrônico que verifica a posição das peças no estoque.", correct: false },
            { text: "É um sistema informatizado para indicar o controle de processo no abastecimento de linha.", correct: false },
            { text: "É um sistema informatizado para indicar as peças que não deverão ser montadas.", correct: false },
            { text: "Lista de materiais e quantidades necessárias para atender a ordem de produção ou entrega.", correct: true }
        ]
    },
    {
        question: "9) Conforme IATF 16949, item 8.5.4.1 (Preservação – suplemento), a organização deve usar um sistema de gestão de inventário para otimizar o giro do estoque ao longo do tempo e assegurar a rotação do estoque, isto é:",
        answers: [
            { text: "Avaliar em intervalos planejados apropriados a condição do produto no giro do estoque.", correct: false },
            { text: "Assegurar a preservação, embalagem, expedição e rotulagem, como providos pelos clientes.", correct: false },
            { text: "Assegurar a identificação, armazenamento e manuseio, desde a expedição até a entrega/aceitação pelo cliente.", correct: false },
            { text: "Utilizar a metodologia FIFO (Primeiro que entra – primeiro que sai).", correct: true }
        ]
    },
    {
        question: "10) Conforme descrito no Plano de Controle quando a frequência solicita, por exemplo, enviar 1 peça para ensaio metalúrgico, isso significa que:",
        answers: [
            { text: "Deve-se enviar como Ajuste de Máquina.", correct: false },
            { text: "Deve-se enviar como variação de processo", correct: false },
            { text: "Deve-se enviar como Periódico/Setup.", correct: true },
            { text: "Deve-se enviar como Experiência.", correct: false }
        ]
    },
    {
        question: "11) Conforme definição da documentação IT-VE-001 (Classificação de Características Especiais) utilizada especificamente para características especiais, a simbologia de Características Especiais “C” significa:",
        answers: [
            { text: "Pode continuar o processo.", correct: false },
            { text: "Pode afetar segurança.", correct: true },
            { text: "Pode afetar a função.", correct: false },
            { text: "Nenhuma das anteriores.", correct: false }
        ]
    },
    {
        question: "12) Conforme definição da documentação IT-VE-001 (Classificação de Características Especiais) utilizada especificamente para características especiais, a simbologia de Características Especiais “F” significa:",
        answers: [
            { text: "Pode afetar a função.", correct: true },
            { text: "Pode afetar o processo.", correct: false },
            { text: "Pode afetar a segurança.", correct: false },
            { text: "Nenhuma das anteriores.", correct: false }
        ]
    },
    {
        question: "13) Quando o PPAP é realizado?",
        answers: [
            { text: "Quando temos problemas de qualidade no produto.", correct: false },
            { text: "Quando cliente solicita ou o fornecedor deseja fazê-lo.", correct: false },
            { text: "Quando a máquina não tem capabilidade.", correct: false },
            { text: "Quando o produto está em processo de aprovação para fornecimento ao cliente.", correct: true }
        ]
    },
    {
        question: "14) Ferramenta da qualidade conhecida como diagrama de causa e efeito, que permite identificar e visualizar potenciais de falha, também conhecido por “espinha de peixe”, trata-se do:",
        answers: [
            { text: "Diagrama de Pareto ou Gráfico de Pareto.", correct: false },
            { text: "Histograma.", correct: false },
            { text: "Diagrama de Ishikawa.", correct: true },
            { text: "Fluxograma.", correct: false }
        ]
    },
    {
        question: "15) Alguns fatores podem nos levar à uma leitura equivocada nas medições com meios de medição analógicos, como por exemplo:",
        answers: [
            { text: "Parafuso de fixação travado.", correct: false },
            { text: "Erro de paralaxe.", correct: true },
            { text: "Não existem erros para este caso.", correct: false },
            { text: "Utilizar micrometro decimal quando é solicitado centesimal.", correct: false }
        ]
    },
    {
        question: "16) Quando detectamos cestos ou separadores danificados, devemos:",
        answers: [
            { text: "Interditar o cesto ou separadores e solicitar outro para logística.", correct: true },
            { text: "Continuar trabalhando normalmente.", correct: false },
            { text: "Alojar as peças com cuidado para que não sejam danificadas.", correct: false },
            { text: "Solicitar outro cesto e empilhar as peças umas sobre as outras.", correct: false }
        ]
    },
    {
        question: "17) Conforme D SRC2 17 02, quando detectamos produtos vencidos, por exemplo graxa, devemos:",
        answers: [
            { text: "Interditar e informar o time de qualidade.", correct: true },
            { text: "Descartar e solicitar novo produto com validade em dia.", correct: false },
            { text: "Utilizar e avisar o superior imediato.", correct: false },
            { text: "Solicitar novo produto com validade em dia após o que está vencido acabar.", correct: false }
        ]
    },
    {
        question: "18) Quando temos produtos semelhantes próximos nas prateleiras, devemos:",
        answers: [
            { text: "Analisar criticamente e verificar se são intercambiáveis.", correct: false },
            { text: "Solicitar a troca de posição de um dos produtos para evitar mistura.", correct: true },
            { text: "Avaliar se o material está embalado.", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "19) Quando realizamos a compra de peças com o sistema supermercado, devemos:",
        answers: [
            { text: "Não utilizar o pick list, realizar a compra pela própria experiência.", correct: false },
            { text: "Coletar os itens identificados pelo pick list, duas peças por compra, alocando as peças umas sobre as outras.", correct: false },
            { text: "Coletar os itens selecionados pelo sistema, deixando as peças interditadas.", correct: false },
            { text: "Coletar os itens identificados pelo pick list, uma peça por compra.", correct: true }
        ]
    },
    {
        question: "20) Conforme a diretiva DN BRA 17-23 (Ações Corretivas e Preventivas), a Ação Preventiva é:",
        answers: [
            { text: "A ação para eliminar a causa de uma não conformidade e para prevenir recorrência.", correct: false },
            { text: "A ação para eliminar uma não conformidade identificada.", correct: false },
            { text: "A ação para eliminar a causa de um potencial não conformidade ou outra situação potencialmente indesejável.", correct: true },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "21) Em que momento o operacional deve-se consultar a documentação de processo?",
        answers: [
            { text: "Somente no setup.", correct: false },
            { text: "Somente inspeção de processo", correct: false },
            { text: "Em qualquer momento, os documentos são para suportar a processo.", correct: true },
            { text: "No final do lote.", correct: false }
        ]
    },
    {
        question: "22) Conforme a diretiva DN BRA 17-23 (Ações Corretivas e Preventivas), a Ação Corretiva é:",
        answers: [
            { text: "A ação para eliminar a causa de uma não conformidade para prevenir recorrência.", correct: true },
            { text: "A ação para eliminar uma não conformidade identificada.", correct: false },
            { text: "A ação para eliminar a causa de um potencial não conformidade ou outra situação potencialmente indesejável.", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "23) Qual o objetivo da Ação de Contenção?",
        answers: [
            { text: "Eliminar a causa de um potencial não conformidade ou outra situação potencialmente indesejável.", correct: false },
            { text: "Eliminar uma não conformidade identificada.", correct: true },
            { text: "Eliminar a causa de uma não conformidade e para prevenir recorrência.", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "24) Conforme a diretiva DN BRA 17-23 PT (Ações Corretivas e Preventivas), o critério de abertura de nota D2 para falhas internas é:",
        answers: [
            { text: "100% das falhas detectadas entre áreas.", correct: false },
            { text: "100% das falhas detectadas na área e que requerem contenção fora do posto de trabalho.", correct: false },
            { text: "D2 não é requerido para falhas de setup, queda de energia e peça danificada por montagem ou desmontagem.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "25) Conforme o PO (Procedimento Organizacional), Controle de Produto não conforme é:",
        answers: [
            { text: "Produto com uma situação suspeita, o qual deve não ser classificado e controlado como produto não-conforme.", correct: false },
            { text: "Ação sobre um produto ou serviço não conforme, a fim de torná-lo conforme aos requisitos.", correct: false },
            { text: "Produto ou material que não estão conforme com seus requisitos ou especificações estabelecidas, deve ser identificado e controlado para prevenir seu uso ou entrega não pretendido.", correct: true },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "26) Conforme definição da PO (Procedimento Organizacional_ Controle de Produto NC), Retrabalho é:",
        answers: [
            { text: "Produto com uma situação não identificada, o qual deve ser retrabalhado.", correct: false },
            { text: "Ação sobre um produto ou serviço não conforme, a fim de torná-lo conforme aos requisitos. Re-inspeções deve ser considerada como retrabalho.", correct: true },
            { text: "Ação sobre um produto ou serviço não conforme, para impedir a sua utilização prevista originalmente.", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "27) Conforme a diretiva D SRC2 22-02 (Gestão de Desvios), caso seja identificada uma necessidade de modificação no processo produtivo (máquina, ferramental e equipamentos), mudança provisória, o solicitante deve emitir:",
        answers: [
            { text: "Uma nota D2.", correct: false },
            { text: "Um 5W2H.", correct: false },
            { text: "Um A3.", correct: false },
            { text: "Um Desvio de Processo.", correct: true }
        ]
    },
    {
        question: "28) Qual o objetivo de se realizar o teste de Poka Yoke antes de iniciar o turno?",
        answers: [
            { text: "Evitar que nas auditorias internas seja apontada uma não conformidade.", correct: false },
            { text: "Produzir peça/produto não conforme e enviar ao cliente.", correct: false },
            { text: "Não produzir peça/produto não conforme e enviar ao cliente.", correct: true },
            { text: "Evitar que nas inspeções volante seja apontada uma não conformidade.", correct: false }
        ]
    },
    {
        question: "29) Qual impacto de se utilizar o RG(Funcional) de outro colega na operação?",
        answers: [
            { text: "Perder rastreabilidade de quem realmente executou o trabalho.", correct: false },
            { text: "Ter como consequência a adoção de medidas disciplinares.", correct: false },
            { text: "Violar o código de conduta.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "30) Quais são as atividades e passos do operador ao utilizar o Poka Yoke?",
        answers: [
            { text: "No início de cada turno, com uso de um PC, simular um erro no processo observando o funcionamento do sistema.", correct: false },
            { text: "Caso alguma anormalidade seja encontrada, o processo deve permanecer parado até que ações sejam tomadas.", correct: false },
            { text: "Somente voltar a trabalhar se o Poka Yoke estiver funcionando corretamente.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "31) Produtos que solicitam tratamento térmico, quais as consequências do envio de uma peça sem tratamento?",
        answers: [
            { text: "Risco de quebra, danos e acidente ao usuário final.", correct: true },
            { text: "Aumento da durabilidade e vida útil.", correct: false },
            { text: "Melhora a condição de montagem.", correct: false },
            { text: "Nenhuma das anteriores.", correct: false }
        ]
    },
    {
        question: "32) Conforme a diretiva D SRC2 -17-06 (Produção) para Liberação do Processo (Set-up), o que a produção deve fazer antes de iniciar o processo produtivo?",
        answers: [
            { text: "Realizar e registrar a liberação do processo – set-up, somente quando o operador julgar necessário.", correct: false },
            { text: "Realizar e registrar a liberação do processo – set-up, fazer apontamento de todas as características solicitada em relatório.", correct: true },
            { text: "Realizar e registrar a liberação do processo – set-up, não fazer apontamentos dos valores dimensionais solicitados.", correct: false },
            { text: "Nenhuma das anteriores.", correct: false }
        ]
    },
    {
        question: "33) Produto suspeito se define por:",
        answers: [
            { text: "Produto com uma situação não identificada, o qual deve ser controlado como produto não conforme.", correct: true },
            { text: "Produto com uma situação não identificada, o qual deve ser devolvido para sua devida embalagem e seguir o processo normalmente.", correct: false },
            { text: "Produto que não está conforme com seus requisitos e especificações.", correct: false },
            { text: "Todas estão incorretas.", correct: false }
        ]
    },
    {
        question: "34) Para que tipo de situação podemos aplicar o Poka Yoke?",
        answers: [
            { text: "É aplicável somente para peças metálicas.", correct: false },
            { text: "Somente quando há divergência dimensional na peça.", correct: false },
            { text: "Em operações onde existem peças semelhantes e em grande quantidade.", correct: true },
            { text: "Todas estão incorretas.", correct: false }
        ]
    },
    {
        question: "35) Por que os 8D’s devem ser desenvolvidos em conjunto a um time multifuncional?",
        answers: [
            { text: "Porque precisamos mostrar ao cliente (interno ou externo) que várias pessoas participaram da análise.", correct: false },
            { text: "Porque precisamos garantir que todas as áreas possíveis participem ao menos uma vez na solução de um problema.", correct: false },
            { text: "Porque precisamos garantir o seguimento dos 8 passos 8D.", correct: false },
            { text: "Porque precisamos garantir a resolução da causa raiz com as maiores eficiências e eficácias possíveis.", correct: true }
        ]
    },
    {
        question: "36) Para regiões usinadas que não são pintadas nos agregados, devemos?",
        answers: [
            { text: "Passar óleo protetivo.", correct: true },
            { text: "Passar solvente.", correct: false },
            { text: "Não é necessária limpeza.", correct: false },
            { text: "Verificar as roscas e dimensional.", correct: false }
        ]
    },
    {
        question: "37) Quais os principais contaminantes que podem afetar os lubrificantes(graxa)?",
        answers: [
            { text: "Outro lubrificante de outra qualidade.", correct: false },
            { text: "Água e sujidade.", correct: false },
            { text: "Particulados de metais e outros componentes.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "38) Como pode ser detectada uma falha de usinagem ou falta de operação?",
        answers: [
            { text: "Identificação por meio do processo de salt spray.", correct: false },
            { text: "Realizando inspeção visual 100% em todos os produtos antes de entregarmos ao próximo processo.", correct: true },
            { text: "Identificação por meio do processo de laminação.", correct: false },
            { text: "Realizando inspeção visual 100% somente nos produtos que estão no Tratamento Térmico.", correct: false }
        ]
    },
    {
        question: "39) A instrução de trabalho é um documento muito importante para atividades operacionais, pois:",
        answers: [
            { text: "Contém o modo correto de se executar uma determinada atividade.", correct: false },
            { text: "Unifica o conhecimento e aumenta o nível de segurança e qualidade do processo.", correct: false },
            { text: "Ensina que a atividade tem um passo a passo detalhado a ser seguido para garantir a qualidade do produto.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "40) O que fazer quando derrubar ou bater uma peça?",
        answers: [
            { text: "Colocar de volta ao rack e avisar a área de qualidade.", correct: false },
            { text: "Identificar e segregar a peça, acionar o Monitor de Equipe ou a área da Qualidade.", correct: true },
            { text: "Retrabalhar a peça sem avisar os responsáveis.", correct: false },
            { text: "Realizar a identificação e a segregação é responsabilidade do turno seguinte.", correct: false }
        ]
    },
    {
        question: "41) Uma simples batida na esfera e rosca pode causar:",
        answers: [
            { text: "Sérios transtornos na linha de montagem e em nossos clientes.", correct: true },
            { text: "Sérios problemas de engate e problemas ambientais.", correct: false },
            { text: "Não causa danos algum.", correct: false },
            { text: "Problemas de porosidade na peça.", correct: false }
        ]
    },
    {
        question: "42) No contexto geral, como deve ser a ação de contenção quando uma peça / produto não conforme for detectada?",
        answers: [
            { text: "Deve-se checar as peças que estão no setor e no estoque.", correct: false },
            { text: "Deve-se verificar as peças que foram enviadas ao tratamento térmico e montagem.", correct: false },
            { text: "Deve-se estender a contenção para as peças em outros processos e expedição.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "43) Caso o Poka Yoke esteja reprovado, o que devo fazer?",
        answers: [
            { text: "Aviso o responsável da área e sigo a produção/montagem normalmente.", correct: false },
            { text: "Abro uma OS e continuo trabalhando até que a manutenção realize o reparo.", correct: false },
            { text: "Paro imediatamente até que ações sejam tomadas e realizo o registro em check list.", correct: true },
            { text: "Desligo o Poka Yoke durante o processo.", correct: false }
        ]
    },
    {
        question: "44) De acordo com a nova Política da Qualidade ZF, quais são os 5 princípios do DNA da Qualidade?",
        answers: [
            { text: "Pessoas, Princípios, Percepção, Produção, PDCA.", correct: false },
            { text: "Percepção, Prevenção, Performance, Produtividade, PDCA.", correct: false },
            { text: "Pessoas, Prevenção, Percepção, Performance, PDCA.", correct: true },
            { text: "Pessoas, Princípios, Produto, PDCA, Processo.", correct: false }
        ]
    },
    {
        question: "45) O DNA da Qualidade se apoia em 5 princípios. O princípio Pessoas pode ser definido como:",
        answers: [
            { text: "A estrutura do DNA da Qualidade, trazendo a reflexão das lições aprendidas e o compartilhamento de boas práticas.", correct: false },
            { text: "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.", correct: true },
            { text: "Analisar os dados e informações para melhorar a tomada de decisão.", correct: false },
            { text: "Entender as expectativas dos clientes internos e externos.", correct: false }
        ]
    },
    {
        question: "46) O DNA da Qualidade se apoia em 5 princípios. O princípio Prevenção pode ser definido como:",
        answers: [
            { text: "Analisar os dados e informações para melhorar a tomada de decisão.", correct: false },
            { text: "Assegurar o planejamento dos produtos, processos e serviços da ZF com foco no defeito zero.", correct: true },
            { text: "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.", correct: false },
            { text: "Entender as expectativas dos clientes internos e externos.", correct: false }
        ]
    },
    {
        question: "47) O DNA da Qualidade se apoia em 5 princípios. O princípio Percepção pode ser definido como:",
        answers: [
            { text: "Entender a atender as expectativas dos clientes internos e externos.", correct: true },
            { text: "Focar na definição e monitoramento dos indicadores da ZF, avaliando o desempenho, rumo à excelência em Qualidade.", correct: false },
            { text: "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.", correct: false },
            { text: "Assegurar o lançamento robusto de produto e um ciclo de vida estável.", correct: false }
        ]
    },
    {
        question: "48) O DNA da Qualidade se apoia em 5 princípios. O princípio Performance pode ser definido como:",
        answers: [
            { text: "Assegurar o lançamento robusto de produto e um ciclo de vida estável.", correct: false },
            { text: "Atuar no desenvolvimento dos colaboradores com foco em competência e cultura da qualidade.", correct: false },
            { text: "Focar na definição e monitoramento dos indicadores da ZF, avaliando o desempenho, rumo à excelência em Qualidade.", correct: true },
            { text: "Entender as expectativas dos clientes internos e externos.", correct: false }
        ]
    },
    {
        question: "49) O DNA da Qualidade se apoia em 5 princípios. O princípio PDCA pode ser definido como:",
        answers: [
            { text: "A estrutura do DNA da Qualidade, trazendo a reflexão das lições aprendidas e o compartilhamento de boas práticas.", correct: true },
            { text: "Analisar os dados e informações para melhorar a tomada de decisão.", correct: false },
            { text: "Assegurar o planejamento dos produtos, processos e serviços da ZF com foco no defeito zero.", correct: false },
            { text: "Entender as expectativas dos clientes internos e externos.", correct: false }
        ]
    },
    {
        question: "50) Conforme a diretiva D SRC2 17-06 (Produção), as peças de setup, reprovadas nas inspeções do operador na liberação do equipamento devem ser identificadas com:",
        answers: [
            { text: "Cinta plástica branca e segregadas para posterior retrabalho e Reinspeção no final do lote.", correct: false },
            { text: "Caixa de segregação ou Cinta plástica vermelha quando não for possível, devido ao tamanho das peças.", correct: true },
            { text: "Cinta plástica vermelha e segregadas, sem a necessidade de segregar reinspecionar no início do lote.", correct: false },
            { text: "Cinta plástica branca e segregadas para posterior retrabalho e Reinspeção no final de cada turno.", correct: false }
        ]
    },
    {
        question: "51) Conforme a diretiva local D SRC2 17-02 o almoxarife deve separar fisicamente os materiais conforme necessidade, ele deve verificar contaminação das peças que inclui:",
        answers: [
            { text: "Verificar oxidação nas peças", correct: false },
            { text: "Excesso de poeira nas peças.", correct: false },
            { text: "Excesso de contaminantes(óleo/graxa), que possa interferir na qualidade do produto.", correct: false },
            { text: "Todas estão corretas", correct: true }
        ]
    },
    {
        question: "52) Conforme a diretiva local D SRC2 17-02 o almoxarife, deve fazer o armazenamento das peças em recipientes:",
        answers: [
            { text: "Caçambas com madeira ou plástico dentro", correct: false },
            { text: "Caixas KLT com sujidade óleo ou graxa.", correct: false },
            { text: "Recipientes limpos, livre de qualquer contaminante", correct: true },
            { text: "Caçambas com água ou óleo.", correct: false }
        ]
    },
    {
        question: "53) De acordo com a diretiva DN BRA 17-24 (Shutdown), são considerados Shutdown as paradas planejadas ou não que são superiores a:",
        answers: [
            { text: "10 dias úteis.", correct: false },
            { text: "10 dias corridos.", correct: true },
            { text: "12 dias corridos.", correct: false },
            { text: "12 dias úteis.", correct: false }
        ]
    },
    {
        question: "54) Conforme a diretiva DN BRA 17-23 (Ações Corretivas e Preventivas), o Quality Alert deve ser utilizado para auxiliar na:",
        answers: [
            { text: "Contenção / Prevenção de falhas internas e externas, de acordo com a complexidade da falha.", correct: true },
            { text: "Contenção / Prevenção somente de falhas internas, de acordo com a complexidade da falha.", correct: false },
            { text: "Contenção / Prevenção somente de falhas externas, de acordo coma complexidade da falha.", correct: false },
            { text: "Todas estão incorretas.", correct: false }
        ]
    },
    {
        question: "55) De acordo com a diretiva DN BRA 17-24 (Shutdown), em caso de Shutdown, a Produção deve:",
        answers: [
            { text: "Cobrir os carrinhos de montagem, racks e produtos que não forem enviados ao estoque.", correct: false },
            { text: "Cobrir dos racks de componentes.", correct: false },
            { text: "Desligar equipamentos de produção (exceto quando os equipamentos não forem desligados devido à uma decisão estratégica. Exemplo: fornos).", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "56) De acordo com a diretiva DN BRA 17-24 (Shutdown), após a parada em função do Shutdown, é necessário:",
        answers: [
            { text: "Validar os poka-yokes.", correct: false },
            { text: "Revalidar os setups.", correct: false },
            { text: "Religar os equipamentos conforme sequência e prioridade definida.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "57) Conforme a diretiva DN BRA 17-02 (Controle dos Dispositivos de Medição) é de responsabilidade do usuário o envio imediato ao Laboratório ou Preset de todo meio de controle que apresentar:",
        answers: [
            { text: "Prazo de validade de calibração vencida.", correct: false },
            { text: "Falta de identificação (Ex. Etiqueta ilegível).", correct: false },
            { text: "Mal funcionamento.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "58) O Poka Yoke é conhecido como um sistema à prova de falhas, que pode identificar:",
        answers: [
            { text: "Processo faltando operação.", correct: false },
            { text: "Peça montada errada.", correct: false },
            { text: "Peça não montada.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "59) Segundo a diretiva D SRC2 22-02 (Gestão de Desvio), quando houver necessidade de modificação do processo, os principais casos que requerem emissão de desvio:",
        answers: [
            { text: "Fluxo do processo.", correct: false },
            { text: "Mudança de máquina.", correct: false },
            { text: "Poka Yoke.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "60) Conforme a instrução de trabalho (IT-GQ-007), quando houver necessidade de retrabalho, quando o mesmo deve ser realizado.",
        answers: [
            { text: "Retornar o produto à linha para realizar seu retrabalho no momento do processo", correct: false },
            { text: "Não precisa de retrabalho pode liberar o produto para expedição.", correct: false },
            { text: "Liberar o produto para o cliente.", correct: false },
            { text: "Retornar o produto à linha para realizar seu retrabalho no fim do lote de processo.", correct: true }
        ]
    },
    {
        question: "61) Conforme o item 8.5.4 – Preservação da ITAF 16949, a ZF deve garantir a preservação de seus produtos durante todo o fluxo de processo até a entrega ao cliente. Assim, a preservação deve incluir:",
        answers: [
            { text: "Identificação, manuseio e controle de contaminação.", correct: false },
            { text: "Armazenamento e embalagem.", correct: false },
            { text: "Transporte e proteção.", correct: false },
            { text: "Todas estão corretas.", correct: true }
        ]
    },
    {
        question: "62) Conforme o item 8.5.4 – Preservação da ITAF 16949 ao se detectar itens oxidados, manchados, sujos (contaminados por qualquer produto) ou com qualquer efeito visual fora da normalidade, deve-se:",
        answers: [
            { text: "Identificar, segregar as peças e avisar aos responsáveis para avaliação.", correct: true },
            { text: "Seguir fluxo normalmente.", correct: false },
            { text: "Identificar, segregar e solicitar ao turno seguinte para providenciar retrabalho.", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "63) O que é mais importante no objetivo final da Gestão da Qualidade?",
        answers: [
            { text: "Foco na produção dos produtos da empresa.", correct: false },
            { text: "Foco no cliente.", correct: true },
            { text: "Foco na venda dos produtos.", correct: false },
            { text: "Foco na obtenção do certificado ISO.", correct: false }
        ]
    },
    {
        question: "64) O que é o conceito de Indústria 4.0?",
        answers: [
            { text: "É um modelo de negócio que busca aumentar a produção.", correct: false },
            { text: "É uma tecnologia que foca na Qualidade.", correct: false },
            { text: "É uma combinação de inovações, tecnologias digitais e automatização dos processos.", correct: true },
            { text: "É um modelo que tem como característica o comércio internacional e a globalização.", correct: false }
        ]
    },
    {
        question: "65) O que é o SMED?",
        answers: [
            { text: "Conceito de manutenção integral orientado para a produção.", correct: false },
            { text: "São técnicas e esforços visando a diminuição do tempo de setup.", correct: true },
            { text: "Conceito Lean para se deixar o ambiente de trabalho mais limpo e produtivo.", correct: false },
            { text: "Ferramenta que consiste no estudo de tempos e movimentações de uma linha de produção.", correct: false }
        ]
    },
    {
        question: "66) Segundo filosofia do Lean existem 7 tipos de desperdício que afetam a eficiência e a qualidade dos processos produtivos. Qual desses, NÃO faz parte dos 7 desperdícios?",
        answers: [
            { text: "SMED", correct: true },
            { text: "Tempos de espera", correct: false },
            { text: "Estoques", correct: false },
            { text: "Superprodução", correct: false }
        ]
    },
    {
        question: "67) Conforme sistemática definida durante as ações do Task Force, quando uma Não Conformidade é identificada e oficializada pelo cliente, quais os pontos de inspeção 100% devem ser implementados imediatamente?",
        answers: [
            { text: "Firewall e Inspeção no fornecedor", correct: false },
            { text: "Inspeção de recebimento e inspeção na linha", correct: false },
            { text: "Ação de Contenção Interina (ICA) e Firewall", correct: true },
            { text: "Inspeção no fornecedor e na linha", correct: false }
        ]
    },
    {
        question: "68) O ZF Production System nos ajuda a seguir em nosso objetivo de nos tornarmos o melhor fornecedor de autopeças. Para isso, o ZF Production System estabelece 6 princípios. Qual desses princípios NÃO faz parte do ZF Production System?",
        answers: [
            { text: "Antecipação e Diversidade", correct: true },
            { text: "Inovação e processo de melhoria contínua", correct: false },
            { text: "Orientação ao processo de relação cliente-fornecedor", correct: false },
            { text: "Padronização e Flexibilidade", correct: false }
        ]
    },
    {
        question: "69) Quais dos tópicos abaixo NÃO fazem parte do ZF Way?",
        answers: [
            { text: "Responsabilidade e Empoderamento", correct: false },
            { text: "Pessoas e Performance", correct: true },
            { text: "Paixão e Diversidade", correct: false },
            { text: "Antecipação e Diversidade", correct: false }
        ]
    },
    {
        question: "70) Quais são os 5 Princípios da metodologia 5’S",
        answers: [
            { text: "Organização, utilização, padronização, limpeza, disciplina", correct: false },
            { text: "Padronização, organização, utilização, disciplina, limpeza", correct: false },
            { text: "Utilização, organização, limpeza, padronização, disciplina", correct: true },
            { text: "Limpeza, utilização, organização, disciplina, padronização", correct: false }
        ]
    },
    {
        question: "71) O PPAC é um comitê que trata de problemas relacionado ao quê?",
        answers: [
            { text: "Segurança da informação digital", correct: false },
            { text: "Segurança e proteção dos dados", correct: false },
            { text: "Segurança do produto", correct: true },
            { text: "Segurança patrimonial", correct: false }
        ]
    },
    {
        question: "72) Aspecto e impacto ambiental (causa e consequência): Qual a alternativa correta do aspecto com o seu respectivo impacto ambiental:",
        answers: [
            { text: "Vazamento de produto químico – contaminação do solo/água", correct: true },
            { text: "Geração de resíduos – alteração da qualidade do ar", correct: false },
            { text: "Liberações de gases – poluição do solo", correct: false },
            { text: "Consumo de energia elétrica – contaminação do solo", correct: false }
        ]
    },
    {
        question: "73) Em poucas palavras, qual das frases resume melhor sobre o termo ergonomia?",
        answers: [
            { text: "Adaptação do trabalho ao homem", correct: true },
            { text: "Postura correta no posto de trabalho", correct: false },
            { text: "Trabalho sem dores no corpo", correct: false },
            { text: "Não realizar movimentos repetitivos.", correct: false }
        ]
    },
    {
        question: "74) Qual ramal de emergência interno da ZF (considerando o prefixo(15) 4009 da planta SRC2.",
        answers: [
            { text: "2333", correct: false },
            { text: "7066", correct: true },
            { text: "2335", correct: false },
            { text: "Devemos ligar na portaria e solicitar ajuda", correct: false }
        ]
    },
    {
        question: "75) O que fazer em situações de emergências?",
        answers: [
            { text: "Correr e abandonar o local sem aviso prévio", correct: false },
            { text: "Remover a vítima da forma que estiver e levar até o hospital", correct: false },
            { text: "Acionar o ramal de emergência, aguardar suporte e orientações", correct: true },
            { text: "Não fazer nada, somente aguardar ajuda", correct: false }
        ]
    },
    {
        question: "76) Para trabalhos de risco (espaço confinado, altura, e quente etc.) qual deve ser o primeiro passo?",
        answers: [
            { text: "Comunicar qualquer colaborador da ZF", correct: false },
            { text: "Acionar o técnico de segurança antes do início das atividades", correct: true },
            { text: "Iniciar as atividades e depois comunicar seu superior", correct: false },
            { text: "Somente iniciar as atividades", correct: false }
        ]
    },
    {
        question: "77) Sobre o uso de colete refletivo, qual a regra?",
        answers: [
            { text: "O colete deve ser utilizado em áreas de movimentação logística", correct: true },
            { text: "Não é necessário o uso de colete refletivo", correct: false },
            { text: "Em todos os locais dentro da ZF", correct: false },
            { text: "Todas estão corretas.", correct: false }
        ]
    },
    {
        question: "78) Quais são os EPI’s básicos que devem ser utilizados por todos as acessar ambientes de produção ou oferecem algum tipo de risco (pegada amarela)?",
        answers: [
            { text: "Óculos de segurança e luva", correct: false },
            { text: "Óculos de segurança, protetor auricular e sapato de segurança", correct: true },
            { text: "Protetor auricular e creme protetivo", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ]
    },
    {
        question: "79) Como podemos atender a Política Ambiental Corporativa?",
        answers: [
            { text: "Atendendo o necessário dos requisitos legais", correct: false },
            { text: "Aumento do consumo de produtos químicos nos processos", correct: false },
            { text: "Utilização responsável dos recursos naturais economia de água, energia, matéria prima)", correct: true },
            { text: "Maximização dos impactos ambientais", correct: false }
        ]
    },
    {
        question: "80) Qual das alternativas abaixo sobre o programa LOTO está incorreto?",
        answers: [
            { text: "O objetivo principal do programa Loto é instruir os colaboradores para não tomarem choque elétrico.", correct: true },
            { text: "Se seguirmos os 5 (cinco) passos de bloqueio seguro antes de realizar uma intervenção em máquinas e equipamentos vamos garantir da atividade e evitar acidentes.", correct: false },
            { text: "Cada fonte de energia de uma máquina e/ou equipamento pode e deve ser bloqueado quando houver necessidade de realizar manutenção prevista/corretiva.", correct: false },
            { text: "As cores dos cadeados de LOTO usados na ZF são: Vermelho, Azul e laranja.", correct: false }
        ]
    },
    {
        question: "81) Com relação ao ciclo PDCA pode-se afirmar:",
        answers: [
            { text: "É uma abordagem da gestão da qualidade que significa Produzir, Detectar, Conferir e Aguardar.", correct: false },
            { text: "É uma abordagem da gestão da qualidade que significa Planejar, Fazer, Verificar e Agir.", correct: true },
            { text: "Tem um foco diferente da abordagem da melhoria contínua na gestão da qualidade.", correct: false },
            { text: "Está voltado para as decisões feitas pela alta administração da organização.", correct: false }
        ]
    },
    {
        question: "82) A ferramenta da qualidade que permite identificar as variações dos dados em um processo é?",
        answers: [
            { text: "Histograma", correct: false },
            { text: "Diagrama de Ishikawa", correct: false },
            { text: "Carta de Controle", correct: true },
            { text: "Fluxograma", correct: false }
        ]
    },
    {
        question: "83) Um dos fundamentos atuais da qualidade é:",
        answers: [
            { text: "Que sua consolidação e desenvolvimento no âmbito da organização é responsabilidade de uma área específica", correct: false },
            { text: "Buscar a maximização dos lucros como foco prioritário", correct: false },
            { text: "Estar em conformidade com as expectativas do cliente", correct: true },
            { text: "Definir o padrão do produto a partir da perspectiva originada pelo gerente da área de qualidade da organização.", correct: false }
        ]
    },
    {
        question: "84) Qual o motivo principal para a utilização de Sistemas de Controle de Qualidade em processos industriais?",
        answers: [
            { text: "Atendimento às exigências legais", correct: false },
            { text: "Redução de custos de produção", correct: false },
            { text: "Atendimento às exigências de consumidores internacionais", correct: false },
            { text: "Produção uniforme, com qualidade garantida.", correct: true }
        ]
    },
    {
        question: "85) Quais são os 5 passos do plano de reação, definido em plano de controle?",
        answers: [
            { text: "Verificar peças produzidas a partir da última medição e subsequentes; Segregar e identificar as peças produzidas; Registrar a NC; Providenciar correção do processo e controlar a 1ª peça; Persistindo a NC informar o superior da área.", correct: false },
            { text: "Registrar a NC; Verificar peças produzidas a partir da última medição e subsequentes; Segregar e identificar as peças produzidas; Providenciar correção do processo e controlar a 1ª peça; Persistindo a NC informar o superior da área.", correct: true },
            { text: "Segregar e identificar as peças produzidas; Verificar peças produzidas a partir da última medição e subsequentes; Registrar a NC; Providenciar correção do processo e controlar a 1ª peça; Persistindo a NC informar o superior da área.", correct: false },
            { text: "Segregar e identificar as peças produzidas; Verificar peças produzidas a partir da última medição e subsequentes; Providenciar correção do processo e controlar a 1ª peça; Registrar NC; Persistindo a NC informar o superior da área.", correct: false }
        ]
    },
    {
        question: "86) Qual o documento de Qualidade é a instrução de material interditado?",
        answers: [
            { text: "IO-GQ-001", correct: false },
            { text: "IT-GQ-003", correct: false },
            { text: "IT-GQ-007", correct: false },
            { text: "IO-GQ-002", correct: true }
        ]
    },
    {
        question: "87) A ferramenta da qualidade que é uma espécie de gráfico de barras que demonstra uma distribuição de frequência é?",
        answers: [
            { text: "Histograma", correct: true },
            { text: "Diagrama de Ishikawa", correct: false },
            { text: "Carta de Controle", correct: false },
            { text: "Fluxograma", correct: false }
        ]
    },
    {
        question: "88) Qual a definição de Auditoria?",
        answers: [
            { text: "Um processo realizado por Auditor independente sem um entendimento sólido dos requisitos do sistema de gestão ou sem revisar documentos relevantes.", correct: false },
            { text: "Um processo sistemático, independente e documentado para verificar a conformidade com os padrões através da revisão de evidência objetiva.", correct: true },
            { text: "Um processo sistêmico, dependente e não documentado para verificar a conformidade com os padrões através da revisão de evidência objetiva.", correct: false },
            { text: "Todas estão corretas", correct: false }
        ]
    },
    {
        question: "89) Qual são as consequências do não atendimento aos requisitos dos produtos?",
        answers: [
            { text: "Perda financeira, perda de reputação em casos extremos não coloca em risco a existência da empresa.", correct: false },
            { text: "Perda financeira, ganho de reputação e em casos extremos coloca em risco a existência da empresa.", correct: false },
            { text: "Perda financeira, perda de reputação e em casos extremos coloca em risco a existência da empresa.", correct: true },
            { text: "Todas estão incorretas", correct: false }
        ]
    },
    {
        question: "90) O conceito de interdependência na cultura de segurança significa que:",
        answers: [
            { text: "Cada área cuida apenas de seus próprios riscos.", correct: false },
            { text: "A liderança responde por todos os desvios.", correct: false },
            { text: "Todos se responsabilizam por si e pelos colegas.", correct: true },
            { text: "Apenas supervisores têm responsabilidade formal.", correct: false }
        ]
    },
    {
        question: "91) Em qual toque de sirene devo abandonar a área, e qual é o ramal de emergência?",
        answers: [
            { text: "Contínua e longa - 3600", correct: false },
            { text: "Intermitente e interrupta - 4660", correct: false },
            { text: "Contínua e longa - 7066", correct: true },
            { text: "Contínua e longa – 6670", correct: false }
        ]
    },
    {
        question: "92) Posso utilizar um produto químico na fábrica sem que haja aprovação prévia?",
        answers: [
            { text: "Sim, desde que eu leia a FISPQ do produto antes", correct: false },
            { text: "Sim, desde que seja somente um teste", correct: false },
            { text: "Não, novos produtos químicos não podem ser utilizados na fábrica", correct: false },
            { text: "Não, todo produto químico precisa ser avaliado e aprovado antes de ser colocado em teste", correct: true }
        ]
    },
    {
        question: "93) Na ZF, quem são os representantes dos funcionários para as questões de participação e consulta citadas na ISO 45001?",
        answers: [
            { text: "Equipe de EHS", correct: false },
            { text: "Equipe da Brigada de Emergência", correct: false },
            { text: "Líderes das áreas", correct: false },
            { text: "Equipe da CIPA", correct: true }
        ]
    },
    {
        question: "94) Referente ao acontecimento explicado abaixo, selecione qual a sua classificação dentro da empresa? Situação: Funcionário cortou o dedo na rebarba da peça, foi aplicado 2 pontos e retornou as atividades normais.",
        answers: [
            { text: "Acidente sem afastamento", correct: true },
            { text: "Acidente com afastamento", correct: false },
            { text: "Incidente", correct: false },
            { text: "Condição Insegura", correct: false }
        ]
    },
    {
        question: "95) Referente ao acontecimento explicado abaixo, selecione qual a sua classificação dentro da empresa? Situação: Suporte pesado da bancada de trabalho, com possibilidade de cair em membros inferiores.",
        answers: [
            { text: "Condição Insegura", correct: true },
            { text: "Near Miss", correct: false },
            { text: "Atendimento Ambulatorial", correct: false },
            { text: "Acidente com afastamento", correct: false }
        ]
    },
    {
        question: "96) Quais resíduos devemos descartar nos coletores azuis?",
        answers: [
            { text: "Latas de refrigerante e revistas", correct: false },
            { text: "Pilhas e baterias", correct: false },
            { text: "Caixas de papelão e folhas sulfite", correct: true },
            { text: "Tampas de garrafa e pilhas", correct: false }
        ]
    },
    {
        question: "97) Qual é o principal objetivo da IATF 16949?",
        answers: [
            { text: "Garantir a redução de custos de produção.", correct: false },
            { text: "Melhorar a segurança do produto final.", correct: false },
            { text: "Assegurar conformidade com requisitos de clientes automotivos.", correct: true },
            { text: "Atender às leis ambientais internacionais.", correct: false }
        ]
    },
    {
        question: "98) Qual é a abordagem de gestão de risco exigida pela IATF 16949?",
        answers: [
            { text: "FMEA somente para novos projetos.", correct: false },
            { text: "Análise SWOT integrada ao planejamento estratégico.", correct: false },
            { text: "Identificação de riscos apenas após auditorias externas.", correct: false },
            { text: "Avaliação de riscos no contexto do negócio.", correct: true }
        ]
    },
    {
        question: "99) O que a IATF exige quanto à tratativa de não conformidades?",
        answers: [
            { text: "Determinação da causa raiz e implementação de ações corretivas.", correct: true },
            { text: "Correção apenas se houver impacto financeiro.", correct: false },
            { text: "Ação corretiva sem análise de causa.", correct: false },
            { text: "Apuração da causa e correção imediata.", correct: false }
        ]
    },
    {
        question: "100) Em relação à rastreabilidade, o que é exigido?",
        answers: [
            { text: "Rastreabilidade somente de produtos não conformes.", correct: false },
            { text: "Rastreabilidade completa de componentes críticos.", correct: true },
            { text: "Rastreabilidade apenas no armazenamento.", correct: false },
            { text: "Rastreabilidade de matéria-prima por amostragem.", correct: false }
        ]
    },
    {
        question: "101) O que é PPAP segundo a IATF?",
        answers: [
            { text: "Plano de produção aprovado.", correct: false },
            { text: "Processo de aprovação de peças de produção.", correct: true },
            { text: "Protocolo de padronização de auditorias de processo.", correct: false },
            { text: "Plano preventivo de análise de produtos.", correct: false }
        ]
    },
    {
        question: "102) Como a IATF trata a responsabilidade da alta direção?",
        answers: [
            { text: "Apenas aprova o orçamento da qualidade.", correct: false },
            { text: "Delegação total ao setor operacional.", correct: false },
            { text: "Demonstra liderança e comprometimento com o SGQ.", correct: true },
            { text: "Aprova apenas auditorias externas.", correct: false }
        ]
    },
    {
        question: "103) Quais requisitos a IATF impõe sobre infraestrutura?",
        answers: [
            { text: "Instalações físicas sem manutenção são aceitas.", correct: false },
            { text: "Infraestrutura deve suportar conformidade do produto.", correct: true },
            { text: "Norma não aborda infraestrutura.", correct: false },
            { text: "Apenas infraestrutura de TI deve ser monitorada.", correct: false }
        ]
    },
    {
        question: "104) O que se entende por ambiente para operação de processos?",
        answers: [
            { text: "Ambiente virtual de monitoramento.", correct: false },
            { text: "Limpeza, organização e controle ambiental adequados.", correct: true },
            { text: "Simulações digitais de manufatura.", correct: false },
            { text: "Controle de temperatura apenas em escritórios.", correct: false }
        ]
    },
    {
        question: "105) Como a organização deve tratar o conhecimento organizacional?",
        answers: [
            { text: "Pode ser informal e não documentado.", correct: false },
            { text: "Deve ser registrado, mantido e disponibilizado conforme necessário.", correct: true },
            { text: "Somente treinamento verbal é suficiente.", correct: false },
            { text: "Compartilhado apenas com a alta direção.", correct: false }
        ]
    },
    {
        question: "106) Qual é a exigência sobre competência de pessoal?",
        answers: [
            { text: "Treinamento anual em segurança patrimonial.", correct: false },
            { text: "Formação mínima técnica obrigatória.", correct: false },
            { text: "Determinar competência, fornecer treinamento e avaliar eficácia.", correct: true },
            { text: "Apenas funcionários da qualidade precisam de qualificação.", correct: false }
        ]
    },
    {
        question: "107) Como a IATF trata a comunicação interna?",
        answers: [
            { text: "Comunicação deve ser registrada em vídeo.", correct: false },
            { text: "Comunicação é voluntária por parte da gestão.", correct: false },
            { text: "Deve ser definida, eficaz e apropriada.", correct: true },
            { text: "Apenas boletins murais são exigidos.", correct: false }
        ]
    },
    {
        question: "108) Qual a exigência sobre planejamento da produção?",
        answers: [
            { text: "Planejamento mensal é suficiente.", correct: false },
            { text: "Planejamento deve prever recursos e critérios de aceitação.", correct: true },
            { text: "Baseado em estoque mínimo.", correct: false },
            { text: "Segue ordens verbais.", correct: false }
        ]
    },
    {
        question: "109) O que se espera do controle de mudanças?",
        answers: [
            { text: "Mudanças operacionais não precisam de aprovação.", correct: false },
            { text: "Devem ser planejadas e autorizadas com avaliação de riscos.", correct: true },
            { text: "Mudanças podem ser testadas sem documentação.", correct: false },
            { text: "Apenas mudanças de layout são controladas.", correct: false }
        ]
    },
    {
        question: "110) O que é requerido em relação à calibração de instrumentos?",
        answers: [
            { text: "Apenas eletrônicos devem ser calibrados.", correct: false },
            { text: "Calibração só no recebimento.", correct: false },
            { text: "Calibração periódica com rastreabilidade a padrões reconhecidos.", correct: true },
            { text: "Substituídos por inspeção visual.", correct: false }
        ]
    },
    {
        question: "111) Qual é a abordagem da IATF para desenvolvimento de fornecedores?",
        answers: [
            { text: "Treinamento sem avaliação.", correct: false },
            { text: "Autoavaliação sem evidência.", correct: false },
            { text: "Redução de fornecedores.", correct: false },
            { text: "Monitoramento contínuo com ações de melhoria.", correct: true }
        ]
    },
    {
        question: "112) O que é exigido sobre análise de dados?",
        answers: [
            { text: "Apenas em auditorias externas.", correct: false },
            { text: "Análise visual com amostras.", correct: false },
            { text: "Uso de dados para identificar oportunidades de melhoria.", correct: true },
            { text: "Apenas se houver falhas em série.", correct: false }
        ]
    },
    {
        question: "113) A política da qualidade deve ser:",
        answers: [
            { text: "Comunicada, entendida e aplicada por toda a organização.", correct: true },
            { text: "Disponibilizada apenas ao setor de qualidade.", correct: false },
            { text: "Elaborada pelo gerente da produção.", correct: false },
            { text: "Reavaliada após auditorias externas.", correct: false }
        ]
    },
    {
        question: "114) Em relação a registros da qualidade, exige-se:",
        answers: [
            { text: "Manutenção por 10 anos.", correct: false },
            { text: "Atualização conforme cliente.", correct: false },
            { text: "Armazenamento digital e criptografado.", correct: false },
            { text: "Controle para garantir rastreabilidade e confiabilidade.", correct: true }
        ]
    },
    {
        question: "115) A IATF exige que a organização determine:",
        answers: [
            { text: "Número de auditorias externas.", correct: false },
            { text: "Competências necessárias para quem afeta a conformidade do produto.", correct: true },
            { text: "Uniforme por setor.", correct: false },
            { text: "Política de férias.", correct: false }
        ]
    },
    {
        question: "116) Qual é o papel da análise crítica pela direção?",
        answers: [
            { text: "Promoções e salários.", correct: false },
            { text: "Avaliar produtividade.", correct: false },
            { text: "Verificar eficácia do SGQ.", correct: true },
            { text: "Agendar manutenções.", correct: false }
        ]
    },
    {
        question: "117) O que se entende por objetivos da qualidade?",
        answers: [
            { text: "Planos de terceirização.", correct: false },
            { text: "Resultados não relacionados ao cliente.", correct: false },
            { text: "Criados por auditor externo.", correct: false },
            { text: "Metas mensuráveis alinhadas à política da qualidade.", correct: true }
        ]
    },
    {
        question: "118) Auditoria de segunda parte é:",
        answers: [
            { text: "Conduzida por certificadoras.", correct: false },
            { text: "Feita pela direção.", correct: false },
            { text: "Auditoria em fornecedores.", correct: true },
            { text: "Não obrigatória.", correct: false }
        ]
    },
    {
        question: "119) Conformidade com requisitos específicos do cliente significa:",
        answers: [
            { text: "Atender normas ambientais.", correct: false },
            { text: "Cumprir cláusulas financeiras.", correct: false },
            { text: "Atender exigências adicionais do cliente automotivo.", correct: true },
            { text: "Personalizar para o cliente final.", correct: false }
        ]
    },
    {
        question: "120) Qual a relação entre IATF 16949 e ISO 9001?",
        answers: [
            { text: "IATF substitui ISO.", correct: false },
            { text: "IATF é baseada na ISO 9002.", correct: false },
            { text: "Normas concorrentes.", correct: false },
            { text: "IATF incorpora a ISO 9001.", correct: true }
        ]
    },
    {
        question: "121) Em relação ao controle de documentos, exige-se:",
        answers: [
            { text: "Identificação, controle e atualização.", correct: true },
            { text: "Acesso exclusivo do setor de qualidade.", correct: false },
            { text: "Impressão tripla.", correct: false },
            { text: "Responsabilidade do RH.", correct: false }
        ]
    },
    {
        question: "122). Em que situação a IATF exige reação imediata ao cliente?",
        answers: [
            { text: "Reclamação de atendimento.", correct: false },
            { text: "Reclamação de problema de produto em campo.", correct: true },
            { text: "Problema na logística reversa.", correct: false },
            { text: "Solicitação de novo fornecedor.", correct: false }
        ]
    },
    {
        question: "123) O que melhor caracteriza uma cultura de segurança de excelência?",
        answers: [
            { text: "Adoção de EPIs obrigatórios em todas as áreas.", correct: false },
            { text: "Reação rápida a acidentes e incidentes.", correct: false },
            { text: "Integração da segurança aos valores e decisões cotidianas da empresa.", correct: true },
            { text: "Realização de auditorias externas com frequência trimestral.", correct: false }
        ]
    },
    {
        question: "124) De acordo com a ISO 45001, o envolvimento da alta direção deve incluir:",
        answers: [
            { text: "Participação em reuniões anuais com a CIPA.", correct: false },
            { text: "Assinatura de políticas de segurança elaboradas pelo SESMT.", correct: false },
            { text: "Liderança visível, tomada de decisões baseadas em riscos e apoio contínuo.", correct: true },
            { text: "Comunicação interna periódica sobre normas vigentes.", correct: false }
        ]
    },
    {
        question: "125) Qual dos seguintes fatores é a principal causa de acidentes segundo a DDS?",
        answers: [
            { text: "Falta de treinamento formal sobre procedimentos operacionais.", correct: false },
            { text: "Utilização incorreta de equipamentos de proteção coletiva.", correct: false },
            { text: "Comportamentos de risco que não são devidamente identificados e tratados.", correct: true },
            { text: "Desconhecimento da legislação vigente de segurança.", correct: false }
        ]
    },
    {
        question: "126) Qual o papel do trabalhador na gestão de riscos conforme a ISO 45001?",
        answers: [
            { text: "Cumprir as normas estabelecidas pela empresa sem questionar.", correct: false },
            { text: "Sugerer melhorias somente quando ocorrerem incidentes.", correct: false },
            { text: "Assinar relatórios de riscos elaborados pela liderança.", correct: false },
            { text: "Participar ativamente na identificação de perigos e proposição de melhorias.", correct: true }
        ]
    },
    {
        question: "127) A “pirâmide de Heinrich” demonstra que:",
        answers: [
            { text: "A maioria dos acidentes fatais ocorre por falha de máquinas.", correct: false },
            { text: "A redução de incidentes menores e quase acidentes previne eventos graves.", correct: true },
            { text: "O foco deve ser na prevenção de acidentes com afastamento.", correct: false },
            { text: "Os acidentes graves são estatisticamente imprevisíveis.", correct: false }
        ]
    },
    {
        question: "128) Um comportamento inseguro pode ser identificado quando:",
        answers: [
            { text: "Um colaborador improvisa uma solução temporária.", correct: false },
            { text: "Há uma repetição inconsciente de ações que ignoram normas preventivas.", correct: true },
            { text: "Uma tarefa nova é executada com baixa supervisão.", correct: false },
            { text: "O operador assume riscos para manter a produtividade.", correct: false }
        ]
    },
    {
        question: "129) A cultura proativa de segurança se diferencia por:",
        answers: [
            { text: "Investimento em tecnologias de controle automatizado.", correct: false },
            { text: "Penalizações imediatas por desvios identificados.", correct: false },
            { text: "Antecipação e eliminação de riscos com envolvimento coletivo.", correct: true },
            { text: "Adoção de regras rígidas impostas pela alta direção.", correct: false }
        ]
    },
    {
        question: "130) Qual das opções representa uma ação baseada em cultura de segurança reativa?",
        answers: [
            { text: "Implementar melhorias antes que ocorram acidentes.", correct: false },
            { text: "Atuar somente após a ocorrência de eventos indesejados.", correct: true },
            { text: "Realizar treinamentos comportamentais com regularidade.", correct: false },
            { text: "Monitorar os indicadores preventivos diariamente.", correct: false }
        ]
    },
    {
        question: "131) Qual é uma prática recomendada para fortalecer a cultura de segurança?",
        answers: [
            { text: "Adotar metas punitivas para acidentes.", correct: false },
            { text: "Reforçar a hierarquia na tomada de decisões.", correct: false },
            { text: "Exigir relatórios escritos de todos os desvios.", correct: false },
            { text: "Promover diálogos abertos sobre riscos e aprendizados.", correct: true }
        ]
    },
    {
        question: "132) Um bom indicador de maturidade em cultura de segurança é:",
        answers: [
            { text: "Participação ativa dos colaboradores em ações preventivas.", correct: true },
            { text: "Redução no número de inspeções obrigatórias.", correct: false },
            { text: "Volume de relatórios enviados à CIPA.", correct: false },
            { text: "Quantidade de EPIs distribuídos.", correct: false }
        ]
    },
    {
        question: "133) Qual elemento da ISO 45001 é essencial para melhoria contínua?",
        answers: [
            { text: "Avaliação individual do desempenho em segurança.", correct: false },
            { text: "Ciclo PDCA aplicado à gestão de riscos e oportunidades.", correct: true },
            { text: "Fiscalização terceirizada das normas.", correct: false },
            { text: "Priorização de controles administrativos.", correct: false }
        ]
    },
    {
        question: "134) Segundo a DDS, como deve ser tratada uma falha de comportamento inseguro?",
        answers: [
            { text: "Com advertência e reforço das regras.", correct: false },
            { text: "Com afastamento imediato do colaborador.", correct: false },
            { text: "Com análise da causa raiz e aprendizado coletivo.", correct: true },
            { text: "Com atualização do manual de segurança.", correct: false }
        ]
    },
    {
        question: "135) Qual é uma atitude típica em empresas com cultura de segurança madura?",
        answers: [
            { text: "Tolerância zero para acidentes leves.", correct: false },
            { text: "Compartilhamento espontâneo de quase acidentes.", correct: true },
            { text: "Foco exclusivo em riscos legais.", correct: false },
            { text: "Aumento da carga de treinamentos obrigatórios.", correct: false }
        ]
    },
    {
        question: "136) A ISO 45001 recomenda que as organizações priorizem:",
        answers: [
            { text: "Conformidade legal acima de tudo.", correct: false },
            { text: "Indicadores de produtividade em paralelo à segurança.", correct: false },
            { text: "Inspeções visuais e ações corretivas pontuais.", correct: false },
            { text: "Eliminação dos perigos na fonte, quando possível.", correct: true }
        ]
    },
    {
        question: "137). Um desvio de segurança deve ser:",
        answers: [
            { text: "Ignorado se não causou danos.", correct: false },
            { text: "Tratado somente após reincidência.", correct: false },
            { text: "Registrado, analisado e comunicado.", correct: true },
            { text: "Resolvido de forma informal entre colegas.", correct: false }
        ]
    },
    {
        question: "138) O conceito “zero acidentes” defendido pela DSS:",
        answers: [
            { text: "Reflete o compromisso com prevenção total e disciplina operacional.", correct: true },
            { text: "Serve apenas para motivação da equipe.", correct: false },
            { text: "É utópico e não aplicável.", correct: false },
            { text: "Aplica-se apenas a setores de alto risco.", correct: false }
        ]
    },
    {
        question: "139) O papel do feedback na segurança é:",
        answers: [
            { text: "Informar os erros cometidos em reuniões gerais.", correct: false },
            { text: "Reforçar condutas seguras de forma imediata e respeitosa.", correct: true },
            { text: "Aumentar a cobrança por resultados.", correct: false },
            { text: "Padronizar reações aos desvios.", correct: false }
        ]
    },
    {
        question: "140) Um plano de ação eficaz após um quase acidente deve incluir:",
        answers: [
            { text: "Punição proporcional ao risco gerado.", correct: false },
            { text: "Cancelamento da tarefa em questão.", correct: false },
            { text: "Investigação da causa, compartilhamento de aprendizados e controle dos riscos.", correct: true },
            { text: "Abertura de uma nova norma obrigatória.", correct: false }
        ]
    }
    // Add all 140 questions here following the same format
];

let shuffledQuestions = []; // Array para armazenar as perguntas embaralhadas
let currentQuestionIndex = 0;
let score = 0;

const questionDisplay = document.getElementById('question-display');
const answerButtonsContainer = document.getElementById('answer-buttons');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const quizEndContainer = document.getElementById('quiz-end');
const finalScoreSpan = document.getElementById('final-score');
const totalQuestionsSpan = document.getElementById('total-questions');

// Função para embaralhar um array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca elementos
    }
}

function startQuiz() {
    // Cria uma cópia do array original de perguntas e embaralha
    shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);

    currentQuestionIndex = 0;
    score = 0;
    quizEndContainer.style.display = 'none';
    nextButton.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionDisplay.innerHTML = currentQuestion.question;

    // Embaralha as alternativas para cada pergunta
    const shuffledAnswers = [...currentQuestion.answers];
    shuffleArray(shuffledAnswers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsContainer.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    feedbackElement.style.display = 'none';
    feedbackElement.textContent = '';
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    if (isCorrect) {
        selectedButton.classList.add('correct');
        feedbackElement.textContent = 'Correto!';
        feedbackElement.style.color = '#28a745';
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        feedbackElement.textContent = 'Incorreto. A resposta correta era:';
        feedbackElement.style.color = '#dc3545';
        // Mostra a resposta correta
        Array.from(answerButtonsContainer.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
        });
    }

    feedbackElement.style.display = 'block';
    nextButton.style.display = 'block';

    // Desabilita todos os botões de resposta após uma seleção
    Array.from(answerButtonsContainer.children).forEach(button => {
        button.disabled = true;
    });
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showQuizEnd();
    }
}

function showQuizEnd() {
    questionDisplay.style.display = 'none';
    answerButtonsContainer.style.display = 'none';
    feedbackElement.style.display = 'none';
    nextButton.style.display = 'none';
    quizEndContainer.style.display = 'block';
    finalScoreSpan.textContent = score;
    totalQuestionsSpan.textContent = questions.length; // Usa o total original de perguntas
}

nextButton.addEventListener('click', handleNextButton);

startQuiz();