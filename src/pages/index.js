// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container} from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import {FaqsList,FaqsCategory} from '../sections/faqs'
// sections
import {
  HomePage1,
  // HomePage2,
  HomePage3,
} from '../sections/home';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const FaqRootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(5),
  // backgroundImage:'linear-gradient(135deg, #ff0038,#ff0038)',
  backgroundColor: '#ff0038'//theme.palette.background.default,
}));
// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Immigration: Made to Change">
      <HomePage1 />

      <ContentStyle>
        {/* <HomePage2 /> */}
        <HomePage3 />
        <FaqRootStyle>
          <Container sx={{ pt: 3 }}>
            <Grid
              container
              justifyContent={{ xs: 'center', md: 'space-between' }}
              sx={{ textAlign: { xs: 'center', md: 'left' } }}
            >
              <Grid item xs={12} md={12}>
                <FaqsCategory/>
                <FaqsList/>
              </Grid>
            </Grid>
          </Container>
        </FaqRootStyle>

        {/* <HomeHugePackElements />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        <HomePricingPlans />

        <HomeLookingFor />

        <HomeAdvertisement /> */}
      </ContentStyle>
    </Page>
  );
}
