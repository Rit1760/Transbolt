
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBolt,
  faTriangleExclamation,
  faChartLine,
  faShieldHalved,
  faCertificate,
  faSatelliteDish,
  faSolarPanel,
  faServer,
  faIndustry,
  faDownload,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import "../../Styles/LightPrev.css";



const problemCards = [
  {
    icon: faBolt,
    title: "DIRECT STRIKES",
    text: "Immediate equipment destruction and asset loss",
    solution: "NIVARAK Prevention System",
  },
  {
    icon: faTriangleExclamation,
    title: "POWER SURGES",
    text: "Sensitive electronics damaged in microseconds",
    solution: "Advanced SPD Protection",
  },
  {
    icon: faChartLine,
    title: "SYSTEM FAILURES",
    text: "Unpredictable downtime and lost revenue",
    solution: "Real-Time Monitoring",
  },
];


  // const problemCards = [
  //   {
  //     icon: faBolt,
  //     title: "DIRECT STRIKES",
  //     text: "Immediate equipment destruction and asset loss",
  //     solution: "NIVARAK Prevention System",
  //   },
  //   {
  //     icon: faTriangleExclamation,
  //     title: "POWER SURGES",
  //     text: "Sensitive electronics damaged in microseconds",
  //     solution: "Advanced SPD Protection",
  //   },
  //   {
  //     icon: faChartLine,
  //     title: "SYSTEM FAILURES",
  //     text: "Unpredictable downtime and lost revenue",
  //     solution: "Real-Time Monitoring",
  //   },
  // ];

  const protectionLayers = [
    {
      title: "EXTERNAL PROTECTION",
      desc: "NIVARAK CMCE system prevents lightning formation in 120m radius",
      specs: "100+ kA | -40°C to +80°C",
    },
    {
      title: "SURGE PROTECTION",
      desc: "Type 1+2 & Type 2 SPDs protect against transient overvoltages",
      specs: "40-100 kA | ≤1.5kV Residual",
    },
    {
      title: "GROUNDING INFRASTRUCTURE",
      desc: "Low-resistance earthing network with advanced compounds",
      specs: "≤0.12 Ω·m | IS 3043 Compliant",
    },
    {
      title: "CONTINUOUS MONITORING",
      desc: "EarthQuant™ tracks earth resistance 24/7",
      specs: "RS-485 | LTE | Wireless",
    },
  ];




export default function LightPrev() {

  return (
    <div className="lightPrev">
      <a href="#" className="downloadBtn">
        <FontAwesomeIcon icon={faDownload} />
      </a>

      <a
        href="https://wa.me/919971237771"
        className="whatsappBtn"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faComments} />
      </a>

      {/* Hero */}
      <section className="hero">
        <div className="heroOverlay">
          <h1>THE POWER TO PROTECT</h1>
          <p>99% Lightning Risk Reduction</p>
        </div>
      </section>

      {/* Why Protection */}
      <section className="whySection">
        <div className="leftContent">
          <h2>
            <FontAwesomeIcon icon={faBolt} />
            {" "}ONE STRIKE. MILLIONS AT RISK.
            <br />
            Are You Protected?
          </h2>

          <p>
            Lightning strikes can devastate infrastructure in milliseconds.
            From smart cities to solar parks and data centers, protection
            is no longer optional.
          </p>

          <ul>
            <li>Equipment failures costing millions</li>
            <li>Extended downtime affecting operations</li>
            <li>Safety risks to personnel</li>
            <li>Regulatory non-compliance</li>
          </ul>
        </div>

        <div className="cardsGrid">
          {problemCards.map((card, index) => (
            <div className="problemCard" key={index}>
              <div className="icon">
                <FontAwesomeIcon icon={card.icon} />
              </div>

              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span>{card.solution}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NIVARAK */}
      <section className="solutionSection">
        <div className="solutionImage">
          {/* <img src="/images/NivLP.png" alt="NIVARAK Lightning Protection" /> */}
          <img src="/images/LPP.jpeg" alt="NIVARAK Lightning Protection" />
        </div>

        <div className="features">
          <h2>NIVARAK™ - PREVENTION, NOT REACTION</h2>

          <div className="featureBox">
            <h3>
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="featureIcon"
              />
              Prevent Lightning Formation
            </h3>

            <p>
              Neutralizes atmospheric charges before lightning strikes.
            </p>

            <strong>840kV Max Capacity</strong>
          </div>

          <div className="featureBox">
            <h3>
              <FontAwesomeIcon
                icon={faCertificate}
                className="featureIcon"
              />
              Global Standards Certified
            </h3>

            <p>UL 96 • NATO NOC • IEC 62305 • CE Marked</p>

            <strong>20+ Years Proven</strong>
          </div>

          <div className="featureBox">
            <h3>
              <FontAwesomeIcon
                icon={faSatelliteDish}
                className="featureIcon"
              />
              Intelligent Monitoring
            </h3>

            <p>24/7 EarthQuant™ cloud monitoring system.</p>

            <strong>Zero Downtime</strong>
          </div>
        </div>
      </section>

      {/* Protection Layers */}
      <section className="protectionSection">
        <h2>INTEGRATED 4-LAYER PROTECTION ARCHITECTURE</h2>

        <div className="protectionGrid">
          {protectionLayers.map((item, index) => (
            <div className="layerCard" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>{item.specs}</span>
            </div>
          ))}
        </div>

        <div className="statsRow">
          <div>20+ Years Experience</div>
          <div>500+ Solar Projects</div>
          <div>99% Protection</div>
          <div>Zero Failure Rate</div>
        </div>
      </section>

      {/* Industries */}
      <section className="industrySection">
        <h2>Applications & Industries</h2>

        <div className="industryGrid">
          <div className="industryCard">
            <FontAwesomeIcon icon={faBolt} />
            <span>Power & Substations</span>
          </div>

          <div className="industryCard">
            <FontAwesomeIcon icon={faSolarPanel} />
            <span>Solar & Renewable</span>
          </div>

          <div className="industryCard">
            <FontAwesomeIcon icon={faServer} />
            <span>Data Centers</span>
          </div>

          <div className="industryCard">
            <FontAwesomeIcon icon={faIndustry} />
            <span>Industrial Facilities</span>
          </div>
        </div>
      </section>
    </div>
  );
}