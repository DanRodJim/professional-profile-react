import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "English": "English",
      "Spanish": "Spanish",
      
      "Main": "Main",
      "Studies": "Studies",
      "Skills": "Skills",
      "Experience": "Experience",
      "Hobbies": "Hobbies",
      "About this page": "About this page",
      
      "Daniel Gustavo Rodriguez Jimenez": "Daniel Gustavo Rodriguez Jimenez",
      "Software Engineer": "Software Engineer",
      
      "Hello and welcome to my profile page!": "Hello and welcome to my profile page!",
      "main_intro": "My name is Daniel Gustavo Rodriguez Jimenez, I'm a Software Engineer with 4 years of experience. I specialize in backend systems development, but I also have the knowledge and skills to work as a full-stack developer. I'm a huge technology and engineering enthusiast, and I often explore different topics that interest me, so I'm always learning new things. I'm the kind of person who isn't satisfied with the bare minimum when it comes to software development. I always try to implement different ideas and approaches to the various problems I encounter, striving to make the solution as polished and efficient as possible.",
      
      "This project was made using React, CSS and JavaScript.": "This project was made using React, CSS and JavaScript.",
      "I did this to show some of my skills as Software Engineer.": "I did this to show some of my skills as Software Engineer.",
      "If you want to know more about my work please contact me at my email: dgrj.tec@gmail.com": "If you want to know more about my work please contact me at my email: dgrj.tec@gmail.com",
      "Or check the links in the footer of this page.": "Or check the links in the footer of this page.",
      
      "Senior Software Engineer - Wind River": "Senior Software Engineer - Wind River",
      "September 2020 - May 2024": "September 2020 - May 2024",
      "Software Engineer member of the team in charge of the backend for an authentication and authorization system for a large-scale project.": "Software Engineer member of the team in charge of the backend for an authentication and authorization system for a large-scale project.",
      "Some of my responsibilities and achievements:": "Some of my responsibilities and achievements:",
      "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.": "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.",
      "Optimization of code performance to improve user experience and system efficiency.": "Optimization of code performance to improve user experience and system efficiency.",
      "Regularly reviewed peer code contributions, offering constructive feedback to improve overall product quality.": "Regularly reviewed peer code contributions, offering constructive feedback to improve overall product quality.",
      "Worked with project manager, developers, quality assurance, and customers to resolve technical issues.": "Worked with project manager, developers, quality assurance, and customers to resolve technical issues.",
      "Tech Stack:": "Tech Stack:",
      
      "Software Engineer Intern - GoLabs Tech": "Software Engineer Intern - GoLabs Tech",
      "January 2020 - February 2020": "January 2020 - February 2020",
      "Three weeks of internship learning about the work environment and technologies like Ruby on Rails, Docker, and Git.": "Three weeks of internship learning about the work environment and technologies like Ruby on Rails, Docker, and Git.",
      "Migration of a project from Ruby on Rail version 5 to Ruby on Rails version 6.": "Migration of a project from Ruby on Rail version 5 to Ruby on Rails version 6.",
      "This internship was part of the prize for winning a programming contest.": "This internship was part of the prize for winning a programming contest.",
      
      "My Hobbies & Interests": "My Hobbies & Interests",
      "Travel": "Travel",
      "I have visited some different countries like Japan, Denmark, Switzerland, among others.": "I have visited some different countries like Japan, Denmark, Switzerland, among others.",
      "Soccer": "Soccer",
      "I frequently play soccer with friends and watch professional matches when my favorite teams play.": "I frequently play soccer with friends and watch professional matches when my favorite teams play.",
      "Gaming": "Gaming",
      "I relax from long days playing some of my favorite video games. My favorite one is Dota 2.": "I relax from long days playing some of my favorite video games. My favorite one is Dota 2.",
      "Anime and Manga": "Anime and Manga",
      "I have watched anime and read manga since my childhood and I still enjoy it a lot.": "I have watched anime and read manga since my childhood and I still enjoy it a lot.",
      
      "Hard Skills": "Hard Skills",
      "Soft Skills": "Soft Skills",
      "This are my hard skills and the level of mastering I have on them:": "This are my hard skills and the level of mastering I have on them:",
      "These are some attributes that define me as a worker and as a person:": "These are some attributes that define me as a worker and as a person:",
      
      "Problem Solving": "Problem Solving",
      "Adaptative": "Adaptative",
      "Continuos Learning": "Continuos Learning",
      "Assertive communication": "Assertive communication",
      "Empathic": "Empathic",
      "Proactive": "Proactive",
      "Time management and self-management": "Time management and self-management",
      "Critical thinking": "Critical thinking",
      "Responsible": "Responsible",
      "Teamwork and Colaboration": "Teamwork and Colaboration",
      "Focused on solutions": "Focused on solutions",
      "Attention to detail": "Attention to detail",
      
      "University": "University",
      "university_description": "I graduated from the Costa Rica Institute of Technology with a Bachelor's degree in Computer Engineering. I must say that my time at university was very important because of the amount I learned, not only about my field of study but also about aspects of life and even about myself. During my university years, I had many experiences, both good and bad; I faced setbacks and made mistakes from which I had to learn and overcome. Beyond my talent, I also had to demonstrate a strong attitude and great effort to earn my degree, and now I can proudly say that I succeeded and overcame a huge challenge that is now the cornerstone of my professional career.",
      "Certifications": "Certifications",
      
      "Welcome to my portfolio": "Welcome to my portfolio"
    }
  },
  es: {
    translation: {
      "English": "Inglés",
      "Spanish": "Español",
      
      "Main": "Inicio",
      "Studies": "Estudios",
      "Skills": "Habilidades",
      "Experience": "Experiencia",
      "Hobbies": "Pasatiempos",
      "About this page": "Sobre esta página",
      
      "Daniel Gustavo Rodriguez Jimenez": "Daniel Gustavo Rodríguez Jiménez",
      "Software Engineer": "Ingeniero de Software",
      
      "Hello and welcome to my profile page!": "¡Hola y bienvenido a mi página de perfil!",
      "main_intro": "Me llamo Daniel Gustavo Rodríguez Jiménez y soy Ingeniero de Software con 4 años de experiencia. Me especializo en desarrollo de sistemas backend, pero también cuento con los conocimientos y habilidades para trabajar como desarrollador full-stack. Soy un gran entusiasta de la tecnología y la ingeniería, y suelo explorar diferentes temas que me interesan, por lo que siempre estoy aprendiendo cosas nuevas. Soy de los que no se conforman con lo mínimo en cuanto al desarrollo de software. Siempre intento implementar diferentes ideas y enfoques a los diversos problemas que encuentro, buscando que la solución sea lo más pulida y eficiente posible.",
      
      "This project was made using React, CSS and JavaScript.": "Este proyecto fue creado usando React, CSS y JavaScript.",
      "I did this to show some of my skills as Software Engineer.": "Hice esto para mostrar algunas de mis habilidades como Ingeniero de Software.",
      "If you want to know more about my work please contact me at my email: dgrj.tec@gmail.com": "Si quieres saber más sobre mi trabajo ponte en contacto conmigo a mi correo electrónico: dgrj.tec@gmail.com",
      "Or check the links in the footer of this page.": "O consulte los enlaces en el pie de página de esta web.",
      
      "Senior Software Engineer - Wind River": "Ingeniero de Software Senior - Wind River",
      "September 2020 - May 2024": "Setiembre 2020 - Mayo 2024",
      "Software Engineer member of the team in charge of the backend for an authentication and authorization system for a large-scale project.": "Ingeniero de Software miembro del equipo a cargo del backend para el sistema de autorización y autenticación de un proyecto de gran escala.",
      "Some of my responsibilities and achievements:": "Algunas de mis responsabilidades y logros:",
      "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.": "Revisar las especificaciones del proyecto y diseñar soluciones tecnológicas que alcancen o excedan las espectativas de desempeño.",
      "Optimization of code performance to improve user experience and system efficiency.": "Optimización del desempeño del código para mejorar la experiencia del usuario y la eficiencia del sistema.",
      "Regularly reviewed peer code contributions, offering constructive feedback to improve overall product quality.": "Revisar regularmente contribuciones de código de mis compañeros de equipo, ofreciendo retroalimentación constructiva para mejorar la calidad general del producto.",
      "Worked with project manager, developers, quality assurance, and customers to resolve technical issues.": "Trabajar junto al gerente de proyecto, desarrolladores, control de calidad y los clientes para resolver problemas técnicos.",
      "Tech Stack:": "Tecnologías:",
      
      "Software Engineer Intern - GoLabs Tech": "Pasantía como Ingeniero de Software - GoLabs Tech",
      "January 2020 - February 2020": "Enero 2020 - Febrero 2020",
      "Three weeks of internship learning about the work environment and technologies like Ruby on Rails, Docker, and Git.": "Pasantía de tres semanas en donde aprendí sobre el ambiente laboral y tecnologías como Ruby on Rails, Docker y Git.",
      "Migration of a project from Ruby on Rail version 5 to Ruby on Rails version 6.": "Migración de un proyecto de Ruby on Rails versión 5 a Ruby on Rails versión 6",
      "This internship was part of the prize for winning a programming contest.": "Esta pasantía forma parte del premio por haber ganado un torneo de programación",
      
      "My Hobbies & Interests": "Mis Pasatiempos e Intereses",
      "Travel": "Viajar",
      "I have visited some different countries like Japan, Denmark, Switzerland, among others.": "He visitado varios países diferentes tales como Japón, Dinamarca, Suiza, entre otros.",
      "Soccer": "Fútbol",
      "I frequently play soccer with friends and watch professional matches when my favorite teams play.": "Frecuentemente salgo a jugar fútbol con amigos y me gusta observar los partidos profesionales de mis equipos favoritos.",
      "Gaming": "Videojuegos",
      "I relax from long days playing some of my favorite video games. My favorite one is Dota 2.": "Me relajo de días largos y cansados al jugar algunos de mis videojuegos favoritos. Mi videojuego favorito es Dota 2.",
      "Anime and Manga": "Anime y Manga",
      "I have watched anime and read manga since my childhood and I still enjoy it a lot.": "He visto anime y leído manga desde mi juventud y aún disfruto mucho al hacerlo",
      
      "Hard Skills": "Habilidades Técnicas",
      "Soft Skills": "Habilidades Blandas",
      "This are my hard skills and the level of mastering I have on them:": "Estas son mis habilidades técnicas y el nivel de dominio que tengo en ellas:",
      "These are some attributes that define me as a worker and as a person:": "Estos son algunos atributos que me definen como trabajador y como persona:",
      
      "Problem Solving": "Solución de problemas",
      "Adaptative": "Adaptativo",
      "Continuos Learning": "Aprendizaje continuo",
      "Assertive communication": "Comunicación asertiva",
      "Empathic": "Empático",
      "Proactive": "Proactivo",
      "Time management and self-management": "Gestión del tiempo y autogestión",
      "Critical thinking": "Pensamiento crítico",
      "Responsible": "Responsable",
      "Teamwork and Colaboration": "Trabajo en equipo y colaboración",
      "Focused on solutions": "Enfocado en soluciones",
      "Attention to detail": "Atención al detalle",
      
      "University": "Universidad",
      "university_description": "Soy graduado del Tecnológico de Costa Rica en la carrera de Ingeniería en Computación con el grado de bachillerato universitario. Debo decir que mi paso por la universidad fue muy importante por la cantidad de cosas que aprendí, no solo sobre la carrera sino también sobre aspectos de la vida e incluso sobre mi mismo. Durante la universidad tuve muchas experiencias, buenas y malas, tuve tropiezos y errores de los que tuve que aprender y levantarme. Más allá de mi talento, tuve también que poner una gran actitud y esfuerzo para lograr obtener mi título universitario y ahora con orgullo puedo decir que logré salir adelante y superar un reto enorme que ahora es la piedra angular de mi carrera profesional.",
      "Certifications": "Certificaciones",
      
      "Welcome to my portfolio": "Bienvenido a mi portafolio"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;