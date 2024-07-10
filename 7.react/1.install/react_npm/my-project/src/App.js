import './App.css';

//-----------------------------------mui--------------------------------------------
// import { Button } from '@mui/material';

// function App() {
//   return (
//    <>
// <Button variant="text">Text</Button>
// <Button variant="contained">Contained</Button>
// <Button variant="outlined">Outlined</Button>
// </>
//   );
// }

// export default App;



// ----------------------------Frist React Component-----------------------------------
import Components from './Components';
import Nav from './Nav';
import {BrowserRouter , Router , Routes} from  'react-router-dom'

function App() {
  return (
   <>
  
  <Nav/>
  <h1>This is React APP</h1>
  <Components/>

  
</>
  );
}

export default App;