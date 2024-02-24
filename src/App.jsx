import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import { Box, Stack, colors, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { ThemeProvider } from '@emotion/react'

const App = () => {
  const [mode, setmode] = useState('light')
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}  color={"text.primary"}>
        <Navbar setmode={setmode} mode={mode}/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setmode={setmode} mode={mode}/>
        <Feed/>
        <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  )
}

export default App
