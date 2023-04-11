import React from 'react'
import './Studentprofile.css'
import { useState } from 'react';
//card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//box
import Box from '@mui/material/Box';
//container
import Container from '@mui/material/Container';
//stack
import Stack from '@mui/material/Stack';
//avatar
import Avatar from '@mui/material/Avatar';
//Typography
import Typography from '@mui/material/Typography';
//button
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
//icons
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';


function Adminprofile() {

  const [IsOpenJOBS, setIsopenJOBS] = useState(false);
  const [IsOpenEM, setIsopenEM] = useState(false);
  const [IsOpenEMPLOYEE, setIsopenEMPLOYEE] = useState(false);

  return (
    <div>
        {/* profile photo */}
        <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 150, height:150, top:130,left:110, zIndex:1 }}>M</Avatar>

        {/* cover photo */}
        <Card className='coverPhoto'>
            <CardMedia  
                component='img'
                height='140'
                image="https://source.unsplash.com/random"
                alt="unspalsh image"
            />
        </Card>

          {/* container for side panel */}
        <Box className='sidePanel'>

          {/* name */}
         <Typography className='name' variant='h5' fontWeight='bold' >
           Meljhonzer Hamoc 
        </Typography>
        <p className='id'>STUDENT</p>

        {/* socials stack */}
        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">

        <Button 
        size="small" 
        variant='contained' 
        color="primary" >
          <FacebookIcon />
        </Button>

        <Button 
        size="small" 
        variant='contained' 
        color="secondary" >
          <GoogleIcon />
        </Button>

        
        <Button 
        size="small" 
        variant='contained' 
        color="primary" >
        <TwitterIcon />
        </Button>

        </Stack>

        {/* information stack */}
        <Stack direction="column" spacing={1} mt={2}>

           <Button 
           size="small" 
           variant='contained' 
           color="success"  
           startIcon={<PhoneAndroidIcon />} >
               09xxxxxxxxx
            </Button>

            <Button 
            size="small" 
            variant='contained' 
            color="success"  
            startIcon={<PhoneIcon />} >
               xxxxxxxxxxx
          </Button>

          <Button 
          size="small" 
          variant='contained' 
          color="secondary"  
          startIcon={<AlternateEmailIcon />} >
              M.mail@mail.com
          </Button>
          
        </Stack>
        </Box>

      {/* contents */}
      <ButtonGroup  
      variant="contained"  
      aria-label="outlined primary button group" 
      className='contentButton'>

      <Button  onClick={() => setIsopenJOBS(!IsOpenJOBS) }>JOBS</Button>
        {IsOpenJOBS &&
         <Container className='contentCon' sx={{width:900,}}>
            <Box sx={{ bgcolor:'slategray', height: '55vh'}}>
            
               <Card className='job1'>
                <CardContent>
                  
                  <Typography variant="h5" component="div">
                    FRONT END DEVELPER
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit post</Button>
                </CardActions>
              </Card> 

            </Box>
          </Container>
        }
      
      <Button onClick={() => setIsopenEM(!IsOpenEM)}>EMAIL</Button>
        {IsOpenEM &&
          <Container className='contentCon' sx={{width:900,}}>
              <Box sx={{ bgcolor:'slategray', height: '55vh'}}>
                <Typography variant='h1'>Email tab</Typography>
              </Box>
            </Container>
          }
    </ButtonGroup>
    </div>
  )
}

export default Adminprofile 