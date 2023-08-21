import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from '../components/HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscle, equipment}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}}> 
      <Typography variant='h3' mb={2}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
    {targetMuscle.length ?  (<HorizontalScrollBar data={targetMuscle}/>): <Loader/>}
      </Stack>
      <Typography variant='h3' mb={2}>
        Exercises that use the same equipment.
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
    {equipment.length ?  (<HorizontalScrollBar data={equipment}/>): <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
