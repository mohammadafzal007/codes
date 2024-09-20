import React from "react";
import Navbar from "./nev";
// import frontbg from "./images/frontbg.mp4";
import Des from "./des";
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/underage');
  };
  const handleClick1 = () => {
    navigate('/overage');
  };

  return (
    <>
      <Navbar />
      <div className="homebg">
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {/* <video className="frontbg" controls autoPlay muted src={frontbg}>
          </video> */}
        </div>
        <div className="hcontent">
          <h4>One of the earliest holistic medical systems in the world, Ayurveda is still widely practiced today. Ayurveda integrates mental, emotional, and spiritual well-being; it emphasises healing of the full person and holds that an individual's dosha is the governing principle that shapes their character and well-being.</h4>
          <h4>Use the Dosha Test, also called the Vata Pitta Kapha Test, to uncover the keys to overall well-being. According to Ayurveda, attaining balance and vigour requires knowing your individual mind-body constitution. By determining your primary Dosha—Pitta, Kapha, or Vata—a dosha quiz can help you make individualised lifestyle and health choices.</h4>
          <h2>Lets start the journey towards the healthy life.</h2>
        </div>
        <div className="hdiv">

          <button className="hbutton" onClick={handleClick}>Below 25</button>

          <button className="h1button" onClick={handleClick1}>Over 25</button>
        </div>
      </div>
     
    </>
  );
}

export default Home;
