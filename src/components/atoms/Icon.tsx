import { cn } from '@/lib/cn'
import React, { ReactNode } from 'react'

interface Props {
      size: number,
    color: 'primary' | 'muted' | 'disabled',
    Icon:ReactNode,
    className?:string
}
export default function Icon(
  {  size,
    color,
    Icon,
    className}: Props
) {
const colors = {
    'primary': 'ds-text-primary',
    'muted': 'ds-text-muted',
    'disabled': 'ds-text-disabled',
    
}
  return (
    <Icon size={size}  className={cn(colors[color],className)} />
  )
}
