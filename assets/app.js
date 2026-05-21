const app = document.getElementById("app");

const asset = (fileName) => `/assets/${fileName}`;

const profileImage = asset("LinkedIn_photo.jpeg");
const resumeLink = asset("Zarif_Ashraf_Resume.pdf");
const openingSound = asset("Intro.mp3");
const vinylTrack = asset("Fragments_of_Time.mp3");
const vinylSong = {
  title: "Fragments of Time",
  artist: "Daft Punk, Todd Edwards",
};
const linkedinLink = "https://www.linkedin.com/in/zarifash/";
const splashDuration = 4000;
const nameArtLetters = ["Z.jpg", "A.jpg", "R.jpg", "I.jpg", "F.jpg"];
const upvoteCounterBase = "https://api.counterapi.dev/v1/zarifashraf-github-io/portfolio-design-upvotes";
const pageVisitCounterBase = "https://api.counterapi.dev/v1/zarifashraf-github-io/page-visits";
const pageVisitCountStorageKey = "portfolio-page-visits-count";
const selectedProfileStorageKey = "portfolio-selected-profile";

const navItems = [
  ["Home", "/browse/"],
  ["Professional", "/work-experience/"],
  ["Skills", "/skills/"],
  ["Projects", "/projects/"],
  ["Let's talk!", "/contact-me/"],
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
    ["Skills", "/skills/", asset("Skills.jpg")],
    ["Experience", "/work-experience/", asset("Experience.jpg")],
    ["Certifications", "/certifications/", asset("Certifications.jpg")],
    ["Recommendations", "/recommendations/", asset("Recommendations.jpg")],
    ["Projects", "/projects/", asset("Projects.jpg")],
  ],
  developer: [
    ["Skills", "/skills/", asset("Skills.jpg")],
    ["Projects", "/projects/", asset("Projects.jpg")],
    ["Certifications", "/certifications/", asset("Certifications.jpg")],
    ["Experience", "/work-experience/", asset("Experience.jpg")],
    ["Recommendations", "/recommendations/", asset("Recommendations.jpg")],
  ],
  stalker: [
    ["Recommendations", "/recommendations/", asset("Recommendations.jpg")],
    ["Projects", "/projects/", asset("Projects.jpg")],
    ["Experience", "/work-experience/", asset("Experience.jpg")],
    ["Certifications", "/certifications/", asset("Certifications.jpg")],
  ],
};

function isValidProfileName(profileName) {
  return profiles.some((profile) => profile.name === profileName);
}

function rememberProfile(profileName) {
  if (!isValidProfileName(profileName)) return;
  window.localStorage.setItem(selectedProfileStorageKey, profileName);
}

function storedProfileName() {
  const profileName = window.localStorage.getItem(selectedProfileStorageKey);
  return isValidProfileName(profileName) ? profileName : "";
}

function currentProfileName() {
  const profileMatch = path().match(/^\/profile\/([^/]+)$/);
  const profileName = profileMatch?.[1];
  return isValidProfileName(profileName) ? profileName : storedProfileName();
}

function profileHomePath() {
  const profileName = currentProfileName();
  return profileName ? `/profile/${profileName}/` : "/browse/";
}

function navUrl(label, url) {
  return label === "Home" ? profileHomePath() : url;
}

