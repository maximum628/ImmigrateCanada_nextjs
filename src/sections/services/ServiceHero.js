import { m } from 'framer-motion';
import merge from 'lodash/merge';
// @mui
import { styled,useTheme } from '@mui/material/styles';
import { Box, Container, Typography,Stack,Grid } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';
import ReactApexChart, { BaseOptionChart } from '../../components/chart';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'linear-gradient(0deg, #b30119,transparent), url(/assets/images/about/Canadian-immigration-by-investment-2021.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  display:'flex',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function ServiceHero() {
  const theme = useTheme();
  const chartOptionsCheckIn = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    grid: {
      padding: {
        top: -9,
        bottom: -9,
      },
    },
    legend: { show: false },
    plotOptions: {
      radialBar: {
        hollow: { size: '64%' },
        track: { margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 15,
            fontSize: "3em",
            color:'white'
          },
        },
      },
    },
  });

  const chartOptionsCheckOut = {
    ...chartOptionsCheckIn,
    colors: ["#fff",'white'],
  };
  const CHART_SIZE = { width: 180, height: 180 };
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <Grid container component={MotionContainer} spacing={0}>
            <Grid item xs={12} md={6} lg={6} sx={{padding:theme.spacing(0)}}>
              <Box sx={{ display: 'inline-flex', color: 'white' }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={3}
                  sx={{ width: 1, py: 1 }}
                >
                  <ReactApexChart
                      type="radialBar"
                      series={[98]}
                      options={chartOptionsCheckOut}
                      {...CHART_SIZE}
                    />
                    <m.div variants={varFade().inUp}>
                      <Typography variant="h2" sx={{ mb: 0.5 }}>
                        Success Rate
                      </Typography>
                    </m.div>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{padding:theme.spacing(0)}}>
              <Box sx={{ display: 'inline-flex', color: 'white' }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={3}
                  sx={{ width: 1, py: 1 }}
                >
                  <m.div variants={varFade().inRight} style={{width:'165px',height:'165px'}}>
                    <m.img  style={{width:'165px'}} src='/assets/images/services/15B.png'/>
                  </m.div>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12} sx={{padding:theme.spacing(0)}}>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 5,
                    color: 'common.white',
                    fontWeight: 'fontWeightMedium',
                  }}
                >
                  Successful applications will receive a free guidebook of ours to help you explore Canada, we also offer 15% discount with our partners such as Expedia,Walmart,Enterprise
                </Typography>
              </m.div>

            </Grid>
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
