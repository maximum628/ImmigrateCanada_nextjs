import React,{ useState,useEffect,forwardRef } from 'react';
import PropTypes from 'prop-types';
import { m,AnimatePresence } from 'framer-motion';
import { wrap } from "popmotion";

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography,Card,CardHeader,CardContent,Modal } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import axios from '../../utils/axios';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { TextAnimate,MotionViewport,MotionContainer, varFade } from '../../components/animate';
import {CheckoutForm} from '../../components/stripe';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position:'relative',
  textAlign: 'center',
  paddingTop: theme.spacing(0),
  backgroundImage:'url(/assets/images/services/modern-stylish-red-wave.jpg)',
  backgroundSize:'100% 100%',
  paddingBottom: theme.spacing(8),
  // backgroundImage:'radial-gradient(circle, #e500008f,#e50000cc,#e50000)',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));
const IconWrapperStyle = styled('div')(({ theme }) => ({
  // margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(6),
  height: theme.spacing(6),
  justifyContent: 'center',
  marginBottom: theme.spacing(0),
}));
const StyledButton = styled(Button)`
  color: #fff;
  padding: 6px 12px;
  background-color:#ff0800;
  box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  &:hover {
    background-color:#ff0800;
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  }
  &:focus {
    background-color:#ff0800;
  }
`;

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Service1() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px #5a5c5ecf`;

  const RightTopCorner = styled('div')(({ theme }) => ({
    position:'absolute',
    borderRadius: '0% 0% 0% 90%',
    right:0,
    top:0,
    width:isDesktop ? '60%' : '60%',
    height:isDesktop ? '40%' : '40%',
    backgroundColor:'white',
    boxShadow: '0 5px 25px 0px rgba(0,0,0,0.6)'
  }));
  const RightTopCorner1 = styled('div')(({ theme }) => ({
    position:'absolute',
    borderRadius: '0% 0% 0% 90%',
    right:0,
    top:0,
    width:isDesktop ? '60%' : '60%',
    height:isDesktop ? '37%' : '37%',
    backgroundColor:'blue',
    boxShadow: '0 5px 25px 0px rgba(0,0,0,0.6)'
  }));
  
  const ContentStyle = styled('div')(({ theme }) => ({
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      bottom: theme.spacing(10),
    },
  }));
  useEffect(() => {

  }, []);
  return (
    <RootStyle>
      <Grid container component={MotionViewport} spacing={0}>
        <Grid item xs={12} md={6} lg={6} sx={{padding:theme.spacing(6),margin:'auto'}}>
          <m.div variants={varFade().inLeft}>
            <Card style={{boxShadow:shadow,backgroundColor:'#cd191a'}}>
              <Box sx={{ position: 'relative',zIndex:-1 }}>
                <m.div>
                  <Image alt="cover" src={'/assets/images/services/canda-1110x550.jpg'} sx={{ height: '360px' }} />
                </m.div>
                <m.div style={{position:'absolute',left:0,bottom:'-17%',width:'100%',height:'110px',zIndex:1,backgroundImage:'url(/assets/images/services/istockphoto-1191661872-612x612.png)',backgroundSize:'100% 100%'}}>
                  {/* <m.img style={{width:'100%',height:'100%'}} src='/assets/images/services/istockphoto-1191661872-612x612.png'/> */}
                </m.div>
              </Box>
              <CardContent style={{fontSize:'20px'}}>
                <m.div style={isDesktop && {display:'flex'}}>
                  <m.div>
                    <m.div className='water-wave-text-animation' style={{width:'265px',margin:'0 auto'}}>
                      <h2>CONSULTING</h2>
                      <h2>CONSULTING</h2>
                    </m.div>
                  </m.div>
                  <m.div style={{margin:'0 15px'}}>
                    <m.div className='water-wave-text-animation' style={{width:'144px',margin:'0 auto'}}>
                      <h2>PHONE</h2>
                      <h2>PHONE</h2>
                    </m.div>
                  </m.div>
                  <m.div>
                    <m.div className='water-wave-text-animation' style={{width:'103px',margin:'0 auto'}}>
                      <h2>CALL</h2>
                      <h2>CALL</h2>
                    </m.div>
                  </m.div>
                </m.div>
                <p className='first-letter-upper' style={{color:'white',zIndex:2}}>
                  This service will help you understand how we operate and how we can have a successful approval of your application since we have special access to a network of immigrations offices,officers and government individuals that other competitors of ours don’t have access to.
                </p>
              </CardContent>
            </Card>
          </m.div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} style={{position:'relative',padding:'48px 6% 24px 6%'}}>
          <m.div variants={varFade().inLeft}>
            <Card style={{boxShadow:shadow}}>
              <CardContent style={{fontSize:'20px'}}>
                <Box sx={{ position: 'relative' }}>
                  <m.div>
                    <m.img alt="cover" src={'/assets/images/services/consultingphonecall.png'} style={{ width: '100%' }} />
                  </m.div>
                  <m.div style={{
                      position:'absolute',
                      width:'100%',
                      left:'5%',
                      bottom:'3%'
                    }}>
                    <m.div style={{fontSize:'20px',marginBottom:'15px',textAlign:'center',color:'white',position:'relative',width:'fit-content'}}>
                      <p className='text-shadow-1' style={{fontSize:'1.8rem', color:'#ff0800'}}>
                        5 min<br/>consult with us
                      </p>
                    </m.div>
                    <m.div style={{width:'100%',textAlign:'left',marginBottom:'15px' }}>
                      <a href='/payshedulecall' style={{ textDecorationLine:'none' }}>
                        <StyledButton className='pulsing_animation' size="large" variant="contained">
                          Schedule Call($150)
                        </StyledButton>
                      </a>
                    </m.div>
                  </m.div>
                </Box>
              </CardContent>
            </Card>
          </m.div>
        </Grid>
      </Grid>
      <Grid container component={MotionViewport} spacing={0}>
        <Grid item xs={12} md={4} lg={4} sx={{padding:theme.spacing(2)}}>
          <m.div variants={varFade().inLeft}>
            <Card>
              <CardHeader title="Case Study & Analysis" />
              <CardContent>
                When you connect with immigration consultants of ImmigrateCanada, We start case study & analysis to start immigration process.
              </CardContent>
            </Card>
          </m.div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sx={{padding:theme.spacing(2)}}>
          <m.div variants={varFade().inDown}>
            <Card>
              <CardHeader title="Visa Assessment" />
              <CardContent>
                Visa assessment is process of filling form & entering your name,age,qualification,work experience marital status preferred destination etc.
              </CardContent>
            </Card>
          </m.div>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sx={{padding:theme.spacing(2),height:'auto'}}>
          <m.div variants={varFade().inLeft} style={{height:'100%'}}>
            <Card sx={{height:'100%'}}>
              <CardHeader title="Legal Document Assistance" />
              <CardContent>
                ImmigrateCanada Consultants collect your documents immigration files to prepare your immigration process.
              </CardContent>
            </Card>
          </m.div>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
