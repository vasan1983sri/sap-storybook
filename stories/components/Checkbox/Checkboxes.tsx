import React from 'react';
import PropTypes from "prop-types";
import './checkbox.css'

/**
 * Primary UI Checkbox Component for user Interaction
 */
export const Checkboxes = ({transform, value, ...props}) => {
    //console.log(name)
    return (
        <div>
            <label>
                <input type='checkbox'
                       style={{transform}} value={value}
                       {...props} /> {value}</label>
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
    transform: PropTypes.oneOf(['scale(1.0)', 'scale(1.5)', 'scale(2.0)']),

    /**
     * Name of the Checkbox
     */
    name: PropTypes.string.OPTIONAL,

    /**
     * Value of the Checkbox,
     */
    value: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    /**
     *
     */
    onchange: PropTypes.func
}

Checkboxes.defaultProps = {}