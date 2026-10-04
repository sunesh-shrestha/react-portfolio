function About() {
  return (
    <section className="about">
      <img src="/images/me.jpg" alt="Portrait of Your Legal Name" className="portrait" />
      <div>
        <h1>About Me</h1>
        <h2>Your Full Legal Name</h2>
        <p>
          Write 3–4 clean, professional sentences: who you are, what you study,
          what you enjoy building, and what you're looking for next.
        </p>
        {/* Files in /public are served from the site root, so /resume.pdf works */}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">
          View My Resume (PDF)
        </a>
      </div>
    </section>
  );
}

export default About;