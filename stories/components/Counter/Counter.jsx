import React from 'react'
import { Button } from '../../Button'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Counter({ initialValue, ...props }) {

    const [count, setCount] = useState(initialValue)

    console.log("Printing Initial Value: ",count)
    const onClickButton = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <Button size="large" onClick={onClickButton} label="Counter" /> <br />
            Counter - {count}
        </div>
    )
}

Counter.propTypes = {
    initialValue: PropTypes.number
}

