// import "../../Styles/TraansEarth.css"

// export default function TraansEARTH() {
//     return(
//         <>
//         <div className="container_TraansEarth">
//             <h1>TraansEARTH</h1>
//         </div>
//         </>
//     )
// }




import "../../Styles/TraansEarth.css";
import Image from "next/image";

export default function TraansEARTH() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="earthHero">
        <div className="earthOverlay">
          <div className="earthContent">
            <span className="earthTag">
              Maintenance-Free Earthing Technology
            </span>

            <h1>
              TraansEARTH
              <br />
              Advanced Carbon-Based
              <span> Earthing Compound</span>
            </h1>

            <p>
              Engineered for superior conductivity, long-term stability and
              maintenance-free performance. TraansEARTH delivers reliable
              grounding solutions for substations, solar plants, industries,
              data centers and critical infrastructure.
            </p>

            <div className="earthBtns">
              <button>Download Datasheet</button>
              <button className="outlineBtn">Contact Expert</button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="earthIntro">
        <div className="earthGrid">
          <div className="earthImage">
            <Image
              src="/images/E1.png"
              alt="TraansEARTH Compound"
              width={500}
              height={300}
            />
          </div>

          <div className="earthText">
            <h2>Built for Modern Grounding Systems</h2>

            <p>
              Traditional earthing compounds often require periodic maintenance,
              watering and replacement due to degradation over time.
              TraansEARTH eliminates these challenges through its advanced
              carbon-based formulation that maintains stable electrical
              performance throughout its operational life.
            </p>

            <p>
              Designed to work effectively in dry, sandy, acidic and alkaline
              soil conditions, the compound creates a highly conductive zone
              around the electrode, significantly reducing earth resistance and
              improving fault current dissipation.
            </p>

            <p>
              Its environmentally safe and non-leachable composition ensures
              long-term protection without damaging surrounding soil structures.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="performanceSection">
        <div className="container">
          <h2>Exceptional Performance Characteristics</h2>

          <div className="performanceGrid">
            <div className="performanceCard">
              <h3>Ultra Low Resistivity</h3>
              <p>
                Resistivity as low as 0.12 Ω·m enables efficient current
                dissipation and lower grounding resistance.
              </p>
            </div>

            <div className="performanceCard">
              <h3>Zero Maintenance</h3>
              <p>
                No periodic watering, replacement or reconditioning required
                throughout its service life.
              </p>
            </div>

            <div className="performanceCard">
              <h3>Environmental Safety</h3>
              <p>
                RoHS compliant, non-toxic and non-leachable formulation that
                remains stable underground.
              </p>
            </div>

            <div className="performanceCard">
              <h3>All Climate Operation</h3>
              <p>
                Reliable performance across temperatures ranging from -10°C to
                +60°C.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="applicationsSection">
        <div className="applicationsGrid">
          <div className="appContent">
            <h2>Applications Across Critical Infrastructure</h2>

            <p>
              TraansEARTH is trusted in industries where grounding reliability
              directly impacts safety, operational continuity and regulatory
              compliance.
            </p>

            <p>
              From utility substations and solar power plants to manufacturing
              facilities, telecom towers and data centers, the compound provides
              consistent low-resistance grounding under diverse environmental
              conditions.
            </p>

            <p>
              Its long operational life and maintenance-free nature make it an
              ideal solution for remote installations where service access is
              limited and reliability is essential.
            </p>
          </div>

          <div className="appImage">
            <Image
              src="/images/E2.png"
              alt="Earthing Applications"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

   
    </>
  );
}