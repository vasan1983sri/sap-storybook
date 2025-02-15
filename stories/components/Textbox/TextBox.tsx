import PropTypes from 'prop-types';
import React from "react";
/**
 * Primary UI component for user interaction
 */
export const TextBox = ({type, width, textAlign, ...props}) => {
    return (
        <input
            id='1'
            style={{
                width,
                textAlign,
                height: '30px'
        }}
            {...props}
        />
    )
}

TextBox.prototypes = {
    type: PropTypes.string
}

TextBox.defaultProps = {
    type: 'text',
    width: '500px',
    textAlign: 'right'
}

/*height: 30px;
    border: 2px solid red;
    border-radius: 4px;
    text-align: right;*/

export default TextBox;