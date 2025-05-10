import React from 'react'

export default function SearchWorker({ searchWorkers }) {
  return (
    <form className='search'>
      <input onChange={(e) => searchWorkers(e, e.target.value)} type="text" placeholder='Search workers...' />
    </form>
  )
}
