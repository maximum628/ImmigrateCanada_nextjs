import { useEffect } from 'react';
import { m } from 'framer-motion';
import axios from 'axios';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card,Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';
// sections
import { BlogPostCard } from '../../sections/home/blog';
import { blogs } from '../../_mock/text';


const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function HomePage3() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  return (
    <section>
      <RootStyle>
        <Container component={MotionViewport}>
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 5, md: 5 },
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography className='animation_text1' variant="h2">
                Did you know?
              </Typography>
            </m.div>
          </Box>
          <Grid container spacing={2}>
            {(!blogs.length ? [...Array(12)] : blogs).map((post, index) =>
              post ? (
                <Grid key={index} item xs={12} sm={6} md={((index === 0 || index === 1 || index === 2) && 6) || 3}>
                  <BlogPostCard post={post} index={index} />
                </Grid>
              ) : (
                <Grid key={index} />
              )
            )}
          </Grid>
        </Container>
      </RootStyle>
    </section>
  );
}
