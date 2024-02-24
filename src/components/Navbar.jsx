import { AccountBox, Article, Book,Group,Home,Mail,ModeNight,Notifications, PersonAdd, Settings, Store } from '@mui/icons-material'
import { InputBase,AppBar, Box, Toolbar, Typography, styled, Badge, Avatar, Menu, MenuItem, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Switch, Drawer } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))
const Icons=styled(Box)(({theme})=>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
}))
const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const Navbar = ({mode,setmode}) => {

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Homepage', 'Pages', 'Group', 'Marketplace','Friends','Settings','Profile'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              {index===0?<Home />:<></>}
              {index===1?<Article />:<></>}
              {index===2?<Group />:<></>}
              {index===3?<Store />:<></>}
              {index===4?<PersonAdd />:<></>}
              {index===5?<Settings />:<></>}
              {index===6?<AccountBox />:<></>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
              <ListItemButton component="a" href='#home'>
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e=>setmode(mode==='light'?"dark":"light")}/>
              </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const [open,setopen]=useState(false)
  const InputStyle=styled(InputBase)(({theme})=>({
    color:"black",
    width:'80%'
  }))
  return (
    <AppBar position='sticky' >
      <StyledToolbar sx={{marginX:'30px'}}>
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>ConnectSphere</Typography>
        <MenuIcon sx={{display:{xs:"block",sm:"none"}}} onClick={toggleDrawer(true)}/>
        <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        
        <Search><InputStyle placeholder="search..."  /></Search>
        <Icons><Badge badgeContent={4} color="error">
        <Mail />
        </Badge>
        <Badge badgeContent={4} color="error">
        <Notifications />
        </Badge>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  sx={{width:30,height:30}}  onClick={(e)=>setopen(true)}/>
        </Icons>
        <UserBox>
          <Avatar
            sx={{width:30,height:30}}
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e)=>setopen(true)}
          >
          </Avatar>
          <Typography variant='span'>Aviral</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar


