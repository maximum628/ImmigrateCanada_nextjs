import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box,Grid, Container, Typography,Paper } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import Image from '../../components/Image';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(/assets/images/about/about_bg1.jpg)',
  padding: theme.spacing(10, 0),
  position:'relative',
  [theme.breakpoints.up('md')]: {
    // height: 800,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    // position: 'absolute',
    // top: '20%',
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const isDesktop = useResponsive('up', 'md');
  const shadow = `-40px 40px 80px black`;
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <Grid container spacing={0}>
              <m.div variants={varFade().inDown} style={{position: 'relative',width:'100%',height:'100px'}}>
                <m.div className='threeD'>
                  ABOUT US
                  </m.div>
              </m.div>
            <Grid item xs={12} md={12} lg={12}>
              <m.div variants={varFade().inRight}>
                <Paper
                    sx={{
                      mt: 3,
                      p: 3,
                      color: 'common.white',
                      height:'100%',
                      ...cssStyles().bgBlur({
                        color: "#fff",
                        opacity: 0.04,
                      }),
                    }}
                  >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize:'25px',
                      wordBreak:'break-all',
                      color: 'common.white',
                      fontWeight: '500',
                    }}
                    className='text-3d'
                  >
                    The most trusted leading nation-wide Immigration Service provider and Immigration law firm In Canada.<br/>
                    We offer professional and legal assistance to settle permanently in Canada.<br/>
                    The Firm is established to provide supreme Visa Immigration services and known for the excellent track record of delivering the paramount quality work.<br/>
                    The group of Immigration Professionals and Legal representatives at ImmigrateCanada assist you to solve all legal aspects included in the immigration procedure.
                  </Typography>
                </Paper>
              </m.div>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <m.div variants={varFade().inRight}>
                <Paper
                  sx={{
                    mt: 3,
                    p: 3,
                    color: 'common.white',
                    ...cssStyles().bgBlur({
                      color: "#fff",
                      opacity: 0.04,
                      height:'100%',
                    }),
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      mt: 1,
                      color: 'common.white',
                      fontWeight: 'fontWeightMedium',
                    }}
                  >WE HAVE BEEN RATED AS BEST IMMIGRATION SERVICE PROVIDER IN CANADA FOR:<br/>
                  </Typography>
                    <ul className='aboutus-list' style={{fontSize:'18px'}}>
                      <li>Act honestly and fairly in Applicants best interests under current legislation</li>
                      <li>Paramount quality work with transparency</li>
                      <li>High success rate</li>
                      <li>Dedication, Knowledge & Commitment</li>
                      <li>Provide Worldwide Immigration options</li>
                      <li>Visa assistance from ICCRC, MARA registered professionals</li>
                      <li>Act honestly and fairly in Applicants best interests under current legislation</li>
                      <li>Free telephonic and email consultation both from our most experienced</li>
                      <li>immigration professionals</li>
                      <li>Handled successfully many complicated applications</li>
                      <li>Most genuine visa counseling with prominent process guidance</li>
                    </ul>
                </Paper>
              </m.div>
            </Grid>
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
