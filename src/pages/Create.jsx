import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { FormControl, FormControlLabel, FormLabel, Radio,   RadioGroup, TextField } from '@mui/material';


const useStyle = makeStyles({
  btn : {
    fontSize: 60, 
    backgroundColor : 'red'
  },
  title : {
    textDecoration: 'underline', 
    marginBottom: 20
  },
  field: {
    marginTop: 20, 
    marginBottom: 20, 
    display: 'block'
  }
})


export default function Create() {

  const classes = useStyle()
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [category, setCategory] = useState("todos")


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

        <FormControl className={classes.field}>
          <FormLabel color="secondary">Note Category</FormLabel>
          <RadioGroup  value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio/>} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

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
