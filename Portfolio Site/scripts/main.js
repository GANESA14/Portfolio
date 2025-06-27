const skills = [
  { name: 'HTML', level: 95, color: '#e34c26' },
  { name: 'CSS', level: 90, color: '#1572b6' },
  { name: 'JavaScript', level: 88, color: '#f7df1e' },
  { name: 'React', level: 85, color: '#61dafb' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'Python', level: 82, color: '#3776ab' },
  { name: 'Java', level: 75, color: '#ed8b00' },
  { name: 'MongoDB', level: 78, color: '#47a248' },
  { name: 'Git', level: 85, color: '#f05032' },
  { name: 'React Native', level: 90, color: '#02569b' }
];
const journeyData = [
  {
      year: '2020',
      title: 'Started Learning Programming',
      description: 'Began my journey with HTML, CSS, and basic JavaScript'
  },
  {
      year: '2021',
      title: 'First Web Project',
      description: 'Built my first responsive website using modern CSS techniques'
  },
  {
      year: '2022',
      title: 'Advanced JavaScript & React',
      description: 'Mastered React.js and started building dynamic web applications'
  },
  {
      year: '2023',
      title: 'Full Stack Development',
      description: 'Expanded to backend development with Node.js and databases'
  },
  {
      year: '2024',
      title: 'Mobile App Development',
      description: 'Started developing mobile applications with Flutter and React Native'
  }
];

// Social media links
const socialLinks = [
  {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
      color: '#333'
  },
  {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      color: '#0077b5'
  },
  {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
      color: '#1da1f2'
  },
  {
      name: 'Instagram',
      url: 'https://instagram.com/yourusername',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      color: '#e4405f'
  }
];

// Live explore projects
const exploreProjects = [
  {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React and Node.js',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eyDaCiWgB4Ac-HiIiUrA7giu4yUS3L7BEA&s',
      link: '#',
      tech: ['React', 'Node.js', 'Firebase']
  },
  {
      title: 'APM Explorerz',
      description: 'I developed a website for apm explorerz',
      image: 'Screenshots/image copy 3.png',
      link: 'https://ganesa14.github.io/host-1/Apm%20Explorers/index.html',
      tech: ['React Native', 'Firebase', 'Dart']
  },
  {
      title: 'Solar animation',
      description: 'Real-time weather application with beautiful UI',
      image: 'Screenshots/image copy 2.png',
      link: 'https://ganesa14.github.io/host02/',
      tech: ['JavaScript', 'API', 'CSS3']
  },
  {
      title: 'Old Portfolio',
      description: 'Analytics dashboard for social media management',
      image: 'Screenshots/image.png',
      link: 'https://66a15462ae90d62ece4c3572--verdant-starlight-c2b893.netlify.app/',
      tech: ['Vue.js', 'Chart.js', 'Express']
  }
];

// Certificates data
const certificates = [
  {
      title: 'RPA Automation',
      issuer: 'ICT Academy',
      image: 'IMG_20250107_175602.jpg',
      date: '2022'
  },
  {
      title: 'MongoDB Developer',
      issuer: 'MongoDB',
      image: 'IMG_20250107_175819.jpg',
      date: '2024'
  },
  {
      title: 'Full Stack Developer',
      issuer: 'For Altitudes',
      image: 'ForAltitudes.jpg',
      date: '2023'
  },
  {
      title: 'React Native Developer',
      issuer: 'Google',
      image: 'https://images.credly.com/images/8489d608-dfab-4bef-8d3c-df4bbf2e0d26/image.png',
      date: '2024'
  },
];

