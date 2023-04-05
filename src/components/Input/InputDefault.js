// css 
import styles from './InputDefault.css'

import React from 'react'

const InputDefault = (props) => {
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onClick={props.onclick}/>
    </div>
  )
}

export default InputDefault