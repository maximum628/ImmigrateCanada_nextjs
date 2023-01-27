import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useState,useEffect } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme,styled } from '@mui/material/styles';
import { Box, Stack, Button,Grid,Typography,Card,CardContent,Modal } from '@mui/material';
// utils
import axios from '../../utils/axios';
// components
import Label from '../../components/Label';
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { CarouselArrows } from '../../components/carousel';
import SocialsButton from '../../components/SocialsButton';
import { MotionViewport, varFade } from '../../components/animate';
import {CheckoutForm} from '../../components/stripe';
// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  position:'relative',
  textAlign: 'center',
  paddingTop: theme.spacing(0),
  backgroundImage:'url(/assets/images/services/143589-red-wave-business-background.jpg)',
  backgroundSize:'100% 100%',
  paddingBottom: theme.spacing(8),
  // backgroundImage:'radial-gradient(circle, #e500008f,#e50000cc,#e50000)',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));
const PriceStyle = styled(Card)(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
  [theme.breakpoints.up(414)]: {
    padding: theme.spacing(5),
  },
}));
const StyledButton = styled(Button)`
  color: #fff;
  padding: 6px 12px;
  &:hover {
    background-color:#e50000;
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  }
  &:focus {
    background-color:#e50000;
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
export default function Service2() {

  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  useEffect(() => {
  }, []);

  const shadow = `-40px 40px 80px #5a5c5ecf`;
  return (
    <RootStyle>
      <Grid container component={MotionViewport} spacing={0} sx={{width:'100%',zIndex:1,height:'100%'}}>
        <Grid item xs={12} md={6} lg={6} sx={{padding:theme.spacing(2,1)}}>
          <m.div style={{position:'relative',textAlign:'center',width:'fit-content',marginLeft:'auto'}}>
            <h3 className="gold-text" data-text="Permanent">
              <m.span className="gold-text__highlight" data-text="Permanent">Permanent</m.span>
            </h3>
          </m.div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{padding:theme.spacing(2),margin:'auto'}}>
          <m.div style={{position:'relative',textAlign:'center',width:'fit-content'}}>
            <h3 className="gold-text" data-text="Residency">
              <m.span className="gold-text__highlight" data-text="Residency">Residency</m.span>
            </h3>
          </m.div>
        </Grid>
      </Grid>
      <Grid container component={MotionViewport} spacing={0} sx={{width:'100%',zIndex:1,height:'100%'}}>
        <Grid item xs={12} md={6} lg={6} sx={{padding:theme.spacing(2),margin:'auto'}}>
          <m.div variants={varFade().inLeft}>
            <PriceStyle>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2,width:'100%',backgroundColor:'#cd0021',borderRadius:'30px' }}>
                <m.div style={{width:'100%',height:'100%',padding:'15px',color:'#fff',textAlign:'center',fontSize:'3.5em',fontWeight:'900'}}>
                  $ 3999.99
                </m.div>
              </Box>
              <Stack className='skew-style' component="div" spacing={2} sx={{ my: 5, width: 1,backgroundColor:'#fff',borderRadius:'30px',position:'relative' }}>
                <m.div style={{position:'absolute',top:0,left:-22,zIndex:2}}>
                  <m.img className='zoom-in-out-box' src="/assets/images/services/discount_circle.png" style={{width:'100px'}} />
                </m.div>
                
                <m.div style={{width:'100%',height:'100%',padding:'10px',color:'#ff0038',textAlign:'center',fontSize:'2em',fontWeight:'900',border:'5px solid #cd0021',borderRadius:'15px'}}>
                  $ 2999.99
                </m.div>
              </Stack>
              <m.div style={{width:'100%',textAlign:'center',marginTop:'45px',marginBottom:'15px' }}>
                <a href='/paypermanentresidency' style={{ textDecorationLine:'none' }}>
                  <StyledButton fullWidth size="large" variant="contained">
                    Apply Now
                  </StyledButton>
                </a>
                {/* <StyledButton fullWidth size="large" variant="contained" onClick={handleOpen}>
                  Apply Now
                </StyledButton> */}
              </m.div>
            </PriceStyle>

          </m.div>
          <m.div variants={varFade().inLeft}>
            
          </m.div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{padding:theme.spacing(2),margin:'auto'}}>
          <m.div variants={varFade().inLeft}>
            <Card style={{boxShadow:shadow,backgroundColor:'#cd191a'}}>
              <Box sx={{ position: 'relative',zIndex:-1 }}>
                <m.div>
                  <Image alt="cover" src={'/assets/images/services/canda-permanent-residency.jpg'} sx={{ height: '360px' }} />
                </m.div>
                <m.div style={{position:'absolute',left:0,bottom:'-15%',width:'100%',height:'110px',zIndex:1,backgroundImage:'url(/assets/images/services/istockphoto-1191661872-612x612.png)',backgroundSize:'100% 100%'}}>
                  {/* <m.img style={{width:'100%',height:'100%'}} src='/assets/images/services/istockphoto-1191661872-612x612.png'/> */}
                </m.div>
              </Box>
              <CardContent style={{fontSize:'20px'}}>
                <p className='first-letter-upper' style={{color:'white',zIndex:2}}>
                  We have a unique approach to help you get a PR(Permanent Residency) card issued that other competitors of our industry don’t have access to the level that we’re able to do so.<br/>
                  Our guarantee for the success of your application is 100% as we have the resources to back it up, if you would like to understand how this process works, book a phone call and we’ll explain in details.
                </p>
              </CardContent>
            </Card>
          </m.div>
        </Grid>
      </Grid>
    </RootStyle>
  );
}

