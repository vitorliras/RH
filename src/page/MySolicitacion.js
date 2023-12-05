import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Modal from 'react-modal';

function MySolicitacion() {
  const { userName } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [listaItens, setListaItens] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedItens = JSON.parse(localStorage.getItem('itens'));
    if (storedItens) {
      setListaItens(storedItens);
    }
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCodigo('');
    setNome('');
    setDescricao('');
    setEditIndex(null);
  };

  const handleSave = () => {
    if (codigo && nome && descricao) {
      const newItem = { codigo, nome, descricao };
      const updatedItens = [...listaItens, newItem];
      localStorage.setItem('itens', JSON.stringify(updatedItens));
      setListaItens(updatedItens);

      closeModal();
    }
  };

  const handleEdit = (index) => {
    setCodigo(listaItens[index].codigo);
    setNome(listaItens[index].nome);
    setDescricao(listaItens[index].descricao);
    setEditIndex(index);
    openModal();
  };

  const handleSaveEdit = () => {
    if (codigo && nome && descricao && editIndex !== null) {
      const updatedItens = [...listaItens];
      updatedItens[editIndex] = { codigo, nome, descricao };
      localStorage.setItem('itens', JSON.stringify(updatedItens));
      setListaItens(updatedItens);

      closeModal();
    }
  };

  const handleRemove = (index) => {
    const updatedItens = [...listaItens];
    updatedItens.splice(index, 1);
    localStorage.setItem('itens', JSON.stringify(updatedItens));
    setListaItens(updatedItens);
  };

  return (
    <>
      <Header userName={userName !== "null" || !userName ? userName : ""} />
      
      <div className="container">
        <button className="botao-adicionar" onClick={openModal}>
          <FaPlus className='icon-table' /> Adicionar
        </button>

        <div className="tabela-container">
          <div className="cabecalho">Código</div>
          <div className="cabecalho">Título</div>
          <div className="cabecalho">Descrição</div>
          <div className="cabecalho">Ações</div>

          {listaItens.map((item, index) => (
            <>
              <div className="campo">{item.codigo}</div>
              <div className="campo">{item.nome}</div>
              <div className="campo">{item.descricao}</div>
              <div className="campo acoes">
                <button className="botao-acao" onClick={() => handleEdit(index)}>
                  <FaEdit className='icon-table' />
                </button>
                <button className="botao-acao" onClick={() => handleRemove(index)}>
                  <FaTrash className='icon-table' />
                </button>
              </div>
            </>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel={editIndex !== null ? "Editar Item" : "Adicionar Item"}
          className="Modal"
        >
          <h2>{editIndex !== null ? "Editar Item" : "Adicionar Item"}</h2>
          <label>Código:
            <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
          </label>
          <label>Título:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label>Descrição:
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
          </label>
          <button
            disabled={!codigo || !nome || !descricao}
            onClick={editIndex !== null ? handleSaveEdit : handleSave}
          >
            Salvar
          </button>
        </Modal>
      </div>
    </>
  );
}

export default MySolicitacion;
