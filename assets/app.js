const app = document.getElementById("app");

const profileImage = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=300&q=80";
const bannerImage = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80";
const resumeLink = "/assets/ZarifAshrafResume.txt";
const linkedinLink = "https://www.linkedin.com/in/zarifash/";

const navItems = [
  ["Home", "/browse/"],
  ["Professional", "/work-experience/"],
  ["Skills", "/skills/"],
  ["Projects", "/projects/"],
  ["Hire Me", "/contact-me/"],
];

const profiles = [
  {
    name: "recruiter",
    image: "https://picsum.photos/seed/recruiter/300/300",
    backgroundGif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
  {
    name: "developer",
    image: "https://picsum.photos/seed/developer/300/300",
    backgroundGif: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",
  },
  {
    name: "stalker",
    image: "https://picsum.photos/seed/stalker/300/300",
    backgroundGif: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
  },
];

const topPicks = {
  recruiter: [
    ["Work Permit", "/work-permit/", "https://picsum.photos/seed/workpermit/250/200"],
    ["Skills", "/skills/", "https://picsum.photos/seed/skills/250/200"],
    ["Experience", "/work-experience/", "https://picsum.photos/seed/workexperience/250/200"],
    ["Certifications", "/certifications/", "https://picsum.photos/seed/certifications/250/200"],
    ["Recommendations", "/recommendations/", "https://picsum.photos/seed/recommendations/250/200"],
    ["Projects", "/projects/", "https://picsum.photos/seed/projects/250/200"],
    ["Contact Me", "/contact-me/", "https://picsum.photos/seed/contact/250/200"],
  ],
  developer: [
    ["Skills", "/skills/", "https://picsum.photos/seed/coding/250/200"],
    ["Projects", "/projects/", "https://picsum.photos/seed/development/250/200"],
    ["Certifications", "/certifications/", "https://picsum.photos/seed/badge/250/200"],
    ["Experience", "/work-experience/", "https://picsum.photos/seed/work/250/200"],
    ["Recommendations", "/recommendations/", "https://picsum.photos/seed/networking/250/200"],
    ["Contact Me", "/contact-me/", "https://picsum.photos/seed/connect/250/200"],
  ],
  stalker: [
    ["Recommendations", "/recommendations/", "https://picsum.photos/seed/networking/250/200"],
    ["Contact Me", "/contact-me/", "https://picsum.photos/seed/call/250/200"],
    ["Projects", "/projects/", "https://picsum.photos/seed/planning/250/200"],
    ["Experience", "/work-experience/", "https://picsum.photos/seed/resume/250/200"],
    ["Certifications", "/certifications/", "https://picsum.photos/seed/achievements/250/200"],
  ],
};

const continueWatching = {
  recruiter: [
    ["Professional", "/work-experience/", "https://picsum.photos/id/1011/300/200"],
    ["Projects", "/projects/", "https://picsum.photos/id/1015/300/200"],
    ["Skills", "/skills/", "https://picsum.photos/id/1020/300/200"],
    ["Contact Me", "/contact-me/", "https://picsum.photos/id/1029/300/200"],
  ],
  developer: [
    ["Projects", "/projects/", "https://picsum.photos/id/180/300/200"],
    ["Skills", "/skills/", "https://picsum.photos/id/0/300/200"],
    ["Blogs", "/blogs/", "https://picsum.photos/id/24/300/200"],
    ["Certifications", "/certifications/", "https://picsum.photos/id/1028/300/200"],
  ],
  stalker: [
    ["Reading", "/reading/", "https://picsum.photos/id/1026/300/200"],
    ["Music", "/music/", "https://picsum.photos/id/1025/300/200"],
    ["Blogs", "/blogs/", "https://picsum.photos/id/20/300/200"],
    ["Contact Me", "/contact-me/", "https://picsum.photos/id/1029/300/200"],
  ],
};

const skills = {
  Frontend: [
    ["React", "Reusable components and stateful interfaces"],
    ["TypeScript", "Typed UI and application logic"],
    ["HTML5", "Semantic page structure"],
    ["CSS3", "Responsive layouts and animation"],
  ],
  Backend: [
    ["Node.js", "APIs and service integrations"],
    ["Python", "Automation, data, and scripting"],
    ["PostgreSQL", "Relational data modeling"],
    ["GraphQL", "Structured client-server contracts"],
  ],
  Cloud: [
    ["AWS", "Cloud deployments and managed services"],
    ["Docker", "Containerized local and production workflows"],
    ["CI/CD", "Automated testing and delivery"],
    ["GitHub", "Version control and collaboration"],
  ],
};

const projects = [
  ["Portfolio Platform", "A streaming-inspired personal website with profile-based navigation and animated content rows.", "ReactJS, NodeJS, CSS3", "https://picsum.photos/seed/portfolio/600/400"],
  ["Research Dashboard", "A dashboard for exploring structured data, metrics, and user-facing summaries.", "Python, PostgreSQL, React", "https://picsum.photos/seed/dashboard/600/400"],
  ["Course Planner", "A planning tool that helps students compare paths and keep track of milestones.", "TypeScript, GraphQL, GitHub", "https://picsum.photos/seed/planner/600/400"],
  ["Automation Toolkit", "Small utilities for repeatable workflows, reports, and data transformations.", "Python, Docker, CI/CD", "https://picsum.photos/seed/automation/600/400"],
];

const books = [
  ["Atomic Habits", "James Clear", "A practical guide to building good habits and breaking bad ones.", "https://picsum.photos/seed/atomic/400/600"],
  ["Rich Dad Poor Dad", "Robert Kiyosaki", "An accessible introduction to assets, income, and financial literacy.", "https://picsum.photos/seed/richdad/400/600"],
  ["The Alchemist", "Paulo Coelho", "A short novel about following purpose with patience and courage.", "https://picsum.photos/seed/alchemist/400/600"],
  ["Eat That Frog", "Brian Tracy", "A direct framework for handling important work first.", "https://picsum.photos/seed/frog/400/600"],
];

const blogs = [
  ["Building Interfaces That Feel Fast", "Notes on perception, animation, and making static pages feel alive.", "Medium", "https://medium.com/"],
  ["Docker Fundamentals", "A practical introduction to containers, images, and repeatable local environments.", "Dev.to", "https://dev.to/"],
  ["Cleaner Console Workflows", "Small habits that make debugging and command-line work more pleasant.", "Medium", "https://medium.com/"],
];

const certifications = [
  ["AWS Cloud Foundations", "Coursera", "2025"],
  ["Frontend Engineering", "Udemy", "2024"],
  ["Database Systems", "University", "2024"],
  ["Software Design", "IEEE", "2023"],
];

const experiences = [
  ["Software Developer", "Personal Website", "2026", "Built and iterated on a polished personal portfolio with static hosting constraints."],
  ["Full-Stack Developer", "Academic and Personal Projects", "2025", "Developed applications with frontend interfaces, backend APIs, and database-backed features."],
  ["Research Collaborator", "University Projects", "2024", "Worked on technical problem-solving, documentation, and collaborative delivery."],
];

function path() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

function go(to) {
  window.location.href = to;
}

function shell(content) {
  return `
    <nav class="navbar" data-navbar>
      <div class="navbar-left">
        <a class="navbar-logo" href="/browse/">Zarif</a>
        <ul class="navbar-links">
          ${navItems.map(([label, url]) => `<li><a class="${path() === url.replace(/\/+$/, "") ? "active" : ""}" href="${url}">${label}</a></li>`).join("")}
        </ul>
      </div>
      <div class="navbar-right">
        <button class="hamburger" type="button" aria-label="Open menu" data-open-sidebar><div></div><div></div><div></div></button>
        <button class="profile-icon" type="button" aria-label="Choose profile" data-go="/browse/"><img src="${profileImage}" alt="Profile"></button>
      </div>
    </nav>
    <button class="sidebar-overlay" type="button" aria-label="Close menu" data-close-sidebar></button>
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-logo">Zarif</div>
      <ul>
        ${navItems.map(([label, url]) => `<li><a href="${url}">${icon(label)} ${label}</a></li>`).join("")}
      </ul>
    </aside>
    <div class="content">${content}</div>
  `;
}

function icon(label) {
  const icons = {
    Home: "⌂",
    Professional: "▣",
    Skills: "◈",
    Projects: "▤",
    "Hire Me": "✉",
  };
  return icons[label] || "•";
}

function renderSplash() {
  app.innerHTML = `<main class="netflix-container"><div class="netflix-logo">ZARIF</div></main>`;
  window.setTimeout(() => go("/browse/"), 2900);
}

function renderBrowse() {
  app.innerHTML = `
    <main class="browse-container">
      <h1 class="who-is-watching">Who's watching?</h1>
      <div class="profiles">
        ${profiles.map((profile) => `
          <button class="profile-card" type="button" data-go="/profile/${profile.name}/">
            <span class="image-container"><img class="profile-image" src="${profile.image}" alt="${profile.name} profile"></span>
            <span class="profile-name">${profile.name}</span>
          </button>
        `).join("")}
      </div>
    </main>
  `;
}

function renderProfile(profileName) {
  const current = profiles.find((profile) => profile.name === profileName);
  if (!current) {
    renderNotFound();
    return;
  }
  const picks = topPicks[current.name];
  const watching = continueWatching[current.name];
  app.innerHTML = shell(`
    <section class="profile-page" style="background-image: url('${current.backgroundGif}')">
      <div class="profile-banner" style="--banner: url('${bannerImage}')">
        <div class="banner-content">
          <h1 class="banner-headline">Hi, I'm Zarif Ashraf</h1>
          <p class="banner-description">A software developer who enjoys building polished user experiences, practical tools, and thoughtful systems. This profile view adapts the target site's recruiter, developer, and curious-viewer browsing flows.</p>
          <div class="banner-buttons">
            <button class="banner-button play-button" type="button" data-open="${resumeLink}">▶ <span>Resume</span></button>
            <button class="banner-button more-info-button" type="button" data-open="${linkedinLink}">ⓘ <span>Linkedin</span></button>
          </div>
        </div>
      </div>
    </section>
    ${row(`Today's Top Picks for ${current.name}`, picks)}
    ${row(`Continue Watching for ${current.name}`, watching, true)}
  `);
}

function row(title, items, useLinks = false) {
  return `
    <section class="${useLinks ? "continue-watching-row" : "top-picks-row"}">
      <h2 class="row-title">${title}</h2>
      <div class="card-row">
        ${items.map(([title, url, image], index) => `
          <button class="pick-card" type="button" style="animation-delay:${0.15 * index}s" data-go="${url}">
            <img class="pick-image" src="${image}" alt="${title}">
            <span class="overlay"><span class="pick-label">${title}</span></span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderWorkPermit() {
  app.innerHTML = shell(`
    <main class="work-permit-container">
      <article class="work-permit-card">
        <h1 class="work-permit-headline">Work Permit</h1>
        <p class="work-permit-summary">I am currently available for software development opportunities. Replace this section with your exact work authorization, location, and availability details.</p>
        <p class="additional-info"><strong>Open to:</strong> internships, research projects, full-time roles, and collaborative engineering work.</p>
      </article>
    </main>
  `);
}

function renderExperience() {
  app.innerHTML = shell(`
    <main class="timeline-container">
      <h1 class="timeline-title">Professional Journey</h1>
      <div class="timeline">
        ${experiences.map(([role, org, date, summary], index) => `
          <section class="timeline-element">
            <div class="timeline-icon">${index + 1}</div>
            <article class="timeline-content">
              <h2>${org}</h2>
              <h3>${role}</h3>
              <p>${summary}</p>
              <span>${date}</span>
            </article>
          </section>
        `).join("")}
      </div>
    </main>
  `);
}

function renderRecommendations() {
  app.innerHTML = shell(`
    <main class="timeline-container">
      <article class="recommendation-card">
        <header class="recommendation-header">
          <img class="profile-pic" src="https://picsum.photos/seed/reference/140/140" alt="Reference profile">
          <div>
            <h3>Reference Available</h3>
            <p>Professor, manager, or collaborator</p>
            <p class="date">Updated 2026</p>
          </div>
        </header>
        <div class="recommendation-body">
          <p>"Zarif brings curiosity, technical care, and a steady collaborative style to engineering work."</p>
          <p>Use this section for a real recommendation once you have the final quote. The page keeps the original dotted-card treatment, hover lift, and Netflix-red accents.</p>
          <p><strong>Highlights:</strong> problem solving, fast learning, clear communication, and strong ownership.</p>
        </div>
      </article>
    </main>
  `);
}

function renderSkills() {
  app.innerHTML = shell(`
    <main class="skills-container">
      ${Object.entries(skills).map(([category, items]) => `
        <section class="skill-category">
          <h2 class="category-title">${category}</h2>
          <div class="skills-grid">
            ${items.map(([name, description], index) => `
              <article class="skill-card" style="--delay:${0.07 * index}s">
                <div class="icon">◆</div>
                <h3 class="skill-name">${name}</h3>
                <p class="skill-description">${description}</p>
              </article>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </main>
  `);
}

function renderProjects() {
  app.innerHTML = shell(`
    <main class="projects-container">
      <div class="projects-grid">
        ${projects.map(([title, description, tech, image], index) => `
          <article class="project-card" style="--delay:${0.12 * index}s">
            <img class="project-image" src="${image}" alt="${title}">
            <div class="project-details">
              <h3>${title}</h3>
              <p>${description}</p>
              <div class="tech-used">${tech.split(", ").map((item) => `<span class="tech-badge">${item}</span>`).join("")}</div>
            </div>
          </article>
        `).join("")}
      </div>
    </main>
  `);
}

function renderContact() {
  app.innerHTML = shell(`
    <main class="contact-container">
      <section class="linkedin-badge-custom">
        <img src="${profileImage}" alt="Zarif Ashraf" class="badge-avatar">
        <div class="badge-content">
          <h1 class="badge-name">Zarif Ashraf</h1>
          <p class="badge-title">Software Developer</p>
          <p class="badge-description">Building thoughtful web experiences and tools.</p>
          <p class="badge-company">McGill University</p>
          <a href="${linkedinLink}" target="_blank" rel="noopener noreferrer" class="badge-link">View Profile</a>
        </div>
      </section>
      <div class="contact-header"><p>I'm always up for a chat or a coffee. Feel free to reach out.</p></div>
      <div class="contact-details">
        <div class="contact-item"><span class="contact-icon">✉</span><a href="mailto:zarifashraf@example.com" class="contact-link">zarifashraf@example.com</a></div>
        <div class="contact-item"><span class="contact-icon">☎</span><a href="tel:+10000000000" class="contact-link">+1 000 000 0000</a></div>
      </div>
    </main>
  `);
}

function renderMusic() {
  const genres = ["Rock", "Classic Rock", "Hard Rock", "Blues", "Alternative"];
  const albums = [
    ["Hotel California", "The Eagles", "https://picsum.photos/seed/hotel-california/300/300"],
    ["Back in Black", "AC/DC", "https://picsum.photos/seed/back-in-black/300/300"],
    ["Appetite for Destruction", "Guns N' Roses", "https://picsum.photos/seed/appetite/300/300"],
  ];
  app.innerHTML = shell(`
    <main class="music-page">
      <div class="quote"><p>"Rock and Roll isn't a genre, it's a way of life."</p></div>
      <section class="genre-section"><h2>Explore by Genre</h2><div class="genres">${genres.map((item, index) => `<div class="genre-card" style="animation-delay:${0.2 * index}s"><p>${item}</p></div>`).join("")}</div></section>
      <section class="albums-section"><h2>Favorite Albums</h2><div class="albums">${albums.map(([title, artist, image], index) => `<article class="album-card" style="animation-delay:${0.3 * index}s"><img class="album-image" src="${image}" alt="${title}"><div class="album-details"><h4>${title}</h4><p>by ${artist}</p></div></article>`).join("")}</div></section>
    </main>
  `);
}

function renderReading() {
  app.innerHTML = shell(`
    <main class="reading-container">
      <h1 class="reading-title">Books That Shaped My Journey</h1>
      <p class="reading-intro">These books have influenced my perspectives, motivation, and self-growth.</p>
      <div class="books-grid">
        ${books.map(([title, author, description, image], index) => `
          <article class="book-card" style="--delay:${0.1 * index}s">
            <img class="book-cover" src="${image}" alt="${title}">
            <div class="book-info"><h2 class="book-title">${title}</h2><h3 class="book-author">${author}</h3><p class="book-description">${description}</p></div>
          </article>
        `).join("")}
      </div>
    </main>
  `);
}

function renderBlogs() {
  app.innerHTML = shell(`
    <main class="blogs-container">
      <h1 class="blogs-title">My Blog Posts</h1>
      <p class="blogs-intro">A collection of notes and tutorials on software development.</p>
      <div class="blogs-grid">
        ${blogs.map(([title, description, platform, url], index) => `
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="blog-card" style="--delay:${0.2 * index}s">
            <div class="blog-icon">✎</div>
            <div class="blog-info"><h2 class="blog-title">${title}</h2><p class="blog-description">${description}</p><span class="blog-platform">${platform}</span></div>
          </a>
        `).join("")}
      </div>
    </main>
  `);
}

function renderCertifications() {
  app.innerHTML = shell(`
    <main class="certifications-container">
      <h1 class="certifications-title">Certifications</h1>
      <div class="certifications-grid">
        ${certifications.map(([title, issuer, date], index) => `
          <a href="/certifications/" class="certification-card" style="--delay:${0.2 * index}s">
            <div class="certification-content"><div class="certification-icon">▣</div><h2>${title}</h2><p>${issuer}</p><span class="issued-date">Issued ${date}</span></div>
            <div class="certification-link">↗</div>
          </a>
        `).join("")}
      </div>
    </main>
  `);
}

function renderNotFound() {
  app.innerHTML = shell(`<main class="not-found"><h1>404</h1><p>This page could not be found.</p><a href="/browse/">Back to Browse</a></main>`);
}

function bindInteractions() {
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", () => go(el.getAttribute("data-go")));
  });
  document.querySelectorAll("[data-open]").forEach((el) => {
    el.addEventListener("click", () => window.open(el.getAttribute("data-open"), "_blank"));
  });
  const navbar = document.querySelector("[data-navbar]");
  if (navbar) {
    const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    onScroll();
  }
  const sidebar = document.querySelector("[data-sidebar]");
  const overlay = document.querySelector("[data-close-sidebar]");
  const open = document.querySelector("[data-open-sidebar]");
  if (sidebar && overlay && open) {
    open.addEventListener("click", () => {
      sidebar.classList.add("open");
      overlay.classList.add("open");
    });
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
    });
  }
}

function render() {
  const currentPath = path();
  if (currentPath === "/") renderSplash();
  else if (currentPath === "/browse") renderBrowse();
  else if (currentPath.startsWith("/profile/")) renderProfile(currentPath.split("/")[2]);
  else if (currentPath === "/work-permit") renderWorkPermit();
  else if (currentPath === "/work-experience") renderExperience();
  else if (currentPath === "/recommendations") renderRecommendations();
  else if (currentPath === "/skills") renderSkills();
  else if (currentPath === "/projects") renderProjects();
  else if (currentPath === "/contact-me") renderContact();
  else if (currentPath === "/music") renderMusic();
  else if (currentPath === "/reading") renderReading();
  else if (currentPath === "/blogs") renderBlogs();
  else if (currentPath === "/certifications") renderCertifications();
  else renderNotFound();
  bindInteractions();
}

render();
