import React from 'react'
import { Typography } from '@mui/material'
import './customLinkButton.scss';


interface CustomLinkButtonProps{
    children: string
}

const CustomLinkButton = ({children}: CustomLinkButtonProps) => {
  return (
    <Typography className='linkContainer'>{children}</Typography>
  )
}

export default CustomLinkButton