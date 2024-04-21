import React from 'react'
import './tableHeader.scss';
import { Typography } from '@mui/material';
import CustomLinkButton from '../../buttons/CustomLinkButton';
import Searchbar from '../../searchbar/Searchbar';
import CustomFilterButton from '../../buttons/CustomFilterButton';

interface TableHeaderProps{
    title: string
}

const TableHeader = ({title}: TableHeaderProps) => {
  return (
    <div className='boxHeader'>
            <div className='titleLink'>
                <Typography className='titleContent'>{title}</Typography>
                <CustomLinkButton>View All</CustomLinkButton>
            </div>
            <div className='searchFilter'>
                <Searchbar />
                <CustomFilterButton />
            </div>
        </div>
  )
}

export default TableHeader