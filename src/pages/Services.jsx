import React from 'react';

// Refined service list mapping your technical strengths without any image requirements
const serviceList = [
  { 
    name: "Web Development", 
    description: "Designing and engineering modern single-page applications utilizing React, semantic HTML5, and modular CSS systems. Focused on crafting highly interactive, responsive interfaces optimized across all mobile and desktop viewports—as demonstrated in my commercial restaurant menu card platforms." 
  },
  { 
    name: "General Programming", 
    description: "Writing clean, performant, and self-documenting code bases using Java, C#, and Python. Specializing in applying rigorous object-oriented principles, structuring relational database schemas, and mapping out reliable algorithmic solutions built for scale." 
  },
  { 
    name: "Mobile App Interfaces", 
    description: "Architecting accessible, intuitive mobile user flows and modular component structures. Focused on performance-driven rendering frameworks, custom asset optimization, and creating fluid cross-platform layouts tailored for seamless digital navigation." 
  }
];

function Services() {
  return (
    <section className="about-container" style={{ maxWidth: '1000px', padding: '60px 20px' }}>
      
      {/* Page Heading */}
      <div style={{ marginBottom: '40px' }}>
        <h1 className="name-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Services</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
          Professional engineering solutions and core technical competencies tailored to deliver clean, production-ready web experiences.
        </p>
      </div>

      {/* Grid Layout utilizing your global css cards */}
      <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
        {serviceList.map((service) => (
          <article className="skill-card" key={service.name} style={{ 
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            {/* Service Header Design */}
            <h2 style={{ 
              fontSize: '1.4rem', 
              fontWeight: '700', 
              color: 'var(--text-main)', 
              margin: '0 0 15px 0',
              borderBottom: '2px solid var(--bg-tag)',
              paddingBottom: '10px'
            }}>
              {service.name}
            </h2>
            
            {/* Service Narrative Body */}
            <p style={{ 
              fontSize: '0.95rem', 
              lineHeight: '1.6', 
              color: 'var(--text-muted)', 
              margin: 0 
            }}>
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
