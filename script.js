const dataProjects = [
    {
        link: "LR-Contabilidade",
        image: "contabilidade",
        alt: "Site de contabilidade",
        type: "front"
    },
    {
        link: "Fitness",
        image: "fitnesspage",
        alt: "site de academia",
        type: "front"
    },
    {
        link: "Jazz-School",
        image: "jazz",
        alt: "Site de escola de jazz",
        type: "front"
    },
    {
        link: "Flower-Delivery",
        image: "flower",
        alt: "Catalógo de flores",
        type: "front"
    },
    {
        link: "tracking-tasks",
        image: "tracking",
        alt: "Acompanhador de tarefas",
        type: "front-vue"
    },
    {
        link: "cookingup",
        image: "cooking",
        alt: "Indicador de receitas",
        type: "front-vue"
    },
    {
        link: "todolist",
        image: "TodoList",
        alt: "Uma Api de registro de atividades em .Net",
        type: "c#"
    },
    {
        link: "JaFuiV2",
        image: "jafuiapi",
        alt: "Uma api para registro de viagens",
        type: "c#"
    },
    {
        link: "shipping-orders",
        image: "shipping-orders",
        alt: "Api para registro de envio de pedidos",
        type: "c#"
    }, 
    {
        link: "UbBarberShopManager",
        image: "barberApi",
        alt: "Api para gerenciamento de barbearia",
        type: "c#"
    },
    {
        link:"Fina",
        image:"finacore",
        alt: "Api para controle financeiro",
        type: "c#"
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
    let completLink = ""
    if (p.type === "front") {
        completLink = `https://danielraoli.github.io/${p.link}`
    } else {
        completLink = `https://${p.link}.netlify.app/`
    }
    wrappercards.insertAdjacentHTML("beforeend", `            <article class="card_project">
                
     <img src="Assets/${p.image}.png" alt="${p.alt}">
     
     <div class="actions">
         <a href="https://github.com/danielRaoli/${p.link}" target="_blank" class="link_project">
             <img src="Assets/github_733553.png" alt="ícone github">
         </a> 
         <a href="${completLink}" target="_blank" class="link_project">
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
    Sou graduado em Análise e Desenvolvimento de Sistemas e sou verdadeiramente apaixonado pelo mundo do desenvolvimento de softwares. Tenho uma habilidade inata para criar soluções eficientes para problemas, independentemente da tecnologia envolvida. Minhas principais habilidades incluem o desenvolvimento back-end utilizando .Net e C#, enquanto no front-end, minha preferência recai sobre o Angular.
    Ao longo da minha jornada profissional, adquiri experiência como freelancer, desenvolvendo aplicações e sites para a web. Minha versatilidade me permite atuar tanto na concepção e implementação de soluções back-end quanto na criação de interfaces front-end de projetos.
    Estou constantemente atualizando meus conhecimentos para acompanhar as inovações do setor, e estou pronto para contribuir de maneira proativa em projetos desafiadores.
     </p>`);

    aboutActivate = true;
    tecActivate = false;

});

if (aboutActivate) {
    aboutArea.insertAdjacentHTML('afterbegin', `<p class="description">
    Sou graduado em Análise e Desenvolvimento de Sistemas e sou verdadeiramente apaixonado pelo mundo do desenvolvimento de softwares. Tenho uma habilidade inata para criar soluções eficientes para problemas, independentemente da tecnologia envolvida. Minhas principais habilidades incluem o desenvolvimento back-end utilizando .Net e C#, enquanto no front-end, minha preferência recai sobre o Angular.
    Ao longo da minha jornada profissional, adquiri experiência como freelancer, desenvolvendo aplicações e sites para a web. Minha versatilidade me permite atuar tanto na concepção e implementação de soluções back-end quanto na criação de interfaces front-end de projetos.
    Estou constantemente atualizando meus conhecimentos para acompanhar as inovações do setor, e estou pronto para contribuir de maneira proativa em projetos desafiadores.
            </p>`)
}


