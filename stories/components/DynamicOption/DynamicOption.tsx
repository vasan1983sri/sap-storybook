import React from "react"
import PropTypes from "prop-types"

export const DynamicOption = ({value, inputType,  transform, ...props}) => {

    return (
        <div>
            <label>
                <input style={{transform}}  type={inputType} value={value} {...props} /> {value}
            </label>
        </div>
    )

}

DynamicOption.propTypes = {
    checked: PropTypes.string,
    value: PropTypes.string,
    onclick: PropTypes.func,
    onchange: PropTypes.func
}


DynamicOption.defaultProps = {}