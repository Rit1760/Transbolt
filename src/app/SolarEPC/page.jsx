import "../../Styles/solarEPC.css";

export default function SolarEPC() {
  const features = [
    {
      icon: "🛡️",
      title: "Safe & Compliant",
      text: "Built to global standards and industry regulations for maximum safety and reliability.",
    },
    {
      icon: "✅",
      title: "Quality Assured",
      text: "Rigorous testing and quality control at every stage of project delivery.",
    },
    {
      icon: "⏱️",
      title: "On-Time Delivery",
      text: "Efficient project management ensures timely completion without compromising quality.",
    },
    {
      icon: "⚡",
      title: "Maximum Performance",
      text: "Optimized designs and best practices deliver superior energy yield and ROI.",
    },
  ];

  const process = [
    {
      no: "01",
      title: "Feasibility & Assessment",
      text: "Comprehensive site evaluation and technical feasibility studies.",
    },
    {
      no: "02",
      title: "Engineering & Design",
      text: "Custom solar system design optimized for your site conditions.",
    },
    {
      no: "03",
      title: "Procurement",
      text: "Sourcing premium quality equipment from trusted suppliers.",
    },
    {
      no: "04",
      title: "Construction & Installation",
      text: "Professional installation by certified solar experts.",
    },
    {
      no: "05",
      title: "Testing & Commissioning",
      text: "Complete system testing and performance validation.",
    },
    {
      no: "06",
      title: "Operation & Maintenance",
      text: "Long-term maintenance and technical support services.",
    },
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Higher Energy Yield",
      text: "Maximizing returns through optimized design and component selection.",
    },
    {
      icon: "🛡️",
      title: "Long-Term Reliability",
      text: "Built with premium components and strict quality standards.",
    },
    {
      icon: "🌱",
      title: "Sustainable Solutions",
      text: "Reducing carbon footprint with renewable energy integration.",
    },
    {
      icon: "🎧",
      title: "Lifetime Support",
      text: "Dedicated maintenance, monitoring and expert assistance.",
    },
  ];

  return (
    <div className="solarEPC">

      {/* Hero Section */}
      <section className="solarHero">
        <div className="overlay"></div>

        <div className="solarHeroContent">
          <span className="tag">SOLAR EPC SOLUTIONS</span>

          <h1>
            End-to-End <span>Solar EPC</span> Solutions
          </h1>

          <p>
            From concept to commissioning, we deliver complete solar EPC
            solutions with a focus on quality, safety, innovation and
            long-term performance.
          </p>

          <div className="heroBtns">
            <button> Download Brochure</button>
            <button className="outlineBtn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="whyChoose">
        <div className="sectionHeading">
          <h2>Why Choose Our Solar EPC Services</h2>
          <p>
            Delivering reliable, efficient and future-ready solar energy
            solutions for industries and businesses.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((item, index) => (
            <div className="featureCard" key={index}>
              <div className="featureIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="epcProcess">
        <div className="sectionHeading">
          <h2>Complete End-to-End EPC Solutions</h2>
        </div>

        <div className="processGrid">
          {process.map((item, index) => (
            <div className="processCard" key={index}>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="statsSection">
        <div className="statBox">
          <h3>500+</h3>
          <p>Projects Delivered</p>
        </div>

        <div className="statBox">
          <h3>100 MW+</h3>
          <p>Installed Capacity</p>
        </div>

        <div className="statBox">
          <h3>99%</h3>
          <p>Client Satisfaction</p>
        </div>

        <div className="statBox">
          <h3>24/7</h3>
          <p>Support Service</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefitsSection">
        <div className="sectionHeading">
          <h2>Built for a Sustainable Future</h2>
        </div>

        <div className="benefitGrid">
          {benefits.map((item, index) => (
            <div className="benefitCard" key={index}>
              <div className="benefitIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ctaSection">
        <h2>Ready to Go Solar?</h2>

        <p>
          Let's build a cleaner, more sustainable energy future together.
        </p>

        <button>Talk To Our Experts →</button>
      </section>
    </div>
  );
}