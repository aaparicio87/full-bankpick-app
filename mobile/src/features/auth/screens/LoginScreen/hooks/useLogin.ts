import { useState } from "react"

interface Login {
   passwordVisible: boolean
}

export const useLogin = () => {
 const [login, setLogin] = useState<Login>({
    passwordVisible: false
 })

 const tooglePasswordVisibility = () => {
    setLogin(prev => ({
        ...prev,
        passwordVisible: !prev.passwordVisible
    }))
 }

 return {
    login,
    tooglePasswordVisibility
 }

}