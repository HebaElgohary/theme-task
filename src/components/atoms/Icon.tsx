import { cn } from '@/lib/cn'
import  { ComponentType } from 'react'

interface Props {
      size?: number,
      color?: 'black' | 'primary' | 'disabled'| 'light' | 'muted',
     Icon:ComponentType<{size: number, className?:string}>,
    className?:string
}
export default function Icon(
  {  size=50,
    color='black',
    Icon,
    className}: Props
) {
const colors = {
  'primary': 'ds-text-alt',
   'light': 'ds-color-bg',
    'black': 'ds-text-primary',
    'muted': 'ds-text-muted',
    'disabled': 'ds-text-disabled',
    
}
  return (
    <Icon size={size}  className={cn(colors[color],className)} />
  )
}
