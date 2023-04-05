import React from 'react'

//css

import "./Cadastro.css"


const Cadastro = () => {
  return (
    <div>
      <h2>Seja Bem Vindo</h2>
      <h3>Cadastre Seu novo cliente:</h3>

      <div className="containerForm">

        <form action="">

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" placeholder="Digite seu nome completo" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email </label>
            <input type="email" className="form-control" placeholder="name@example.com" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Telefone </label>
            <input type="text" className="form-control" placeholder="(xx)x xxxx-xxxx" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">CPF </label>
            <input type="text" className="form-control" placeholder="xxx.xxx.xxx-xx" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">CEP </label>
            <input type="text" className="form-control" placeholder="xxx.xxx-xxx" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Id </label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Profissão </label>
            <input type="text" className="form-control" placeholder="Administrador" />
          </div>

          <h4>Genero</h4>
          <div className='containerGenero'>


            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label" for="flexRadioDefault2">
                Feminino
              </label>
            </div>
          </div>


        </form>

        <div className='containerButton'>
          <div className="col-12">
            <button type="button" class="btn btn-success">Salvar</button>
          </div>
          <div className="col-12">
            <button type="button" class="btn btn-secondary">Editar</button>
          </div>
        </div>




      </div>

    </div>


  )
}

export default Cadastro