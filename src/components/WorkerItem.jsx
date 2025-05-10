import React from 'react'

export default function WorkerItem({ updateActive, deleteWorker, workerIsm, jobIsm, updateBg, id, activeBg, updateWorkers }) {
  return (
    <div className={activeBg ? 'workerItem activeBg' : 'workerItem'}>
      <h3 onClick={() => updateBg(id)}>{workerIsm} <span>{jobIsm}</span></h3>
      <div className="btnGroup">
        {/* <button onClick={() => updateWorkers(id)}>{updateActive.id === id ? 'Close' : 'Update'}</button> */}
        {
          updateActive.id === id ? <button onClick={() => updateWorkers(null)}>Close</button> : <button onClick={() => updateWorkers(id)}>Update</button>
        }
        <button onClick={deleteWorker}>Delete</button>
      </div>
    </div>
  )
}

// 0