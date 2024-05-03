// import './App.css'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import WeatherApp from './WeatherApp';
function App() {

  return (
    <>
      {/* <h1>Material UI Demo</h1>
      <Button variant="contained">Click Me</Button>
      <Button variant="contained" disabled>Click Me2</Button>
      <Button variant="contained" color='error' size='small'>Click Me3</Button>
      <Button variant="contained" color='success' size='large'>Click Me4</Button>
      
      <Button variant="contained" startIcon={<DeleteIcon/>}>Delete</Button>
      
      <Alert severity="error">
        Delete option is given!
      </Alert> */}
      <WeatherApp/>
    </>
  )
}

export default App;
