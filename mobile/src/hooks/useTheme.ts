import { useMemo } from "react"
import { Uniwind, useUniwind } from "uniwind"
import { storage, STORAGE_KEYS } from "@storage"


export const useTheme = () => {
   const { theme } = useUniwind()

   const themeUpdated: 'light' | 'dark' = useMemo(() => (
        theme === 'dark' ? 'light' : 'dark'
   ), [theme])
    
    const changeTheme = () => {
        storage.setItem(STORAGE_KEYS.THEME, themeUpdated)
        Uniwind.setTheme(themeUpdated)
    }

    return {
        theme,
        changeTheme,
        themeUpdated
    }
}