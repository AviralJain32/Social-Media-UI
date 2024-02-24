import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  const itemData = [
    {
      img: 'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Human',
    },
    {
      img: 'https://images.pexels.com/photos/3760084/pexels-photo-3760084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Computer',
    },
    // {
    //   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //   title: 'Camera',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //   title: 'Coffee',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //   title: 'Hats',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    //   title: 'Honey',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //   title: 'Basketball',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //   title: 'Fern',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //   title: 'Mushrooms',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //   title: 'Tomato basil',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //   title: 'Sea star',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //   title: 'Bike',
    // },
  ];
  return (
    <Box flex={2} p={2} sx={{
        display:{xs:"none",sm:"block"},
        paddingLeft:0,
        marginLeft:0
    }}>
    <Box position={'fixed'} width={400}>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
      <AvatarGroup max={7}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1851253/pexels-photo-1851253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3633758/pexels-photo-3633758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      </AvatarGroup>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
      <ImageList  gap={5} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            // srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant='h6' fontWeight={100} mt={2} >Latest Conversations</Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/11824901/pexels-photo-11824901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>


    </Box>
    </Box>
  )
}

export default Rightbar
