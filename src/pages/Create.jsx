import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';


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
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState(false)
  const handlSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    if (title == ''){
      setTitleError(true)
    }
    if(title){
      console.log(title)
    }
  }
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

      <form noValidate autoComplete='off' onSubmit={handlSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="title"
          variant='filled'
          fullWidth
          color="secondary"
          required
          error={titleError}
        />
        <Button
        className={classes.btn}
        onClick={() => console.log('Button clicked')}
        type="submit"
        variant="contained" 
        endIcon={<SendIcon color="secondary" />}
      >
        submit
      </Button>
      </form>
      
      <br/>

      <AcUnitIcon color="error" fontSize="large"/>
    </Container>
  )
}
