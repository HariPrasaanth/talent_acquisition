// Simple MUI button with Text alone
import React from "react"
import Button from '@mui/material/Button';

interface CustomButtonProps{
    variant: 'contained'|'outlined'|'text',
    backgroundColor: string,
    color: string,
    text: string
}

const CustomButton = ({variant, backgroundColor, color, text}: CustomButtonProps) => {
  return (
    <>
      <Button variant={variant} 
      style={{backgroundColor: backgroundColor, color: color}}
      >{text}</Button>
    </>
  )
}

export default CustomButton