// Image gallery data
const galleryImages = [
  {
      src: 'Hackathon 1.jpg',
      alt: 'Project Screenshot 1',
      caption: 'E-Commerce Platform Interface'
  },
  {
      src: 'Hackathon 2.jpg',
      alt: 'Project Screenshot 2',
      caption: 'Mobile App Design'
  },
  {
      src: 'IMG-20240301-WA0039.jpg',
      alt: 'Project Screenshot 3',
      caption: 'Dashboard Analytics'
  },
  {
      src: 'Iv photo.jpg',
      alt: 'Project Screenshot 4',
      caption: 'Responsive Web Design'
  },
  {
    src: 'https://raw.githubusercontent.com/GANESA14/BCA-htmls/refs/heads/main/Spiral/program1/IMG20250220161023.jpg',
    alt: 'Project Screenshot 5',
    caption: 'Tech Xhibit'
},{
  src: 'Screenshots/photo_6264631223863328946_y.jpg',
  alt: 'Project Screenshot 6',
  caption: 'Tech Xhibit'
},{
  src: 'Screenshots/photo_6264631223863328940_y.jpg',
  alt: 'Project Screenshot 7',
  caption: 'Tech Xhibit'
},{
  src: 'Screenshots/photo_6264631223863328947_y.jpg',
  alt: 'Project Screenshot 8',
  caption: 'Tech Xhibit'
}
];

// Projects data
const projects = [
  {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with glassmorphism design',
      image: 'Screenshots/image.png',
      github: 'https://github.com/Ganesa14',
      live: 'https://66a15462ae90d62ece4c3572--verdant-starlight-c2b893.netlify.app/',
      tech: ['HTML5', 'CSS3', 'JavaScript' ]
  },
  {
      title: 'Chat App',
      description: 'An Secret Chatting app for strictly parented couples ',
      image: 'https://static.vecteezy.com/system/resources/previews/000/561/500/non_2x/chat-app-logo-icon-vector.jpg',
      github: 'https://github.com/Ganesa14',
      live: '#',
      tech: ['React Native', 'Firebase', 'Javascript']
  },
  {
      title: 'Files 2 Array',
      description: 'You can convert any files content into array',
      image: 'Screenshots/image copy.png',
      github: 'https://github.com/Ganesa14',
      live: 'https://ganesa14.github.io/Aspire-Project/files%20to%20array/index.html',
      tech: ['HTML5', 'JavaScript', 'Bootstrap']
  }
];
const codeSnippets = [
  `// Welcome to my portfolio!
const developer = {
  name: 'Your Name',
  skills: ['JavaScript', 'React', 'Node.js'],
  passion: 'Creating amazing web experiences'
};

console.log('Hello World! 👋');`,
  
  `// Building responsive designs
function createResponsiveLayout() {
  const viewport = window.innerWidth;
  if (viewport > 768) {
      return 'desktop-layout';
  } else {
      return 'mobile-layout';
  }
}`,
  
  `// API integration example
async function fetchUserData() {
  try {
      const response = await fetch('/api/user');
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error:', error);
  }
}`
];

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeSkills();
  initializeJourney();
  initializeCodeAnimation();
  initializeLiveExplore();
  initializeSocialLinks();
  initializeCertificates();
  initializeImageGallery();
  initializeProjects();
  initializeContactForm();
  addScrollAnimations();
});

// Skills section
function initializeSkills() {
  const container = document.getElementById('cosmic-skill-container');
  if (!container) return;

  skills.forEach((skill, index) => {
      const skillCard = document.createElement('div');
      skillCard.className = 'glass-container interactive-element';
      skillCard.style.animationDelay = `${index * 0.1}s`;
      
      skillCard.innerHTML = `
          <div class="skill-content">
              <h3 style="color: ${skill.color}; margin-bottom: 1rem;">${skill.name}</h3>
              <div class="skill-bar-container" style="background: rgba(255,255,255,0.1); height: 8px; border-radius: 4px; overflow: hidden;">
                  <div class="skill-bar" style="
                      height: 100%; 
                      background: linear-gradient(90deg, ${skill.color}, ${skill.color}88); 
                      width: 0%; 
                      border-radius: 4px;
                      transition: width 2s ease-in-out;
                  "></div>
              </div>
              <span class="skill-percentage" style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem; display: block;">${skill.level}%</span>
          </div>
      `;
      
      container.appendChild(skillCard);
      
      // Animate skill bar on scroll
      setTimeout(() => {
          const skillBar = skillCard.querySelector('.skill-bar');
          skillBar.style.width = `${skill.level}%`;
      }, index * 200 + 500);
  });
}

