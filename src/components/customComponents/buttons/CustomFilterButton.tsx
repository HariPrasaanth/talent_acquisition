import React from 'react'
import Button from '@mui/material/Button';
import FilterIcon from '../../../assets/other_icons/filter_icon.png';
import { Typography } from '@mui/material';

const CustomFilterButton = () => {
  return (
    <>
        <Button style={{boxShadow: "4px 4px 25px 0px #00000026", textTransform: "none", display: "flex", gap: "1rem"}}>
          <img src={FilterIcon} alt='filter' />
          <Typography>Filters</Typography>
        </Button>
    </>
  )
}

export default CustomFilterButton