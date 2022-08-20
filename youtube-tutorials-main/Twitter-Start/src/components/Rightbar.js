import React from "react";
import './Rightbar.css';
import spaceshooter from "../images/spaceshooter.jpeg";
import netflix from "../images/netflix.jpeg";
import academy from "../images/academy.png";
import youtube from "../images/youtube.png";
import js from "../images/js.png";
import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: spaceshooter,
      text: "INE",
      link: "https://www.ine.mx/",
    },
    {
      img: netflix,
      text: "CURP",
      link: "https://www.gob.mx/curp/",
    },
    {
      img: academy,
      text: "RFC",
      link: "https://www.mi-rfc.com.mx/",
    },
    {
      img: js,
      text: "SEMOVI",
      link: "https://www.semovi.cdmx.gob.mx/tramites-y-servicios/vehiculos-particulares/licencias_menu",
    },
    {
      img: youtube,
      text: "SRE",
      link: "https://www.gob.mx/tramites/ficha/pasaporte-ordinario-para-personas-mayores-de-edad/SRE112",
    },
  ];

  return (
    <>
    <div className="rightbarContent">
     <Input
       label="Search"
       name="Search"
       prefixIcon="search"
       labelBgColor="#141d26"
       >

     </Input>

       <div className="trends">
         Gov Agencies / Institutions
         {trends.map((e) => {
             return(
               <>
                  <div className="trend" onClick={() => window.open(e.link)}>
                     <img src={e.img} className="trendImg"></img>
                     <div className="trendText">{e.text}</div>
                  </div>
               </>
             )
         })}
       </div>

    </div>
    </>
  );
};

export default Rightbar;

