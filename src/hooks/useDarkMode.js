import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage';

export default function useDarkMode() {
    const [someValue, setSomeValue] = useLocalStorage('key')

    useEffect(()=>{
        if(useLocalStorage){
            getElementsByTagName('body').classList.add('dark-mode')
        } else{
            getElementsByTagName('body').classList.remove('dark-mode')
        }
    },[useLocalStorage])
    return (
        <div>
            
        </div>
    )
}
