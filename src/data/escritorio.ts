/**
 * Fonte única de verdade do conteúdo do site.
 * Para alterar telefone, endereço, horário ou áreas de atuação, edite apenas este arquivo.
 */

export interface Telefone {
  /** Como aparece na tela. Ex.: "(51) 3452-3396" */
  exibicao: string;
  /** Formato E.164, usado no link tel:. Ex.: "+555134523396" */
  e164: string;
  /** Marque o número preferencial para contato. */
  principal?: boolean;
}

export interface AreaDeAtuacao {
  /** Usado como âncora e chave. Ex.: "familia" */
  id: string;
  titulo: string;
  descricao: string;
}

export interface Endereco {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

export interface Escritorio {
  nome: string;
  oab: string;
  cidadeCurta: string;
  descricaoBreve: string;
  sobre: readonly string[];
  endereco: Endereco;
  telefones: readonly Telefone[];
  /** E-mails de contato. O primeiro é o preferencial. */
  emails: readonly string[];
  /** Somente celular com WhatsApp ativo. Deixe undefined se não houver. */
  whatsapp?: Telefone;
  horario: string;
  observacaoHorario: string;
  areas: readonly AreaDeAtuacao[];
}

export const escritorio: Escritorio = {
  nome: 'Luiza Justina Tebaldi',
  oab: 'OAB/RS 52.570',
  cidadeCurta: 'Sapucaia do Sul — RS',
  descricaoBreve:
    'Atendimento individual em direito de família, previdenciário, trabalhista e cível, no Centro de Sapucaia do Sul.',

  sobre: [
    'O escritório atende pessoas físicas em Sapucaia do Sul e na região metropolitana de Porto Alegre, com acompanhamento direto da advogada em todas as etapas do processo.',
    'O trabalho começa por entender a situação por inteiro antes de indicar qualquer caminho. Cada caso é analisado individualmente, e o cliente é informado sobre as alternativas disponíveis, os prazos envolvidos e o andamento do que foi ajuizado.',
    'O atendimento é feito na sala 104, no Centro, mediante agendamento prévio por telefone ou e-mail.',
  ],

  endereco: {
    logradouro: 'Rua Nossa Senhora da Conceição, 216',
    complemento: 'Sala 104',
    bairro: 'Centro',
    cidade: 'Sapucaia do Sul',
    uf: 'RS',
    cep: '93210-140', // CONFERIR: CEP não consta no cartão
  },

  telefones: [{ exibicao: '(51) 3452-3396', e164: '+555134523396', principal: true }],

  emails: ['luizajt@bol.com.br', 'luiza131169@gmail.com'],

  horario: 'Segunda a sexta, das 9h às 18h', // CONFERIR
  observacaoHorario: 'Atendimento mediante agendamento',

  // CONFERIR: confirmar quais áreas ela realmente atende e remover as demais.
  areas: [
    {
      id: 'familia',
      titulo: 'Direito de Família',
      descricao:
        'Divórcio, guarda, regulamentação de visitas, pensão alimentícia e reconhecimento de união estável.',
    },
    {
      id: 'sucessoes',
      titulo: 'Sucessões',
      descricao: 'Inventário judicial e extrajudicial, partilha de bens, testamentos e arrolamento.',
    },
    {
      id: 'previdenciario',
      titulo: 'Direito Previdenciário',
      descricao:
        'Aposentadorias, benefícios por incapacidade, pensão por morte e revisões junto ao INSS.',
    },
    {
      id: 'trabalho',
      titulo: 'Direito do Trabalho',
      descricao: 'Verbas rescisórias, reconhecimento de vínculo, horas extras e acidentes de trabalho.',
    },
    {
      id: 'civil',
      titulo: 'Direito Civil',
      descricao: 'Contratos, cobranças, responsabilidade civil e questões locatícias e de vizinhança.',
    },
    {
      id: 'consumidor',
      titulo: 'Direito do Consumidor',
      descricao:
        'Cobranças indevidas, inscrição irregular em cadastros de inadimplentes e vícios de produtos e serviços.',
    },
  ],
} as const;

export const enderecoLinha = (e: Endereco): string =>
  `${e.logradouro} — ${e.complemento}, ${e.bairro}, ${e.cidade} — ${e.uf}`;

export const linkMapa = (e: Endereco): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${e.logradouro}, ${e.bairro}, ${e.cidade} - ${e.uf}`,
  )}`;
