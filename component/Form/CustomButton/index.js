import React from 'react'
import styles from './custom-button.module.css'

const CustomButton = (props) => {
    const {text, type} = props
  return (
    <button type={type} className={`${styles.custom_button}`}>
        {text}
    </button>
  )
}

export default CustomButton