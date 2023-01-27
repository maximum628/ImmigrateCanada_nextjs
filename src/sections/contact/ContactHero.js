import { m } from 'framer-motion';
// @mui
import { alpha,styled } from '@mui/material/styles';
import { Card,Box, Container, Typography, Grid } from '@mui/material';
//
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';

import { varContainer } from '../../components/animate/variants';
import useSettings from '../../hooks/useSettings';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const CONTACTS = [
  {
    country: 'Bali',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(239) 555-0108',
  },
  {
    country: 'London',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(319) 555-0115',
  },
  {
    country: 'Prague',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(252) 555-0126',
  },
  {
    country: 'Moscow',
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '(307) 555-0133',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  // backgroundSize: '100% 100%',
  // backgroundPosition: 'center',
  // backgroundImage:'url(/assets/images/contact/contact-us.jpg)',
  // borderRadius:'0% 0% 40% 40%',
  backgroundColor:'transparent',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 200,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  width: 'fit-content',
  margin: 'auto',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    // position: 'absolute',
    paddingTop:'100px',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  const { themeStretch } = useSettings();
  const skew_css = 'skew(calc(9 * -1deg), calc(9 * -1deg))';
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', width:'90%', height: '100%' }} maxWidth={themeStretch ? false : 'xl'}>
        <ContentStyle>
          <Box sx={{ transform:skew_css, display: 'inline-flex',fontSize:'25px', color: 'common.white',textShadow:'1px 8px 4px #0d0d0d73',backgroundColor:'#fff' }}>
            <TextAnimate text="WANT" sx={{ml: 2,color: '#ff0800' }} />
            <TextAnimate text="TO" sx={{ml: 2,mr: 2,color: '#ff0800' }} />
          </Box>
          <Box sx={{ transform:skew_css,display: 'inline-flex',fontSize:'25px', color: 'common.white',textShadow:'1px 11px 4px #0d0d0d73',backgroundColor:'#ff0800' }}>
            <TextAnimate text="LIVE" sx={{ ml: 2,color: 'common.white' }} />
            <TextAnimate text="IN" sx={{ ml: 2,mr: 2,color: 'common.white' }} />
          </Box>
          <Box sx={{ transform:skew_css,display: 'inline-flex',fontSize:'32px',fontFamily :'sans-serif', color: 'common.white',textShadow:'1px 5px 4px #0d0d0d73',backgroundColor:'#fff' }}>
            <TextAnimate text="CANADA?" sx={{ ml: 2,mr: 2, color: '#ff0800' }} />
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
