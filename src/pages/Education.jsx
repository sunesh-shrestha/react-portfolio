import React from 'react';

function Education() {
  const educationHistory = [
    {
      qualification: "Advanced Diploma in Software Engineering Technology (AI)",
      institution: "Centennial College",
      // Safely added the link property as a clean data string
      link: "https://www.centennialcollege.ca/", 
      years: "2025 – Present",
      description: "Rigorous training focusing on software engineering principles, core application architecture, and practical AI system integrations.",
      highlights: [
        "Core Focus: Advanced Data Structures, Object-Oriented System Design, Web Application Development, and Database Management.",
        "Collaborative Projects: Developed full-stack architectures within agile environments during iterative software engineering sprint milestones.",
        "Experiential Learning: Actively engaged with industry-aligned career initiatives like the WILwork project network."
      ]
    },
    {
      qualification: "High School Diploma",
      institution: "Your High School Name",
      years: "2021 – 2025",
      description: "Graduated with a strong foundational focus in Advanced Mathematics and introductory computer science applications.",
      highlights: [
        "Ignited early fascination with foundational scripting languages and website mechanics in grade 8.",
        "Developed logical problem-solving frameworks through mathematics and collaborative team settings."
      ]
    }
  ];

  return (
    <section className="about-container" style={{ maxWidth: '900px', padding: '60px 20px' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '40px' }}>
        <h1 className="name-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Education</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
          An overview of my academic background and technical specializations.
        </p>
      </div>

      {/* Interactive Vertical Timeline Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
        {educationHistory.map((entry, index) => (
          <div 
            key={index} 
            className="skill-card" 
            style={{ 
              padding: '30px', 
              position: 'relative',
              borderLeft: '4px solid var(--primary-color)' 
            }}
          >
            {/* Top Row: Degree & Date */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-main)', margin: '0 0 5px 0' }}>
                  {entry.qualification}
                </h2>
                
                {/* Dynamically checks for link property to render an interactive anchor tag */}
                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', margin: 0 }}>
                  {entry.link ? (
                    <a 
                      href={entry.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                    >
                      {entry.institution}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-muted)' }}>{entry.institution}</span>
                  )}
                </h3>
              </div>
              <span style={{ 
                backgroundColor: 'var(--bg-tag)', 
                color: 'var(--text-main)', 
                padding: '6px 14px', 
                borderRadius: '20px', 
                fontSize: '0.85rem', 
                fontWeight: '600' 
              }}>
                {entry.years}
              </span>
            </div>

            {/* Narrative description */}
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>
              {entry.description}
            </p>

            {/* Bulleted Core Milestones */}
            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {entry.highlights.map((highlight, idx) => (
                <li key={idx} style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Education;
