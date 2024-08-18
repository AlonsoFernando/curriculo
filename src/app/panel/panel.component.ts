import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  textAbout: string =
    'Minha trajetória profissional tem sido diversificada, mas sempre com uma forte conexão com a área de Tecnologia da Informação. \n' +
    'Ela iniciou-se diretamente na área de TI, onde pude adquirir conhecimentos em programação COBOL e desenvolvimento de software. \n' +
    'Após alguns anos, decidi empreender e fundei minha própria empresa gráfica com banho químico. \n' +
    'Essa experiência me permitiu desenvolver habilidades em gestão de negócios, liderança de equipe e resolução de problemas em um ambiente empresarial. \n' +
    'No entanto, minha paixão pela Tecnologia da Informação nunca se dissipou, e decidi retornar à área ao concluir minha graduação em Sistemas ' +
    'de Informação, e na época atuei como Analista de Sistemas, focando em garantir a eficiência dos sistemas e análise requisitos. \n' +
    'No entanto, devido à circunstâncias pessoais, precisei abandonar temporariamente a área de TI. \n' +
    'Durante esse período, busquei novos desafios ' +
    'e me tornei corretor de imóveis, onde aprimorei minhas habilidades de negociação, comunicação e relacionamento interpessoal. \n' +
    'A Tecnologia da Informação sempre esteve em meu coração, e assim que as circunstâncias permitiram, retornei à área em 2021 como ' +
    'Analista de Garantia da Qualidade (QA). \n' +
    'Desde então, tenho aplicado minha experiência anterior como Analista de Sistemas e adquirido novos conhecimentos em QA, utilizando ferramentas como ' +
    'Cypress, JavaScript, Python, RabbitMQ, JIRA, Scrum, Kanban e realizando testes manuais e automatizados. \n' +
    'Além disso, finalizei a Especialização em Testes Ágeis(pós) pela CESAR School do Recife, buscando aprimorar minhas ' +
    'habilidades e conhecimentos em práticas ágeis de teste, adquirindo conhecimento em Selenium, Postman, Jmeter, Appium, BDD e outros. \n' +
    'Sou um profissional comprometido, com habilidades analíticas e uma mentalidade orientada à qualidade e eficiência. \n' +
    'Tenho facilidade em me adaptar a novos ambientes de trabalho e estou sempre em busca de novos desafios que me permitam expandir ' +
    'meus conhecimentos e contribuir para o crescimento da empresa.';

  textInformationAdd: string =
    'Experiência na gestão de pessoas. \n' +
    'Conhecimento de rotinas administrativas/comerciais. \n' +
    'Iniciativa e disposição para adquirir novos conhecimentos. \n' +
    'Experiência em princípios, metodologias e terminologia de teste de software, incluindo testes ' +
    'funcionais, regressão, exploratórios, integração e automação. \n' +
    'Demonstrar atenção aos detalhes e meticulosidade na execução de testes de software, garantindo ' +
    'uma abordagem minuciosa e abrangente. \n' +
    'Forte habilidade no trabalho em equipe, colaborando efetivamente com diferentes stakeholders para ' +
    'alcançar resultados de qualidade. \n' +
    'Conhecimento das ferramentas de gerenciamento de projetos, como Jira, GitLab e Wiki, para rastrear ' +
    'e gerenciar bugs e tarefas, facilitando a comunicação e o acompanhamento eficiente das atividades. \n' +
    'Experiência prática em testes de automação utilizando ferramentas como Cypress, bem como ' +
    'habilidades em programação Python e Javascript para desenvolvimento de scripts de teste automatizados de API, além de ' +
    'familiaridade com Selenium, Jmeter e Postman. \n' +
    'Capacidade de criar e executar casos de teste eficazes, abrangendo cenários de teste diversos para ' +
    'garantir uma cobertura completa e precisa. \n' +
    'Familiaridade com Docker para criação e gerenciamento de contêineres, possibilitando a configuração ' +
    'de ambientes de teste reproduzíveis e isolados. \n' +
    'Experiência sólida em metodologias ágeis, como Scrum e Kanban, trabalhando em equipes ' +
    'multidisciplinares e entregando projetos dentro dos prazos estabelecidos. \n' +
    'Conhecimento em sistemas de mensageria, como RabbitMQ, para facilitar a comunicação eficiente ' +
    'entre aplicativos distribuídos e realizar testes de integração. ' +
    'Experiência em testes de integração e API, garantindo a validação adequada da interação entre os ' +
    'diferentes componentes de um sistema.';

  fitec: string = 'FITec - Inovações Tecnológicas - 2023';
  functionFitec: string = ' - Especialista em Testes jr';
  experienceFitec: string =
    'Gerenciamento de Projetos: Uso extensivo do Jira para acompanhamento de projetos ágeis e colaboração com equipes multifuncionais. \n' +
    'Participação ativa em cerimônias ágeis, como dailys, plannings, retrospectivas, e reuniões de releases, garantindo \n' +
    'comunicação eficaz e integração contínua com o desenvolvimento. \n' +
    'Testes de Software: Criação e manutenção de casos e cenários de teste utilizando a plataforma QASE. \n' +
    'Experiência em testes manuais e automatizados de sistemas complexos, desde a fase de discovery até a entrega em produção. \n' +
    'Envolvimento direto na execução de testes em relatórios e de dados no Power BI, integrados ao Data Lake. \n' +
    'Automação de Testes: Desenvolvimento de testes de API automatizados utilizando Postman (JavaScript) e JMeter para testes de carga e performance. \n' +
    'Capacidade comprovada na identificação, reporte, documentação e revalidação de bugs e problemas. \n' +
    'Ferramentas e Design: Experiência com Figma e Excalidraw para leitura de design e feedback em UX e UI. \n' +
    'Integração e Entrega: Participação em reuniões com clientes, acompanhamento de entregas de versões e releases, além da \n' +
    'subida para produção, garantindo a qualidade nas entregas finais. \n' +
    'Colaboração Ágil: Trabalho próximo com equipes de desenvolvimento e liderança, participando de reuniões \n' +
    'regulares com clientes, assegurando o alinhamento dos objetivos do projeto e as expectativas dos stakeholders.';

  cesar: string = 'CESAR - Centro de Estudos e Sistemas Avançados do Recife - 2021/2023';
  functionCesar: string = ' - QA Engineer jr';
  experienceCesar: string =
    'Participação ativa em um projeto da Indústria 4.0 (IoT). \n' +
    'Colaboração com desenvolvedores para identificar requisitos de testes e garantir a cobertura dos fluxos de trabalho. \n' +
    'Criação e manutenção de casos e cenários de teste para assegurar a adequada cobertura das funcionalidades. \n' +
    'Identificação, reporte, re-teste e validação de bugs e problemas através de ferramentas de gestão de defeitos. \n' +
    'Participação em avaliações de design e fornecimento de feedback e sugestões de melhorias. \n' +
    'Desenvolvimento de testes automatizados de integração e API com Python e testes de front manuais e com Cypress. \n' +
    'Participação em cerimônias ágeis para garantir a comunicação efetiva e a colaboração com a equipe de desenvolvimento.';

  hunters: string = 'Hunters Consultoria - 2015/2021';
  functionHunters: string =
    ' - Corretor de Imóveis/Supervisor e Coordenador de Produto e Gestão ' +
    'de equipe de vendas.';
  experienceHunters: string =
    'Coordenação de produto/plantão. \n' +
    'Atendimento a clientes e intermediação da negociação até a efetiva conclusão. \n' +
    'Apresentação de empreendimentos. \n' +
    'Reunião dos documentos e papéis que são usados na negociação.';

  luxfacta: string = 'Luxfacta Soluções de TI  - 2012/2013';
  functionLuxfacta: string = ' - Analista de Software';
  experienceLuxfacta: string =
    'Realizado o levantamento e análise dos requisitos funcionais ' +
    'e não funcionais do sistema (Força de Vendas), elaborando ' +
    'Diagramas e especificações de Casos de Uso, garantindo o ' +
    'controle do escopo e das mudanças nos requisitos. \n' +
    'Entendimento e elaboração de Especificações Funcionais e as devidas Regras de Negócio. \n' +
    'Realizado a contagem de Pontos de Função. \n' +
    'Desenvolvido mapas de Navegação, Diagramas de Atividades, Classes, Estado, Sequência. \n' +
    'Criado prototipos de interface através de wireframes. \n' +
    'Participei com a equipe técnica de reuniões de planejamento de ' +
    'Sprint, apoiando no entendimento dos requisitos. \n' +
    'Desenvolvido Planos de Validação e apoiado a equipe de testes na ' +
    'verificação e validação dos requisitos implementados para garantir a qualidade do produto. \n' +
    'Colaboração na elaboração do modelo de dados do sistema.';

  dimetal: string = 'Dimetal Artes  - 1994/2010';
  functionDimetal: string = ' - Proprietário';
  experienceDimetal: string =
    'Fui responsável pela administração, desenvolvimento e \n' +
    'produtividade de uma microempresa, pelo período de 16 anos.\n' +
    'Coordenei a área produtiva, qualidade, acabamento e controle do estoque.  \n' +
    'Criação de arte e o desenvolvimento do produto juntamente com o cliente. \n' +
    'Realização de prospecção/manutenção de clientes, orçamentos e assistência pós-venda. \n' +
    'Realização de aquisição de matéria prima/insumos.  \n' +
    'Liderança e capacitação de funcionários.';

  constructor() {}

  ngOnInit(): void {}
  panelOpenState = false;
}
