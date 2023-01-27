import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { Box, Paper, AppBar, Drawer, Button, Toolbar, Divider, Typography, ListItemButton,Container,Grid } from '@mui/material';
// hooks
import useToggle from '../../hooks/useToggle';
import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';
import AnimatedText from '../../components/animate/AnimatedText';

// ----------------------------------------------------------------------

const AWARDS = [
  {
    label: 'Managing your account',
    icon: '/assets/icons/faqs/clutch01.png',
    href: '#',
  },
  {
    label: 'Payment',
    icon: '/assets/icons/faqs/best-seo-agency-toronto.png',
    href: '#',
  },
  {
    label: 'Delivery',
    icon: '/assets/icons/faqs/award4.png',
    href: '#',
  },
  {
    label: 'Problem with the Product',
    icon: '/assets/icons/faqs/google-reviewed-1.webp',
    href: '#',
  },
  {
    label: 'Return & Refund',
    icon: '/assets/icons/faqs/topdigital.png',
    href: '#',
  },
  {
    label: 'Return & Refund',
    icon: '/assets/icons/faqs/Asset3.png',
    href: '#',
  },
  {
    label: 'Guarantees and assurances',
    icon: '/assets/icons/faqs/award2.png',
    href: '#',
  },
];
const PARTNERS = [
  {
    label: 'Managing your account',
    icon: '/assets/icons/faqs/google_partner.png',
    href: '#',
  },
  {
    label: 'Payment',
    icon: '/assets/icons/faqs/marketing-partners.png',
    href: '#',
  },
  {
    label: 'Delivery',
    icon: '/assets/icons/faqs/shopify-plus-partners-eyeful.png',
    href: '#',
  },
  {
    label: 'Problem with the Product',
    icon: '/assets/icons/faqs/bing-ads.png',
    href: '#',
  },
  {
    label: 'Return & Refund',
    icon: '/assets/icons/faqs/wp-engine.png',
    href: '#',
  }
];

// ----------------------------------------------------------------------

