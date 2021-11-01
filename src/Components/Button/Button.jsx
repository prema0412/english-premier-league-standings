
import React from 'react'

import '../Button/Button.scss'

const Button = (props) => {

    const { buttonText, handleClick } = props

    return (
        <button className="button" onClick={handleClick}>{buttonText}</button>
    )
}

export default Button
