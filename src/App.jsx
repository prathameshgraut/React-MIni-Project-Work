// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

function App() {
  return (
    <>
      <h1>Hello</h1>
        {/* <Button variant="outlined" onClick={add} startIcon={<DeleteIcon />}>
        Delete</Button>
        <Button variant="text" onClick={add} color="error" endIcon={<SendIcon />}>
        Click Here..</Button> */}

                <IconButton aria-label="fingerprint" color="secondary"><Fingerprint /></IconButton>
        <IconButton aria-label="fingerprint" color="success">
            <Fingerprint />
            </IconButton>

      </>
  );
}

export default App;
