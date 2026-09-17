import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
  btn : {
    fontSize: 60, 
    backgroundColor : 'red'
  },
  title : {
    textDecoration: 'underline', 
    marginBottom: 20
  }
})


export default function Create() {

  const classes = useStyle()


  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="secondary"
        noWrap
      >
        Create page
      </Typography>

      <Button
        className={classes.btn}
        onClick={() => console.log('Button clicked')}
        type="submit"
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
