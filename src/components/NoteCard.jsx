import { DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";

export default function NoteCard({ note, handleDelete }) {
  return (
    <Card>
        <CardHeader
            action={
                <IconButton onClick={() => handleDelete(note.id)}>
                    <DeleteOutlined color="error"/>
                </IconButton>
            }
            title={note.title}
            subheader={note.category}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary">
                {note.details}
            </Typography>
        </CardContent>
    </Card>
  )
}