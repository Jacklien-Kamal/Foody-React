import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function LargeCard() {

  return (
    <Card className='container   h-[372px] "bg-white  dark:bg-gray-900 dark:text-white ' sx={{ display: 'flex' }}>
         <CardMedia
        component="img"
        className=' my-10'
        sx={{ width: 1000 }}
        image="https://media.istockphoto.com/id/841253824/photo/eating-mexican-tacos-with-spicy-salsa-and-nacho-tortilla-chips.jpg?s=612x612&w=0&k=20&c=lFwvyH5hAIS0Mjtud70x-AkDC2UhVsnG5Jsey5EpT0s="
        alt="Live from space album cover"
      />
      <Box className=' dark:bg-gray-800 dark:text-white  duration-200 px-8  my-10' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent >
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1">
            Mac Miller
          </Typography>
        </CardContent>
        <Box>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nesciunt quidem ea eligendi. Expedita recusandae nisi iste maxime a, nihil rem, culpa molestiae voluptate mollitia quod deleniti, ratione minus quo.</p>
        </Box>
      </Box>
     
    </Card>
  );
}
