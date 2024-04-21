import React from 'react'
import './rightbarHeader.scss'
import { Typography } from '@mui/material'
import CustomLinkButton from '../../buttons/CustomLinkButton'

interface HeaderProps{
    children: string
}

const RightbarHeader = ({children}: HeaderProps) => {
  return (
    <div className='rightbarHeaderContainer'>
        <div className='titleContainer'>
            <Typography className='headerTitle'>{children}</Typography>
            <CustomLinkButton>View All</CustomLinkButton>
        </div>
    </div>
  )
}

export default RightbarHeader