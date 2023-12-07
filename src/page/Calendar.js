import React, { useState } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';

const Calendar = () => {
  const { userName } = useParams();

  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [mesAtual, setMesAtual] = useState(new Date());

  const obterDiasNoMes = (ano, mes) => new Date(ano, mes + 1, 0).getDate();
  const obterPrimeiroDiaDoMes = (ano, mes) => new Date(ano, mes, 1).getDay();

  const renderizarCalendario = () => {
    const ano = mesAtual.getFullYear();
    const mes = mesAtual.getMonth();
    const totalDias = obterDiasNoMes(ano, mes);
    const primeiroDia = obterPrimeiroDiaDoMes(ano, mes);

    const diasEmBranco = Array.from({ length: primeiroDia }, (_, i) => <div key={`branco-${i}`} className="branco"></div>);
    const dias = Array.from({ length: totalDias }, (_, i) => <div key={`dia-${i}`} className="dia">{i + 1}</div>);

    return [...diasEmBranco, ...dias];
  };

  const handleMesAnterior = () => {
    setMesAtual(new Date(mesAtual.getFullYear(), mesAtual.getMonth() - 1));
  };

  const handleProximoMes = () => {
    setMesAtual(new Date(mesAtual.getFullYear(), mesAtual.getMonth() + 1));
  };

  return (
    <>
    <Header userName={ !userName ? userName : ""}  />

    <div className="container-do-calendario">
      <div className="cabecalho">
        <button className='btn-calendar' onClick={handleMesAnterior}>&lt;</button>
        <h2>{meses[mesAtual.getMonth()]} {mesAtual.getFullYear()}</h2>
        <button className='btn-calendar' onClick={handleProximoMes}>&gt;</button>
      </div>
      <div className="dias-da-semana">
        {diasDaSemana.map(dia => <div key={dia} className="dia-da-semana">{dia}</div>)}
      </div>
      <div className="dias">
        {renderizarCalendario()}
      </div>
    </div>
    </>
  );
};

export default Calendar;
