import { Add } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Typography,styled } from "@mui/material"

function App() {
  const BlueButton=styled(Button)({
    backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          bgcolor:"lightblue"
        },
        "&:disabled":{
          bgcolor:"gray",
          color:"white"
        }
  })
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary" size="small" startIcon={<SettingsIcon/>}>Settings</Button>
      <Button variant="contained" color="success" size="small" startIcon={<Add/>}>Add New Post</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="p">
        It uses h1 style but its a p tag
      </Typography>
      <BlueButton varient="contained" disabled sx={{
      }}>My Unique Button</BlueButton>
      <BlueButton varient="contained" disabled sx={{
        
      }}>My Unique Button</BlueButton>
    </div>
  )
}

export default App


//to set theme we can use theme provider and make a new file theme

import { createTheme } from "@mui/material";

export const theme=createTheme({
    palette:{
        primary:{
            main:"#182490",
            light:"skyblue"
        },
        secondary:{
            main:"#214324"
        },
        otherColor:{
            main:"#999"
        }
    }
})