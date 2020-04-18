import React from 'react';
import "./style.css";

export default function Card (props){
    return(
       <div className="card" > 
            <ul>    
               <li><img alt={props.card_title} className="photo" src={props.image}/>  
                  <h2>{props.card_title}</h2>
                   <p className= "text">{props.card_text}</p>
                   <a href={props.project_repo}> <h4>Click Here</h4></a> 
                   <a href={props.deployed_project}> <h4>Check it out</h4></a> 
               </li>
            </ul>
        </div>
    )
}