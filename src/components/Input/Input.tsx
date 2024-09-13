import React, { type ChangeEvent } from 'react'
import { StyledInput } from './Input.styles'

export interface InputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
}
