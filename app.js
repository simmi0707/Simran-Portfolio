const skillsData = {
    dev: [
      { name: "HTML", logo: "/assets/html.png" },
      { name: "CSS", logo: "/assets/css.png" },
      { name: "JavaScript", logo: "/assets/java script.png" },
      { name: "React.js", logo: "/assets/React.png" },
      { name: "WordPress", logo: "/assets/wordpress.png" },
      { name: "Shopify", logo: "/assets/shopify.png" },
      { name: "Git", logo: "/assets/git.png" },
      { name: "GitHub", logo: "/assets/git hub.png" },
    ],
    ui: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Prototyping", logo: "/assets/prototyping.png" }, 
      { name: "Sitemap", logo: "/assets/sitemap.png" },
      { name: "Wireframing", logo: "/assets/wireframing.png" },
      { name: "User Research", logo: "/assets/user.png" }
    ],
    data: [
      { name: "Power BI", logo: "/assets/power bi.png" },
      { name: "SQL", logo: "/assets/sql.png" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Tableau", logo: "/assets/tabaleau.png" },
      { name: "Excel", logo: "/assets/excel.png" }
    ]
  };
  
  const projectsData = [
    { title: "Freak Developers  ", category: "dev", img: "/assets/freak.png", preview: "https://freakdevs-official-site.onrender.com/", github: "#" },
    { title: "Ceramic Heaven", category: "dev", img: "/assets/ceramic.png", preview: "https://ceramicsheaven.onrender.com/", github: "https://github.com/simmi0707/Ceramic-Heaven.git" },
    { title: "Portfolio Website", category: "dev", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
    { title: "Sales Dashboard", category: "data", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
    { title: "Data Visualization", category: "data", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
    { title: "Customer Analytics", category: "data", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3d43?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
    { title: "Droppable", category: "ui", img: "/assets/droppable.png", preview: "https://www.figma.com/design/noVZinrLWgk8TQqlmEE8tL/Untitled?node-id=0-1&t=xLpblZL9vOFgghNX-1", github: "#" },
    { title: "Landing Page UI", category: "ui", img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80", preview: "#", github: "#" },
  ];
  
  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuLinks = document.querySelectorAll('.menu li a');
  const mobileLinks = mobileMenu.querySelectorAll('a');
  
  hamburger.onclick = () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
    document.body.classList.toggle('noscroll', mobileMenu.classList.contains('active'));
  };
  
  mobileLinks.forEach(link => {
    link.onclick = () => {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('open');
      document.body.classList.remove('noscroll');
    };
  });
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('open');
      document.body.classList.remove('noscroll');
    }
  });
  
  // Skills section
  const catBtns = document.querySelectorAll('.cat-btn');
  const skillsList = document.getElementById('skills-list');
  function renderSkills(category) {
    skillsList.style.opacity = 0;
    setTimeout(() => {
      skillsList.innerHTML = '';
      skillsData[category].forEach(skill => {
        const el = document.createElement('div');
        el.className = 'skill-item';
        el.tabIndex = 0;
        el.innerHTML = `
          <img class="skill-logo" src="${skill.logo}" alt="${skill.name}">
          <span class="skill-name">${skill.name}</span>
        `;
        skillsList.appendChild(el);
      });
      skillsList.style.opacity = 1;
    }, 180);
  }
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.cat-btn.active').classList.remove('active');
      btn.classList.add('active');
      renderSkills(btn.dataset.category);
    });
  });
  renderSkills('dev');
  
  // Projects section
  const projBtns = document.querySelectorAll('.proj-btn');
  const projectsList = document.getElementById('projects-list');
  function renderProjects(category) {
    projectsList.style.opacity = 0;
    setTimeout(() => {
      projectsList.innerHTML = '';
      projectsData.filter(p => category === 'all' ? true : p.category === category)
        .forEach(project => {
          const el = document.createElement('div');
          el.className = 'project-card';
          el.tabIndex = 0;
          el.innerHTML = `
            <img class="project-img" src="${project.img}" alt="${project.title}">
            <div class="project-title">${project.title}</div>
            <div class="project-buttons">
              <a class="project-btn" href="${project.preview}" target="_blank">Preview</a>
              <a class="project-btn" href="${project.github}" target="_blank">GitHub</a>
            </div>
          `;
          projectsList.appendChild(el);
        });
      projectsList.style.opacity = 1;
    }, 180);
  }
  projBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.proj-btn.active').classList.remove('active');
      btn.classList.add('active');
      renderProjects(btn.dataset.category);
    });
  });
  renderProjects('all');
  
  // Scrollspy for menu highlighting
  function setActiveLink() {
    const sections = ['intro', 'profile', 'skills', 'projects', 'contact'];
    let current = '';
    sections.forEach(id => {
      const section = document.getElementById(id);
      if (window.scrollY + 120 >= section.offsetTop) current = id;
    });
    menuLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
    mobileLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
  }
  window.addEventListener('scroll', setActiveLink);
  
  // Smooth scroll
  [...menuLinks, ...mobileLinks].forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Dummy contact form
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! (Form not functional in demo)');
    this.reset();
  });