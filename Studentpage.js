import React from "react";
import './Studentpage.css'
import Jobs from './jobs'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Studentpage() {
return(
  <div >
    <h1 className="studhead">HELLO,STUDENT</h1>
    
    <Box sx={{ width: '90%',  }}>
      <Jobs />
    </Box>

  <div className='bell'>
    <Badge  badgeContent={4} color="secondary">
      <NotificationsIcon sx={{color:'gold', fontSize:40}} />
    </Badge>
  </div>
  </div>
)
}