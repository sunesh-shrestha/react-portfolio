import React from 'react';
import '../index.css'; // Make sure to add the CSS file below!

function About() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C#", "Python", "JavaScript", "HTML5/CSS3", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js"]
    },
    {
      title: "Databases & Storage",
      skills: ["Oracle DB", "MongoDB", "MySQL"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "VS Code", "Agile/Scrum", "Docker"]
    }
  ];

  return (
    <section className="about-container">
      <div className="about-hero">
        <div className="profile-image-wrapper">
          <img 
            src="/sps.jpg" 
            alt="Portrait of Sunesh Prasad Shrestha" 
            className="portrait-img" 
          />
        </div>
        
        <div className="about-content">
          <h1 className="name-title">Sunesh Prasad Shrestha</h1>
          <p className="subtitle">Software Engineering Student @ Centennial College</p>
          
          <div className="bio-text">
            <p>
              I am a Software Engineering student at Centennial College with a deep interest 
              in building robust, scalable applications and solving complex algorithmic problems. 
              I bridge the gap between theoretical computer science and practical, production-ready 
              software engineering.
            </p>
            <p>
              My journey into software engineering began in grade 8 through a pure curiosity 
              about how websites work under the hood. What started as a childhood fascination quickly 
              turned into a passion for writing clean, maintainable code and engineering systems 
              that make a tangible impact.
            </p>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            View My Resume (PDF)
          </a>
        </div>
      </div>

      {/* Modern Grid Layout for Skills */}
      <div className="skills-section">
        <h2 className="section-title">Technical Toolkit</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <div className="tag-container">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
