import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  textAbout: string =
    'Minha carreira em TI iniciou-se em 1977, ' +
    'quando tive a oportunidade de conhecer o IBM/3 e CII Honeywell Bull, ' +
    'juntamente com a primeira linguagem de programação(Cobol). \n' +
    'Entretanto, a necessidade me afastou da área por alguns anos. \n' +
    'Mas, me apaixonei pela TI, então, resolvi cursar a faculdade e em 2012 ' +
    'estava formado em Sistemas de Informação e consequentemente fui admitido ' +
    'em uma empresa de desenvolvimento para análise de requisitos, integrando ' +
    'uma equipe de Engenharia de Software. \n' +
    'Mais uma vez a vida me obrigou a me afastar, mas eu não desisto nunca e ' +
    'atualmente o meu objetivo é retornar ao mercado de TI e para tanto, desde ' +
    'o início deste ano(2021), faço atualizações por intermédio da Digital Inovation One ' +
    'e por outras plataformas, conforme a necessidade. \n' +
    'Com a graça de Deus, em breve estarei de volta.';

  textInformationAdd: string =
    'Experiência na gestão de pessoas. \n' +
    'Conhecimento de rotinas administrativas/comerciais. \n' +
    'Iniciativa e disposição para adquirir novos conhecimentos. \n' +
    'Habilidade para trabalhar em equipe e transmitir conhecimento. \n' +
    'Realizando atualização na área de TI por intermédio da Digital Inovation One(DIO) e outras plataformas.\n' +
    'Desenvolvendo projeto em Angular e Bootstrap. \n\n' +
    'Acompanhamento de resultados, organização, criatividade, facilidade de adaptação e aprendizagem, trabalho em grupo, \n' +
    'persistência, auto-contole sob pressão, apreciação por desafios, são algumas características.';

  hunters: string = 'Hunters Consultoria - 2015/2021';
  functionHunters: string =
    ' - Corretor de Imóveis/Supervisor e Coordenador de Produto Gestão ' +
    'de equipe de vendas.';
  experienceHunters: string =
    'Coordenação de produto/plantão. \n' +
    'Atendimento a clientes e intermediação da negociação até a efetiva conclusão. \n' +
    'Apresentação de empreendimentos. \n' +
    'Reunião dos documentos e papéis que são usados na negociação.';

  embracon: string = 'Embracon Adm. de Consórcios - 2013/2015';
  functionEmbracon: string = ' - Vendedor de consórcios';
  experienceEmbracon: string =
    'Atendimento a clientes e intermediação da negociação. \n' +
    'Apresentação de planos de veículos/imóveis. \n' +
    'Reunião dos documentos e papéis que são usados na negociação.';

  luxfacta: string = 'Luxfacta Soluções de TI  - 2012/2013';
  functionLuxfacta: string = ' - Analista de Software';
  experienceLuxfacta: string =
    'Realizei o levantamento e análise dos requisitos funcionais \n' +
    'e não funcionais do sistema (Força de Vendas), elaborando \n' +
    'Diagramas e especificações de Casos de Uso, garantindo o \n' +
    'controle do escopo e das mudanças nos requisitos. \n' +
    'Entendimento e elaboração de Especificações Funcionais e as devidas Regras de Negócio. \n' +
    'Realizei a contagem de Pontos de Função. \n' +
    'Desenvolvi mapas de Navegação, Diagramas de Atividades, Classes, Estado, Sequência. \n' +
    'Criei prototipos de interface através de wireframes. \n' +
    'Atuei junto com o Product Owner na priorização dos itens do \n' +
    'backlog e elaboração dos Critérios de Aceitação. \n' +
    'Participei com a equipe técnica de reuniões de planejamento de \n' +
    'Sprint, apoiando no entendimento dos requisitos. \n' +
    'Desenvolvi Planos de Validação e apoiei a equipe de testes na \n' +
    'verificação e validação dos requisitos implementados para garantir a qualidade do produto. \n' +
    'Colaborei na elaboração do modelo de dados do sistema';

  dimetal: string = 'Dimetal Artes  - 1994/2010';
  functionDimetal: string = ' - Proprietário';
  experienceDimetal: string =
    'Fui responsável pela administração, desenvolvimento e \n' +
    'produtividade de uma microempresa, pelo período de 16 anos.\n' +
    'Coordenei a área produtiva, qualidade, acabamento e controle do estoque.  \n' +
    'Fazia a criação de arte e o desenvolvimento do produto juntamente com o cliente. \n' +
    'Realizei a prospecção/manutenção de clientes, orçamentos e assistência pós-venda. \n' +
    'Realizei a aquisição de matéria prima/insumos.  \n' +
    'Liderei e capacitei funcionários.';

  constructor() {}

  ngOnInit(): void {}
  panelOpenState = false;
}
