import React from 'react'
import 'prop-types'

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
    type: PropTypes.oneOf[("primary" ,"secondary")]
}

export default Button
