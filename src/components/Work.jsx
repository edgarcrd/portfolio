import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2023,
    position: 'Belcan',
    duration: 'Present',
    details: [
      '• Design, test, verify and validate control system software for jet engine propulsion systems',
      '• Design, test, verify and validate control system software for jet engine propulsion systems'
    ]

  },
  {
    year: 2020,
    position: 'Propulsion Engineer',
    duration: '2 years',
    details:
    'hey'
  },
  {
    year: 2020,
    position: 'Propulsion Engineer',
    duration: '3 years',
    details:
    'hey'
  }
]

const Work = () => {
  return (
    <div id='work' className='max-w[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} position={item.position} duration={item.duration} details={item.details}/>
      ))}
    </div>
  )
}

export default Work
