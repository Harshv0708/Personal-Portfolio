// ========================
// Dashboard Data
// ========================
const userProfile = {
    name: "Harsh Verma",
    description: "Aspiring Software Developer | Passionate about problem-solving and full-stack development",
    college: "Your College Name",
    links: {
        linkedin: "https://www.linkedin.com/in/harshverma",
        hackerrank: "https://www.hackerrank.com/harshverma",
        leetcode: "https://leetcode.com/harshverma",
        codechef: "https://www.codechef.com/users/harshverma"
    },
    skills: ["JavaScript", "HTML", "CSS", "React", "Node.js", "SQL", "Git"],
    backgroundPhoto: "assets/bg.jpg" // replace with your image path
};

// ========================
// Functions to Render Dashboard
// ========================

// Set background image
function setBackground() {
    document.body.style.backgroundImage = `url('${userProfile.backgroundPhoto}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}

// Render name, description, college
function renderProfileInfo() {
    const nameEl = document.getElementById("name");
    const descEl = document.getElementById("description");
    const collegeEl = document.getElementById("college");

    if (nameEl) nameEl.innerText = userProfile.name;
    if (descEl) descEl.innerText = userProfile.description;
    if (collegeEl) collegeEl.innerText = userProfile.college;
}

// Render links dynamically
function renderLinks() {
    const linksContainer = document.getElementById("links");
    if (!linksContainer) return;

    for (const platform in userProfile.links) {
        const linkEl = document.createElement("a");
        linkEl.href = userProfile.links[platform];
        linkEl.target = "_blank";
        linkEl.rel = "noopener";
        linkEl.innerText = platform.charAt(0).toUpperCase() + platform.slice(1);
        linkEl.classList.add("profile-link");
        linksContainer.appendChild(linkEl);
    }
}

// Render skills dynamically
function renderSkills() {
    const skillsContainer = document.getElementById("skills");
    if (!skillsContainer) return;

    userProfile.skills.forEach(skill => {
        const skillEl = document.createElement("span");
        skillEl.classList.add("skill");
        skillEl.innerText = skill;
        skillsContainer.appendChild(skillEl);
    });
}

// ========================
// Initialize Dashboard
// ========================
function loadDashboard() {
    setBackground();
    renderProfileInfo();
    renderLinks();
    renderSkills();
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", loadDashboard);
