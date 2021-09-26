import React from 'react'
// import rightArrow from '../../../assets/icons/right-arrow.svg'
import getIconsList from './IconList'

const Icon = ({ type }) => {
    return (
        <img src={getIconsList(type)}></img>
    )
}

export default Icon

     