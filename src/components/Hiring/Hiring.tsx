import React from 'react'
import './hiring.scss'
import RightbarHeader from '../customComponents/headers/rightbarHeader/RightbarHeader'
import User1 from '../../assets/hiring_icons/user1.png';
import User2 from '../../assets/hiring_icons/user2.png';
import User3 from '../../assets/hiring_icons/user3.png';
import User4 from '../../assets/hiring_icons/user4.png';
import User5 from '../../assets/hiring_icons/user5.png';
import { Typography } from '@mui/material';
import CustomButton from '../customComponents/buttons/CustomButton';

interface HiringListProps{
  img: string,
  name: string,
  position: string,
  interviewWith: string,
  lastActivity: string
}

const hiringDetails = [
  {
    "id": 1,
    "img": User1,
    "name": "John Doe",
    "position": "Senior Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  },
  {
    "id": 2,
    "img": User2,
    "name": "John Doe",
    "position": "Senior Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  },
  {
    "id": 3,
    "img": User3,
    "name": "John Doe",
    "position": "Senior Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  },
  {
    "id": 4,
    "img": User4,
    "name": "John Doe",
    "position": "Senior Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  },
  {
    "id": 5,
    "img": User5,
    "name": "John Doe",
    "position": "Senior Python Developer",
    "interviewWith": "Stella",
    "lastActivity": "15 mins"
  }
]

const Hiring = () => {
  return (
    <>
    <RightbarHeader>Hiring Candidates</RightbarHeader>
    {hiringDetails.map(item => 
      <div key={item.id} style={{marginBottom: "1rem"}}>
        <HiringList img={item.img} name={item.name} position={item.position} interviewWith={item.interviewWith} lastActivity={item.lastActivity} />
      </div>
    )}
    </>
  )
}

export const HiringList = ({img, name, position, interviewWith, lastActivity}: HiringListProps) => {
  return(
    <div className='hiringMainContainer'>
    <div className='hiringListContainer'>
      <div className='hiringImgContainer'>
        <img src={img} alt="user1" />
      </div>
      <div className='hiringDescContainer'>
        <Typography className='nameText'>{name}</Typography>
        <Typography className='interviewText'>{position}</Typography>
        <Typography className='lastActivityText'>Hired by: {interviewWith}</Typography>
      </div>
    </div>
    <CustomButton variant='outlined'>Details</CustomButton>
    </div>
  )
}

export default Hiring;