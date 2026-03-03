const projects = [
  {
    title: "MotionOnScroll (MOS)",
    description: "MotionOnScroll (MOS) is a tiny, dependency-free library that makes it easy to add polished scroll-triggered animations to your website.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-19",
    link: "https://motion-on-scroll.netlify.app/",
    keywords: "motion on scroll mos animation library",
    category: "animation library",
  },
  {
    title: "PDF Merger App",
    description: "Combine multiple PDF files instantly in your browser. No uploads, no watermarks, and no registration required.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    imageClass: "project-1",
    link: "https://girish18-pdf-merger.netlify.app/",
    keywords: "pdf merger app",
    category: "web app",
  },
  {
    title: "Background Remover APP",
    description: "A free online image background remover app.",
    tags: ["HTML", "CSS", "JavaScript", "RemoveBG API"],
    imageClass: "project-2",
    link: "https://girish18-bg-remover.netlify.app/",
    keywords: "background remover app image removebg",
    category: "web app",
  },
  {
    title: "QR Code Generator",
    description: "A QR Code Generator App where you can create your QR Code.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-3",
    link: "https://girish18-qr-code.netlify.app/",
    keywords: "qr code generator",
    category: "web app",
  },
  {
    title: "Tic Tac Toe",
    description: "A fun tic-tac-toe game built with JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-4",
    link: "https://girish18-tic-tac-toe.netlify.app/",
    keywords: "tic tac toe game",
    category: "game",
  },
  {
    title: "JSolver : A Mini LeetCode",
    description: "A mini LeetCode app where you can solve coding problems.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-5",
    link: "https://jsolver.netlify.app/",
    keywords: "jsolver leetcode mini leetcode",
    category: "web app",
  },
  {
    title: "Solar System",
    description: "A simple app which shows the solar system.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-6",
    link: "https://grirsh-18-solar-system.netlify.app/",
    keywords: "solar system app",
    category: "education",
  },
  {
    title: "Online Food Delivery App",
    description: "Online food delivery app where you can order food from your favourite restaurant.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-7",
    link: "https://girish18-biteblitz.netlify.app/",
    keywords: "food delivery app restaurant",
    category: "web app",
  },
  {
    title: "Coding World",
    description: "A simple education landing page.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-8",
    link: "https://girish18-coding-world.netlify.app/",
    keywords: "coding world education landing page",
    category: "education",
  },
  {
    title: "Dice Cricket Game",
    description: "A Cricket game in which you play with Dice.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-9",
    link: "https://girish18-dice-cricket.netlify.app/",
    keywords: "dice cricket game",
    category: "game",
  },
  {
    title: "Digi X Shop",
    description: "A simple e-commerce landing page.",
    tags: ["HTML", "CSS"],
    imageClass: "project-10",
    link: "https://girish18-dxs.netlify.app/",
    keywords: "digi x shop ecommerce landing page",
    category: "landing page",
  },
  {
    title: "Classic Checkers Game",
    description: "A classic checker game built with React and Tailwind Css.",
    tags: ["React JS", "Tailwind CSS"],
    imageClass: "project-11",
    link: "https://girish-18-classic-chackers.netlify.app/",
    keywords: "classic checkers game",
    category: "game",
  },
  {
    title: "Redmi 12 5G Landing Page",
    description: "Simple Landing page for Redmi 12 5G Phone.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-12",
    link: "https://girish-18-redmi-12-5g.netlify.app/#hero",
    keywords: "redmi 12 5g landing page",
    category: "landing page",
  },
  {
    title: "Note App",
    description: "A simple note app where you can store your ideas.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-13",
    link: "https://girish18-note-app.netlify.app/",
    keywords: "note app simple",
    category: "web app",
  },
  {
    title: "Digital Notebook",
    description: "A digital diary app where you can write and store your thoughts.",
    tags: ["Tailwind CSS", "React JS"],
    imageClass: "project-14",
    link: "https://girish-18-digital-notebook.netlify.app/",
    keywords: "digital notebook app",
    category: "react app",
  },
  {
    title: "Tower of Hanoi",
    description: "Classic Tower of Hanoi game solution step guide built with JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageClass: "project-15",
    link: "https://girish18-toh.netlify.app/",
    keywords: "tower of hanoi game",
    category: "game",
  },
  {
    title: "Number Guessing Game",
    description: "Test your luck with this interactive number guessing game.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    imageClass: "project-16",
    link: "https://girish-number-guessing-game.netlify.app/",
    keywords: "number guessing game",
    category: "game",
  },
  {
    title: "Loss Less VPN",
    description: "Secure your Internet with Loss Less VPN. Fast, secure, and reliable VPN service for all your devices.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    imageClass: "project-17",
    link: "https://girish18-vpn.netlify.app/",
    keywords: "vpn landing page",
    category: "landing page",
  },
  {
    title: "Weather App",
    description: "Get real-time weather updates for any location worldwide.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    imageClass: "project-18",
    link: "https://girish18-weathe-app.netlify.app/",
    keywords: "weather app forecast",
    category: "web app",
  },
  {
    title: "CodePan Mini",
    description: "A modern, responsive web-based code editor built with React that allows you to write HTML and CSS code with live preview functionality.",
    tags: ["React JS", "Tailwind CSS"],
    imageClass: "project-20",
    link: "https://girish-18-codepen-mini.netlify.app/",
    keywords: "code editor react codepan mini",
    category: "react app",
  },
  {
    title: "Text Translator App",
    description: "React-based web application demonstrating routing, hooks, API integration, and Tailwind CSS styling.",
    tags: ["React JS", "Tailwind CSS"],
    imageClass: "project-21",
    link: "https://translator-generator-app.netlify.app/",
    keywords: "text translator react app",
    category: "react app",
  },
];


// Function to render projects dynamically
function renderProjects(projectList) {
  const container = document.querySelector(".projects-grid");
  container.innerHTML = "";

  projectList.forEach((project) => {
    const card = `
      <div class="project-card" data-name="${project.keywords}" data-aos="fade-up">
        <div class="project-image ${project.imageClass}"></div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>
          <a href="${project.link}" class="cta-btn cta-secondary">
            View Project
          </a>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}

renderProjects(projects);

