import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ type, children}) => {
    return (
        <button
        className={`button ${type}`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["primary" ,"secondary"])
}

export default Button
