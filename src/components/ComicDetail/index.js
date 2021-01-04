import * as React from 'react'
import { useParams } from 'react-router-dom'

function ComicDetail() {
  const { endpoint } = useParams()
  

  return <h1> Name :{endpoint} </h1>
}

export default ComicDetail
