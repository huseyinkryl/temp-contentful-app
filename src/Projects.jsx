import React from 'react'
import { useFetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = useFetchProjects()
  console.log(loading, projects)

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    )
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((item) => {
          const { id, img2, url, title } = item
          //console.log(url)
          //console.log(img)
          return (
            <a
              className="project"
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
