import { Link } from "react-router";

function Home() {
  return (
    <section className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p className="subtitle">Hi, I'm Your Name, a web developer in training.</p>
      <blockquote className="mission">
        Mission: To build clean, accessible and useful software that solves real problems.
      </blockquote>
      {/* Buttons that redirect to other pages */}
      <div className="button-row">
        <Link to="/about" className="button">About Me</Link>
        <Link to="/projects" className="button button-outline">View Projects</Link>
      </div>
    </section>
  );
}

export default Home;