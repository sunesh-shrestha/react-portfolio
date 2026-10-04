import React from 'react';
import { Link } from 'react-router';

function Home() {
  const engineeringPillars = [
    { 
      title: "Full-Stack Development", 
      desc: "Architecting end-to-end applications with modular, scalable code bases and modern frameworks." 
    },
    { 
      title: "Algorithmic Problem Solving", 
      desc: "Analyzing runtime complexity and optimizing algorithms for maximum efficiency and speed." 
    },
    { 
      title: "Clean Architecture", 
      desc: "Writing self-documenting code built around strict encapsulation and industry design patterns." 
    }
  ];

  const highlights = [
    { label: "Focus", value: "Full-Stack" },
    { label: "Approach", value: "Test-Driven" },
    { label: "Mindset", value: "Agile & Lean" }
  ];

  return (
    <section className="about-container" style={{ maxWidth: '950px', padding: '60px 20px' }}>
      
      {/* Hero Presentation */}
      <div className="home-hero-text" style={{ paddingBottom: '30px' }}>
        <h1 className="name-title" style={{ fontSize: '3.5rem', marginBottom: '10px', fontWeight: '800', tracking: '-1px' }}>
          Sunesh Prasad Shrestha
        </h1>
        <p className="subtitle" style={{ fontSize: '1.3rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '30px' }}>
          Software Engineering Student @ Centennial College
        </p>
        
        <div className="bio-text" style={{ maxWidth: '800px' }}>
          <p style={{ fontStyle: 'normal', fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
            I specialize in bridging the gap between rigorous computer science theory and practical, production-ready software systems. Driven by an enduring curiosity about how complex digital systems function under the hood, I focus on engineering clean backend business logic, building modular frontend components, and optimizing database transactions.
          </p>
          
          <blockquote className="mission" style={{
            borderLeft: '4px solid var(--primary-color)',
            backgroundColor: 'var(--bg-tag)',
            padding: '18px 24px',
            margin: '35px 0',
            fontStyle: 'italic',
            borderRadius: '0 var(--border-radius) var(--border-radius) 0',
            color: 'var(--text-main)',
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            "Mission: To build highly performant, accessible, and meaningful software architecture that delivers concrete answers to complex real-world problems."
          </blockquote>
        </div>

        {/* Action Controls */}
        <div className="button-row" style={{ display: 'flex', gap: '15px', marginTop: '35px' }}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" style={{ marginTop: 0, padding: '14px 32px' }}>
            View Resume
          </a>
          <Link to="/projects" className="resume-btn" style={{ 
            marginTop: 0,
            padding: '14px 32px',
            backgroundColor: 'transparent',
            color: 'var(--primary-color)',
            border: '2px solid var(--primary-color)',
            boxShadow: 'none'
          }}>
            Explore Projects &rarr;
          </Link>
        </div>
      </div>

      {/* Micro-Metrics Display */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
        gap: '20px', 
        margin: '40px 0 60px 0' 
      }}>
        {highlights.map((item, index) => (
          <div key={index} style={{
            border: '1px dashed #cbd5e1',
            borderRadius: 'var(--border-radius)',
            padding: '15px 20px',
            textAlign: 'center'
          }}>
            <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', uppercase: 'true', marginBottom: '4px' }}>
              {item.label}
            </span>
            <span style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-main)' }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Engineering Pillars Layout */}
      <div className="skills-section" style={{ paddingTop: '40px' }}>
        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '25px' }}>Core Competencies</h2>
        <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
          {engineeringPillars.map((pillar, index) => (
            <div key={index} className="skill-card" style={{ 
              padding: '30px', 
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default'
            }}>
              <h3 style={{ borderBottom: 'none', paddingBottom: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '12px', marginBottom: 0 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* System Focus Banner */}
      <div style={{ 
        marginTop: '60px', 
        padding: '24px 30px', 
        background: 'linear-gradient(135deg, var(--bg-tag) 0%, #f8fafc 100%)', 
        border: '1px solid #e2e8f0',
        borderRadius: 'var(--border-radius)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary-color)', display: 'block', letterSpacing: '1px', marginBottom: '4px' }}>
            CURRENT RESEARCH FOCUS
          </span>
          <span style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-main)' }}>
            Microservices Design, API Gateway Integration & Cloud Native Architectures
          </span>
        </div>
        <Link to="/about" style={{ color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
          Read Academic Path &rarr;
        </Link>
      </div>

    </section>
  );
}

export default Home;