export default function FaqsCategory() {
  const upMd = useResponsive('up', 'md');

  const { toggle: open, onOpen, onClose } = useToggle();
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };
  const title_info = {
    type: "heading1",
    visible_color:"white",
    hidden_color:"black",
    fontSize:'3em',
    text: "Recoginzed and Award-winning Digital Marketing and Web Design Agency in New York"
  }
  // if (!upMd) {
  //   return (
  //     <>
  //       <Drawer open={open} onClose={onClose}>
  //         <Grid md={12}>
  //         {/* <m.div animate="visible" variants={container}>
  //           <AnimatedText {...title_info} />
  //         </m.div> */}
  //             <m.div animate="visible" variants={varFade().in}>
  //               <Typography variant="h2" sx={{color:"white"}}>
  //                 Recoginzed and Award-winning Digital Marketing and Web Design Agency in New York
  //               </Typography>
  //             </m.div>
  //         </Grid>
  //         <Grid container spacing={5} sx={{ pt: 5 }} direction="row" justifyContent="space-between">
  //           <Grid item xs={12} md={8}>
  //             <Grid md={12}>
  //                 <m.div variants={varFade().inDown}>
  //                   <Typography variant="h5" sx={{color:"white"}}>
  //                     AWARD:
  //                   </Typography>
  //                 </m.div>
  //             </Grid>
  //             <Grid md={12}>
  //               <Box
  //                 component={MotionViewport}
  //                 sx={{
  //                   mb: 2,
  //                   display: 'grid',
  //                   gap: 3,
  //                   gridTemplateColumns: {
  //                     md: 'repeat(3, 1fr)',
  //                     lg: 'repeat(4, 1fr)',
  //                   },
  //                 }}
  //               >
  //                 {AWARDS.map((category) => (
  //                   <m.div key={category.label} variants={varFade().in}>
  //                     <Image alt={category.icon} visibleByDefault disabledEffect src={category.icon} sx={{ mb: 2,width:120 }} />
  //                   </m.div>
  //                 ))}
  //               </Box>
  //             </Grid>
  //           </Grid>
  //           <Grid item xs={12} md={4}>
  //             <Grid md={12}>
  //                 <m.div variants={varFade().inDown}>
  //                   <Typography variant="h5" sx={{color:"white"}}>
  //                     PARTNERS:
  //                   </Typography>
  //                 </m.div>
  //             </Grid>
  //             <Grid md={12}>
  //               <Box
  //                 component={MotionViewport}
  //                 sx={{
  //                   mb: 2,
  //                   display: 'grid',
  //                   gap: 3,
  //                   gridTemplateColumns: {
  //                     md: 'repeat(3, 1fr)',
  //                     lg: 'repeat(2, 1fr)',
  //                   },
  //                 }}
  //               >
  //                 {PARTNERS.map((category) => (
  //                   <m.div key={category.label} variants={varFade().in}>
  //                     <Image alt={category.icon} visibleByDefault disabledEffect src={category.icon} sx={{ mb: 2,width:120 }} />
  //                   </m.div>
  //                 ))}
  //               </Box>
  //             </Grid>
  //           </Grid>
  //         </Grid>
  //       </Drawer>
  //     </>
  //   );
  // }

  return (
    <Container sx={{ pt: 1 }}>
        <Grid item md={12}>
        {/* <m.div animate="visible" variants={container}>
          <AnimatedText {...title_info} />
        </m.div> */}
          <m.div variants={varFade().inDown}>
            <m.div style={{position:'relative',margin:'auto',width:'fit-content'}}>
              <h1 className='gradient-3d-text'>
                <span><strong className='underline--magical'>Recognized</strong> and <strong className='underline--magical'>Award-Winning</strong> Immigration Consulting Firm in Canada</span>
              </h1>
            </m.div>
            <Typography variant="h5" sx={{color:"white"}}>
            We work as a single United Team with market leading firms around the world and give our clients the highest quality advice possible.
            </Typography>
          </m.div>
        </Grid>
        <Grid container spacing={5} sx={{ pt: 5 }} direction="row" justifyContent="space-between">
          <Grid item xs={12} md={8}>
            <Grid item md={12}>
                <m.div variants={varFade().inDown}>
                  <Typography variant="h5" sx={{color:"white"}}>
                    AWARD:
                  </Typography>
                </m.div>
            </Grid>
            <Grid item md={12}>
              <Box
                component={MotionViewport}
                sx={{
                  mb: 2,
                  display: 'grid',
                  gap: 3,
                  gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)',
                  },
                }}
              >
                {AWARDS.map((category,i) => (
                  <m.div key={i} variants={varFade().in}>
                    <m.img alt={category.icon} src={category.icon} style={{ mb: 2,width:120 }} />
                  </m.div>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid item md={12}>
                <m.div variants={varFade().inDown}>
                  <Typography variant="h5" sx={{color:"white"}}>
                    PARTNERS:
                  </Typography>
                </m.div>
            </Grid>
            <Grid item md={12}>
              <Box
                component={MotionViewport}
                sx={{
                  mb: 2,
                  display: 'grid',
                  gap: 3,
                  gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(2, 1fr)',
                  },
                }}
              >
                {PARTNERS.map((category,i) => (
                  <m.div key={i} variants={varFade().in}>
                    <m.img alt={category.icon} src={category.icon} style={{ mb: 2,width:120 }} />
                  </m.div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  );
}

// ----------------------------------------------------------------------

CategoryCard.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.string,
    label: PropTypes.string,
  }),
};

function CategoryCard({ category }) {
  const { label, icon } = category;

  return (
    <Paper
      variant="outlined"
      sx={{
        px: 2,
        height: 260,
        borderRadius: 2,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Image alt={icon} visibleByDefault disabledEffect src={icon} sx={{ mb: 2, width: 80, height: 80 }} />
      <Typography variant="subtitle2">{label}</Typography>
    </Paper>
  );
}
