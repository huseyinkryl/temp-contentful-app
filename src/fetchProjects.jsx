import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: '6nt8ayf4mqnz',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'myprojects' })
      //console.log(response)
      const projects = response.items.map((item) => {
        const { title, url, img } = item.fields
        const id = item.sys.id
        const img2 = img?.fields?.file?.url
        //console.log(img)
        return { title, url, id, img2 }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}

/* client
  .getEntries({ content_type: 'myprojects' })
  .then((response) => console.log(response)) */
