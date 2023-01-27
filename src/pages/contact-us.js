// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import { ContactHero, ContactForm } from '../sections/contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(0),//8
  backgroundImage:'url(/assets/images/contact/205122191111.jpg)',
  backgroundSize: 'cover',
  backgroundPositionY:'top',
  backgroundRepeat:'no-repeat',
  backgroundColor:'white',
  // paddingBottom:'1px',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(0),//11
  },
}));
// ----------------------------------------------------------------------

Contact.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact us" sx={{backgroundColor:'transparent'}}>
      <RootStyle>
        <ContactHero />
        <Container sx={{
            mt: 10,pl:10,pr:10,
            maxWidth:'100%!important',
            backgroundColor:'transparent',
            // backgroundSize:'100% 100%',backgroundImage:'url(/assets/images/contact/205122191111.jpg)',
            // backdropFilter: "blur(5px)"
          }}
        >
          <ContactForm />
        </Container>
      </RootStyle>
    </Page>
  );
}
