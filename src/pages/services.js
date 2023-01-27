// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { ServiceHero, Service1, Service2 } from '../sections/services';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(0),
  },
}));

// ----------------------------------------------------------------------

Services.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Services() {
  return (
    <Page title="About us">
      <RootStyle>
        <ServiceHero />
        <Service1 />
        <Service2 />
      </RootStyle>
    </Page>
  );
}
