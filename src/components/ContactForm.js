// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/system";

function SpacingBar() {
    return (
        <Box
            sx={{
                height: 20,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? 'rgb(255 255 255 / 10%)'
                        : 'rgb(255 255 255 / 10%)',
            }}
        />
    );
}

const ContactForm = ({ parentCallback }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: '',
        phone: '',
        email: '',
        photo: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setNewContact(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const appendContact = () => {
        parentCallback(newContact)
    }

    return (
        <React.Fragment>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <TextField fullWidth label="Name" variant="filled" required value={newContact.name} name="name" onChange={handleChange} />
                    <SpacingBar />
                    <TextField fullWidth label="Phone" variant="filled" required value={newContact.phone} name="phone" onChange={handleChange} />
                    <SpacingBar />
                    <TextField fullWidth label="Email" variant="filled" required value={newContact.email} name="email" onChange={handleChange} />
                    <SpacingBar />
                    <TextField fullWidth label="Photo Url" variant="filled" required value={newContact.photo} name="photo" onChange={handleChange} />
                </CardContent>
                <CardActions>
                    <Button disabled={!newContact.name || !newContact.phone || !newContact.email || !newContact.photo} onClick={appendContact} size="small">Add New</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

export default ContactForm;