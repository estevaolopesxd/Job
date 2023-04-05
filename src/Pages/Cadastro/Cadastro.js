import React from 'react'

//css

import "./Cadastro.css"


const Cadastro = () => {
  return (

    <div>

      <header className='header'>
        <h2>Seja Bem Vindo</h2 >
        <h3>Cadastre Seu novo cliente:</h3>
      </header>
      <div className='main'>


        <div className="col-12 btn-novo">
          <button type="button" class="btn btn-primary">Novo</button>
        </div>

        <div>
          <table className='tabelaClient'>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>CPF</th>
                <th>CEP</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>Bairro</th>
                <th>Id</th>
                <th>Genero</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
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
              <footer class="modal-footer">
                <button lassName="button green">Salvar</button>
                <button className="button blue">Cancelar</button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cadastro