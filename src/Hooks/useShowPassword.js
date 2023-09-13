import { useState } from 'react'

export default function useShowPassword() {
    const [status, setstatus] = useState('eye-slash')
    const [Type, setType] = useState("password")
    const Value = () => {
        if (status === 'eye-slash') {
            return setstatus('eye')
        } else {
            return setstatus('eye-slash')
        }
    }
    const typeValue = () => {
        if (status === 'eye-slash') {
            return setType('text')
        } else {
            return setType('password')
        }
    }
    return [status, Type, Value, typeValue]
}
