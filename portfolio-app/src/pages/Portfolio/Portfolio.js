import React from 'react';
import Lively from '../../images/Lively.png';
import './style.css';


export const Portfolio=() =>(
    <div>
        <h2>Web Development Projects:</h2>
        <ul>    
        <li><img alt="Lively" className="photo" src={Lively} />  
            Hey! How's it going guys? Welcome to my page, my name is Eric Lee for the ones that dont know me. Im currently enrolled in the Uconn Bootcamp Coding Program at the moment. I've worked with HTML, Javascript, jQuery, Bootstrap, Foundations etc. I learned to work with others on a project that we called Lively and was able to make the web page or application to work. I also learned to upload projects and homeworks via GitHub pages. Im also a college graduate with a Bachelors in Science. I gradutaed from Central Connecticut State University. I graduated with a Biology degree. I also decided to take this program and learn how to code. As a little kid I was always a huge fan of technology and always wanted to learn more about it.
         I am also a personal trainer as well. I am into the fitness and healthy lifestyle. I also like to travel and be outdoors a lot especially on the beach. Some places that I've been too so far is Italy, France, Japan, Macau, South Korea, China and all over the USA. On my free time I like to do a little bit of photography and videography. On the long run I would love to be able to work on the Front-end side of ta web page.</li>
        </ul>
    </div>
)

export default Portfolio;