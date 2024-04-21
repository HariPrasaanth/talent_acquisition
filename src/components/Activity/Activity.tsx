import React from 'react'
import './activity.scss'
import RightbarHeader from '../customComponents/headers/rightbarHeader/RightbarHeader'
import User1 from '../../assets/activity_icons/user1.png';
import User2 from '../../assets/activity_icons/user2.png';
import User3 from '../../assets/activity_icons/user3.png';
import { Typography } from '@mui/material';

interface ActivityListProps{
  img: string,
  name: string,
  position: string,
  interviewWith: string,
  lastActivity: string
}

const activityDetails = [
  {
    "id": 1,
    "img": User1,
    "name": "John Doe",
    "position": "Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  },
  {
    "id": 2,
    "img": User2,
    "name": "John Doe",
    "position": "Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  },
  {
    "id": 3,
    "img": User3,
    "name": "John Doe",
    "position": "Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  }
]

const Activity = () => {
  return (
    <>
    <RightbarHeader>Activity</RightbarHeader>
    {activityDetails.map(item => 
      <div key={item.id} style={{marginBottom: "1rem"}}>
        <ActivityList img={item.img} name={item.name} position={item.position} interviewWith={item.interviewWith} lastActivity={item.lastActivity} />
      </div>
    )}
    </>
  )
}

export const ActivityList = ({img, name, position, interviewWith, lastActivity}: ActivityListProps) => {
  return(
    <div className='activityListContainer'>
      <div className='activityImgContainer'>
        <img src={img} alt="user1" />
      </div>
      <div className='activityDescContainer'>
        <Typography className='nameText'>{name} <span>[{position}]</span></Typography>
        <Typography className='interviewText'>Interview with {interviewWith}</Typography>
        <Typography className='lastActivityText'>{lastActivity} ago</Typography>
      </div>
    </div>
  )
}

export default Activity;