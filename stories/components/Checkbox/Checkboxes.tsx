import React from 'react';
import PropTypes from "prop-types";
import './checkbox.css'

/**
 * Primary UI Checkbox Component for user Interaction
 */
export const Checkboxes = ({size, transform, ...props}) =>{
    return (
        <div>
           <input type='checkbox'
                  style={{transform}}
                  {...props}/>
        </div>
    )
}

Checkboxes.propTypes = {

    /**
     * Checkbox - checked or not
     */
    checked: PropTypes.string,
    /**
     * How big should the checkbox be?
     */
    transform: PropTypes.oneOf(['scale(1.0)','scale(1.5)','scale(2.0)']),
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
}

Checkboxes.defaultProps = {
}