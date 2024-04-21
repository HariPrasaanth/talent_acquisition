import React from 'react'
import TodayInterview from '../TodayInterviewComponent/TodayInterview'
import PostedJobs from '../PostedJobs/PostedJobs'
import CandidateStatus from '../CandidateStatus/CandidateStatus'

const Mainbar = () => {
  return (
    <>
        <TodayInterview />
        <PostedJobs />
        <CandidateStatus />
    </>
  )
}

export default Mainbar