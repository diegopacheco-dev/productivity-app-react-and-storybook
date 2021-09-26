import React from "react";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import PropTypes from 'prop-types'

const ButtonIcon = ({ children }) => {
  return (
    <Button type="secondary">
      {children} 
      <Icon type="right-arrow" />
    </Button>
  );
};

export default ButtonIcon;

ButtonIcon.propTypes = {
    children: PropTypes.node.isRequired 
}