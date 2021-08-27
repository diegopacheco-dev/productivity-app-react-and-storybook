import React from 'react'
import PropTypes from 'prop-types'
import './Heading.css'

const Heading = ({ children, color="default", size="md" }) => {
    return (
        <heading className={`heading ${color} ${size}`}>
        {children}
        </heading>
    )
}

export default Heading

Heading.propTypes = {
    children : PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary']),
    size: PropTypes.oneOf(['xs', 'sm', 'md'])
}