import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../mainSection/Data'

const SchemeDetails = () => {
    const id = useParams()
  return (
    <div>
      <h1>{data[0].desc}</h1>
    </div>
  )
}

export default SchemeDetails
