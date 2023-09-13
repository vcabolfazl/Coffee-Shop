import { useState } from 'react'

export default function useInput(initValue) {

    const [Value, setValue] = useState(initValue)

    const restValue = () => {
        setValue("")
    }

    const binding = {
        value: Value,
        onChange: e => {
            setValue(e.target.value)
        }

    }
    return [Value , binding , restValue]
}
