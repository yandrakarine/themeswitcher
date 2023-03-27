import { useState, useEffect, Dispatch, SetStateAction } from "react"

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialValue: any): Response<T> {
    const [themeState, setThemeState] = useState(() => {
        // get the value on storage to persist it
        const storageValue = localStorage.getItem(key)

        if(storageValue){
            return JSON.parse(storageValue)
        }else{
            return initialValue
        }
    })

    useEffect(()=> {
        // store the theme value on storage every time that it change
        localStorage.setItem(key, JSON.stringify(themeState))
    }, [key, themeState])

    return [themeState, setThemeState]
}

export default usePersistedState