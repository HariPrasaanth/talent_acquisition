import React from 'react'
import './today.scss';
import { Card, Grid, Typography } from '@mui/material';
import ThreeDot from '../../assets/interview_icons/three_dot.png';
import { ChartComponent } from '../ChartComponent/ChartComponent';
import Calendar from '../Calendar/Calendar';
import InterviewTable from '../InterviewTable/InterviewTable';
import User1 from '../../assets/interview_icons/man.png';
import User2 from '../../assets/interview_icons/woman.png';

const interviewList = [
  {
    "id": 1,
    "img": User1,
    "name": "John Smith",
    "role": "Senior Python Developer",
    "date": "19th May 2024",
    "time": "10.30AM",
    "interviewDetails":[
      {
        "id": 1,
        "label": "1st Level",
        "score": "7/10",
        "rightLabel": "Interviewer",
        "name": "Stella"
      },
      {
        "id": 2,
        "label": "2nd Level",
        "score": "6/10",
        "rightLabel": "Interviewer",
        "name": "Smith"
      },
      {
        "id": 3,
        "label": "3rd Level",
        "score": "Waiting",
        "rightLabel": "Interviewer",
        "name": "Stephan"
      },
      {
        "id": 4,
        "label": "Meet Via",
        "score": "G-Meet",
        "rightLabel": "Attendees",
        "name": "Johnson"
      }
    ]
  },
  {
    "id": 2,
    "name": "Maria",
    "img": User2,
    "role": "Senior Python Developer",
    "date": "19th May 2024",
    "time": "10.30AM",
    "interviewDetails":[
      {
        "id": 1,
        "label": "1st Level",
        "score": "7/10",
        "rightLabel": "Interviewer",
        "name": "Stella"
      },
      {
        "id": 2,
        "label": "2nd Level",
        "score": "6/10",
        "rightLabel": "Interviewer",
        "name": "Smith"
      },
      {
        "id": 3,
        "label": "3rd Level",
        "score": "Waiting",
        "rightLabel": "Interviewer",
        "name": "Stephan"
      },
      {
        "id": 4,
        "label": "Meet Via",
        "score": "G-Meet",
        "rightLabel": "Attendees",
        "name": "Johnson"
      },
    ]
  },
  {
    "id": 3,
    "name": "John Smith",
    "img": User1,
    "role": "Senior Python Developer",
    "date": "19th May 2024",
    "time": "10.30AM",
    "interviewDetails":[
      {
        "id": 1,
        "label": "1st Level",
        "score": "7/10",
        "rightLabel": "Interviewer",
        "name": "Stella"
      },
      {
        "id": 2,
        "label": "2nd Level",
        "score": "6/10",
        "rightLabel": "Interviewer",
        "name": "Smith"
      },
      {
        "id": 3,
        "label": "3rd Level",
        "score": "Waiting",
        "rightLabel": "Interviewer",
        "name": "Stephan"
      },
      {
        "id": 4,
        "label": "Meet Via",
        "score": "G-Meet",
        "rightLabel": "Attendees",
        "name": "Johnson"
      },
    ]
  }
]

const TodayInterview = () => {
  return (
    <div className='interviewContainer'>
      <div className='interviewHeader'>
        <Typography className='interviewHeaderContent'>Today Interviews Meetings Info</Typography>
        <img src={ThreeDot} alt='options' style={{cursor: "pointer"}}/>
      </div>
      <div className='interviewDivider'></div>
      {<div className='interviewContentContainer'>
        {interviewList.map(item =>
            <InterviewTable img={item.img} name={item.name} position={item.role} date={item.date} time={item.time} interviewDetails={item.interviewDetails} />   
        )}
      </div>}
    </div>
  )
}

export default TodayInterview;