import React from 'react';
import './style.css';
import Projects from '../../components/Projects';
import Card from '../../components/Card';

export const Portfolio=() =>(
  <div>
    {Projects.map((project)=>{
      return(<Card key={project.id} {...project} />

        )
    })}
  </div>
)


export default Portfolio;