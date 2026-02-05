// Data for dynamic content
const experienceData = [
    {
        company: "Your Company",
        position: "Software Developer",
        period: "2023 - Present",
        description: [
            "Developed and maintained web applications using modern technologies",
            "Collaborated with cross-functional teams to deliver high-quality products",
            "Implemented responsive designs and optimized performance"
        ]
    }
];

const projectsData = [
    {
        title: "Project One",
        description: "A web application built with modern technologies that solves interesting problems. This project demonstrates my ability to work with complex systems and deliver high-quality results.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        github: "#",
        live: "#",
        image: "https://via.placeholder.com/600x360/233554/64ffda?text=Project+One"
    },
    {
        title: "Project Two", 
        description: "Another amazing project that showcases your skills and creativity. This project involved working with cutting-edge technologies and solving complex problems.",
        technologies: ["JavaScript", "CSS", "HTML", "Firebase"],
        github: "#",
        live: "#",
        image: "https://via.placeholder.com/600x360/233554/64ffda?text=Project+Two"
    },
    {
        title: "Project Three",
        description: "A third project that demonstrates your versatility as a developer. This project highlights my ability to adapt to different technologies and deliver exceptional results.",
        technologies: ["Python", "Django", "PostgreSQL", "Docker"],
        github: "#",
        live: "#", 
        image: "https://via.placeholder.com/600x360/233554/64ffda?text=Project+Three"
    }
];

const writingsData = [
    {
        title: "Advanced Linux Commands for DevOps Engineers",
        site: "LinuxHandbook",
        url: "https://linuxhandbook.com/advanced-linux-commands-devops",
        date: "2024",
        description: "A comprehensive guide to essential Linux commands every DevOps engineer should master."
    },
    {
        title: "Mastering YAML Configuration in CircleCI",
        site: "CircleCI", 
        url: "https://circleci.com/blog/mastering-yaml-configuration",
        date: "2024",
        description: "Deep dive into CircleCI configuration files and best practices for CI/CD pipelines."
    },
    {
        title: "Spring Security: Complete Authentication Guide",
        site: "Baeldung",
        url: "https://www.baeldung.com/spring-security-authentication",
        date: "2023", 
        description: "Complete guide to implementing authentication in Spring Boot applications."
    },
    {
        title: "Bash Scripting: Automating Daily Tasks",
        site: "LinuxHandbook",
        url: "https://linuxhandbook.com/bash-scripting-automation",
        date: "2023",
        description: "Learn how to automate repetitive tasks with powerful bash scripts."
    },
    {
        title: "Optimizing CircleCI Build Performance",
        site: "CircleCI",
        url: "https://circleci.com/blog/optimizing-build-performance", 
        date: "2023",
        description: "Strategies and techniques to significantly improve your CircleCI build times."
    },
    {
        title: "Microservices with Spring Boot and Docker",
        site: "Baeldung",
        url: "https://www.baeldung.com/spring-boot-microservices-docker",
        date: "2023",
        description: "Building and deploying microservices architecture using Spring Boot and Docker."
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNav();
    initializeMobileMenu();
    initializeTabs();
    populateProjects();
    populateWritings();
    initializeSmoothScroll();
    initializeScrollEffects();
});

// Navigation Functions
function initializeNav() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;

        // Add scrolled class for background
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
        }
    });
}

// Mobile Menu Functions
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileCloseBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Tab Functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding panel
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Populate Projects Section
function populateProjects() {
    const projectsContainer = document.querySelector('.featured-projects');
    
    projectsData.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <div class="project-content">
                <div class="project-overview">
                    <p class="project-overline">Featured Project</p>
                    <h3 class="project-title">
                        <a href="${project.live}" target="_blank">${project.title}</a>
                    </h3>
                    <div class="project-description">
                        <p>${project.description}</p>
                    </div>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" class="project-link" aria-label="GitHub">
                            <i class='bx bxl-github'></i>
                        </a>
                        <a href="${project.live}" class="project-link" aria-label="External Link">
                            <i class='bx bx-link-external'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-image">
                <div class="project-overlay"></div>
                <img src="${project.image}" alt="${project.title}">
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

// Populate Writings Section
function populateWritings() {
    const writingsContainer = document.querySelector('.writings-grid');
    
    writingsData.forEach(writing => {
        const writingElement = document.createElement('div');
        writingElement.className = 'writing-item';
        writingElement.innerHTML = `
            <div class="writing-content">
                <h3 class="writing-title">
                    <a href="${writing.url}" target="_blank">${writing.title}</a>
                </h3>
                <div class="writing-meta">
                    <span class="writing-site">${writing.site}</span>
                    <span class="writing-description"> • ${writing.description}</span>
                </div>
            </div>
            <div class="writing-date">${writing.date}</div>
        `;
        writingsContainer.appendChild(writingElement);
    });
}

// Smooth Scroll Functionality
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add CSS for dynamically created elements
const dynamicStyles = `
    .project-overline {
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        .project {
            margin-bottom: 50px;
        }
        
        .project-image {
            height: 300px;
        }
    }
`;

// Inject dynamic styles
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);