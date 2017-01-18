/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var bancos = [

    {
      name: 'Caixa Econômica Federal',
      avatar: 'svg-2',
      content: '​A Caixa é uma empresa 100% pública, e que exerce um papel fundamental no desenvolvimento urbano e da justiça social do país, vez que prioriza setores como habitação, saneamento básico, infraestrutura e prestação de serviços, contribuindo significativamente para melhorar a vida das pessoas, principalmente as de baixa renda.Além disso, ela apoia inúmeras atividades artísticas-culturais, educacionais e desportivas, garantindo um lugar de destaque no dia a dia das pessoas, pois acredita que pode fazer o melhor pelo país e por cada um de seus habitantes.'
    },

    {
      name: 'Banco do Nordeste do Brasil S.A.',
      avatar: 'svg-3',
      content: "O Banco do Nordeste do Brasil S. A. é o maior banco de desenvolvimento regional da América Latina e diferencia-se das demais instituições financeiras pela missão que tem a cumprir: Atuar como Banco de Desenvolvimento da Região Nordeste. Sua visão é a de ser o Banco preferido do Nordeste, reconhecido pela sua capacidade de promover o bem-estar das famílias e a competitividade das empresas da Região."
    },

    {
      name: 'Banco do Brasil S.A.',
      avatar: 'svg-1',
      content: 'O maior banco da América Latina, com a maior rede de agências no Brasil e no exterior. Conheça os produtos e serviços do Banco do Brasil.'
    },

    {
      name: 'Banco Santander (Brasil) S.A.',
      avatar: 'svg-4',
      content: '​Desde que foi criada, em 1861, a Caixa sempre buscou ser mais que apenas um banco, mas uma instituição realmente presente na vida de milhões de brasileiros. Ela é, por exemplo, o agente responsável pelo Fundo de Garantia do Tempo de Serviço (FGTS), pelo Programa de Integração Social (PIS) e pelo Seguro-Desemprego, institutos tão presentes na vida do trabalhador formal. Aparece ainda no momento de ajudar a população, através dos programas sociais do governo, como o Bolsa Família – que beneficia mais de 13 milhões de brasileiros, FIES e Programa Minha Casa Minha Vida.'
    },
    {
      name: 'Banco Bradesco S.A.',
      avatar: 'svg-16',
      content: '​Com um modelo de atuação eficiente, focado em atividades prioritárias, o Grupo Bradesco atua nas principais áreas do segmento financeiro, com empresas que se destacam por seu desempenho e resultados.'
    },

    {
      name: 'Itaú Unibanco S.A.',
      avatar: 'svg-15',
      content: 'O Itaú Unibanco é o maior banco privado do Brasil - e uma das maiores empresas do mundo, segundo ranking da Forbs, levando em conta atributos como negócios gerados, ativos e valor de mercado.'
    }
  ];

  // Promise-based API
  return {
    loadAllUsers: function() {
      // Simulate async nature of real remote calls
      return $q.when(bancos);
    }
  };
}

export default ['$q', UsersDataService];