// Journey/Timeline section
function initializeJourney() {
  const container = document.querySelector('.uniqueTimelineList');
  if (!container) return;

  journeyData.forEach((item, index) => {
      const timelineItem = document.createElement('li');
      timelineItem.style.cssText = `
          position: relative;
          padding: 2rem 0 2rem 3rem;
          margin-bottom: 2rem;
      `;
      
      timelineItem.innerHTML = `
          <div class="timeline-marker" style="
              position: absolute;
              left: -8px;
              top: 2rem;
              wphoto_6262379424049644762_x.jpgidth: 16px;
              height: 16px;
              background: var(--tertiary-gradient);
              border-radius: 50%;
              border: 3px solid white;
              z-index: 2;
          "></div>
          <div class="timeline-content glass-container" style="
              transform: translateX(20px);
              opacity: 0;
              transition: all 0.6s ease;
              animation-delay: ${index * 0.2}s;
          ">
              <h3 style="color: var(--neon-blue); font-size: 1.3rem; margin-bottom: 0.5rem;">
                  ${item.year} - ${item.title}
              </h3>
              <p style="line-height: 1.6; opacity: 0.9;">
                  ${item.description}
              </p>
          </div>
      `;
      
      container.appendChild(timelineItem);
      
      // Animate timeline items
      setTimeout(() => {
          const content = timelineItem.querySelector('.timeline-content');
          content.style.transform = 'translateX(0)';
          content.style.opacity = '1';
      }, index * 200 + 300);
  });
}

// Code animation
function initializeCodeAnimation() {
  const codeOutput = document.getElementById('codeOutput');
  if (!codeOutput) return;

  let currentSnippet = 0;
  
  function typeCode() {
      const snippet = codeSnippets[currentSnippet];
      let i = 0;
      codeOutput.textContent = '';
      
      function typeChar() {
          if (i < snippet.length) {
              codeOutput.textContent += snippet.charAt(i);
              i++;
              setTimeout(typeChar, 50);
          } else {
              setTimeout(() => {
                  currentSnippet = (currentSnippet + 1) % codeSnippets.length;
                  setTimeout(typeCode, 2000);
              }, 3000);
          }
      }
      
      typeChar();
  }
  
  typeCode();
}

