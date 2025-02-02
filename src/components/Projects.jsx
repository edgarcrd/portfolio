import React from 'react'
import ProjectItem from './ProjectItem'
import project1Img from '../assets/image1.jpg'
import project2Img from '../assets/image2.jpg'
import project3Img from '../assets/image3.jpg'
import project4Img from '../assets/image4.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        These are my projects
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={project1Img} title='Project 1' />
        <ProjectItem img={project2Img} title='Project 2'/>
        <ProjectItem img={project3Img} title='Project 3'/>
        <ProjectItem img={project4Img} title='Project 4'/>
      </div>
    </div>
  )
}

export default Projects
