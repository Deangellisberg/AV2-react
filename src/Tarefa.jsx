import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Tarefa.css';  // Importando o arquivo CSS

const Tarefa = () => {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    // Recupera os dados do localStorage ao carregar o componente
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    setTarefas(tarefasSalvas);
  }, []);

  const handleExcluir = (index) => {
    // Remove a tarefa com o índice especificado
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
    // Atualiza o localStorage
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
  };

  const handleStatusToggle = (index) => {
    // Alterna entre "finalizado" e "pendente" para a tarefa com o índice especificado
    const novasTarefas = [...tarefas];
    novasTarefas[index].status = novasTarefas[index].status === 'pendente' ? 'finalizado' : 'pendente';
    setTarefas(novasTarefas);
    // Atualiza o localStorage
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
  };

  return (
    <div className="App-Tarefa">
      <Header />
      <div className="Tarefa-Container">
        <h2>Tarefas</h2>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index} className={`Tarefa-Item ${tarefa.status}`}>
              <div><strong>Tarefa:</strong> {tarefa.tarefa}</div>
              <div><strong>Data:</strong> {tarefa.data}</div>
              <div>
                <button onClick={() => handleStatusToggle(index)} className="finalizado">
                  {tarefa.status === 'pendente' ? 'Pendente' : 'Finalizado'}
                </button>
                <button onClick={() => handleExcluir(index)} className="excluir">Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tarefa;

