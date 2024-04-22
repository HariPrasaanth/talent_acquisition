import React from 'react'
import Calendar from '../Calendar/Calendar'
import Upcoming from '../Upcoming/Upcoming'
import Activity from '../Activity/Activity'
import Hiring from '../Hiring/Hiring'

const Rightbar = () => {
  return (
    <>  
      <div 
      style={{paddingLeft: "0.5rem"}}
      >
          <Calendar />
          <Upcoming />
          <Activity />
          <Hiring />
      </div>
    </>
  )
}

export default Rightbar