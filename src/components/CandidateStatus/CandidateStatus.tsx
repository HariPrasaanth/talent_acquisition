import React from 'react'
import './candidateStatus.scss'
import TableHeader from '../customComponents/headers/tableHeader/TableHeader'
import CandidateTable from '../CandidateTable/CandidateTable'

const CandidateStatus = () => {
  return (
    <div className='candidateStatusContainer'>
        <TableHeader title='Candidate Status'/>
        <CandidateTable />
    </div>
  )
}

export default CandidateStatus