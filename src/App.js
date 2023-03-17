import './App.css';

// Uncomment untuk memuat daftar kontak
import { useState } from 'react';
import contactsJSON from './data/contacts.json';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { Container, Grid } from '@mui/material';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [user, setUser] = useState(contactsJSON)

  const updateUser = (dataNewContact) => {
    const newUser = [...user, dataNewContact]
    setUser(newUser)
  }

  const callback = (data) => {
    updateUser(data)
  }

  return (
    <div className="App">
      <div style={{ marginTop: 20 }}>
        <Header />
      </div>
      <Container style={{ marginTop: 30 }}>
        <Grid container
          direction="row"
          spacing={2} columns={16}>
          <Grid item xs={8}>
            <ContactForm parentCallback={callback} />
          </Grid>
          <Grid item xs={8}>
            <Contact data={user} />
          </Grid>
        </Grid>
      </Container >
    </div>
  );
};

export default App;
