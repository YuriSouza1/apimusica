import './card.css'
import React from "react";
import { useState } from "react";

import Barra from"../../assets/image-removebg-preview.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faForwardStep, faHeart, faPlay, faRepeat, faShuffle } from "@fortawesome/free-solid-svg-icons";

function Card({spcapa, sptitulo, spartista }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (

    <>
    <div className="songCard">
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    </div>
      <section className="api">
        <img src={spcapa} alt=""/>
        <h1>{sptitulo}</h1>
        <p>{spartista}</p>
      </section>

     
      {(
          <div className="heart animate__animated animate__fadeInUp">
            <FontAwesomeIcon icon={faHeart} color={"#ffffff"} />
          </div>
        )}
        <img src={Barra} className="barra" alt="" srcset="" />
      <div className="comandos">
        {(
          <div className="shuffle animate__animated animate__fadeInUp">
            <FontAwesomeIcon icon={faShuffle} color={"#ffffff"} />
          </div>
        )}
        {(
          <div className="back animate__animated animate__fadeInUp">
            <FontAwesomeIcon icon={faBackwardStep} color={"#ffffff"} />
          </div>
        )}
        {(
          <div className="playButton animate__animated animate__fadeInUp">
            <FontAwesomeIcon icon={faPlay} color={"#202020"} />
          </div>
        )}
        {(
          <div className="forward animate__animated animate__fadeInUp">
            <FontAwesomeIcon icon={faForwardStep} color={"#ffffff"} />
          </div>
        )}
        {(
          <div className="repeat animate__animated animate__fadeInUp">
            <FontAwesomeIcon icon={faRepeat} color={"#ffffff"} />
          </div>
        )}
      </div>

      
    
    </>
  )
}

export default Card;
