import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';

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
        endIcon={<SendIcon color="secondary" />}
      >
        submit
      </Button>
      <br/>

      <AcUnitIcon color="error" fontSize="large"/>
    </Container>
  )
}
