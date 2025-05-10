import React, { useState } from 'react'
import { jobList } from '../constants/data'

export default function FilterWorker({ filterWorkers }) {
  const [isActive, setIsActive] = useState('All')
  const handleFilter = (jobName) => {
    setIsActive(jobName)
    filterWorkers(isActive)
  }
  return (
    <div className='filterWorkers'>
      {
        jobList.map(({ id, jobName }) => {
          return <button onClick={() => handleFilter(jobName)} className={isActive === jobName ? 'activeBg' : ''} key={id}>{jobName}</button>
        })
      }
    </div>
  )
}
