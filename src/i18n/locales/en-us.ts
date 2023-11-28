export default {
  translations: {
    navbar: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'My name is',
      is: '& I am',
      adj: {
        1: 'a Web Dev',
        2: 'a Designer',
        3: 'a Learner',
        4: 'a Student',
        5: 'an Enthusiast',
      },
    },
    time: {
      present: 'Today',
    },
    about: {
      title: 'About me',
      subtitle: 'My story so far',
      education: {
        title: 'Education',
        text: {
          1: 'Graduated from',
          2: 'Unified Teaching Center of Brasília',
          3: 'with a Bachelor of Science in Computer Science. Proficient in Python and JavaScript. Experience in web development and project management.',
        },
      },
      embrapa: {
        title: 'Embrapa genetic resources',
        text: 'Development of web applications for the management of research data and development of new species of plants for the Embrapa research data management system.',
        comp: {
          1: 'Java',
          2: 'MySQL',
          3: 'JSP',
        },
      },
      icts: {
        title: 'ICTS Group',
        text: 'Development of web systems for internal project management.',
        comp: {
          1: 'React',
          2: 'NodeJS',
          3: 'MariaDB',
          4: 'ORM',
        },
      },
      rybena: {
        title: 'Rybena Assistive Technologies',
        text: 'Development of accessibility features for the web tool, maintenance and development of internal and client management systems.',
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
          'A platform to connect people with disabilities to companies looking to hire people with these conditions. Making the job market more inclusive. This project was my undergraduate thesis.',
        link: 'https://github.com/andre-vg/pcd-in',
        imagem: '/P2.png',
        tags: ['React Native', 'NodeJS', 'Expo', 'Firebase'],
      },
      {
        name: 'WEB CV',
        descricao:
          'Project to create my online resume and practice web development tools. I use this project as a model project, I try to apply everything I learn to the project. This is a way to always be developing and learning.',
        link: 'https://github.com/andre-vg/new-web-cv',
        imagem: '/eu.jpg',
        tags: ['React', 'Typescript', 'Tailwind', 'i18n'],
      },
    ],
    projetosPage: {
      title: 'Projects',
      subtitle: 'Here are some of my projects',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with me',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
      },
    },
  },
};
