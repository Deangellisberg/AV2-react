import React, { useState } from 'react';

function Formulario() {
  const [tarefa, setTarefa] = useState('');
  const [data, setData] = useState('');

  const handleCadastro = () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!tarefa || !data) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const novaTarefa = { tarefa, data };

    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

    tarefasSalvas.push(novaTarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));

    setTarefa('');
    setData('');
  };

  return (
    <div className='principal'>
      <div className="Formulario card">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Tarefa:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite a descrição da tarefa"
              value={tarefa}
              onChange={(e) => setTarefa(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Data:</label>
            <input
              type="date"
              className="form-control"
              placeholder="Digite a data da tarefa"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary btn-lg" onClick={handleCadastro}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Formulario;
