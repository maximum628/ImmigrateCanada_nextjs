import { useState } from 'react';
import { m,useTransform,useMotionValue,AnimatePresence } from 'framer-motion';

// @mui
import { alpha,styled,useTheme } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  backgroundColor: theme.palette.grey['100'],
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

// ----------------------------------------------------------------------

const ScreenStyle = styled(m.div)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12,
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));
const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};
const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
};

const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 },
};

const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
};

function Card(props) {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-250, 0, 250], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-250, 0, 250], [-45, 0, 45], {
      clamp: false
  });

  function handleDragEnd(event, info) {
      if (info.offset.x < -100) {
          props.setExitX(-250);
          props.setIndex(props.index + 1);
      }
      if (info.offset.x > 100) {
          props.setExitX(250);
          props.setIndex(props.index + 1);
      }
  }

  return (
      <m.div
          style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              x: x,
              rotate: rotate,
              cursor: "grab"
          }}
          whileTap={{ cursor: "grabbing" }}
          drag={props.drag}
          dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          }}
          onDragEnd={handleDragEnd}
          initial={props.initial}
          animate={props.animate}
          transition={props.transition}
          exit={{
              x: props.exitX,
              opacity: 0,
              scale: 0.5,
              transition: { duration: 0.2 }
          }}
      >
          <m.div
              style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                  left:0,
                  top:0,
                  borderRadius: 30,
                  scale: scale,
                  zIndex:1,
                  position:"absolute"
              }}
          >
          </m.div>
          <m.img
            className="homepage2-card"
            style={{
              width: "80%",
              position:"absolute",
              left:0,
              top:0,
              borderRadius: 30
            }}
            alt={`screen ${(props.index%3) + 1}`}
            src={`/assets/home/about-${(props.index%3) + 1}.jpg`}
          />
      </m.div>
  );
}

export default function HomePage2() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;

  const screenCenterAnimate = variantScreenCenter;

  const screenRightAnimate = variantScreenRight;
  
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState("100%");
  return (
    <section>
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="https://minimal-assets-api-dev.vercel.app/assets/images/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 720,
            height: 720,
            opacity: 0.48,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <ContentStyle>
              <m.div variants={varFade().inDown}>
                <Typography component="div" variant="h4" sx={{ mb: 1, color: 'text.disabled' }}>
                WHO ARE VISARZO
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 0, color: 'common.black' }}>
                Not Just Traditional Visa & Immigration Firm
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h4" sx={{ color: 'common.black', mb: 2 }}>
                Sponsoring and managing work visas parts now becoming results in the experience.
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography variant="h4" sx={{ color: 'common.black', mb: 2 }}>
                Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo. Aliquam era volutpat. lobortis sem consequat consequat imperdiet. In nulla sed viverraut loremut dapib es tetur diam nunc bibendum imperdiets.
                </Typography>
              </m.div>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} dir="ltr" sx={{ position: 'relative' }}>
            <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  justifyContent: 'center',
                }}
            >
              
              <m.div
                  style={{
                      width: "80%",
                      height: "500px",
                      position: "relative"
                  }}
              >
                  <AnimatePresence initial={false}>
                      <Card
                          key={index + 1}
                          initial={{ scale: 0, x:0,y: 105, opacity: 0 }}
                          animate={{ scale: 0.75,x:100, y: 80, opacity: 0.5 }}
                          transition={{
                              scale: { duration: 0.2 },
                              opacity: { duration: 0.4 }
                          }}
                          index={index+1}
                      />
                      <Card
                          key={index}
                          animate={{ scale: 1, y: 0, opacity: 1 }}
                          transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              opacity: { duration: 0.2 }
                          }}
                          exitX={exitX}
                          setExitX={setExitX}
                          index={index}
                          setIndex={setIndex}
                          drag="x"
                      />
                  </AnimatePresence>
              </m.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
    </section>
  );
}
