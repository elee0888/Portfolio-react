import React from 'react';
import Lively from '../../images/Lively.png';
import ShopWise from '../../images/ShopWise.PNG';
import DeveloperProfileGenerator from '../../images/developer-profile-generator.PNG';
import DayPlanner from '../../images/Capture.PNG';
import HotRestaurant from '../../images/hot-restaurant.PNG';
import EmployeeDirectory from '../../images/employee-directory.PNG';
import './style.css';


export const Portfolio=() =>(
    <div>
        <h2>Web Development Projects:</h2>
      <ul>    
        <li><img alt="Lively" className="photo" src={Lively}/>  
            <h2>Lively</h2>
            <p>A music app that allows users to find their favorite song or artist and see what their top played song is. Along with other related artist is displayed as well. Some technologies that were used in this project include: JavaScript, JQUERY, HTML, CSS, Bootstrap, Live.fm API, TasteDiv API.</p>
            <a href= "https://github.com/Sforzemon/Lively"> <h4>Click Here</h4></a> 
            <a href= "http://sforzemon.github.io/Lively/"> <h4>Go Lively!</h4></a> 
        </li>
      </ul>

      <br />

      <ul>    
        <li><img alt="ShopWise" className="photo" src={ShopWise}/>  
            <h2>ShopWise</h2>
            <p>A ecommerce website that will let users shop for products. Displaying the inforation about the product for the user. Also can allow the user to add the product to the cart as well. Further updates may soon to come. Some technologies that were used in this project include: Ebay API, Amazon API, MySql, JavaScript, HTML, CSS, jQuery, Heroku.</p>
            <a href= "https://github.com/EMaynard802/Project2"> <h4>Click Here</h4></a> 
            <a href= ""> <h4>Coming Soon!</h4></a> 
            </li>
        </ul>

        <br />
      
      <ul>    
        <li><img alt="DeveloperProfileGenerator" className="photo" src={DeveloperProfileGenerator}/>  
            <h2>Developer Profile Generator</h2>
            <p>This app uses Node.js to generate a HTML file by pulling a user's profile information from GitHub, then creates a PDF file from that HTML file. Some technologies that were used in this project include: Node, NPM, Javascript, HTML, and CSS. </p>
            <a href= "https://github.com/elee0888/Developer-Profile-Generator"> <h4>Click Here</h4></a> 
            <a href= "https://elee0888.github.io/Developer-Profile-Generator/"> <h4>Generate a Profile !</h4></a> 
            </li>
        </ul>

        <ul>    
        <li><img alt="DayPlanner" className="photo" src={DayPlanner}/>  
            <h2>Day Planner</h2>
            <p>Plan for your day using the time blocks corresponding to typical business workday (9AM - 9PM). After inputting a plan or description into the appropriate block be sure to save using the side blue button with the lock icon. This will save the inputted tasks for that block into local storage and will re-populate even when page is refreshed. Some technologies that were used in this project include: Moment.js library, local storage, HTML, CSS, JavaScript, Fontawesome, Bootstrap.</p>
            <a href= "https://github.com/elee0888/Day-Planner2"> <h4>Click Here</h4></a> 
            <a href= "https://elee0888.github.io/Day-Planner2/"> <h4>Let's check my schedule !</h4></a> 
        </li>
      </ul>

      <br />

      <ul>    
        <li><img alt="HotRestaurant" className="photo" src={HotRestaurant}/>  
            <h2>Hot Restaurant</h2>
            <p>A app to help schedule reservation requests. Restaurant has just 5 tables available. First five requests get a reservation, every request after that is sent to the waiting list. Some technologies that were used in this project include: Node, Express, Javascript, HTML, CSS, jQuery, AJAX, and Heroku.</p>
            <a href= "https://github.com/elee0888/HotRestaurant"> <h4>Click Here</h4></a> 
            <a href= "https://hot-restaurant-fsf.herokuapp.com/"> <h4>Making a reservation ?</h4></a> 
            </li>
        </ul>

        <br />
      
      <ul>    
        <li><img alt="EmployeeDirectory" className="photo" src={EmployeeDirectory}/>  
            <h2>Employee Directory</h2>
            <p>A React employee directory application allowing users to view all employees, sort employees by last name, phone number, or age, in ascending and descending order, as well as search for employees by name. Some technologies that were used in this project include: React, JSX, Node, JavaScript, HTML, CSS, Bootstrap, RandomUser API, and Heroku.</p>
            <a href= "https://github.com/elee0888/EmployeeDirectory"> <h4>Click Here</h4></a> 
            <a href= ""> <h4>Coming Soon!</h4></a> 
            </li>
        </ul>
    </div>
)

export default Portfolio;