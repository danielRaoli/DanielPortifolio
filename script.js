const dataProjects = [
    {
        link: "https://lr-contabilidade.vercel.app/",
        image: "contabilidade",
        alt: "Site de contabilidade",
        type: "front",
        gitLink: "https://github.com/DanielRaoli/Lr-Contabilidade"
    },
    {
        link: "https://danielraoli.github.io/Fitness/",
        image: "fitnesspage",
        alt: "site de academia",
        type: "front",
        gitLink: "https://github.com/DanielRaoli/Fitness"
    },
    {
        link: "https://danielraoli.github.io/Jazz-School/",
        image: "jazz",
        alt: "Site de escola de jazz",
        type: "front",
        gitLink: "https://github.com/DanielRaoli/Jazz-School"
    },
    {
        link: "https://danielraoli.github.io/Flower-Delivery/",
        image: "flower",
        alt: "Catalógo de flores",
        type: "front",
        gitLink: "https://github.com/DanielRaoli/Flower-Delivery"
    },
    {
        link: "https://www.gsanalytics.com.br/",
        image: "GsAnalytics",
        alt: "Site GsAnalytics",
        type: "front",
        gitLink: "https://github.com/DanielRaoli/Gsalanalytics"
    },
    {
        link: "https://www.marceloturismo.com/",
        image: "Fretamento",
        alt: "Site Fretamento",
        type: "front",
        gitLink: "https://github.com/DanielRaoli/sistema-fretamento"
    },
    {
        link: "",
        image: "Restaurante",
        alt: "Site Restaurante",
        type: "front",
        gitLink: ""
    },

    

]

const dataskills = [
    {
        name: "jsimage",
        alt: "ícone js"
    },
    {
        name: "cssimage",
        alt: "ícone css"
    },
    {
        name: "html_1051277",
        alt: "ícone html"
    },
    {
        name: "tsimage",
        alt: "ícone type script"
    },
    {
        name: "c-sharp_6132221",
        alt: "ícone c#"
    },
    {
        name: "netimage",
        alt: "ícone .Net"
    },
    {
        name: "sqlserverimage",
        alt: "ícone sql server"
    },
    {
        name: "dockerimage",
        alt: "ícone docker"
    },
    {
        name: "gitimag ",
        alt: "ícone git"
    }

]



const wrappercards = document.querySelector(".wrapper_projects");

dataProjects.forEach((p) => {

    wrappercards.insertAdjacentHTML("beforeend", `            <article class="card_project">
                
     <img src="Assets/${p.image}.png" alt="${p.alt}">
     
     <div class="actions">
         <a href="${p.gitLink}" target="_blank" class="link_project">
             <img src="Assets/github_733553.png" alt="ícone github">
         </a> 
         <a href="${p.link}" target="_blank" class="link_project">
             <img src="Assets/startup_5040561.png" alt="ícone de deploy">
         </a>
     </div>
 </article>`)
});



const btnAbout = document.querySelector('#btn-about');
const btnTec = document.querySelector('#btn-tec');
const aboutArea = document.querySelector('#about-area')

let tecActivate = false;
let aboutActivate = true;

btnTec.addEventListener('click', () => {

    if (tecActivate) {
        return;
    }

    aboutArea.removeChild(aboutArea.firstChild);
    const wraperSkills = document.createElement('div');
    wraperSkills.classList.add('wrapper_skill');

    dataskills.forEach((skill) => {
        wraperSkills.insertAdjacentHTML('beforeend', `
    <div class="skill">
        <img src="Assets/${skill.name}.png" alt="${skill.alt}">
    </div>`)
        aboutArea.insertAdjacentElement('afterbegin', wraperSkills);
        const skills = document.querySelectorAll('.skill');

        skills.forEach((skill) => {
            setTimeout(() => {
                skill.classList.add('-activate')
            }, 100)
        })
        tecActivate = true;
        aboutActivate = false;

    });
});




btnAbout.addEventListener('click', () => {
    if (aboutActivate) {
        return;
    }
    aboutArea.removeChild(aboutArea.firstChild);

    aboutArea.insertAdjacentHTML('afterbegin', `<p class="description">
   Sou desenvolvedor Full Stack, formado em Análise e Desenvolvimento de Sistemas (2023). Trabalho com C# há 3 anos e também atuo no front-end com React e Next.js, criando desde landing pages até sistemas completos.

Fundador da Brothers Company, desenvolvo soluções web sob medida, passando por APIs, automações e softwares personalizados. Meu foco é simples: usar tecnologia para resolver problemas de verdade, independente da ferramenta.
     </p>`);

    aboutActivate = true;
    tecActivate = false;

});

if (aboutActivate) {
    aboutArea.insertAdjacentHTML('afterbegin', `<p class="description">
Sou desenvolvedor Full Stack, formado em Análise e Desenvolvimento de Sistemas (2023). Trabalho com C# há 3 anos e também atuo no front-end com React e Next.js, criando desde landing pages até sistemas completos.

Fundador da Brothers Company, desenvolvo soluções web sob medida, passando por APIs, automações e softwares personalizados. Meu foco é simples: usar tecnologia para resolver problemas de verdade, independente da ferramenta.
            </p>`)
}


