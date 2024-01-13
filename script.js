 const dataProjects = [
    {
        link:"Lr-Contabilidade",
        image:"contabilidade",
        alt: "Site de contabilidade",
        type: "front"
    },
    {
        link:"Login-Page",
        image:"loginpage",
        alt: "Tela de login e cadastro",
        type: "front"
    },
    {
        link:"Fitness",
        image:"fitnesspage",
        alt: "site de academia",
        type: "front"
    },
    {
        link:"Jazz-School",
        image:"jazz",
        alt: "Site de escola de jazz",
        type: "front"
    },
    {
        link:"Flower-Delivery",
        image:"flower",
        alt: "Catalógo de flores",
        type: "front"
    },
    {
        link:"Pet-Life",
        image:"petlife",
        alt: "site para veterinário",
        type: "front"
    }
 ]

 const wrappercards = document.querySelector(".wrapper_projects");

 dataProjects.forEach((p) => {
     wrappercards.insertAdjacentHTML("beforeend", `            <article class="card_project">
                
     <img src="Assets/${p.image}.png" alt="${p.alt}">
     
     <div class="actions">
         <a href="https://github.com/danielRaoli/${p.link}" target="_blank" class="link_project">
             <img src="Assets/github_733553.png" alt="ícone github">
         </a>
         <a href=" https://danielraoli.github.io/${p.link}" target="_blank" class="link_project">
             <img src="Assets/startup_5040561.png" alt="ícone de deploy">
         </a>
     </div>
 </article>`)
 });

