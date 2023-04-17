//css
import styles from './Lista.modules.css'

import React from 'react'

const Lista = () => {
  var db = firebase.firestore();
  var minhaColecao = db.collection("form");

  minhaColecao.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      var dados = doc.data();
      // fazer algo com os dados aqui
    });
  });


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
      var id = novaLinha.insertCell(5);
      var profissao = novaLinha.insertCell(6)
      var genero = novaLinha.insertCell(7);
      name.innerHTML = dados.name;
      email.innerHTML = dados.email;
      tel.innerHTML = dados.tel;
      cpf.innerHTML = dados.cpf;
      cep.innerHTML = dados.cep;
      id.innerHTML = dados.id;
      profissao.innerHTML = dados.profissao;
      genero.innerHTML = dados.genero
    });
  });

  console.log(db)

  // botão voltar
  const backClick = (e) => {
    e.preventDefault()
    window.location.href = "/"
  }


  document.getElementById('recarregar-db').addEventListener('click', function() {
    // Recupere os dados do banco de dados Firebase
    db.once('value', function(snapshot) {
      // Faça algo com os dados
      console.log(snapshot.val());
    });
  });




  return (
    <div>Lista</div>
  )
}

export default Lista