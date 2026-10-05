import React from 'react';

// Clean project data array with brief descriptions
const projectList = [
  {
    title: "Interactive Restaurant Menu",
    image: "/Menu.png", 
    description: "A highly responsive digital menu card application that offers seamless, mobile-optimized browsing. Built using structured, semantic layouts and clean component design, it delivers an intuitive user interface for modern dining exploration.",
    liveLink: "https://sunesh-shrestha.github.io/The-Mule-Bar-Grill/"
  },
  {
    title: "The Mule Bar & Grill",
    image: "/Mule_bar.png", 
    description: "A comprehensive restaurant platform interface engineered with strict cohesive styling and optimized branding architecture. It integrates accessible menu structures and responsive components tailored to enhance public commercial web presence.",
    liveLink: "https://sunesh-shrestha.github.io/Menu//"
  }
];

function Projects() {
  return (
    <section className="about-container" style={{ maxWidth: '1000px', padding: '60px 20px' }}>
      
      {/* Page Heading */}
      <div style={{ marginBottom: '40px' }}>
        <h1 className="name-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Projects</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
          A curated collection of client-focused web platforms, showcasing responsive frontend design, interactive interfaces, and clean code architecture.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {projectList.map((project) => (
          <article className="skill-card" key={project.title} style={{ 
            padding: '0', 
            overflow: 'hidden', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            
            {/* Project Image Box Wrapper */}
            <div style={{ width: '100%', height: '200px', backgroundColor: 'var(--bg-tag)', overflow: 'hidden', borderBottom: '1px solid #e2e8f0' }}>
              <img 
                src={project.image} 
                alt={`${project.title} Screenshot`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  // Fallback style if an image is missing
                  e.target.style.display = 'none';
                  e.target.parentNode.style.display = 'flex';
                  e.target.parentNode.style.alignItems = 'center';
                  e.target.parentNode.style.justifyContent = 'center';
                  e.target.parentNode.style.color = 'var(--text-muted)';
                  e.target.parentNode.innerText = '📷 Image Asset Pending';
                }}
              />
            </div>

            {/* Project Details Text */}
            <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-main)', margin: '0 0 12px 0' }}>
                  {project.title}
                </h2>
                
                {/* Brief description display block */}
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)', margin: '0 0 25px 0' }}>
                  {project.description}
                </p>
              </div>

              {/* Live Link Button */}
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-btn" 
                style={{ 
                  marginTop: 'auto', 
                  width: '100%', 
                  textAlign: 'center',
                  boxSizing: 'border-box',
                  display: 'block'
                }}
              >
                Launch Live Site &rarr;
              </a>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
