'use client'
import Button from './Button'
import { useTheme } from 'next-themes'
import {Sun , Moon }from '../../assets/icons/icons'
import Icon from './Icon'

export default function ThemeButton() {
    const {theme, setTheme} = useTheme();

  return (
    <Button size='md' 
    isRounded 
       className={`shadow-md flex gap-5 border-none transition-all duration-1000 ${theme=='dark'?'justify-start !bg-gray-500':'justify-end !bg-gray-300'} `} 
        onClick={() => setTheme(theme=='dark'?'light':'dark')}> 

    <span className={`${theme=='dark'?'order-1':'bg-white order-2'} rounded-full !p-2   `}>
    <Icon 
    size={20}
     Icon={theme=='dark'?Sun:Moon} 
     color={`${theme=='dark'?'light':'primary'}`}></Icon>

    </span>
    <span className={`${theme=='dark'?'order-2':'order-1'} `} />
    </Button>
  )
}




