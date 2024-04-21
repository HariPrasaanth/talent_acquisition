import React from 'react'
import './upcoming.scss'
import RightbarHeader from '../customComponents/headers/rightbarHeader/RightbarHeader'
import CustomButton from '../customComponents/buttons/CustomButton';
import { Typography } from '@mui/material';
import { COLORS } from '../../constants';

interface UpcomingListProps{
    backgroundColor: string,
    day: string,
    month: string,
    interviewWith: string,
    createdBy: string,
    timings: string,
    textColor: string
}

const upComingDetails = [
    {
        "id": 1,
        "day": "07",
        "month": "May",
        "interviewWith": "Designer",
        "createdBy": "Stella",
        "timings": "10 A.M to 11 A.M",
        "backgroundColor": "#0B74AD26",
        "textColor": "#0B74AD"
    },
    {
        "id": 2,
        "day": "07",
        "month": "May",
        "interviewWith": "PMO",
        "createdBy": "Stephan",
        "timings": "10 A.M to 11 A.M",
        "backgroundColor": "#C0C1C1",
        "textColor": "#091316"
    },
    {
        "id": 3,
        "day": "07",
        "month": "May",
        "interviewWith": "Net. Admin",
        "createdBy": "Stella",
        "timings": "10 A.M to 11 A.M",
        "backgroundColor": "#E1E1E1",
        "textColor": "#091316"
    }
]

const Upcoming = () => {
  return (
    <>
        <RightbarHeader>Upcomings</RightbarHeader>
        {upComingDetails.map(item => 
            <div key={item.id} style={{marginBottom: "1rem"}}>
                <UpcomingList backgroundColor={item.backgroundColor} day={item.day} month={item.month} interviewWith={item.interviewWith} createdBy={item.createdBy} timings={item.timings} textColor={item.textColor} />
            </div>
        )}
    </>
  )
}

export const UpcomingList = ({backgroundColor, day, month, interviewWith, createdBy, timings, textColor}: UpcomingListProps) => {
    return(
        <div className='upcomingListContainer'>
            <div className='dayDescriptionContainer'>
            <div className='dayContainer' style={{backgroundColor: backgroundColor}}>
                <Typography className='dayText' style={{color: textColor}}>{day}</Typography>
                <Typography className='monthText' style={{color: textColor}}>{month}</Typography>
            </div>
            <div className='descriptionContainer'>
                <Typography className='interviewerContainer'>Interview with {interviewWith}</Typography>
                <Typography className='createdContainer'>Created by <span>{createdBy}</span></Typography>
                <Typography className='timingsContainer'>{timings}</Typography>
            </div>
            </div>
            <CustomButton variant='contained' backgroundColor={COLORS.blue_button_background} color={COLORS.primary_white}>Details</CustomButton>
        </div>
    )
}

export default Upcoming