import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        noWrap
      >
        Create page
      </Typography>

      <Button
        onClick={() => console.log('Button clicked')}
        type="submit"
        color="primary"
        variant="contained" 
      >
        submit
      </Button>
    </Container>
  )
}
