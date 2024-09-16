import {Routes,Route } from 'react-router-dom';
import './App.css';
import { Home} from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Error } from './Components/Error';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import NoteState from './context/Notestate';

function App() {
  return (
    <>
<NoteState>

<Navbar />
<Login />

<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/contact" element={<Contact />}/>
  <Route path="/*" element={<Error />}/>
</Routes>
</NoteState>


</>
  );
}

export default App;
