// Project data lives in an array; the page renders one card per item
const projectList = [
  {
    title: "Project One",
    image: "/images/project1.jpg",
    role: "Front-end developer",
    outcome: "Delivered a responsive site that cut page load time by 30%.",
  },
  {
    title: "Project Two",
    image: "/images/project2.jpg",
    role: "Full-stack developer",
    outcome: "Built a task-tracking app used by a team of 10.",
  },
  {
    title: "Project Three",
    image: "/images/project3.jpg",
    role: "Designer and developer",
    outcome: "Launched a small business website with online enquiry form.",
  },
];

function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="card-grid">
        {projectList.map((project) => (
          <article className="card" key={project.title}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p><strong>My role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;