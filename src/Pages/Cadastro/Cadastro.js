import React, { useState } from 'react';

//css
import "./Cadastro.css"

// import components
import BtnBack from '../../components/Btn/BtnBack'


const Cadastro = () => {

  const db = firebase.firestore();
  var minhaColecao = db.collection("form");




  // AQUI IMPRIMI OS DADOS DO BANCO -----------------------------

  // Recuperar os dados da coleção
  minhaColecao.get().then(function (querySnapshot) {
    const tabela = document.getElementById("minhaTabela");
    tabela.innerHTML = "";
    querySnapshot.forEach(function (doc) {
      var dados = doc.data();
      // Adicionar uma nova linha à tabela
      var novaLinha = tabela.insertRow();
      // Adicionar as células com os dados
      var name = novaLinha.insertCell(0);
      var email = novaLinha.insertCell(1);
      var tel = novaLinha.insertCell(2);
      var cpf = novaLinha.insertCell(3);
      var cep = novaLinha.insertCell(4);
      var profissao = novaLinha.insertCell(5)
      var genero = novaLinha.insertCell(6);
      var acao = novaLinha.insertCell(7);

      name.innerHTML = dados.name;
      email.innerHTML = dados.email;
      tel.innerHTML = dados.tel;
      cpf.innerHTML = dados.cpf;
      cep.innerHTML = dados.cep;
      profissao.innerHTML = dados.profissao;
      genero.innerHTML = dados.genero;


      // BOTÕES AÇÃO EXCLUIR E EDITAR ----------------------------------------------
      acao.innerHTML = `
        <div class="groupBtns">
          <button class="btn btn-danger delete-btn" data-id="${doc.id}"><i class="fa-solid fa-trash"></i></button>
          <button class="btn btn-success" data-id="${doc.id}"><i class="fa-regular fa-pen-to-square"></i></button>
        </div>`;

      // Adicionar manipulador de eventos para o botão "delete-btn"
      var deleteBtn = novaLinha.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function (event) {
        var id = event.target.getAttribute("data-id");
        db.collection("form").doc(id).delete().then(function () {
          console.log("Documento excluído com sucesso!");
          tabela.deleteRow(novaLinha.rowIndex);
        }).catch(function (error) {
          console.error("Erro ao excluir o documento: ", error);
        });




      });
    });
  });




  //botão voltar
  const backClick = (e) => {
    e.preventDefault()
    window.location.href = "/"
  }

  //
  // botão recarregar
  const refresh = (e) => {
    e.preventDefault()
    window.location.reload()
    console.log("refesh...")
  }
  //



  // API
  const [cep, setCep] = useState("")
  fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json())
    .then(data => {
      // console.log(data)


      const logradouro = document.getElementById("logradouro")
      const bairro = document.getElementById("bairro")
      const uf = document.getElementById("uf")
      const cidade = document.getElementById("cidade")

      logradouro.value = data.logradouro
      bairro.value = data.bairro
      uf.value = data.uf
      cidade.value = data.localidade
    })

// fim api


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

        <button id='refresh' onClick={refresh}>
          <i class="fa-solid fa-arrows-rotate"></i>
        </button>

        <div>
          <table className='tabelaClient' >
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col">CPF</th>
                <th scope="col">CEP</th>
                <th scope="col">Profissão</th>
                <th scope="col">Genero</th>
                <th scope="col">Ações</th>

              </tr>
            </thead>
            <tbody id="minhaTabela">

            </tbody>
          </table>

        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cadastre seu novo cliente</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="formulario" className="modal-form">

                <input type="text" data-index="new" className="modal-field" placeholder="Nome Completo" name="name" required
                  size="40" />
                <input type="text" className="modal-field" placeholder="Telefone do Cliente" name="tel" required />
                <input type="email" className="modal-field" placeholder="E-mail" required size="40" name='email' />
                <input type="text" data-index="new" className="modal-field" placeholder="Cep" required size="10"
                  maxlength="9" id='cep' name='cep' onChange={(e) => setCep(e.target.value)} value={cep} />


                <input type="text" className="modal-field" placeholder="Endereço" required size="40" name='endereco' id='logradouro' />
                <input type="text" className="modal-field" placeholder="UF" required size="2" name='uf' id='uf' />
                <input type="text" className="modal-field" placeholder="Cidade" required size="20" name='cidade' id='cidade' />
                <input type="text" className="modal-field" placeholder="Bairro" required size="20" name='bairro' id='bairro' />




              </form>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Salvar</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Cadastro