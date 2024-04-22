// Simple MUI button with Text alone
import React from "react"
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

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
      ><Typography style={{fontFamily: "Poppins", fontSize: "14px", fontWeight: 500, lineHeight: "21px", textAlign: "left"
        }}>{children}</Typography></Button>
    </>
  )
}

export default CustomButton