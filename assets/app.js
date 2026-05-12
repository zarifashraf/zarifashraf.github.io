const app = document.getElementById("app");

const asset = (fileName) => `/assets/${fileName}`;

const profileImage = asset("LinkedIn_photo.jpeg");
const bannerImage = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80";
const resumeLink = asset("Zarif_Ashraf_Resume.pdf");
const openingSound = asset("Intro.mp3");
const linkedinLink = "https://www.linkedin.com/in/zarifash/";
const splashDuration = 4000;

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
    image: asset("Recruiter.png"),
    backgroundGif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  },
  {
    name: "developer",
    image: asset("Developer.png"),
    backgroundGif: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",
  },
  {
    name: "stalker",
    image: asset("Stalker.png"),
    backgroundGif: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
  },
];

const topPicks = {
  recruiter: [
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

const skills = {
  Languages: [
    ["Go", "Backend services and concurrent systems"],
    ["Python", "Automation, data, and backend development"],
    ["Java", "Enterprise applications and service layers"],
    ["JavaScript", "Interactive web application logic"],
    ["TypeScript", "Typed frontend and backend code"],
    ["Bash", "Shell automation and developer tooling"],
    ["C", "Systems programming fundamentals"],
  ],
  "Backend & Frameworks": [
    ["Maven", "Java build and dependency management"],
    ["Gradle", "Build automation for JVM projects"],
    ["Spring Boot", "Production-ready Java services"],
    ["Node", "Server-side JavaScript applications"],
    ["React", "Reusable component-based interfaces"],
    ["React Native", "Cross-platform mobile interfaces"],
    ["Vue", "Progressive frontend applications"],
    ["Flask", "Lightweight Python web services"],
    ["FastAPI", "Typed Python APIs and service endpoints"],
    ["Next.js", "Full-stack React applications"],
  ],
  "Cloud & DevOps": [
    ["AWS S3", "Object storage and cloud asset workflows"],
    ["Docker", "Containerized local and production workflows"],
    ["Kubernetes", "Container orchestration and deployments"],
    ["Helm", "Kubernetes release packaging"],
    ["Ansible", "Configuration management and automation"],
    ["OpenShift", "Enterprise Kubernetes platform operations"],
  ],
  "Data & Streaming": [
    ["SQL", "Relational querying and data modeling"],
    ["KDB+", "High-performance time-series analytics"],
    ["Pinot", "Real-time OLAP analytics"],
    ["Flink", "Stream processing pipelines"],
    ["Kafka", "Event streaming and message pipelines"],
    ["Polars", "Fast dataframe transformations"],
    ["Pandas", "Data analysis and transformation"],
    ["Elasticsearch", "Search, indexing, and log exploration"],
  ],
  "Testing & Monitoring": [
    ["JUnit", "Java unit and integration testing"],
    ["Robot Framework", "Acceptance and automation testing"],
    ["Cucumber", "Behavior-driven test scenarios"],
    ["Mockito", "Mocking for Java tests"],
    ["OpenTelemetry", "Tracing and observability instrumentation"],
    ["Grafana", "Dashboards and operational monitoring"],
  ],
  "Design & Architecture": [
    ["Caching strategies", "Performance-aware data access patterns"],
    ["Database design", "Schema modeling and storage tradeoffs"],
    ["Data tracing", "End-to-end visibility across data flows"],
    ["REST", "Resource-oriented API design"],
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
  {
    title: "Data Streaming Engineer",
    issuer: "Confluent",
    date: "2026",
    url: "https://certificates.confluent.io/61d525af-4def-4509-bfb4-47446db5b970#acc.v65r9aJN",
  },
];

const experiences = [
  {
    role: "Data Engineer",
    company: "Citigroup Inc.",
    location: "Mississauga, Canada",
    dates: "July 2025 - Present",
    summary: "Building high-throughput market data platforms for fixed income and commodities trading. Delivered an S3-backed parquet warehouse for about 1.4 TB of daily market data, improved legacy ingestion performance by 5x with Python multiprocessing, Polars, and PyArrow, and introduced OpenTelemetry tracing for real-time Flink pipelines.",
  },
  {
    role: "Software Engineer",
    company: "Citigroup Inc.",
    location: "Mississauga, Canada",
    dates: "July 2024 - July 2025",
    summary: "Worked across microservices, API gateways, and latency-sensitive client flows. Improved observability with a unified database schema, reduced diagnosis time by 50%, cut key API response times from 9s to 3s with caching and execution-path redesign, and automated CI maintenance workflows with Bash tooling.",
  },
  {
    role: "Mobile Application Tech Lead",
    company: "iRespite Services",
    location: "Montreal, Canada",
    dates: "January 2023 - December 2023",
    summary: "Led architecture, implementation, and code review for the iRespite MHealth platform. Delivered a production-ready React Native application backed by Firebase and 42 API endpoints for patients, family members, and care providers, helping secure a $108K startup grant through stakeholder and investor presentations.",
  },
];

const recommendations = [
  {
    name: "Tony Khozam",
    title: "Senior Software Engineering Lead",
    quote: "During his year on my team in a rotational program, Ash consistently impressed me with his initiative and ability to learn quickly while handling programming, design, and implementation tasks. He's great at working independently but also knows when and how to ask for help effectively. Ash is always willing to lend a hand to teammates, and he has a good understanding of his own abilities, always striving to improve. He would be a strong addition to any team.",
  },
  {
    name: "Tianjiao He",
    title: "Software Engineer",
    quote: "I am pleased to recommend Zarif Ashraf, who has consistently demonstrated outstanding teamwork, technical expertise, and leadership abilities in our projects together. Ash is an effective communicator, known for clearly articulating project goals and technical details to our team. Ash is a fast learner who quickly adapts to new technologies such as Go, Python and testing techniques. He is always ready to lend a hand to peers. I confidently recommend Zarif Ashraf for any role that requires deep technical knowledge, teamwork, and leadership.",
  },
];

function path() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

function go(to) {
  window.location.href = to;
}

let introAudio;

function playOpeningSound() {
  if (introAudio) {
    introAudio.pause();
    introAudio.currentTime = 0;
  }

  introAudio = new Audio(openingSound);
  introAudio.preload = "auto";
  introAudio.volume = 1;
  introAudio.currentTime = 0;
  return introAudio.play().then(() => introAudio);
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
  app.innerHTML = `
    <main class="portfolio-container">
      <div class="portfolio-logo" aria-label="ZARIF">
        ${["Z", "A", "R", "I", "F"].map((letter) => `<span class="logo-letter">${letter}</span>`).join("")}
      </div>
      <button class="splash-start" type="button" data-start-splash>Start</button>
    </main>
  `;

  const logo = document.querySelector(".portfolio-logo");
  const startButton = document.querySelector("[data-start-splash]");
  let redirectTimer;
  const startSplash = async () => {
    startButton.classList.add("hidden");
    logo.classList.add("playing");
    window.clearTimeout(redirectTimer);
    const audio = await playOpeningSound();
    redirectTimer = window.setTimeout(() => go("/browse/"), splashDuration + 250);
    audio.addEventListener("ended", () => {
      window.clearTimeout(redirectTimer);
      go("/browse/");
    }, { once: true });
  };
  const resetSplash = () => {
    logo.classList.remove("playing");
    startButton.classList.remove("hidden");
  };
  const startAfterGesture = () => {
    startSplash().catch(resetSplash);
  };

  startButton.addEventListener("click", startAfterGesture, { once: true });
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
  app.innerHTML = shell(`
    <section class="profile-page" style="background-image: url('${current.backgroundGif}')">
      <div class="profile-banner" style="--banner: url('${bannerImage}')">
        <div class="banner-content">
          <h1 class="banner-headline">Hi, I'm Zarif</h1>
          <p class="banner-description">Software engineer focused on backend systems, distributed data pipelines, and cloud-native services. Experience building scalable microservices, designing high-throughput data flows, and improving system reliability across large engineering teams. Strong foundation in Go, Python, Java, JavaScript/TypeScript, and Kubernetes-based deployments. Skilled at driving architectural improvements, automating developer workflows, and enhancing application performance in production environments.</p>
          <div class="banner-buttons">
            <button class="banner-button play-button" type="button" data-open="${resumeLink}">▶ <span>Resume</span></button>
            <button class="banner-button more-info-button" type="button" data-open="${linkedinLink}">ⓘ <span>Linkedin</span></button>
          </div>
        </div>
      </div>
    </section>
    ${row(`Today's Top Picks for ${current.name}`, picks)}
  `);
}

function row(title, items) {
  return `
    <section class="top-picks-row">
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

function renderExperience() {
  app.innerHTML = shell(`
    <main class="timeline-container">
      <h1 class="timeline-title">Work Experience</h1>
      <div class="timeline">
        ${experiences.map((experience, index) => `
          <section class="timeline-element">
            <div class="timeline-icon">${index + 1}</div>
            <article class="timeline-content">
              <h2>${experience.role}</h2>
              <h3>${experience.company}</h3>
              <p class="timeline-meta">${experience.location} / ${experience.dates}</p>
              <p class="timeline-summary">${experience.summary}</p>
            </article>
          </section>
        `).join("")}
      </div>
    </main>
  `);
}

function renderRecommendations() {
  app.innerHTML = shell(`
    <main class="recommendations-container">
      <h1 class="timeline-title">Recommendations</h1>
      <div class="recommendations-list">
        ${recommendations.map((recommendation) => `
          <div class="recommendation-card">
            <header class="recommendation-header">
              <div class="recommendation-avatar" aria-hidden="true">${recommendation.name.charAt(0)}</div>
              <div>
                <h3>${recommendation.name}</h3>
                <p>${recommendation.title}</p>
              </div>
            </header>
            <div class="recommendation-body">
              <p>"${recommendation.quote}"</p>
            </div>
          </div>
        `).join("")}
        </div>
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
          <p class="badge-title">Software Engineer</p>
          <p class="badge-description">Thinking Slow. Learning Fast.</p>
          <p class="badge-company">McGill University</p>
          <a href="${linkedinLink}" target="_blank" rel="noopener noreferrer" class="badge-link">View Profile</a>
        </div>
      </section>
      <div class="contact-header"><p>I'm always up for a chat or a coffee. Feel free to reach out.</p></div>
      <div class="contact-details">
        <div class="contact-item"><span class="contact-icon">✉</span><a href="mailto:zarif.ashraf@mail.mcgill.ca" class="contact-link">zarif.ashraf@mail.mcgill.ca</a></div>
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
        ${certifications.map((certification, index) => `
          <a href="${certification.url}" target="_blank" rel="noopener noreferrer" class="certification-card" style="--delay:${0.2 * index}s">
            <div class="certification-content"><div class="certification-icon">▣</div><h2>${certification.title}</h2><p>${certification.issuer}</p><span class="issued-date">Issued ${certification.date}</span></div>
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
