import { Favorite, FavoriteBorder, MoreVert, Share} from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <div>
          <Card sx={{m:2}}>
          <CardHeader
            avatar={
              <Avatar src='https://images.pexels.com/photos/3262878/pexels-photo-3262878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' aria-label="recipe">
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Maria"
            subheader="September 14, 2024"
          />
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Businesses are the lifeblood of economies worldwide, serving as engines of innovation, wealth creation, and societal progress. In essence, a business is an organization or entity engaged in commercial, industrial, or professional activities aimed at generating profit by providing goods or services to customers.

At the core of every successful business lies a clear vision, a well-defined mission, and a robust strategy. These elements guide decision-making processes and steer the organization towards its objectives. Moreover, effective leadership, efficient management, and a dedicated workforce are essential components that drive a business forward, fostering growth and sustainability.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
    </div>
  )
}

export default Post
