//css
import './Lista.css'

import React, { useState } from 'react'

// components
import BtnBack from '../../components/Btn/BtnBack';


const Lista = () => {
  var db = firebase.firestore();
  var minhaColecao = db.collection("form");


  // minhaColecao.get().then(function (querySnapshot) {
  //   querySnapshot.forEach(function (doc) {
  //     var dados = doc.data();
  //     // fazer algo com os dados aqui
  //   });
  // });


  const del = (e) => {
    e.preventDefault()
    var idDocumento = evento.target.dataset.id;

    var docRef = firebase.firestore().collection("form").doc(idDocumento);

    // Exclua o documento usando o método "delete()"
    docRef.delete().then(function () {
      console.log("Documento excluído com sucesso!");
    }).catch(function (error) {
      console.error("Erro ao excluir o documento: ", error);
    })
  }


  // Recuperar os dados da coleção
  minhaColecao.get().then(function (querySnapshot) {
    var tabela = document.getElementById("minhaTabela");
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
      // var id = novaLinha.insertCell(5);
      var profissao = novaLinha.insertCell(5)
      var genero = novaLinha.insertCell(6);
      var acao = novaLinha.insertCell(7);
      name.innerHTML = dados.name;
      email.innerHTML = dados.email;
      tel.innerHTML = dados.tel;
      cpf.innerHTML = dados.cpf;
      cep.innerHTML = dados.cep;
      // id.innerHTML = dados.id;
      profissao.innerHTML = dados.profissao;
      genero.innerHTML = dados.genero
      acao.innerHTML = `<div class="groupBtns"><button class="btn btn-danger" id="del"><i class="fa-solid fa-trash"></i></button> <button id="edit" class="btn btn-success" ><i class="fa-regular fa-pen-to-square"></i></button></div>`

    });
  });

  // const del = document.getElementById("del")

  // del.addEventListener('click' , ()=> {
  //   alert("peguei")
  // })


  // botão voltar
  const backClick = (e) => {
    e.preventDefault()
    window.location.href = "/"
  }



  const refresh = (e) => {
    e.preventDefault()
    window.location.reload()
    console.log("refesh...")
  }




  return (
    <div>
      <div className='btns'>
        <BtnBack onclick={backClick} />

        <button id='refresh' onClick={refresh}>
          <i class="fa-solid fa-arrows-rotate"></i>
        </button>

      </div>


      <div className='tab bg-ligth'>
        <table className="table" id="minhaTabela">
          <thead>
            <tr>

              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">CPF</th>
              <th scope="col">CEP</th>
              <th scope="col">Profissão</th>
              <th scope="col">Genero</th>

            </tr>
          </thead>
          <tbody>


          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Lista