import React from 'react'
import './interviewTable.scss';
import User1 from '../../assets/interview_icons/man.png';
import User2 from '../../assets/interview_icons/woman.png';
import Calendar from '../../assets/interview_icons/calendar.png';
import Clock from '../../assets/interview_icons/clock.png';
import { Typography } from '@mui/material';
import CustomButton from '../customComponents/buttons/CustomButton';

interface InterviewTableProps{
  img: string,
  name: string,
  position: string,
  date: string,
  time: string
  interviewDetails: Array<any>
}

interface LevelListProps{
  label: string,
  score: string,
  rightLabel: string,
  name: string
}


const InterviewTable = ({img, name, position, date, time, interviewDetails}: InterviewTableProps) => {
  return (
    <div className='interviewTableContainer'>
      <div className='profileContainer'>
        <div className='profileTop'>
          <div className='profileDesc'>
            <img src={img} alt='user' className='profileImg' />            
            <div className='profileName'>{name}</div>
            <div className='profilePosition'>{position}</div>
          </div>
        </div>
        <div className='profileBottom'>
          <div className='bottomLeft'>
            <img src={Calendar} alt='date' />
            <Typography className='bottomLeftText'>{date}</Typography>
          </div>
          <div className='bottomRight'>
            <img src={Clock} alt='date' />
            <Typography className='bottomRightText'>{time}</Typography>
          </div>
        </div>
      </div>
      <div className='levelContainer'>
        <div className='levelTop'>
          {interviewDetails?.map(item => 
          <div className='levelTopListContainer'>
            <LevelList label={item.label} score={item.score} rightLabel={item.rightLabel} name={item.name} />
          </div>
          )}
        </div>
        <div className='levelBottom'>
          <CustomButton variant="outlined">Reschedule Meeting</CustomButton>
          <CustomButton variant="contained">Join Meeting</CustomButton>
        </div>
      </div>
    </div>
  )
}

export const LevelList = ({label, score, name, rightLabel}: LevelListProps) => {
  return(
    <>
      <div className='levelListContainer'>
        <div className='leftLevel'>{label}: {score}</div>
        <div className='rightlevel'>{rightLabel}: {name}</div>
      </div>
    </>
  )
}

export default InterviewTable