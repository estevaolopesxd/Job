import React from 'react'

import styles from './BtnDefault.css'

const BtnDefault = (props) => {
  return (
    <div>
      <button className={props.class} type={props.type} onClick={props.onclick}>{props.value}</button>
    </div>
  )
}

export default BtnDefault