function isActiveNav(label, url) {
  const currentPath = path();
  const normalizedUrl = url.replace(/\/+$/, "") || "/";
  return label === "Home" ? currentPath === normalizedUrl : currentPath === normalizedUrl;
}

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
  {
    title: "Library Management System Web App",
    description: "Designed and delivered a dynamic library management platform in collaboration with a six-person agile team. The application was modeled with UML, implemented with Spring, Java, Gradle, and Vue.js, and supported by automated testing, backlog management, software requirements tracking, Git workflows, and GitHub Actions.",
    tech: "UML, Gradle, Spring, Java, Vue.js, GitHub Actions",
    image: asset("library.jfif"),
    url: "https://github.com/McGill-ECSE321-Fall2021/project-group-09",
  },
  {
    title: "EV3 Robot",
    description: "Designed and built a color-detecting sorting robot with a six-person team, combining EV3 Mindstorms hardware with Python-based control software. Led the hardware design, documentation, and testing workstreams while collaborating on the software implementation through Git.",
    tech: "Python, EV3 Mindstorms, Hardware Design, Git",
    image: asset("robot.webp"),
    url: "https://www.linkedin.com/in/zarifash/overlay/Project/1151230804/treasury?profileId=ACoAACpT-PIBXqz2U5aA92s9ho_l1StBnyFc-mw",
  },
  {
    title: "Colosseum Survival AI Game",
    description: "Developed a high-performing AI player for a survival strategy game by implementing and refining search algorithms including MCTS, minimax, and alpha-beta pruning. The final agent defeated 99% of opponents faced while completing moves in one-tenth of the average runtime and using one-fifteenth of the average memory of competing AI players.",
    tech: "AI, MCTS, Minimax, Alpha-Beta Pruning, Game Strategy",
    image: asset("colosseum.jpg"),
    url: "https://github.com/zarifashraf/Colosseum-Survival-AI-Game",
  },
  {
    title: "Online Trivia Web App",
    description: "Built a daily trivia web application with a polished quiz experience, persistent backend, and leaderboard functionality for tracking user performance over time.",
    tech: "React, JavaScript, HTML, CSS",
    image: asset("trivia.jpg"),
    url: "https://github.com/saikz72/quiz-app",
  },
  {
    title: "OS Shell",
    description: "Built a low-level command-line operating system shell in C with Makefile-based builds. The shell supports core Linux-style file system commands and provides hands-on experience with process control, command parsing, and systems programming fundamentals.",
    tech: "C, Makefile, Linux, CLI, Systems Programming",
    image: asset("os.webp"),
    url: "https://github.com/zarifashraf/OS-Shell",
  },
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
    name: "Sahresh Akbar",
    title: "Senior Software Engineering Lead",
    quote: "Good python coding background: Ash exhibits a robust understanding and practical application of Python. This skill enables them to develop efficient scripts, analyze complex datasets, and contribute effectively to the team's data-driven projects, forming a core technical asset. Collaborative team player: Ash consistently demonstrates strong collaborative skills, actively contributing to team cohesion and project success. He effectively communicates with colleagues, offers support, and maintains a positive attitude that enhances overall team dynamics and productivity. Reliable task management and follow-through: Zarif is organized and reliable, consistently staying on top of their assigned tasks. He demonstrates good follow-through, ensuring that responsibilities are completed thoroughly and deadlines are met, instilling confidence in their ability to deliver results.",
  },
  {
    name: "Oleg Braginsky",
    title: "Senior Software Engineer",
    quote: "Highly responsible and dependable. A strong team player who can also deliver independently. Approaches tasks with a proactive, can-do attitude and ensures they are completed to the highest standard. Possesses excellent analytical skills and the ability to raise concerns promptly. Ash consistently demonstrates exceptional responsibility, and a proactive attitude, exceling both as an independent contributor and a collaborative team player. His ability to adapt, raise concerns promptly, assist his co-workers and deliver high-quality solutions makes him a valuable asset to any team.",
  },
  {
    name: "Vadym Mielientsov",
    title: "Senior Software Engineer",
    quote: "Strong problem-solving skills: Consistently demonstrates the ability to tackle complex tasks independently, finding effective solutions without needing close guidance. This self-sufficiency greatly contributes to overall team productivity. Attention to detail: Produces high-quality work with precision, ensuring code is robust, well-structured, and aligned with best practices. His meticulous natures helps prevent issues before they arise. Technical Versatility: Shows strong capability in handling tasks that require both architectural understanding and database interaction. Effectively implements analysis tickets, bridging the gap between high-level design and detailed implementation.",
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

function isUserSelectionPath(route) {
  const normalizedRoute = route.replace(/\/+$/, "") || "/";
  return normalizedRoute === "/browse";
}

function go(to) {
  if (isUserSelectionPath(to)) stopVinylAudio();

  window.history.pushState({}, "", to);
  render();
  window.scrollTo(0, 0);
}

let introAudio;
let vinylAudio;
let vinylEventsBound = false;

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

function readCounterValue(data) {
  return data?.count ?? data?.value ?? data?.data ?? 0;
}

function getVinylAudio() {
  if (!vinylAudio) {
    vinylAudio = new Audio(vinylTrack);
    vinylAudio.preload = "auto";
    vinylAudio.volume = 0.75;
  }

  return vinylAudio;
}

function stopVinylAudio() {
  if (!vinylAudio) return;
  vinylAudio.pause();
  vinylAudio.currentTime = 0;
  setVinylState(false);
}

function counterRequestUrl(url) {
  return `${url}?t=${Date.now()}`;
}

function formatCounterValue(count) {
  return Number.isFinite(Number(count)) ? Number(count).toLocaleString() : "0";
}

function readStoredPageVisitCount() {
  const storedCount = Number(window.localStorage.getItem(pageVisitCountStorageKey));
  return Number.isFinite(storedCount) && storedCount > 0 ? storedCount : 0;
}

function storePageVisitCount(count) {
  if (!Number.isFinite(Number(count))) return;
  window.localStorage.setItem(pageVisitCountStorageKey, String(Number(count)));
}

function waitFor(promise, timeout = 1500) {
  return Promise.race([
    promise.catch(() => undefined),
    new Promise((resolve) => window.setTimeout(resolve, timeout)),
  ]);
}

async function fetchUpvoteCount() {
  const response = await fetch(counterRequestUrl(upvoteCounterBase), { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load upvote count");
  return readCounterValue(await response.json());
}

async function incrementUpvoteCount() {
  const response = await fetch(counterRequestUrl(`${upvoteCounterBase}/up`), {
    cache: "no-store",
    keepalive: true,
  });
  if (!response.ok) throw new Error("Could not save upvote");
  return readCounterValue(await response.json());
}

async function fetchPageVisitCount() {
  const response = await fetch(counterRequestUrl(pageVisitCounterBase), { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load visit count");
  return readCounterValue(await response.json());
}

async function incrementPageVisitCount() {
  const response = await fetch(`${pageVisitCounterBase}/up`, {
    cache: "no-store",
    keepalive: true,
  });
  if (!response.ok) throw new Error("Could not save visit");
  const count = readCounterValue(await response.json());
  storePageVisitCount(count);
  return count;
}

function trackPageVisit() {
  const knownCount = readStoredPageVisitCount();
  if (knownCount) storePageVisitCount(knownCount + 1);

  return incrementPageVisitCount().catch(() => {
    // Analytics should never interrupt the portfolio experience.
  });
}

function setUpvoteState(button, count, label = "Liked the design? Upvote") {
  const countEl = button.querySelector("[data-upvote-count]");
  const textEl = button.querySelector("[data-upvote-text]");

  countEl.textContent = formatCounterValue(count);
  textEl.textContent = label;
  button.disabled = false;
}

function bindUpvote() {
  const button = document.querySelector("[data-upvote]");
  if (!button) return;

  fetchUpvoteCount()
    .then((count) => setUpvoteState(button, count))
    .catch(() => {
      button.querySelector("[data-upvote-count]").textContent = "▲";
    });

  button.addEventListener("click", async () => {
    button.disabled = true;
    try {
      const count = await incrementUpvoteCount();
      setUpvoteState(button, count, "Design upvoted");
    } catch (error) {
      button.disabled = false;
      button.querySelector("[data-upvote-text]").textContent = "Try again";
    }
  });
}

function bindPageVisitMetric() {
  const countEl = document.querySelector("[data-page-visit-count]");
  if (!countEl) return;

  fetchPageVisitCount()
    .then((count) => {
      const freshCount = Math.max(Number(count) || 0, readStoredPageVisitCount());
      countEl.textContent = formatCounterValue(freshCount);
    })
    .catch(() => {
      countEl.textContent = formatCounterValue(readStoredPageVisitCount());
    });
}

function setVinylState(isPlaying) {
  document.querySelectorAll(".vinyl-deck").forEach((deck) => {
    deck.classList.toggle("playing", isPlaying);
  });
  document.querySelectorAll("[data-vinyl-toggle]").forEach((button) => {
    button.setAttribute("aria-label", isPlaying ? "Pause vinyl audio" : "Play vinyl audio");
    button.setAttribute("aria-pressed", String(isPlaying));
  });
}

function bindVinylAudio() {
  const toggles = document.querySelectorAll("[data-vinyl-toggle]");
  const pauses = document.querySelectorAll("[data-vinyl-pause]");
  const rewinds = document.querySelectorAll("[data-vinyl-rewind]");
  if (!toggles.length && !pauses.length && !rewinds.length) return;

  const audio = getVinylAudio();
  setVinylState(!audio.paused);

  toggles.forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        if (audio.paused) {
          await audio.play();
          setVinylState(true);
        } else {
          audio.pause();
          setVinylState(false);
        }
      } catch (error) {
        setVinylState(false);
      }
    });
  });

  pauses.forEach((button) => {
    button.addEventListener("click", () => {
      audio.pause();
      setVinylState(false);
    });
  });

  rewinds.forEach((button) => {
    button.addEventListener("click", () => {
      audio.currentTime = 0;
      if (!audio.paused) {
        audio.play().catch(() => setVinylState(false));
      }
    });
  });

  if (!vinylEventsBound) {
    audio.addEventListener("play", () => setVinylState(true));
    audio.addEventListener("pause", () => setVinylState(false));
    audio.addEventListener("ended", () => setVinylState(false));
    vinylEventsBound = true;
  }
}

