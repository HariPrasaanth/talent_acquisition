import React from 'react'
import './postedJobs.scss'
import TableHeader from '../customComponents/headers/tableHeader/TableHeader'
import { Typography } from '@mui/material'
import Python from '../../assets/job_icons/python.png'
import Angular from '../../assets/job_icons/angular.png'
import Java from '../../assets/job_icons/java.png'
import UI from '../../assets/job_icons/ui.png'
import ThreeDot from '../../assets/interview_icons/three_dot.png'
import UpArrow from '../../assets/job_icons/upArrow.png'

const jobDetails = [
    {
        "id": 1,
        "img": Python,
        "position": "Python Developers",
        "applicants": 258,
        "lastMonth": 28,
        "backgroundColor": "#D9E4EF",
        "textColor": "#0A66C2",
        "activity": "6 mins ago"
    },
    {
        "id": 2,
        "img": Angular,
        "position": "Angular Developers",
        "applicants": 258,
        "lastMonth": 28,
        "backgroundColor": "#73A1FB",
        "textColor": "#FFFFFF",
        "activity": "6 mins ago"
    },
    {
        "id": 3,
        "img": Java,
        "position": "Java Developers",
        "applicants": 258,
        "lastMonth": 28,
        "backgroundColor": "#2F73A0",
        "textColor": "#FFFFFF",
        "activity": "6 mins ago"
    },
    {
        "id": 4,
        "img": UI,
        "position": "UI/UX Designers",
        "applicants": 258,
        "lastMonth": 28,
        "backgroundColor": "#0A66C2",
        "textColor": "#FFFFFF",
        "activity": "6 mins ago"
    }
]

const PostedJobs = () => {
  return (
    <div className='postedJobContainer'>
        <TableHeader title='Posted Jobs'/>
        <div className='jobCardSubContainer'>
        {jobDetails.map(job => 
        <div key={job.id} className='jobCardContainer'>
            <JobCard img={job.img} position={job.position} backgroundColor={job.backgroundColor} textColor={job.textColor} activity={job.activity} lastMonth={job.lastMonth} />
        </div>
        )}
        </div>
    </div>
  )
}

export const JobCard = ({img, position, backgroundColor, textColor, activity, lastMonth}) => {
    return(
        <div className='jobCardMainContainer'>
            <div className='jobCardHeader'>
                <div className='jobCardLogo'>
                    <img src={img} alt='logo' />
                </div>
                <div className='jobCardRole'>{position}</div>
                <div className='jobCardOption'>
                    <img src={ThreeDot} alt='options' />
                </div>
            </div>
            <div className='jobCardContent'>
                <div className='jobRole'>Senior Developers</div>
                <div className='jobApplicant' style={{backgroundColor: backgroundColor, color: textColor}}>258</div>
                <div className='totalApplicantContent'>Total Applicants</div>
            </div>
            <div className='jobCardFooter'>
                <div className='jobCardFooterContainer'>
                    <div className='footerLastMonthContainer'>
                        <div>
                            <img src={UpArrow} alt='up' />
                        </div>
                        <div className='footerIncreaseContent'>
                            <span>{lastMonth}%</span> vs Last month
                        </div>
                    </div>
                    <div className='footerActivity'>{activity}</div>
                </div>
            </div>
        </div>
    )
}

export default PostedJobs