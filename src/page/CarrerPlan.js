import React from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';

const careerPlanData = {
  goals: [
    "Aprimorar habilidades técnicas",
    "Desenvolver habilidades de liderança",
    "Participar de projetos desafiadores",
  ],
  skillsToDevelop: [
    "JavaScript",
    "React",
    "Gestão de Projetos",
  ],
  currentRole: "Desenvolvedor Júnior",
};

function CarrerPlan() {
  const { userName } = useParams();

  return (
    <div>
      <Header userName={userName !== "null" && userName ? userName : ""} />

      <div className='container'>
        <h1 className='title'>Plano de Carreira para {userName}</h1>

        <div className='section'>
          <h2 className='section-title'>Metas:</h2>
          <ul className='list'>
            {careerPlanData.goals.map((goal, index) => (
              <li key={index} className='list-item'>{goal}</li>
            ))}
          </ul>
        </div>

        <div className='section'>
          <h2 className='section-title'>Habilidades a Desenvolver:</h2>
          <ul className='list'>
            {careerPlanData.skillsToDevelop.map((skill, index) => (
              <li key={index} className='list-item'>{skill}</li>
            ))}
          </ul>
        </div>

        <div className='section'>
          <h2 className='section-title'>Cargo Atual: {careerPlanData.currentRole}</h2>
        </div>
      </div>
    </div>
  );
}

export default CarrerPlan;