// Live Explore section
function initializeLiveExplore() {
  const container = document.getElementById('explore-grid');
  if (!container) return;

  exploreProjects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'glass-container interactive-element';
      projectCard.style.animationDelay = `${index * 0.1}s`;
      
      projectCard.innerHTML = `
          <img src="${project.image}" alt="${project.title}" style="
              width: 100%; 
              height: 200px; 
              object-fit: cover; 
              border-radius: 10px; 
              margin-bottom: 1rem;
          ">
          <h3 style="color: var(--neon-blue); margin-bottom: 0.5rem;">${project.title}</h3>
          <p style="margin-bottom: 1rem; opacity: 0.9;">${project.description}</p>
          <div class="tech-stack" style="margin-bottom: 1rem;">
              ${project.tech.map(tech => 
                  `<span style="
                      display: inline-block; 
                      background: rgba(255,255,255,0.1); 
                      padding: 0.25rem 0.5rem; 
                      border-radius: 12px; 
                      font-size: 0.8rem; 
                      margin: 0.25rem 0.25rem 0 0;
                  ">${tech}</span>`
              ).join('')}
          </div>
          <a href="${project.link}" class="nav-button" style="
              display: inline-block; 
              text-decoration: none; 
              padding: 0.5rem 1rem;
              font-size: 0.9rem;
          ">View Project</a>
      `;
      
      container.appendChild(projectCard);
  });
}

// Social Links
function initializeSocialLinks() {
  const container = document.getElementById('social-links');
  if (!container) return;

  socialLinks.forEach((social, index) => {
      const socialCard = document.createElement('a');
      socialCard.href = social.url;
      socialCard.target = '_blank';
      socialCard.className = 'glass-container interactive-element';
      socialCard.style.cssText = `
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          transition: all 0.3s ease;
          animation-delay: ${index * 0.1}s;
      `;
      
      socialCard.innerHTML = `
          <svg width="40" height="40" viewBox="0 0 24 24" fill="${social.color}" style="margin-bottom: 1rem;">
              <path d="${social.icon}"/>
          </svg>
          <h3 style="margin-bottom: 0.5rem;">${social.name}</h3>
          <p style="opacity: 0.8; text-align: center;">Connect with me</p>
      `;
      
      container.appendChild(socialCard);
  });
}

// Certificates
function initializeCertificates() {
  const container = document.getElementById('certificatesGrid');
  const modal = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.getElementById('closeModal');
  
  if (!container) return;

  certificates.forEach((cert, index) => {
      const certCard = document.createElement('div');
      certCard.className = 'glass-container interactive-element';
      certCard.style.cssText = `
          cursor: pointer;
          animation-delay: ${index * 0.1}s;
      `;
      
      certCard.innerHTML = `
          <img src="${cert.image}" alt="${cert.title}" style="
              width: 100%; 
              height: 200px; 
              object-fit: cover; 
              border-radius: 10px; 
              margin-bottom: 1rem;
          ">
          <h3 style="color: var(--neon-blue); margin-bottom: 0.5rem;">${cert.title}</h3>
          <p style="opacity: 0.8; margin-bottom: 0.5rem;">Issued by: ${cert.issuer}</p>
          <p style="opacity: 0.6; font-size: 0.9rem;">${cert.date}</p>
      `;
      
      // Add click event for modal
      certCard.addEventListener('click', () => {
          modalImage.src = cert.image;
          modalImage.alt = cert.title;
          modal.classList.add('active');
      });
      
      container.appendChild(certCard);
  });
  
  // Modal close events
  if (closeModal) {
      closeModal.addEventListener('click', () => {
          modal.classList.remove('active');
      });
  }
  
  if (modal) {
      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.classList.remove('active');
          }
      });
  }
}

// Image Gallery
function initializeImageGallery() {
  const imageWrapper = document.getElementById('imageWrapper');
  const dotContainer = document.getElementById('dotContainer');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  
  if (!imageWrapper || !dotContainer) return;

  let currentImageIndex = 0;

  // Create images
  galleryImages.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      img.style.cssText = `
          width: 100%;
          height: auto;
          border-radius: 15px;
          display: ${index === 0 ? 'block' : 'none'};
      `;
      imageWrapper.appendChild(img);
  });

  // Create dots
  galleryImages.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.style.cssText = `
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: ${index === 0 ? 'var(--neon-blue)' : 'rgba(255,255,255,0.3)'};
          cursor: pointer;
          transition: all 0.3s ease;
      `;
      
      dot.addEventListener('click', () => showImage(index));
      dotContainer.appendChild(dot);
  });

  function showImage(index) {
      // Hide all images
      const images = imageWrapper.querySelectorAll('img');
      images.forEach(img => img.style.display = 'none');
      
      // Show current image
      images[index].style.display = 'block';
      
      // Update dots
      const dots = dotContainer.querySelectorAll('button');
      dots.forEach((dot, i) => {
          dot.style.background = i === index ? 'var(--neon-blue)' : 'rgba(255,255,255,0.3)';
      });
      
      currentImageIndex = index;
  }

  // Navigation buttons
  if (prevButton) {
      prevButton.addEventListener('click', () => {
          const newIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
          showImage(newIndex);
      });
  }

  if (nextButton) {
      nextButton.addEventListener('click', () => {
          const newIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
          showImage(newIndex);
      });
  }
}

// Projects section
function initializeProjects() {
  const container = document.getElementById('projectGrid');
  if (!container) return;

  projects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'glass-container interactive-element';
      projectCard.style.animationDelay = `${index * 0.1}s`;
      
      projectCard.innerHTML = `
          <img src="${project.image}" alt="${project.title}" style="
              width: 100%; 
              height: 200px; 
              object-fit: cover; 
              border-radius: 10px; 
              margin-bottom: 1rem;
          ">
          <h3 style="color: var(--neon-blue); margin-bottom: 1rem;">${project.title}</h3>
          <p style="margin-bottom: 1rem; opacity: 0.9;">${project.description}</p>
          <div class="tech-stack" style="margin-bottom: 1.5rem;">
              ${project.tech.map(tech => 
                  `<span style="
                      display: inline-block; 
                      background: rgba(255,255,255,0.1); 
                      padding: 0.25rem 0.5rem; 
                      border-radius: 12px; 
                      font-size: 0.8rem; 
                      margin: 0.25rem 0.25rem 0 0;
                  ">${tech}</span>`
              ).join('')}
          </div>
          <div class="project-links" style="display: flex; gap: 1rem;">
              <a href="${project.github}" target="_blank" class="nav-button" style="
                  display: inline-block; 
                  text-decoration: none; 
                  padding: 0.5rem 1rem;
                  font-size: 0.9rem;
                  flex: 1;
                  text-align: center;
              ">GitHub</a>
              <a href="${project.live}" target="_blank" class="nav-button" style="
                  display: inline-block; 
                  text-decoration: none; 
                  padding: 0.5rem 1rem;
                  font-size: 0.9rem;
                  flex: 1;
                  text-align: center;
                  background: var(--secondary-gradient);
              ">Live Demo</a>
          </div>
      `;
      
      container.appendChild(projectCard);
  });
}

// Contact form
function initializeContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      
      // Simple validation
      if (!name || !email || !phone) {
          alert('Please fill in all fields.');
          return;
      }
      
      // Simulate form submission
      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
          alert('Thank you for your message! I\'ll get back to you soon.');
          form.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
      }, 2000);
  });
}
// Scroll animations - Completing the missing part from main.js
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document.querySelectorAll('.glass-container, .interactive-element').forEach(el => {
    observer.observe(el);
  });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Particle background animation
function initializeParticleBackground() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-1';
  canvas.style.pointerEvents = 'none';
  document.body.appendChild(canvas);

  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    };
  }

  function initParticles() {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }
  }

  function updateParticles() {
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(35, 220, 255, ${particle.opacity})`;
      ctx.fill();
    });

    // Draw connections
    particles.forEach((particle1, i) => {
      particles.slice(i + 1).forEach(particle2 => {
        const dx = particle1.x - particle2.x;
        const dy = particle1.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particle1.x, particle1.y);
          ctx.lineTo(particle2.x, particle2.y);
          ctx.strokeStyle = `rgba(35, 220, 255, ${0.1 * (1 - distance / 100)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });
  }

  function animate() {
    updateParticles();
    drawParticles();
    animationId = requestAnimationFrame(animate);
  }

  resizeCanvas();
  initParticles();
  animate();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });
}

// Mouse parallax effect
function initializeParallaxEffect() {
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;

    document.querySelectorAll('.glass-container').forEach((el, index) => {
      const speed = (index % 3 + 1) * 0.02;
      const x = (mouseX - 50) * speed;
      const y = (mouseY - 50) * speed;
      
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// Typing animation for text elements
function initializeTypingAnimation() {
  const typingElements = document.querySelectorAll('.typing-text');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--neon-blue)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          element.style.borderRight = 'none';
        }, 1000);
      }
    };
    
    // Start typing when element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(element);
  });
}

// Loading screen
function initializeLoadingScreen() {
  const loadingScreen = document.createElement('div');
  loadingScreen.id = 'loading-screen';
  loadingScreen.innerHTML = `
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <h2>Loading Portfolio...</h2>
    </div>
  `;
  
  loadingScreen.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  `;

  const style = document.createElement('style');
  style.textContent = `
    .loading-content {
      text-align: center;
      color: white;
    }
    
    .loading-spinner {
      width: 50px;
      height: 50px;
      border: 3px solid rgba(255,255,255,0.3);
      border-top: 3px solid white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(loadingScreen);

  // Remove loading screen after everything is loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1000);
  });
}

// Enhanced form validation
function enhanceFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const inputs = form.querySelectorAll('.form-input');
  
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearError);
  });

  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error
    clearError(e);
    
    let isValid = true;
    let errorMessage = '';

    switch(field.type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
        break;
      case 'tel':
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
          isValid = false;
          errorMessage = 'Please enter a valid phone number';
        }
        break;
      default:
        if (value.length < 2) {
          isValid = false;
          errorMessage = 'This field must be at least 2 characters long';
        }
    }

    if (!isValid) {
      showError(field, errorMessage);
    }
  }

  function showError(field, message) {
    field.style.borderColor = '#ff4757';
    
    let errorDiv = field.parentNode.querySelector('.error-message');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.style.cssText = `
        color: #ff4757;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      field.parentNode.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    setTimeout(() => errorDiv.style.opacity = '1', 10);
  }

  function clearError(e) {
    const field = e.target;
    field.style.borderColor = '';
    
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.style.opacity = '0';
      setTimeout(() => errorDiv.remove(), 300);
    }
  }
}

