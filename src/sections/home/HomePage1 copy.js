import { useRef,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import gsap from "gsap";
import { m, useScroll } from 'framer-motion';
import NextLink from 'next/link';
import Slider from 'react-slick';
import Typewriter from 'typewriter-effect';
// @mui
import { Button, Box, Link, Container, Typography, Stack,Grid } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade,varBgKenburns } from '../../components/animate';
import { CarouselDots, CarouselArrows } from '../../components/carousel';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#fff',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 1920,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));


function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export default function HomePage1() {
  const isDesktop = useResponsive('up', 'md');
  const theme = useTheme();
  const carouselRef = useRef(null);

  const description = "Immigrate Canada,where immigration is easier than ever with our unique approach to have you get a PR(Permanent Residency) card issued that no other competitor of our Industry has access to do so";
  const [count, setCount] = useState(1);
  const [cubebox, setCubebox] = useState(true);
  const pages = [1, 2, 3, 4, 5,6];
  
  useEffect(() => {
    const select = target => {
      const found = document.querySelectorAll(target);
      return found.length > 1 ? [...found] : found[0];
    }
    const cube = select('.cube');
    function rotateCube(e) {
      let { x = clientX, y = clientY } = e;
      let xDegree = gsap.utils.interpolate( -45, 45, (x / window.innerWidth));
      let yDegree = gsap.utils.interpolate( -45, 45, (y / window.innerHeight));
        
      cube.style.transform = `rotateX( ${-yDegree}deg ) rotateY( ${xDegree}deg ) `;
    }
    window.addEventListener('mousemove', rotateCube);
    setCount(1);
  }, [count]);
  const textShadow_css = "rgb(217, 217, 217) 0px 0px 0px, rgb(217, 217, 217) -1px 1px 0px, rgb(217, 217, 217) -2px 2px 0px";
  
  // const cubeboxscale = isDesktop ? 1 : 0.7;
  // const cubemargintop = isDesktop ? '0%' : '15%';
  return (
    <section>
      <MotionContainer>
        <RootStyle>
          <Container maxWidth={false} style={{padding:0}}>
            {cubebox ?
              <m.div variants={varFade().inUp}>
                <Grid container spacing={1}>
                  <m.div className="perspective" style={isDesktop ? {scale:1,margin:'0 auto'}:{scale:0.7,margin:'0 auto'}}>
                    <m.div className={isDesktop ? "cube" : "cube cube__auto_animation"} style={isDesktop?{marginTop:'0%'}:{marginTop:'20%'}}>
                      <m.div className="face face-top"></m.div>
                      <m.div className="face face-bottom"></m.div>
                      <m.div className="face face-left"></m.div>
                      <m.div className="face face-right"></m.div>
                      <m.div className="face face-front" onClick={()=>setCubebox(false)}></m.div>
                      <m.div className="face face-back"></m.div>
                    </m.div>
                  </m.div>
                </Grid>
                
                <Stack spacing={2.5} alignItems="center" direction={{  xs: 'column', md: 'row' }}>
                  <m.div variants={varFade().inRight} style={{zIndex:11,width:'100%',textAlign:'center'}}>
                    <Typography variant={isDesktop ? "h3" : "h4"} sx={{ color: '#e50000',wordWrap: 'break-word',position:'absolute',bottom:'10%',padding:"0 10%", width:'100%',textShadow:textShadow_css }}>
                    {/* textShadow:'1px 11px 4px #000000db' */}
                      {count ? (
                        <Typewriter
                          onInit={(typewriter) => {
                            typewriter.typeString(description)
                              .callFunction(() => {
                                console.log('String typed out!');
                              })
                              .pauseFor(2000)
                              .deleteAll(6)
                              .callFunction(() => {
                                setTimeout(()=>{setCount(0)}, 3000)
                                
                                console.log('All strings were deleted');
                              })
                              .start();
                          }}
                        />
                      ) : ""}
                    </Typography>
                  </m.div>
                </Stack>
              </m.div> : 
                <ContentStyle>
                  <m.div variants={varFade().inRight} style={{width:'100%',marginTop:'0px'}}>
                    <video className='col-12' style={{width:'100%'}} playsInline="" autoPlay={true} muted={true} loop={true}>
                      <source alt='no' src='/assets/images/home/Welcome to Canada_ 150 years of immigration.mp4' type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                  </m.div>
                </ContentStyle>
            }
          </Container>
        </RootStyle>
        <Box sx={{ height: { md: '100vh' } }} />
      </MotionContainer>
    </section>
  );
}
// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};


function CarouselItem({ item }) {
  const [count, setCount] = useState(1);
  const { src, title,type } = item;

  if(type === "video"){
    return(
      <ContentStyle>
        <m.div variants={varFade().inRight} style={{width:'100%',marginTop:'0px'}}>
          <video className='col-12' style={{width:'100%'}} playsInline="" autoPlay={true} muted={true} loop={true}>
            <source alt={title} src={src} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </m.div>
      </ContentStyle>
    )
  }
  else{
    return (
      <ContentStyle>
        <m.div style={{width:'100%',marginTop:'0px'}}  animate="visible"
          variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            }
          }}>
          <Image variants={varBgKenburns().top} alt={title} src={src} />
        </m.div>
      </ContentStyle>
    );
  }
}

