// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    if (typeof data === 'object' && !data.length) {
        return (
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar>
                            <img src={data.photo} alt={data.name} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'block' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {data.phone}
                                </Typography>
                                {data.email}
                            </React.Fragment>
                        } />
                </ListItem>
            </List>
        )
    }
    return (
        <React.Fragment>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {data.length > 0 && data.map((user, i) =>
                    <div key={i}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar>
                                    <img src={user.photo} alt={user.name} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={user.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'block' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {user.phone}
                                        </Typography>
                                        {user.email}
                                    </React.Fragment>
                                } />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                )}
            </List>
        </React.Fragment>
    );
};

export default Contact;