// Scroll progress indicator
function initializeScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    progressBar.style.width = scrollPercent + '%';
  });
}

// Intersection Observer for fade-in animations
function initializeFadeInAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply to all major sections
  document.querySelectorAll('section, .glass-container, .interactive-element').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Theme toggle functionality
function initializeThemeToggle() {
  const themeToggle = document.createElement('button');
  themeToggle.innerHTML = '🌙/☀️';
  themeToggle.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    padding: 10px 15px;
    border-radius: 25px;
    cursor: pointer;
    z-index: 1000;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  });

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
}

// Easter egg - Konami code
function initializeEasterEgg() {
  let sequence = [];
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  document.addEventListener('keydown', (e) => {
    sequence.push(e.code);
    sequence = sequence.slice(-konamiCode.length);

    if (sequence.join('') === konamiCode.join('')) {
      // Easter egg activation
      document.body.style.animation = 'rainbow 2s infinite';
      setTimeout(() => {
        document.body.style.animation = '';
        alert('🎉 You found the easter egg! 🎉');
      }, 2000);
    }
  });

  // Add rainbow animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

// Performance monitoring
function initializePerformanceMonitoring() {
  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // Show performance badge for fast loads
    if (loadTime < 3000) {
      const badge = document.createElement('div');
      badge.textContent = '⚡ Fast Load';
      badge.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(0,255,0,0.2);
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(badge);
      
      setTimeout(() => badge.style.opacity = '1', 100);
      setTimeout(() => {
        badge.style.opacity = '0';
        setTimeout(() => badge.remove(), 300);
      }, 3000);
    }
  });
}

