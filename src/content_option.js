import OhMyFood from './assets/images/2024-05-31 121901.webp';
import OhMyFoodSmartphone from './assets/images/OhMyFoodSmart.webp';
import Kasa from './assets/images/kasa-desktop.webp';
import KasaSmart from './assets/images/kasa-smart.webp';
import buel from './assets/images/buel-desktop.webp';
import buelSmart from './assets/images/buel-smart.webp';
import booki from './assets/images/Booki.webp';
import bookiSmart from './assets/images/bookiSmart.webp';
import nina from './assets/images/nina.webp';
import ninaSmart from './assets/images/ninaSmart.webp';
const logotext = "P.V";
const meta = {
    title: "Pierrick Viarde",
    description: "Bonjour Pierrick Viarde développeur web frontend",
};

const introdata = {
    title: "Je suis Pierrick Viarde",
    animated: {
        first: "développeur web frontend",
        second: "j'aime créer",
        third: "j'aime coder",
    },
    description: "Développeur web frontend passioné ",
    your_img_url: "https://photos.app.goo.gl/bke5gDvSb55fokd66",
};

const dataabout = {
    title: "à propos de moi",
    aboutme: "Je suis un Développeur Web Front-End junior passionné, spécialisé dans la création d'interfaces utilisateur conviviales et réactives. J'ai de bonnes connaissances dans les technologies front-end telles que HTML, CSS, JavaScript, avec une préférence pour React.<br /><br />Mon sens aiguisé du design me permet de transformer les maquettes en interfaces web fonctionnelles et visuellement attrayantes. Je suis également reconnu pour ma capacité à résoudre rapidement les problèmes de code, à optimiser le rendu des pages et à garantir une expérience utilisateur fluide.<br /><br />Je travaille efficacement en équipe, je communique clairement et je suis toujours prêt à apprendre de nouvelles technologies pour rester à jour dans ce domaine en constante évolution.",
};



    





const dataportfolio = [{
    id: 1,
    title: "OhMyFood",
    captureDesktop: OhMyFood,
    captureSmartphone: OhMyFoodSmartphone, 
    description: "Projet d'étude réalisé avec HTML et Sass. Réalisé pour travailler le principe d'animation et l'interactivité avec les utilisateurs.",
    responsive: "Desktop / Tablette / Smartphone",
    link: "https://ohmyfood8956.netlify.app/",
    gitLink : "https://github.com/pierrick3773/oh_my_food.git"
},
{
    id: 2,
    title: "Kasa",
    captureDesktop: Kasa,
    captureSmartphone: KasaSmart, 
    description: "Projet d'étude réalisé avec React et Sass. Réalisé pour travailler la logique de composants",
    responsive: "Desktop / Tablette / Smartphone",
    link: "https://kasapierrickviarde.netlify.app/",
    gitLink : "https://github.com/pierrick3773/Kasa.git"
},
{
    id: 3,
    title: "Sophie Buel",
    captureDesktop: buel,
    captureSmartphone: buelSmart, 
    description: "Projet d'étude réalisé avec JavaScript et CSS. Réalisé pour travailler sur JavaScript et la communication avec le Backend.",
    responsive: "Desktop / Tablette / Smartphone",
    
    gitLink : "https://github.com/pierrick3773/Kasa.git"
},

{
    id: 4,
    title: "Booki",
    captureDesktop: booki,
    captureSmartphone: bookiSmart, 
    description: "Projet d'étude réalisé avec Html et CSS. Réalisé pour travailler la mise en page et le responsive",
    responsive: "Desktop / Tablette / Smartphone",
    
    gitLink : "https://github.com/pierrick3773/index_booki_version_finale.git"
},

{
    id: 4,
    title: "Nina Carducci",
    captureDesktop: nina,
    captureSmartphone: ninaSmart, 
    description: "Projet d'étude réalisé avec JS et CSS. Réalisé pour travailler le SEO et le debugage",
    responsive: "Desktop / Smartphone",
    
    gitLink : "https://github.com/pierrick3773/index_booki_version_finale.git"
},
   
];

const contactConfig = {
    YOUR_EMAIL: "pviarde@gmail.com",
    YOUR_FONE: "0769047307",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_az7amdh",
    YOUR_TEMPLATE_ID: "template_mr8nqch",
    YOUR_USER_ID: "vPFZNRhomgC_HFgq1",
};

const socialprofils = {
    github: "https://github.com/pierrick3773",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/pierrick-viarde/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
   
   
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};