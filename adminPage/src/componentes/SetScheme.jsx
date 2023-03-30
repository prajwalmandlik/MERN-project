import { Grid} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import SchemeDetails from './SchemeDetails'
import SchemeForm from './SchemeForm'

const SetScheme = () => {
const { id } = useParams(); 

  return (
    <Grid templateColumns='repeat(2, 1fr)' >
      <SchemeForm />
      <SchemeDetails id={id} />
    </Grid>
  )
}

export default SetScheme
