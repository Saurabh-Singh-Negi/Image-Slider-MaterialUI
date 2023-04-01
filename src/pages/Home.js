import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import images from '../utils/images';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useEffect } from 'react';
import { useRef } from 'react';
import './Home.css'

export default function Home() {
    const [id, setId] = useState(0);
    const [playing, setPlaying] = useState(false);
    const sliderInterval = useRef({});

    const handlePrev = () => {
        let isFirstImage = id === 0;
        isFirstImage ? setId(images.length-1) : setId(id-1);
    }
    const handleNext = () => {
        let isLastImage = id === images.length-1;
        isLastImage ? setId(0) : setId(id+1);
    }

    const handlePlay = () => {
        
        setPlaying(true);
    }
    const handlePause = () => {
        setPlaying(false);
    }
    useEffect(() => {
        if (playing) {
          sliderInterval.current = setInterval(handleNext, 3000);
        }
        return () => clearInterval(sliderInterval.current);
      }, [id, playing]);
  return (
    <>
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 5,
        height: '100vh',
        '@media (max-width: 960px)': {
            flexDirection: 'column',
            padding: 2,
            height: 'auto',
          },
          '@media (max-width: 1200px)': {
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            height: 'auto',
          },
    }}>
        <Box sx={{
            width: 900,
            marginRight: '1rem',
            display: 'flex',
            flexDirection: 'column',
            '@media (max-width: 960px)': {
                maxWidth: 600,
                margin: '0 auto'
              },
            '@media (max-width: 660px)': {
                width: 400,
                margin: '0 auto'
              },
              

            
        }}>
        <Card sx={{ 
            width: 'full',
            marginBottom: '1rem',
            borderRadius: '2rem',
            
            }}>
        <CardMedia
            component="img"
            image={images[id].url}
        />
        
        </Card>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
        <PlayArrowIcon  sx={{rotate: '180deg', cursor:'pointer'}}  fontSize='large' onClick={handlePrev}/>
        <Stack direction='row' spacing={2}>
            {
                images.map((image,index) => (
                    <Card className={id === index? "clicked":"img-grey"} sx={{ 
                        borderRadius: '20px'
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

        
        
        <PlayArrowIcon fontSize='large' sx={{cursor: 'pointer'}}  onClick={handleNext}/>
        </Box>
        </Box>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '450px',
            marginRight: '2rem',
            '@media (max-width: 1200px)': {
                width: '700px'
              },
            '@media (max-width: 960px)': {
                alignItems: 'center',
                margin: '0 auto'
              },
              '@media (max-width: 660px)': {
                width: '400px',
              },
              
        }}>

            <Box sx={{
                color: '#707070',
                '@media (max-width: 1200px)': {
                    textAlign: 'center'
                  },
                }}>
                <Typography sx={{
                    marginBottom: 2,
                    
                    }}
                     variant='h2' component='h1'>
                    {images[id].title}
                </Typography>
                <Typography  variant='body2' component='p'>
                    {images[id].description}
                </Typography>
            </Box>

            <Box sx={{
                textAlign: 'center'
            }}>
                { 
                playing ? 

                    <IconButton onClick={handlePause} aria-label="delete">
                <PauseCircleIcon  sx={{
                    fontSize:"80px",
                    }} color='primary' />
                    </IconButton>
                    :

                    <IconButton onClick={handlePlay} aria-label="delete">
                    <PlayCircleFilledWhiteIcon  sx={{
                        fontSize:"80px"
                        }}  color='primary' />
      
                    </IconButton>
                }
                </Box>
        </Box>
    </Box>
    </>
  );
}

