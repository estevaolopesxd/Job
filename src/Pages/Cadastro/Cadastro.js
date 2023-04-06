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
          <button type={"button"} className="btn btn-primary" value={"novo"} onClick={Modal}>Novo</button>
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
          <Modal />
        </div>
      </div>
    </div>

  )
}

export default Cadastro