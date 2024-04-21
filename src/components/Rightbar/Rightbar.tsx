import React from 'react'
import Calendar from '../Calendar/Calendar'
import Upcoming from '../Upcoming/Upcoming'
import Activity from '../Activity/Activity'
import Hiring from '../Hiring/Hiring'

const Rightbar = () => {
  return (
    <>
        <Calendar />
        <Upcoming />
        <Activity />
        <Hiring />
    </>
  )
}

export default Rightbar