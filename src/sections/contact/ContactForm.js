import { m,AnimatePresence } from 'framer-motion';
// @mui
import { alpha,styled } from '@mui/material/styles';
import { Button, Typography, TextField, Stack,Grid,Box,Card } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';
import { varContainer } from '../../components/animate/variants';

// ----------------------------------------------------------------------

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
const BackgorundDiv = styled('div')(({ theme }) => ({
  borderRadius:'3% 59% 25% 20%',
  backgroundColor:'transparent',
  border:'solid 3px #fff',
  height:'100%',
  width:'100%',
  backgroundRepeat:'round',
  // backgroundImage:'url(/assets/images/contact/79cd1a01-a071-41c0-a09e-ef7ca5c3bc93_1628233683859.png)'
  // [theme.breakpoints.up('md')]: {
  //   height: 400,
  //   padding: 0,
  // },
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
export default function ContactForm() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={3} sx={{ backgroundColor:'transparent'}}>
          <AnimatePresence initial={false}>
            <m.div
              className="homepage2-card"
              style={{
                borderRadius:'3% 59% 25% 20%',
                backgroundColor:'transparent',
                border:'solid 3px #e50000',
                height:'100%',
                minHeight:'247px',
                padding:'3px 1px 2px 4px',
                width:'100%'
              }}
            >
              <BackgorundDiv>
                <m.img
                  style={{
                    height: "100%",
                    position:"absolute",
                    left:0,
                    top:0,
                  }}
                  src='/assets/images/contact/79cd1a01-a071-41c0-a09e-ef7ca5c3bc93_1628233683859.png'
              />
              </BackgorundDiv>
            </m.div>
          </AnimatePresence>
      </Grid>
      <Grid item xs={12} md={3} sx={{padding:3,position:'relative'}}>
        <Box
          component={m.div}
          initial="initial"
          animate='animate'
          exit="exit"
          sx={{
            position:'absolute',
            bottom:'0px',
            display: 'grid',
            gap: { xs: 1, lg: 1 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' },
          }}
          variants={varContainer()}>
          <m.div variants={varFade().inDown}>
              <IconWrapperStyle
                className="homepage2-card"
                sx={{
                  color: (theme) => theme.palette['primary'].dark,
                  backgroundImage: (theme) =>
                    `linear-gradient(135deg, ${alpha(theme.palette['primary'].dark, 0)} 0%, ${alpha(
                      theme.palette['primary'].dark,
                      0.24
                    )} 100%)`,
                }}
              >
                <a href='#'><m.img src="/assets/icons/orange-envelope-icon-28.png"></m.img></a>
              </IconWrapperStyle>

              <m.div style={{padding:'10px 15px'}}>
                <Typography variant="subtitle2" sx={{ opacity: 0.72,color:'black' }}>
                  Info@immigratecanada.com
                  <br/>
                </Typography>
              </m.div>
          </m.div>
          <m.div variants={varFade().inDown}>
            <m.div style={{display:'flex'}}>
              <IconWrapperStyle
                className="contact_icon"
                sx={{
                  color: (theme) => theme.palette['primary'].dark,
                  backgroundImage: (theme) =>
                    `linear-gradient(135deg, ${alpha(theme.palette['primary'].dark, 0)} 0%, ${alpha(
                      theme.palette['primary'].dark,
                      0.24
                    )} 100%)`,
                }}
              >
                <a href='tel:+18004619999'><m.img src="/assets/icons/MeanFluffyGlassfrog-size_restricted.gif"></m.img></a>
              </IconWrapperStyle>
            </m.div>
              <m.div style={{padding:'10px 15px'}}>
                <Typography variant="subtitle2" sx={{ opacity: 0.72,color:'black' }}>
                  1-800-461-9999
                </Typography>
              </m.div>
          </m.div>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{borderRadius:'29px'}}>
        <Stack component={MotionViewport} spacing={4} style={{padding:'25px',borderRadius:'30px',boxShadow:'0 5px 15px 0px #fa0606db'}}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3">
              Feel free to contact us.
            </Typography>
          </m.div>

          <Stack spacing={3}>
            <m.div variants={varFade().inUp}>
              <TextField id="outlined-basic" fullWidth label="Name" variant="outlined" />
            </m.div>

            <m.div variants={varFade().inUp}>
              <TextField fullWidth label="Email" variant="outlined" />
            </m.div>

            <m.div variants={varFade().inUp}>
              <TextField fullWidth label="Subject" />
            </m.div>

            <m.div variants={varFade().inUp}>
              <TextField fullWidth label="Enter your message here." multiline rows={4} />
            </m.div>
          </Stack>

          <m.div variants={varFade().inUp}>
            <StyledButton size="large" variant="contained">
              Submit Now
            </StyledButton>
          </m.div>
        </Stack>
      </Grid>
    </Grid>
  );
}
