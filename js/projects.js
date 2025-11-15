// Sample projects data
const projects = [
    {
        title: "Portfolio Website",
        description: "Personal portfolio website showcasing my projects and skills.",
        link: "https://github.com/harshverma/portfolio",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "E-commerce App",
        description: "Full-stack e-commerce web application with cart and payment integration.",
        link: "https://github.com/harshverma/ecommerce",
        skills: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Hackathon Project",
        description: "Participated in Edu Blockchain Hackathon, built frontend for project.",
        link: "",
        skills: ["HTML", "CSS", "JavaScript"]
    }
];

// Function to load projects
function loadProjects() {
    const projectsContainer = document.getElementById("projects");

    projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project-card");

        const title = document.createElement("h3");
        title.innerText = project.title;

        const desc = document.createElement("p");
        desc.innerText = project.description;

        const skills = document.createElement("div");
        skills.classList.add("project-skills");
        project.skills.forEach(skill => {
            const span = document.createElement("span");
            span.classList.add("skill");
            span.innerText = skill;
            skills.appendChild(span);
        });

        div.appendChild(title);
        div.appendChild(desc);
        div.appendChild(skills);

        if(project.link){
            const a = document.createElement("a");
            a.href = project.link;
            a.target = "_blank";
            a.innerText = "View Project";
            a.classList.add("project-link");
            div.appendChild(a);
        }

        projectsContainer.appendChild(div);
    });
}

// Load projects on page ready
document.addEventListener("DOMContentLoaded", loadProjects);