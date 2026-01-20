import { storage, STORAGE_KEYS } from "@storage"


export const getStoredThemeSync = () => {
    const theme = storage.getItem(STORAGE_KEYS.THEME) as
        | 'light'
        | 'dark'
        | undefined

    if(!theme){
        storage.setItem(STORAGE_KEYS.THEME, 'system')
        return 'system'
    }    

    return theme
}