import { useState } from "react"

interface Register {
    passwordVisible: boolean
    confirmPasswordVisible: boolean
}

type PasswordVisible = 'passwordVisible' | 'confirmPasswordVisible'

export const useRegister = () => {

    const [register, setRegister] = useState<Register>({
        passwordVisible: false,
        confirmPasswordVisible: false,
    })


    const tooglePasswordVisibility = (key: PasswordVisible) => {
        setRegister(prev => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    return {
        tooglePasswordVisibility,
        register
    }
}