export default {
  translations: {
    navbar: {
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Meu nome é',
      is: 'e eu sou',
      adj: {
        1: 'um Web Dev',
        2: 'um Designer',
        3: 'um Aprendiz',
        4: 'um Estudante',
        5: 'um Entusiasta',
      },
    },
    time: {
      present: 'Hoje',
    },
    about: {
      title: 'Sobre mim',
      subtitle: 'Minha história (até agora)',
      education: {
        title: 'Escolaridade',
        text: {
          1: 'Graduado pelo',
          2: 'Centro de Ensino Unificado de Brasília',
          3: 'como Bacharel em Ciência da Computação. Proficiente em Python e JavaScript. Experiência em desenvolvimento web e gerenciamento de projetos.',
        },
      },
      embrapa: {
        title: 'Embrapa recursos genéticos',
        text: 'Desenvolvimento de aplicações web para o gerenciamento de dados de pesquisa e desenvolvimento de novas espécies da flora para o sistema de gerenciamento de dados de pesquisa da Embrapa.',
        comp: {
          1: 'Java',
          2: 'MySQL',
          3: 'JSP',
        },
      },
      icts: {
        title: 'Grupo ICTS',
        text: 'Desenvolvimento de sistemas web para gerenciamento de projetos internos da empresa.',
        comp: {
          1: 'React',
          2: 'NodeJS',
          3: 'MariaDB',
          4: 'ORM',
        },
      },
      rybena: {
        title: 'Rybena Tecnologias Assistivas',
        text: 'Desenvolvimento de funcionalidades de acessibilidade para a ferramenta web, manutenção e desenvolvimento de sistemas de gerenciamento interno e de clientes.',
        comp: {
          1: 'Vuejs',
          2: 'Java (Spring Boot, Hibernate)',
          3: 'Postgres',
          4: 'Javascript (DOM, Singleton)',
        },
      },
    },
    projetos: [
      {
        name: 'PCD-in',
        descricao:
          'Uma plataforma para conectar pessoas com deficiência a empresas que buscam contratar pessoas com essas condições. Tornando o mercado de trabalho mais inclusivo. Esse projeto foi o meu trabalho de conclusão de curso.',
        link: 'https://github.com/andre-vg/pcd-in',
        imagem: '/P2.png',
        tags: ['React Native', 'NodeJS', 'Expo', 'Firebase'],
      },
      {
        name: 'Currículo WEB',
        descricao:
          'Projeto para fazer meu currículo online e praticar as ferramentas de desenvolvimento web. Esse projeto eu uso como projeto modelo, tudo que aprendo eu tento aplicar no projeto. Essa é uma forma de sempre estar desenvolvendo e aprendendo.',
        link: 'https://github.com/andre-vg/new-web-cv',
        imagem: '/eu.jpg',
        tags: ['React', 'Typescript', 'Tailwind', 'i18n'],
      },
    ],
    projetosPage: {
      title: 'Projetos',
      subtitle: 'Veja alguns dos meus projetos',
      topics: 'Tópicos relacionados',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Entre em contato comigo',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar',
      },
      done: {
        title: 'Obrigado!',
        text: 'Sua mensagem foi enviada com sucesso.',
      },
    },
    footer: {
      title: ' Desenvolvido por ',
    },
  },
};
