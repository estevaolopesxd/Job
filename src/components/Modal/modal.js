import React from 'react';

const Modal = () => {
  return (

    <div className="modal">
      <div className="modal-content">
        <header className="modal-header">
          <h2>Novo Cliente</h2>
          <span className="modal-close" id="modalClose">&#10006;</span>
        </header>
        <form id="form" className="modal-form">
          <input type="text" data-index="new" className="modal-field" placeholder="Nome Completo" required />
          <input type="text" data-index="new" className="modal-field" placeholder="Nome Completo" required
            size="40" />
          <input type="text" className="modal-field" placeholder="Telefone do Cliente" required />
          <input type="email" className="modal-field" placeholder="e-mail" required size="40" />
          <input type="text" data-index="new" className="modal-field" placeholder="cep" required value="" size="10"
            maxlength="9" />
          <input type="text" className="modal-field" placeholder="Endereço" required size="40" />
          <input type="text" className="modal-field" placeholder="UF" required size="2" />
          <input type="text" className="modal-field" placeholder="Cidade" required size="20" />
          <input type="text" className="modal-field" placeholder="Bairro" required size="20" />

        </form>
        <footer className="modal-footer">
          <button onClick={"gravar"} value={"salvar"} className="button green">Salvar</button>
          <button onClick={"cancelar"} value={"cancelar"} className="button blue">Cancelar</button>
        </footer>
      </div>
    </div>

  )
}

export default Modal