// Initialize all additional features
document.addEventListener('DOMContentLoaded', function() {
  // Call existing initialization functions
  initializeSkills();
  initializeJourney();
  initializeCodeAnimation();
  initializeLiveExplore();
  initializeSocialLinks();
  initializeCertificates();
  initializeImageGallery();
  initializeProjects();
  initializeContactForm();
  addScrollAnimations();
  
  // Initialize new features
  initializeLoadingScreen();
  initializeSmoothScrolling();
  initializeParticleBackground();
  initializeParallaxEffect();
  initializeTypingAnimation();
  enhanceFormValidation();
  initializeScrollProgress();
  initializeFadeInAnimations();
  initializeThemeToggle();
  initializeEasterEgg();
  initializePerformanceMonitoring();
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
  // Recalculate any responsive elements
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    // Disable parallax on mobile for better performance
    document.querySelectorAll('.glass-container').forEach(el => {
      el.style.transform = 'none';
    });
  }
});

// Add custom cursor effect
function initializeCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: rgba(35, 220, 255, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });

  // Scale cursor on hover over interactive elements
  document.querySelectorAll('a, button, .interactive-element').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });
}

// Initialize custom cursor on desktop only
if (window.innerWidth > 768) {
  document.addEventListener('DOMContentLoaded', initializeCustomCursor);
}