function shell(content) {
  const navigation = navItems.map(([label, url]) => [label, navUrl(label, url)]);

  return `
    <nav class="navbar" data-navbar>
      <div class="navbar-left">
        <a class="navbar-logo" href="/browse/">Zarif</a>
        <ul class="navbar-links">
          ${navigation.map(([label, url]) => `<li><a class="${isActiveNav(label, url) ? "active" : ""}" href="${url}">${label}</a></li>`).join("")}
        </ul>
      </div>
      <div class="navbar-right">
        <div class="vinyl-controls" aria-label="Vinyl audio controls">
          <div class="vinyl-deck">
            <span class="vinyl-disc" aria-hidden="true"></span>
            <div class="vinyl-actions" aria-label="Vinyl playback actions">
              <div class="vinyl-credit" aria-label="${vinylSong.title} by ${vinylSong.artist}">
                <span class="vinyl-song">${vinylSong.title}</span>
                <span class="vinyl-artist">${vinylSong.artist}</span>
              </div>
              <div class="vinyl-action-row">
                <button class="vinyl-action" type="button" aria-label="Play vinyl audio" aria-pressed="false" data-vinyl-toggle>Play</button>
                <button class="vinyl-action" type="button" aria-label="Pause vinyl audio" data-vinyl-pause>Pause</button>
                <button class="vinyl-action" type="button" aria-label="Rewind vinyl audio" data-vinyl-rewind>Rewind</button>
              </div>
            </div>
          </div>
        </div>
        <button class="hamburger" type="button" aria-label="Open menu" data-open-sidebar><div></div><div></div><div></div></button>
        <button class="profile-icon" type="button" aria-label="Choose profile" data-go="/browse/"><img src="${profileImage}" alt="Profile"></button>
      </div>
    </nav>
    <button class="sidebar-overlay" type="button" aria-label="Close menu" data-close-sidebar></button>
    <aside class="sidebar" data-sidebar>
      <div class="sidebar-logo">Zarif</div>
      <ul>
        ${navigation.map(([label, url]) => `<li><a href="${url}">${icon(label)} ${label}</a></li>`).join("")}
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
    "Let's talk!": "✉",
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
    const pageVisitRequest = trackPageVisit();
    startButton.classList.add("hidden");
    logo.classList.add("playing");
    window.clearTimeout(redirectTimer);
    const audio = await playOpeningSound();
    let didOpenBrowse = false;
    const openBrowse = async () => {
      if (didOpenBrowse) return;
      didOpenBrowse = true;
      window.clearTimeout(redirectTimer);
      await waitFor(pageVisitRequest);
      go("/browse/");
    };

    redirectTimer = window.setTimeout(openBrowse, splashDuration + 250);
    audio.addEventListener("ended", () => {
      openBrowse();
    }, { once: true });
  };
  const resetSplash = () => {
    logo.classList.remove("playing");
    startButton.classList.remove("hidden");
  };
  const startAfterGesture = () => {
    startSplash().catch(resetSplash);
  };

  startButton.addEventListener("click", startAfterGesture);
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
  rememberProfile(current.name);
  const picks = topPicks[current.name];
  app.innerHTML = shell(`
    <section class="profile-page" style="background-image: url('${current.backgroundGif}')">
      <div class="profile-banner">
        <div class="banner-name-art" aria-hidden="true">
          ${nameArtLetters.map((fileName, index) => `<img class="banner-name-letter" src="${asset(fileName)}" alt="${"ZARIF"[index]}">`).join("")}
        </div>
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
        ${projects.map((project, index) => `
          <a class="project-card" href="${project.url}" target="_blank" rel="noopener noreferrer" style="--delay:${0.12 * index}s">
            <img class="project-image" src="${project.image}" alt="${project.title}">
            <div class="project-details">
              <div class="project-heading">
                <h3>${project.title}</h3>
                <span class="project-link-arrow" aria-hidden="true">↗</span>
              </div>
              <p>${project.description}</p>
              <div class="tech-used">${project.tech.split(", ").map((item) => `<span class="tech-badge">${item}</span>`).join("")}</div>
            </div>
          </a>
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
      <div class="contact-header"><p>A good conversation always has its place.</p></div>
      <div class="contact-details">
        <div class="contact-item"><span class="contact-icon">✉</span><a href="mailto:zarif.ashraf@mail.mcgill.ca" class="contact-link">zarif.ashraf@mail.mcgill.ca</a></div>
        <div class="contact-item"><span class="contact-icon">▤</span><a href="${resumeLink}" target="_blank" rel="noopener noreferrer" class="contact-link">View Resume</a></div>
      </div>
      <div class="contact-metrics" aria-label="Portfolio metrics">
        <button class="contact-item upvote-button" type="button" data-upvote>
          <span class="contact-link" data-upvote-text>Like the design? Upvote</span>
          <span class="upvote-count" data-upvote-count>▲</span>
        </button>
        <div class="contact-item visit-metric">
          <span class="contact-link">Page Visits</span>
          <span class="upvote-count" data-page-visit-count>...</span>
        </div>
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
  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || link.target || link.hasAttribute("download") || href.startsWith("/assets/")) return;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      go(href);
    });
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
  bindUpvote();
  bindPageVisitMetric();
  bindVinylAudio();
}

function render() {
  const currentPath = path();
  if (currentPath === "/" || currentPath === "/index.html") renderSplash();
  else if (currentPath === "/browse") {
    stopVinylAudio();
    renderBrowse();
  }
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

window.addEventListener("popstate", render);

render();
