// Simple MUI button with Text alone
import React from "react"
import Button from '@mui/material/Button';

interface CustomButtonProps{
    variant: 'contained'|'outlined'|'text',
    backgroundColor: string,
    color: string,
    children: string
}

const CustomButton = ({variant, backgroundColor, color, children}: CustomButtonProps) => {
  return (
    <>
      <Button variant={variant} 
      style={{backgroundColor: backgroundColor, color: color, textTransform: "none"}}
      >{children}</Button>
    </>
  )
}

export default CustomButton