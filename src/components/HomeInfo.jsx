import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {arrow} from '../assets/icons'
const HomeInfo = ({ currentStage }) => {
  return <div className='info-box'>{renderContent[currentStage] || null}</div>;
};

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    {text}
    <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Pradyumna</span>
      <br />
      I am a Python developer
    </h1>
  ),
  2: (
    <InfoBox
      text="At the esteemed University of the Pacific, I played a pivotal role as a dedicated teaching assistant, contributing my passion for education and fostering an engaging learning environment"
      link="/about"
      btnText="More About Me"
      
    />
  ),
  3: (
    <InfoBox
      text="Spearheaded the triumph of various projects through skillful management and strategic execution"
      link="/Projects"
      btnText="Visit my Portfolio"
      
    />
  ),
  4: (
    <InfoBox
      text="Ready to kickstart exciting projects or explore new opportunities? Just a few clicks stand between us – reach out, and let's embark on a journey of innovation and collaboration!"
      link="/Contact"
      btnText="Contact Me"
      
    />
  ),
};

export default HomeInfo;
