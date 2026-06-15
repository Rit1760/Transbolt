import "../../Styles/TraansboltFire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBuilding,
  faWater,
  faCamera,
  faRobot,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";


export default function TraansboltFire() {
  const stats = [
    { number: "25+", title: "Years Experience" },
    { number: "1000+", title: "Projects Delivered" },
    { number: "500+", title: "Happy Clients" },
    // { number: "India & Beyond", title: "Presence" },
    { number: "India & Beyond" },
  ];

const solutions = [
  {
    icon: faHouse,
    title: "Residential Fire Alarms",
    desc: "Smart smoke, heat, gas and carbon monoxide alarms with Wi-Fi connectivity.",
  },
  {
    icon: faBuilding,
    title: "Commercial Systems",
    desc: "EN54 Addressable & Conventional Fire Alarm Systems for businesses.",
  },
  {
    icon: faWater,
    title: "Water Cannons",
    desc: "Automatic fire tracking and suppression systems for industrial facilities.",
  },
  {
    icon: faCamera,
    title: "AI Fire Cameras",
    desc: "Advanced thermal imaging and flame detection technology.",
  },
  {
    icon: faRobot,
    title: "Firefighting Robots",
    desc: "Autonomous fire suppression robots for hazardous environments.",
  },
  {
    icon: faIndustry,
    title: "Industrial Equipment",
    desc: "ASD, Flame Detectors, Heat Detection and Critical Safety Solutions.",
  },
];

  const industries = [
    "Residential",
    "Commercial",
    "Industrial",
    "Warehouses",
    "Hospitals",
    "Power Plants",
    "Data Centers",
    "Infrastructure",
  ];

  return (
    <>
      <div className="container1_TraansboltFire">

        {/* HERO SECTION */}
        {/* <section className="hero_TraansboltFire">
          <div className="hero_overlay_TraansboltFire">
            <img
              src="/Images/TraansboltFireLogo.png"
              alt="Traansbolt Fire"
              className="logo_TraansboltFire"
            />

            <h1>
              Protection <span>Without Compromise</span>
            </h1>

            <p>
              Complete Fire Safety Solutions | 25+ Years Experience |
              1000+ Projects Delivered Across India
            </p>

            <button>Explore Solutions</button>
          </div>
        </section> */}




        <section className="hero_TraansboltFire">
  <div className="hero_overlay_TraansboltFire">


    {/* <h1>Protection Without Compromise</h1>

    <p>
      Complete Fire Safety Solutions |
      25+ Years Experience |
      1000+ Projects Delivered Across India
    </p>

    <button>Explore Solutions</button> */}

  </div>
</section>

        {/* ABOUT */}
        <section className="about_TraansboltFire">
          <div className="heading">
            <h2>About Traansbolt Fire</h2>
          </div>

          <p>
            Traansbolt Fire is a leading fire safety solutions provider
            delivering comprehensive protection across residential,
            commercial, industrial and infrastructure sectors.
          </p>

          <p>
            With cutting-edge technology, deep expertise and over
            25 years of experience, we provide intelligent fire
            detection, suppression and monitoring solutions designed
            to protect lives, assets and businesses.
          </p>

          <p>
            Our integrated ecosystem combines fire alarm systems,
            AI-powered cameras, water cannon suppression systems,
            firefighting robots and IoT-enabled monitoring solutions
            into one seamless platform.
          </p>
        </section>

        {/* STATS */}
        <section className="stats_TraansboltFire">
          {stats.map((item, index) => (
            <div key={index} className="stat_card">
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </section>

        {/* SOLUTIONS */}
        <section className="solutions_TraansboltFire">
          <div className="heading">
            <h2>Our Fire Safety Solutions</h2>
          </div>

          {/* <div className="solution_grid">
            {solutions.map((item, index) => (
              <div key={index} className="solution_card">
                <div className="icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div> */}

          <div className="solution_grid">
  {solutions.map((item, index) => (
    <div key={index} className="solution_card">
      <div className="icon">
        <FontAwesomeIcon icon={item.icon} />
      </div>

      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  ))}
</div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why_TraansboltFire">
          <div className="heading">
            <h2>Why Choose Traansbolt Fire?</h2>
          </div>

          <div className="why_grid">
            <div className="why_card">
              <h3>🔥 AI Powered Detection</h3>
              <p>
                Thermal imaging, flame detection and smart analytics
                for early warning systems.
              </p>
            </div>

            <div className="why_card">
              <h3>📡 Wireless IoT Monitoring</h3>
              <p>
                LoRa and Wi-Fi connectivity with cloud-based
                monitoring and notifications.
              </p>
            </div>

            <div className="why_card">
              <h3>💧 Automated Suppression</h3>
              <p>
                Intelligent water cannons capable of tracking and
                extinguishing fires automatically.
              </p>
            </div>

            <div className="why_card">
              <h3>✅ Certified Solutions</h3>
              <p>
                EN54, UL, CE, BS and IS compliant products and
                installations.
              </p>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="industries_TraansboltFire">
          <div className="heading">
            <h2>Industries We Serve</h2>
          </div>

          <div className="industry_grid">
            {industries.map((item, index) => (
              <div key={index} className="industry_card">
                {item}
              </div>
            ))}
          </div>
        </section>

        

      </div>
    </>
  );
}