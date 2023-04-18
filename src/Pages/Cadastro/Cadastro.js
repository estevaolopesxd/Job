import React from 'react'


//css

import "./Cadastro.css"
import Modal from '../../components/Modal/modal'
import BtnBack from '../../components/Btn/BtnBack'


const Cadastro = () => {

  const backClick = (e) => {
    e.preventDefault()
    window.location.href = "/"
  }



  return (

    <div>

      <BtnBack onclick={backClick} />

      <header className='header'>
        <h3>Cadastre Seu novo cliente:</h3>
      </header>
      <div className='main'>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Novo
        </button>

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

        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">MCadastrar</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Cadastro