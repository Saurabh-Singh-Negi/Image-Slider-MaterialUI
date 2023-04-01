import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import images from '../utils/images';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useEffect } from 'react';
import './Home.css'

export default function Home() {
    const [id, setId] = useState(0);
    const [slide, setSlide] = useState(false);
    const handlePrev = () => {
        let isFirstImage = id === 0;
        isFirstImage ? setId(images.length-1) : setId(id-1);
    }
    const handleNext = () => {
        let isLastImage = id === images.length-1;
        isLastImage ? setId(0) : setId(id+1);
    }
  
  return (
    <>
    <Box sx={{
        display: 'flex',
        padding: 5
    }}>
        <Box sx={{
            maxWidth: 900,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
            
        }}>
        <Card sx={{ 
            width: 'full',
            }}>
        <CardMedia
            component="img"
            image={images[id].url}
        />
        
        </Card>

        <Stack direction='row'>
            {
                images.map((image,index) => (
                    <Card className={id === index? "clicked":"img-grey"} sx={{ 
                            
                        }}>
                    <CardMedia
                        component="img"
                        height="full"
                        image={image.url}
                    />
                    
                    </Card>
                ))
            }
        </Stack>

        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
        </Box>
        <Box>
            <Typography variant='h2' component='h1'>
                {images[id].title}
            </Typography>
            <Typography variant='body2' component='p'>
                {images[id].description}
            </Typography>

            
                
                
            <PlayCircleFilledWhiteIcon  sx={{
                    fontSize:"80px"
                }}  color='primary' />
            
            
            <PauseCircleIcon  sx={{
                    fontSize:"80px"
                }} color='primary' />
        </Box>
    </Box>
    </>
  );
}

