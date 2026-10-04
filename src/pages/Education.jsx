const educationHistory = [
  { qualification: "Diploma in Software Development", institution: "Centennial College", years: "2025 – Present" },
  { qualification: "High School Diploma", institution: "Your High School", years: "2021 – 2025" },
  // Add certifications too, e.g. "Google IT Support Certificate, 2024"
];

function Education() {
  return (
    <section>
      <h1>Education</h1>
      <ul className="timeline">
        {educationHistory.map((entry) => (
          <li key={entry.qualification}>
            <h2>{entry.qualification}</h2>
            <p>{entry.institution}</p>
            <p className="years">{entry.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;