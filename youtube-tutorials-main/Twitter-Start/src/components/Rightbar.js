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
      text: "Squada Governance Token launching on Polygon Mumbai Testnet...",
      link: "https://www.squada.io/",
    },
    {
      img: netflix,
      text: "Welcome to NewFilmTech! Stream 2 Earn Web3 Video Platform...",
      link: "https://fancy-alfajores-68cd19.netlify.app/",
    },
    {
      img: academy,
      text: "C HA SOL NFT Collection. Now available on Solsea Marketplace...",
      link: "https://solsea.io/creator/628a8eee03e7feb2607df6c4/nfts",
    },
    {
      img: js,
      text: "Visit our Metaverse. Pre-sale exhibition: Chamizal Virtual: Alebri-X...",
      link: "https://www.squada.io/metaverso",
    },
    {
      img: youtube,
      text: "OpenSea welcomes Las Voces Matria Resistencia NFT Polygon Matic collection...",
      link: "https://opensea.io/squada",
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
         News
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

