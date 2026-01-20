'use client'


import Image from "next/image"
export default function BESS(){
    return(
        <>
        <div className="main1_BESS">
        <div className="container1_BESS">
            <div className="row1_BESS">
                <div className="col1_BESS">
<Image src="/images/BESS.png" width={333} height={303} alt="BESS"/>
                </div>
                <div className="col2_BESS">
                    <p>Transbolt Battery Energy Storage Systems (BESS) deliver reliable backup, peak shaving, and grid support with scalable, modular designs. ESG-compliant and future-ready, they reduce operating costs while ensuring efficient, safe, and sustainable energy optimization for industrial, commercial, and utility applications.</p>
<h3>Product Overview</h3>
<h4>T500KW-1075KWh</h4>
<h4>Transbolt – 01MWh Energy Storage System</h4>
<ul>
  <li>Includes LiFePO₄ battery, BMS, PCS, EMS,
cooling, and fire protection.</li>
  <li>Seamless on-grid/off-grid switching in
under 20ms.</li>
  <li>1075 kWh energy, 500 kW power, with 110%
overload support.</li>
  <li>Peak shaving, load shifting, grid support,
and black start enabled.</li>
  <li>Dimensions: 20 ft ; Weight: 12T</li>
  <li>Compliant with IEC 62109, 62619, UN38.3,
EN50549</li>
</ul>
<h4>T5000A-2H-X2</h4>
<h4>Transbolt - 05MWh Battery Energy Storage System</h4>
<ul>
  <li>5.01 MWh capacity with 2.5 MW output;
2155A Max rated current</li>
  <li>Liquid-cooled system with ≤3°C cell
variance for longer battery life</li>
  <li>Charge cycles ≥6,000; high-reliability
lithium-ion with certified BMS</li>
  <li>Dual fire suppression (aerosol + water
spray) with multi-sensor detection</li>
  <li>IP54 enclosure with seismic resistance
(level 8) and corrosion protection</li>
  <li>Dimensions: 20 ft ; Weight: 42T</li>
  <li>Compliant with IEC62619\CE  
UN38.3\UN3536; 93% system efficiency</li>
</ul>
                </div>
            </div>
        </div>
        </div>

              <style jsx>{`
                    @font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato/Lato-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal; 
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal; 
}
      .main1_BESS{
      padding:30px 0px;
      }
        .container1_BESS {
          width: 100%;
          margin: 0 auto;
          padding: 20px;
               margin-top:30px;
          margin-bottom:30px;
        }

        .row1_BESS {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;
          flex-wrap: wrap;
        }

        .col1_BESS,
        .col2_BESS {
          width: 45%;
        }

        .col1_BESS img {
          width: 50%;
          height: auto;
          display: block;
        }

        .col2_BESS p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family:"poppins"
        }

        .col2_BESS li {
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 5px;
          font-family:"poppins"

        }
          .col2_BESS h4{
          font-family:"poppins";
          font-weight:400;
           padding: 4px;
          color:#064451;
          
          }
          .col2_BESS h3{
            font-family:"poppins"
          }

        @media (max-width: 768px) {
          .col1_BESS,
          .col2_BESS {
            width: 100%;
          }

          .row1_BESS {
            flex-direction: column;
            row-gap: 20px;
          }
        }
      `}</style>
        </>
    )
}