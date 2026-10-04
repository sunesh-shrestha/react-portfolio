const serviceList = [
  { name: "Web Development", image: "/images/service-web.jpg", description: "Responsive websites built with React, HTML and CSS." },
  { name: "General Programming", image: "/images/service-code.jpg", description: "Scripts and tools in JavaScript and Python." },
  { name: "Mobile Apps", image: "/images/service-mobile.jpg", description: "Cross-platform mobile app prototypes." },
];

function Services() {
  return (
    <section>
      <h1>Services</h1>
      <div className="card-grid">
        {serviceList.map((service) => (
          <article className="card" key={service.name}>
            <img src={service.image} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;