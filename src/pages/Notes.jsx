import { Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{md:3, xs:12}}>
          <Paper>1</Paper> 
        </Grid>
        <Grid size={{md:3, xs:12}}>
          <Paper>2</Paper>
        </Grid>
        <Grid size={{md:3, xs:12}}>
          <Paper>3</Paper> 
        </Grid>
        <Grid size={{md:3, xs:12}}>
          <Paper>4</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {notes.map( note => (
          <Grid key={note.id} size={{md:3, xs:12}}>
            <Paper>{note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}