// next
import NextLink from 'next/link';
// @mui
import { styled,alpha } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack,Tooltip, IconButton,Button } from '@mui/material';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

import Iconify from '../../components/Iconify';
// ----------------------------------------------------------------------

const LINKS = [
  {
    title: 'Terms & Service',
    href: '/assets/pdf/Terms and Conditions.pdf'
  },
  {
    title: 'Disclaimer',
    href: '/assets/pdf/Disclaimer.pdf'
  },
  {
    title: 'Privacy Policy',
    href: '/assets/pdf/Privacy Policy.pdf'
  },
];

const SOCIALS = [
  {
    name: 'FaceBook',
    icon: 'eva:facebook-fill',
    socialColor: '#fff',
    path: '#facebook-link',
  },
  {
    name: 'Instagram',
    icon: 'ant-design:instagram-filled',
    socialColor: '#fff',
    path: '#instagram-link',
  },
];

const header_color = 'linear-gradient(145deg, #e95151,#FF0800,#FF0800, #e95151)';
const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingBottom:'30px',
  backgroundImage:header_color,
  backgroundColor: 'transparent'//theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const simple = false;
  const initialColor = true;
  return (
      <RootStyle>
        <Container sx={{ pt: 0 }}>
          <Grid
            container
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Grid item xs={12} md={3}>
              <Typography
                component="p"
                variant="body2"
                sx={{
                  mt: 2,
                  pb: 2,
                  fontSize: 13,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <span style={{color:'white',fontSize:'18px',fontWeight:'600'}}>© 2022. All rights reserved</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" sx={{height:'100%',alignItems:'center'}}>
                {SOCIALS.map((social) => {
                  const { name, icon, path, socialColor } = social;
                  return simple ? (
                    <Link key={name} href={path}>
                      <Tooltip title={name} placement="top">
                        <IconButton
                          color="inherit"
                          sx={{
                            ...(initialColor && {
                              color: socialColor,
                              border: "2px solid "+socialColor,
                              '&:hover': {
                                bgcolor: alpha(socialColor, 0.08),
                              },
                            }),
                          }}
                        >
                          <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  ) : (
                    <Button
                      key={name}
                      href={path}
                      color="inherit"
                      variant="outlined"
                      size="small"
                      startIcon={<Iconify icon={icon} />}
                      sx={{
                        m: 0.5,
                        flexShrink: 0,
                        ...(initialColor && {
                          color: socialColor,
                          borderColor: socialColor,
                          '&:hover': {
                            borderColor: socialColor,
                            bgcolor: alpha(socialColor, 0.08),
                          },
                        }),
                        md:0.5
                      }}
                    >
                      {name}
                    </Button>
                  );
                })}
                {LINKS.map((link) => (
                  // <NextLink key={link.title} href={link.href} passHref>
                    <Link key={link.title} href={link.href} target='_blank' color="inherit" variant="body2" sx={{ display: 'block' }}>
                      <span style={{color:'white',fontSize:'18px',fontWeight:'600'}}>{link.title}</span>
                    </Link>
                  // </NextLink>
                ))}
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Grid item xs={12} md={12}>
              <Typography className='first-letter-upper' style={{color:'white'}}>
                Disclaimer: ImmigrateCanada is mainly an Immigration and Visa Consultancy service provider and we are not associated with any Immigration Department or Government Authority.
                ImmigrateCanada does not provide any job employment service.
                We only assist our aspirants for various visa application process and deliver required service assistance.
                The mentioned material on this website is for information purposes only and does not constitute any legal advice.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
  );
}
