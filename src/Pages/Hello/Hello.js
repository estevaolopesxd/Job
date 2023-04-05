import React from 'react'

// css
import styles from '../Hello/Hello.css'

// components
import InputDefault from '../../components/Input/InputDefault'
import BtnDefault from '../../components/Btn/BtnDefault'


const Hello = () => {
  return (
    <div>
      <div className='hello'>
        <h1 className='title'>Como deseja ser chamado?!</h1>
        <InputDefault type={"text"} placeholder={"Devo te chamar de?"} />
        <BtnDefault class={"btn btn-success mt-2"} type={"button"} value={"Avançar"} />
      </div>

    </div>
  )
}

export default Hello